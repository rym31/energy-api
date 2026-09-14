import { applyDecorators } from '@nestjs/common';
import { ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { ProblemDetailsDto } from '../dtos/problem-details.dto';

function problemResponse(status: number, description: string) {
  return ApiResponse({
    status,
    description,
    content: {
      'application/problem+json': {
        schema: { $ref: getSchemaPath(ProblemDetailsDto) },
      },
    },
  });
}

export function ApiProblemBadRequestResponse(
  description = 'Données invalides.',
) {
  return applyDecorators(problemResponse(400, description));
}

export function ApiProblemNotFoundResponse(description: string) {
  return applyDecorators(problemResponse(404, description));
}
