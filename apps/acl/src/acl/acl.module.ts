import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { ACL, ACLSchema } from "opt/simsim/schemas/acl.schema";
import { Role, RoleSchema } from "opt/simsim/schemas/roles.schema";
import { AclController } from "./acl.controller";
import { AclService } from "./acl.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ACL.name, schema: ACLSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
  controllers: [AclController],
  providers: [AclService],
})
export class ACLModule {}
