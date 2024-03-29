import { Body, Controller, Post, Headers, Res, HttpStatus, UseGuards, Ip } from "@nestjs/common";
import { AppService } from "./app.service";
import { IsniferfpInterface } from "./sniferfp.interface";
import { Response } from "express";
import { FingerprintGuard } from "./fingerprint.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(FingerprintGuard)
  @Post("create")
  async create(
    @Ip() ip: string,
    @Headers("user-agent")
    userAgent: string,
    @Headers("Accept-Language") acceptLanguage: string,
    @Body() fingerprint: IsniferfpInterface,
    @Res() res: Response,
  ) {
    try {
      await this.appService.save(userAgent, acceptLanguage, fingerprint, ip);
      return res.status(HttpStatus.CREATED).send("Created");
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).send(error.message);
    }
  }
}
