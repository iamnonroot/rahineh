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
  IRideCheckParams,
  IRideCheckResponse,
  IRideNearMeParams,
  IRideNearMeResponse,
  IRideRequestParams,
  IRideRequestResponse,
} from "./ride.interface";

export class CRide {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * check price
   * @version 0.1.1
   */
  public Check(data?: IRideCheckParams) {
    return this.http.request<IRideCheckResponse>({
      path: "/ride/check",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * nearMe
   * @version 0.1.1
   */
  public NearMe(data?: IRideNearMeParams) {
    return this.http.request<IRideNearMeResponse>({
      path: "/ride/nearMe",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * request for a ride
   * @version 0.1.1
   */
  public Request(data?: IRideRequestParams) {
    return this.http.request<IRideRequestResponse>({
      path: "/ride/request",
      method: "POST",
      actor: true,
      data: data,
    });
  }
}
