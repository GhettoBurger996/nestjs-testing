import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RoleDocument = Role & Document;

@Schema({ timestamps: true, validateBeforeSave: true })
export class Role {
  @Prop({ type: String, required: true, unique: true })
  title: string;

  @Prop({ type: Object, required: false, unique: false })
  rules: any;

  @Prop({ type: String, required: true, unique: false })
  author: string;

  @Prop({ type: String, required: true, unique: false })
  editor: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
