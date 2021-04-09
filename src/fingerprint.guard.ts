import { Headers, CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { IsniferfpInterface } from "./sniferfp.interface";

@Injectable()
export class FingerprintGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validate(request.headers["accept-language"], request.headers["user-agent"], request.body);
  }

  validate(acceptLanguage: string, userAgentHeader: string, body: IsniferfpInterface) {
    if (acceptLanguage && userAgentHeader && body) return true;
    return false;
  }
}
