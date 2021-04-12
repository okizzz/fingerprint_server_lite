import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Fingerprint } from "./fingerprint.entity";
import { IsniferfpInterface } from "./sniferfp.interface";
import { IresultfpInterface } from "./resultfp.interface";
import md5 = require("md5");
import { UAParser } from "ua-parser-js";

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Fingerprint)
    private readonly fingerPrintRepository: Repository<Fingerprint>,
  ) {}

  async save(userAgent: string, acceptLanguage: string, fingerprint: IsniferfpInterface, ip: string): Promise<void> {
    const parser = new UAParser(userAgent);
    const result: IresultfpInterface = Object.assign(fingerprint, {
      userAgentHeader: userAgent,
      acceptLanguage,
      osName: parser.getOS().name,
      osVersion: parser.getOS().version,
      browserName: parser.getBrowser().name,
      browserVersion: +parser.getBrowser().version.split(".")[0],
    });
    try {
      await this.fingerPrintRepository.save({ ...result, hash: md5(JSON.stringify(result)), ip });
    } catch (e) {
      throw e;
    }
  }
}
