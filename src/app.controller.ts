import { Body, Controller, Post, Headers, Res, HttpStatus } from "@nestjs/common";
import { AppService } from "./app.service";
import { IsniferfpInterface } from "./sniferfp.interface";
import { Response } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("create")
  async create(
    @Headers("user-agent") userAgent: string,
    @Headers("Accept-Language") acceptLanguage: string,
    @Body() fingerprint: IsniferfpInterface,
    @Res() res: Response,
  ) {
    try {
      await this.appService.save(userAgent, acceptLanguage, fingerprint);
      return res.status(HttpStatus.CREATED).send("Created");
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).send(error.message);
    }
  }
}
