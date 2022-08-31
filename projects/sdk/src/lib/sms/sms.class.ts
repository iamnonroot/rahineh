/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { TikSDKHTTPService } from "../http.service";
import { ISmsSendParams, ISmsSendResponse } from "./sms.interface";

export class CSms {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * deposit wallet with payment gateway
   * @version 0.1.1
   */
  public Send(data?: ISmsSendParams) {
    return this.http.request<ISmsSendResponse>({
      path: "/sms/send",
      method: "POST",
      auth: true,
      data: data,
    });
  }
}
