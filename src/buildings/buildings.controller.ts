import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { BuildingsService } from './buildings.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { Building } from './entities/building.entity';
import { BuildingResponseDto } from './dto/building-response.dto';
import {
  ApiProblemBadRequestResponse,
  ApiProblemNotFoundResponse,
} from '../common/decorators/problem-details-response.decorator';

@ApiTags('Buildings')
@ApiProblemBadRequestResponse()
@Controller({ path: 'buildings', version: '1' })
export class BuildingsController {
  constructor(private readonly buildingsService: BuildingsService) {}

  @ApiOperation({
    summary: 'Récupérer tous les bâtiments',
  })
  @ApiOkResponse({
    description: 'Liste des bâtiments.',
    type: BuildingResponseDto,
    isArray: true,
  })
  @Get()
  async findAll(): Promise<Building[]> {
    return this.buildingsService.findAll();
  }

  @ApiOperation({
    summary: 'Récupérer un bâtiment',
  })
  @ApiParam({
    name: 'id',
    description: 'Identifiant du bâtiment',
    type: Number,
  })
  @ApiOkResponse({
    description: 'Bâtiment trouvé.',
    type: BuildingResponseDto,
  })
  @ApiProblemNotFoundResponse('Aucun bâtiment ne correspond à cet identifiant.')
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Building> {
    return this.buildingsService.findOne(id);
  }

  @ApiOperation({
    summary: 'Créer un bâtiment',
  })
  @ApiCreatedResponse({
    description: 'Bâtiment créé.',
    type: BuildingResponseDto,
    headers: {
      Location: {
        description: 'URI de la nouvelle ressource',
        schema: { type: 'string' },
      },
    },
  })
  @Post()
  async create(@Body() createBuildingDto: CreateBuildingDto): Promise<Building> {
    return this.buildingsService.create(createBuildingDto);
  }
}
