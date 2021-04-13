import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Fingerprint } from "./fingerprint.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Fingerprint]),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "db",
      port: 5434,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [Fingerprint],
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
