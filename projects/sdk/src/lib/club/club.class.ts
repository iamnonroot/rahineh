/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { TikSDKHTTPService } from "../http.service";
import {
  IClubGetDiscountsParams,
  IClubGetDiscountsResponse,
  IClubGetInviteCodeParams,
  IClubGetInviteCodeResponse,
} from "./club.interface";

export class CClub {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * getIntroduceByActor function create and get introduce code
   * @version 0.1.1
   */
  public GetDiscounts(data?: IClubGetDiscountsParams) {
    return this.http.request<IClubGetDiscountsResponse>({
      path: "/club/discounts/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * getIntroduceByActor function create and get introduce code
   * @version 0.1.1
   */
  public GetInviteCode(data?: IClubGetInviteCodeParams) {
    return this.http.request<IClubGetInviteCodeResponse>({
      path: "/club/invite/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }
}
