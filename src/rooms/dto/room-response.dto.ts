import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RoomResponseDto {
  @ApiProperty({ description: 'Identifiant du local', example: 1 })
  id!: number;

  @ApiProperty({
    description: "Code d'identification du local",
    example: 'S-013',
  })
  code!: string;

  @ApiProperty({
    description: 'Identifiant du bâtiment auquel appartient le local',
    example: 1,
  })
  buildingId!: number;

  @ApiProperty({ description: "Numéro d'étage du local", example: 2 })
  floor!: number;

  @ApiPropertyOptional({
    description: 'Type du local',
    example: 'Informatique',
  })
  type?: string;

  @ApiPropertyOptional({
    description: 'Capacité maximale du local',
    example: 30,
  })
  capacity?: number;

  @ApiProperty({
    description: 'Date de création',
    example: '2026-08-26T14:30:00.000Z',
  })
  createdAt!: string;
}
