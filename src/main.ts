import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { readFileSync } from "fs";

async function bootstrap() {
  const httpsOptions = {
    key: readFileSync("../certs/privkey1.pem"),
    cert: readFileSync("../certs/cert1.pem"),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.enableCors();
  await app.listen(8888);
}
bootstrap();
