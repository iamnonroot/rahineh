/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface ITikpayBuyChargeParams {
  mobile: string;
  provider: string;
  price: number;
}

export interface ITikpayBuyPackageParams {
  mobile: string;
  provider: string;
  packageID: number;
}

export interface ITikpayCallBillParams {
  mobile: string;
  billID: string;
  paymentID: string;
}

export interface ITikpayPackagesListParams {
  mobile: string;
  provider: string;
}

export interface ITikpayPayBillParams {
  mobile: string;
  provider: string;
  billID: string;
  paymentID: string;
}

export interface ITikpayBuyChargeResponse extends ResponseParam {}

export interface ITikpayBuyPackageResponse extends ResponseParam {}

export interface ITikpayCallBillResponse extends ResponseParam {}

export interface ITikpayPackagesListResponse extends ResponseParam {}

export interface ITikpayPayBillResponse extends ResponseParam {}
