/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { TikSDKHTTPService } from "../http.service";
import { IHttpRequestParams, IHttpRequestResponse } from "./http.interface";

export class CHttp {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * request run an http function
   * @version 0.1.5
   */
  public Request(data?: IHttpRequestParams) {
    return this.http.request<IHttpRequestResponse>({
      path: "/http/request",
      method: "post",
      data: data,
    });
  }
}
