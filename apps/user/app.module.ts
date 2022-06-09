import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "./src/user.module";
import { ACL, ACLSchema } from "opt/simsim/schemas/acl.schema";
import { MongoConfig } from "opt/simsim/common/database.config";

@Module({
  imports: [
    MongooseModule.forRoot(MongoConfig),
    MongooseModule.forFeature([{ name: ACL.name, schema: ACLSchema }]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
