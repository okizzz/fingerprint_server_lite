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
      host: "localhost",
      port: 5434,
      username: "postgres",
      password: "Arol3094",
      database: "users",
      synchronize: true,
      entities: [Fingerprint],
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
