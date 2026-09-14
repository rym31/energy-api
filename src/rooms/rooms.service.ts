import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  private readonly rooms: Room[] = [];
  private nextId = 1;

  create(createRoomDto: CreateRoomDto): Room {
    const room: Room = {
      id: this.nextId++,
      ...createRoomDto,
      createdAt: new Date().toISOString(),
    };
    this.rooms.push(room);
    return room;
  }

  findAll(): Room[] {
    return this.rooms;
  }

  findOne(id: number): Room {
    const room = this.rooms.find((r) => r.id === id);
    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    return room;
  }

  update(id: number, updateRoomDto: UpdateRoomDto): Room {
    const room = this.findOne(id);
    Object.assign(room, updateRoomDto);
    return room;
  }

  remove(id: number): void {
    const index = this.rooms.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    this.rooms.splice(index, 1);
  }
}
