/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface IPaymentDepositParams {
  amount: number;
}

export interface IPaymentMakeInvoiceParams {
  amount: number;
  invoice_id: number;
  payment_gateway: number;
  service_actor: string;
  service: string;
  callback: string;
}

export interface IPaymentPurchaseParams {
  ref_id: number;
  gateway: number;
  wallet: boolean;
}

export interface IPaymentVerifyParams {
  Authority: string;
  Status: string;
  payment_id: string;
  is_invoice: string;
}

export interface IPaymentWithdrawParams {
  amount: number;
}

export interface IPaymentDepositResponse extends ResponseParam {}

export interface IPaymentMakeInvoiceResponse extends ResponseParam {}

export interface IPaymentPurchaseResponse extends ResponseParam {}

export interface IPaymentVerifyResponse extends ResponseParam {}

export interface IPaymentWithdrawResponse extends ResponseParam {}
