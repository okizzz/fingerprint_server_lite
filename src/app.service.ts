import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Fingerprint } from "./fingerprint.entity";
import { IsniferfpInterface } from "./sniferfp.interface";
import { IresultfpInterface } from "./resultfp.interface";
import md5 = require("md5");

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Fingerprint)
    private readonly fingerPrintRepository: Repository<Fingerprint>,
  ) {}

  async save(userAgent: string, acceptLanguage: string, fingerprint: IsniferfpInterface): Promise<any> {
    const result: IresultfpInterface = Object.assign(fingerprint, {
      user_agent_header: userAgent,
      lang_header: acceptLanguage,
    });
    try {
      await this.fingerPrintRepository.save({ ...result, hash: md5(JSON.stringify(result)) });
    } catch (e) {
      throw e;
    }
  }
}
