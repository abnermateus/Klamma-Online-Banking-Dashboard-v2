import { LimitResponse } from "./responses/limit.response";

export class LimitData {
  img: string;
  title: string;
  value: number;
  limit: number;

  constructor(limitResponse: LimitResponse) {
    this.img = limitResponse.img;
    this.title = limitResponse.title;
    this.value = limitResponse.value;
    this.limit = limitResponse.limit;
  }
}
