import { ApiProperty } from '@nestjs/swagger';

export class CreateBuildingDto {
  @ApiProperty({
    description: "Code d'identification du batiment",
    example: 'PC',
  })
  code!: string;
  @ApiProperty({
    description: 'Nom public et unique du bâtiment',
    example: 'Pavillon principal',
    maxLength: 100,
  })
  name!: string;
  @ApiProperty({
    description: "L'adresse du bâtiment",
    example: '123 Rue Principale',
    maxLength: 200,
  })
  address!: string;
  @ApiProperty({
    description: 'Année de construction',
    example: 1965,
    minimum: 1800,
    maximum: 2026,
  })
  yearBuilt!: number;
}
