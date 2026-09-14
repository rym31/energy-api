import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProblemDetailsDto {
  @ApiProperty({
    description: 'URI identifiant le type de problème.',
    example: 'about:blank',
  })
  type!: string;

  @ApiProperty({
    description: 'Titre court et lisible du problème.',
    example: 'Bad Request',
  })
  title!: string;

  @ApiProperty({
    description: 'Code de statut HTTP.',
    example: 400,
  })
  status!: number;

  @ApiProperty({
    description: 'Explication détaillée du problème.',
    example: 'La requête contient des données invalides.',
  })
  detail!: string;

  @ApiProperty({
    description: "URI de la requête à l'origine du problème.",
    example: '/api/v1/buildings',
  })
  instance!: string;

  @ApiPropertyOptional({
    description: 'Liste des erreurs de validation, le cas échéant.',
    type: [String],
    example: ['Le nom est obligatoire.'],
  })
  errors?: string[];
}
