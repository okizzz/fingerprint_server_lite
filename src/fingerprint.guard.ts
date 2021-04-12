import { Headers, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { IsniferfpInterface } from "./sniferfp.interface";
import { UAParser } from "ua-parser-js";

@Injectable()
export class FingerprintGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validate(request.headers["accept-language"], request.headers["user-agent"], request.body);
  }

  validate(acceptLanguage: string, userAgentHeader: string, body: IsniferfpInterface) {
    const headerParseUa = new UAParser(userAgentHeader);
    const bodyParseUa = new UAParser(body.userAgent);
    if (
      acceptLanguage &&
      body &&
      headerParseUa.getEngine().name == "Blink" &&
      bodyParseUa.getEngine().name == "Blink" &&
      userAgentHeader == body.userAgent
    )
      return true;
    return false;
  }
}
