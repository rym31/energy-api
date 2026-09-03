import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  private readonly rooms: Room[] = [];
  create(createRoomDto: CreateRoomDto) {
    const newRoom = {
      id: this.rooms.length + 1,
      ...createRoomDto,
      createdAt: new Date().toISOString(),
    };
    this.rooms.push(newRoom);
    return newRoom;
  }

  findAll() {
    return this.rooms;
  }

  findOne(id: string) {
    return `This action returns a #${id} room`;
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: string) {
    return `This action removes a #${id} room`;
  }
}
