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
  ITikpayBuyChargeParams,
  ITikpayBuyChargeResponse,
  ITikpayBuyPackageParams,
  ITikpayBuyPackageResponse,
  ITikpayCallBillParams,
  ITikpayCallBillResponse,
  ITikpayPackagesListParams,
  ITikpayPackagesListResponse,
  ITikpayPayBillParams,
  ITikpayPayBillResponse,
} from "./tikpay.interface";

export class CTikpay {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * buyCharge function call number for charge
   * @version 0.1.1
   */
  public BuyCharge(data?: ITikpayBuyChargeParams) {
    return this.http.request<ITikpayBuyChargeResponse>({
      path: "/tikpay/buyCharge",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * getApps function retrive a list of app from server
   * @version 0.1.1
   */
  public BuyPackage(data?: ITikpayBuyPackageParams) {
    return this.http.request<ITikpayBuyPackageResponse>({
      path: "/tikpay/buyPackage",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * callBill function check price of a bill id
   * @version 0.1.1
   */
  public CallBill(data?: ITikpayCallBillParams) {
    return this.http.request<ITikpayCallBillResponse>({
      path: "/tikpay/callBill",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * packagesList function returns a list of packages (like internet package)
   * @version 0.1.1
   */
  public PackagesList(data?: ITikpayPackagesListParams) {
    return this.http.request<ITikpayPackagesListResponse>({
      path: "/tikpay/packagesList",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * payBill function start payment a bill
   * @version 0.1.1
   */
  public PayBill(data?: ITikpayPayBillParams) {
    return this.http.request<ITikpayPayBillResponse>({
      path: "/tikpay/payBill",
      method: "POST",
      actor: true,
      data: data,
    });
  }
}
