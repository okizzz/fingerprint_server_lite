import { IsniferfpInterface } from "./sniferfp.interface";

export interface IresultfpInterface extends IsniferfpInterface {
  user_agent_header: string;
  lang_header: string;
}
