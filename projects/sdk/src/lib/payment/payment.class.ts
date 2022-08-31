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
  IPaymentDepositParams,
  IPaymentDepositResponse,
  IPaymentMakeInvoiceParams,
  IPaymentMakeInvoiceResponse,
  IPaymentPurchaseParams,
  IPaymentPurchaseResponse,
  IPaymentVerifyParams,
  IPaymentVerifyResponse,
  IPaymentWithdrawParams,
  IPaymentWithdrawResponse,
} from "./payment.interface";

export class CPayment {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * deposit wallet with payment gateway
   * @version 0.1.1
   */
  public Deposit(data?: IPaymentDepositParams) {
    return this.http.request<IPaymentDepositResponse>({
      path: "/payment/deposit",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * makeInvoice an invoice
   * @version 0.1.1
   */
  public MakeInvoice(data?: IPaymentMakeInvoiceParams) {
    return this.http.request<IPaymentMakeInvoiceResponse>({
      path: "/payment/makeInvoice",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * purchase factor with payment gateway
   * @version 0.1.1
   */
  public Purchase(data?: IPaymentPurchaseParams) {
    return this.http.request<IPaymentPurchaseResponse>({
      path: "/payment/purchase",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * verify function, used for verify amount
   * @version 0.1.1
   */
  public Verify(data?: IPaymentVerifyParams) {
    return this.http.request<IPaymentVerifyResponse>({
      path: "/payment/verify",
      method: "POST",
      data: data,
    });
  }

  /**
   * request for withdraw
   * @version 0.1.1
   */
  public Withdraw(data?: IPaymentWithdrawParams) {
    return this.http.request<IPaymentWithdrawResponse>({
      path: "/payment/withdraw",
      method: "POST",
      actor: true,
      data: data,
    });
  }
}
