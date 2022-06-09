import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { Role, RoleSchema } from "opt/simsim/schemas/roles.schema";
import { RoleController } from "./role.controller";
import { RoleService } from "./role.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }]),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
