import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthStatus } from './entities/health-status.entity';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getStatus(): HealthStatus {
    return this.healthService.getStatus();
  }
}
