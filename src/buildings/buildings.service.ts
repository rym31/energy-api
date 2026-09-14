import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from './dto/create-building.dto';
import { Building } from './entities/building.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BuildingsService {
  constructor(
    @InjectModel('Building') private readonly buildingModel: Model<Building>,
  ) {

  }
  async findAll(): Promise<Building[]> {
    return this.buildingModel.find().exec();
  }

  async findOne(id: number): Promise<Building> {
    const building = await this.buildingModel.findById(id).exec();
    if (!building) {
      throw new NotFoundException(`Building with ID ${id} not found`);
    }
    return building;

  }

  async create(createBuildingDto: CreateBuildingDto): Promise<Building> {
    return this.buildingModel.create(createBuildingDto);

  }

  async update(id: number, updateBuildingDto: Partial<CreateBuildingDto>): Promise<Building> {
    const building = await this.buildingModel.findByIdAndUpdate(id, updateBuildingDto, { new: true }).exec();
    if (!building) {
      throw new NotFoundException(`Building with ID ${id} not found`);
    }
    return building;
  }

  async remove(id: number): Promise<void> {
    const result = await this.buildingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Building with ID ${id} not found`);
    }
  }

}
