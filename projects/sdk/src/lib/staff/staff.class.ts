/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { TikSDKHTTPService } from "../http.service";
import { IStaffLoginParams, IStaffLoginResponse } from "./staff.interface";

export class CStaff {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * login used for just staff users
   * @version 0.1.1
   */
  public Login(data?: IStaffLoginParams) {
    return this.http.request<IStaffLoginResponse>({
      path: "/staff/login",
      method: "POST",
      data: data,
    });
  }
}
