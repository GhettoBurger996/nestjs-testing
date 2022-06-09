import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ACLAppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(ACLAppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(2999, () =>
    console.log("Simsim ACL is running on port", 2999),
  );
}
bootstrap();
