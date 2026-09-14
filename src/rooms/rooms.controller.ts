import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomResponseDto } from './dto/room-response.dto';
import { Room } from './entities/room.entity';
import {
  ApiProblemBadRequestResponse,
  ApiProblemNotFoundResponse,
} from '../common/decorators/problem-details-response.decorator';

@ApiTags('Rooms')
@ApiProblemBadRequestResponse()
@Controller({ path: 'rooms', version: '1' })
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @ApiOperation({
    summary: 'Créer un local',
  })
  @ApiCreatedResponse({
    description: 'Local créé.',
    type: RoomResponseDto,
    headers: {
      Location: {
        description: 'URI de la nouvelle ressource',
        schema: { type: 'string' },
      },
    },
  })
  @Post()
  create(@Body() createRoomDto: CreateRoomDto): Room {
    return this.roomsService.create(createRoomDto);
  }

  @ApiOperation({
    summary: 'Récupérer tous les locaux',
  })
  @ApiOkResponse({
    description: 'Liste des locaux.',
    type: RoomResponseDto,
    isArray: true,
  })
  @Get()
  findAll(): Room[] {
    return this.roomsService.findAll();
  }

  @ApiOperation({
    summary: 'Récupérer un local',
  })
  @ApiParam({
    name: 'id',
    description: 'Identifiant du local',
    type: Number,
  })
  @ApiOkResponse({
    description: 'Local trouvé.',
    type: RoomResponseDto,
  })
  @ApiProblemNotFoundResponse('Aucun local ne correspond à cet identifiant.')
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Room {
    return this.roomsService.findOne(id);
  }

  @ApiOperation({
    summary: 'Modifier un local',
  })
  @ApiParam({
    name: 'id',
    description: 'Identifiant du local',
    type: Number,
  })
  @ApiOkResponse({
    description: 'Local modifié.',
    type: RoomResponseDto,
  })
  @ApiProblemNotFoundResponse('Aucun local ne correspond à cet identifiant.')
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoomDto: UpdateRoomDto,
  ): Room {
    return this.roomsService.update(id, updateRoomDto);
  }

  @ApiOperation({
    summary: 'Supprimer un local',
  })
  @ApiParam({
    name: 'id',
    description: 'Identifiant du local',
    type: Number,
  })
  @ApiNoContentResponse({
    description: 'Local supprimé.',
  })
  @ApiProblemNotFoundResponse('Aucun local ne correspond à cet identifiant.')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number): void {
    this.roomsService.remove(id);
  }
}
