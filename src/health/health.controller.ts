import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HealthService } from './health.service';
import { HealthStatus } from './entities/health-status.entity';

@ApiTags('Health')
@Controller({ path: 'health', version: '1' })
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @ApiOperation({
    summary: "Vérifier l'état du service",
  })
  @ApiOkResponse({
    description: 'Le service est opérationnel.',
    type: HealthStatus,
  })
  @Get()
  getStatus(): HealthStatus {
    return this.healthService.getStatus();
  }
}
