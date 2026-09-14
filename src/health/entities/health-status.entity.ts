import { ApiProperty } from '@nestjs/swagger';

export class HealthStatus {
  @ApiProperty({ description: 'État du service', example: 'ok' })
  status: string;

  @ApiProperty({
    description: 'Horodatage de la vérification',
    example: '2026-08-26T14:30:00.000Z',
  })
  timestamp: string;
}
