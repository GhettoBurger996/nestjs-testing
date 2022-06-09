import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";

import { MongoConfig } from "opt/simsim/common/database.config";
import { ACL, ACLSchema } from "opt/simsim/schemas/acl.schema";
import { ACLModule } from "./src/acl/acl.module";
import { RoleModule } from "./src/role/role.module";

@Module({
  imports: [
    MongooseModule.forRoot(MongoConfig),
    MongooseModule.forFeature([{ name: ACL.name, schema: ACLSchema }]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    ACLModule,
    RoleModule,
  ],
  providers: [],
})
export class ACLAppModule {}
