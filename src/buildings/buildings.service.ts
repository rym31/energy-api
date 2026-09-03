import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { Building } from './entities/building.entity';

@Injectable()
export class BuildingsService {
  private readonly buildings: Building[] = [];
  private nextId = 1;

  findAll(): Building[] {
    return this.buildings;
  }

  findOne(id: number): Building {
    const building = this.buildings.find((b) => b.id === id);
    if (!building) {
      throw new NotFoundException(`Building with id ${id} not found`);
    }
    return building;
  }

  create(createBuildingDto: CreateBuildingDto): Building {
    const building: Building = {
      id: this.nextId++,
      ...createBuildingDto,
      createdAt: new Date().toISOString(),
    };
    this.buildings.push(building);
    return building;
  }
}
