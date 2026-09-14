import { ApiProperty } from '@nestjs/swagger';

export class BuildingResponseDto {
  @ApiProperty({ description: 'Identifiant du bâtiment', example: 1 })
  id!: number;

  @ApiProperty({
    description: "Code d'identification du bâtiment",
    example: 'PC',
  })
  code!: string;

  @ApiProperty({
    description: 'Nom public et unique du bâtiment',
    example: 'Pavillon principal',
  })
  name!: string;

  @ApiProperty({
    description: 'Adresse du bâtiment',
    example: '7000, rue Marie-Victorin',
  })
  address!: string;

  @ApiProperty({ description: 'Année de construction', example: 1965 })
  yearBuilt!: number;

  @ApiProperty({
    description: 'Date de création',
    example: '2026-08-26T14:30:00.000Z',
  })
  createdAt!: string;
}
