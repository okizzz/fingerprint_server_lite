import { IsniferfpInterface } from "./sniferfp.interface";

export interface IresultfpInterface extends IsniferfpInterface {
  userAgentHeader: string;
  acceptLanguage: string;
  osName: string;
  osVersion: string;
  browserName: string;
  browserVersion: number;
}
