import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import type { Request, Response } from 'express';

@Catch()
export class ProblemDetailsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const { title, detail, errors } = this.fromHttpException(
        status,
        exception.getResponse(),
      );
      this.send(response, request, status, title, detail, errors);
      return;
    }

    this.send(
      response,
      request,
      HttpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error',
      'Une erreur interne est survenue.',
    );
  }

  private fromHttpException(status: number, body: string | object) {
    if (typeof body === 'string') {
      return {
        title: this.titleFor(status),
        detail: body,
        errors: undefined as string[] | undefined,
      };
    }

    const { message, error } = body as {
      message?: string | string[];
      error?: string;
    };
    const errors = Array.isArray(message) ? message.map(String) : undefined;
    const detail =
      errors !== undefined
        ? 'La requête contient des données invalides.'
        : ((typeof message === 'string' ? message : undefined) ??
          'Une erreur est survenue.');

    return { title: error ?? this.titleFor(status), detail, errors };
  }

  private titleFor(status: number): string {
    return HttpStatus[status] ?? 'Error';
  }

  private send(
    response: Response,
    request: Request,
    status: number,
    title: string,
    detail: string,
    errors?: string[],
  ): void {
    response
      .status(status)
      .type('application/problem+json')
      .json({
        type: 'about:blank',
        title,
        status,
        detail,
        instance: request.originalUrl,
        ...(errors ? { errors } : {}),
      });
  }
}
