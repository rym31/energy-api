import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Building extends Document {
  @Prop({ required: true, unique: true })
  code!: string;

  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  address!: string;

  @Prop({ required: true })
  yearBuilt!: number;

  @Prop({ default: null })
  createdAt?: Date;

  @Prop({ default: null })
  modifiedAt?: Date;
}

export const BuildingSchema = SchemaFactory.createForClass(Building);