import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes } from "mongoose";
import { Role } from "./roles.schema";
import { User } from "./user.schema";

export type ACLDocument = ACL & Document;

@Schema({ timestamps: true, validateBeforeSave: true })
export class ACL {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: User.name,
    required: true,
    unique: true,
  })
  user: User;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: Role.name,
    required: false,
    unique: false,
  })
  role: Role;

  @Prop({ type: Object, required: false, unique: false })
  inlineRules: any;

  @Prop({ type: Object, required: false, unique: false })
  denyRules: any;

  @Prop({ type: String, required: true, unique: false })
  author: string;

  @Prop({ type: String, required: true, unique: false })
  editor: string;
}

export const ACLSchema = SchemaFactory.createForClass(ACL);
