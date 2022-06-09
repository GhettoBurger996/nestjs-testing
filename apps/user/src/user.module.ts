import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";

// Mongo
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "opt/simsim/schemas/user.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
