import { Injectable } from '@nestjs/common';
import { HealthStatus } from './entities/health-status.entity';

@Injectable()
export class HealthService {
  getStatus(): HealthStatus {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
