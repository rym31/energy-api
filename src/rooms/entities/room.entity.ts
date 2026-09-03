export class Room {
  code: string;
  buildingId: string;
  floor: number;
  type?: string;
  capacity?: number;
  createdAt: Date;
  modifiedAt: Date;

  constructor(
    code: string,
    buildingId: string,
    floor: number,
    type?: string,
    capacity?: number
  ) {
    this.code = code;
    this.buildingId = buildingId;
    this.floor = floor;
    type ?? this.type;
    capacity ?? this.capacity;
    this.createdAt =  new Date();
    this.modifiedAt =  new Date();
  }
}

