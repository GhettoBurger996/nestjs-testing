import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as paginate from "mongoose-paginate-v2";

@Schema({ timestamps: true, validateBeforeSave: true })
export class User {
  @Prop({ type: String, required: true, unique: true })
  sub: string;

  @Prop({ type: String, required: true, unique: true })
  username: string;

  @Prop({ type: String, required: true, unique: false })
  fullName: string;

  @Prop({ type: String, required: false, unique: false })
  email: string;

  @Prop({ type: String, required: true, unique: true })
  phoneNumber: string;

  @Prop({ type: String, required: true, unique: false })
  gender: string;

  @Prop({ type: String, required: true, unique: false })
  birthdate: string;

  @Prop({
    type: [
      {
        city: { type: String, required: true, unique: false },
        street: { type: String, required: true, unique: false },
        nearestLocation: { type: String, required: true, unique: false },
      },
    ],
  })
  address: { city: string; street: string; nearestLocation: string }[];

  @Prop({ type: String, required: true, unique: false })
  role: string;

  @Prop({ type: String, required: true, unique: false })
  status: string;

  @Prop({ type: String, required: true, unique: false })
  author: string;

  @Prop({ type: String, required: true, unique: false })
  editor: string;

  // Staff Elements
  @Prop({ type: Object, required: false, unique: false })
  staffDetails: string;

  // Driver Elements
  @Prop({ type: Object, required: false, unique: false })
  vehicleDetails: any;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.plugin(paginate);
export interface UserDocument extends User, Document {}
