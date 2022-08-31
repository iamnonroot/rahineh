/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface IWalletTransactionsByServiceAndInvoiceTypeParams {
  service: string;
  type: string;
}

export interface IWalletTransactionsByServiceParams {
  service: string;
  month: string;
  type: string;
}

export interface IWalletSumByServiceOfActorParams {
  type: string;
  month: string;
}

export interface IWalletTransactionsOfActorParams {}

export interface IWalletWalletInfoOfActorParams {}

export interface IWalletDepositParams {
  value: number;
  about: string;
  actor: string;
  service: string;
  owner: string;
  description: string;
  addtional: object;
}

export interface IWalletTransactionsParams {
  actor: string;
}

export interface IWalletWithdrawParams {
  value: number;
  about: string;
  actor: string;
  service: string;
  owner: string;
  description: string;
  addtional: object;
  invoice: object;
}

export interface IWalletWalletInfoParams {
  actor: string;
}

export interface IWalletTransactionsByServiceAndInvoiceTypeResponse
  extends ResponseParam {}

export interface IWalletTransactionsByServiceResponse extends ResponseParam {}

export interface IWalletSumByServiceOfActorResponse extends ResponseParam {}

export interface IWalletTransactionsOfActorResponse extends ResponseParam {}

export interface IWalletWalletInfoOfActorResponse extends ResponseParam {}

export interface IWalletDepositResponse extends ResponseParam {}

export interface IWalletTransactionsResponse extends ResponseParam {}

export interface IWalletWithdrawResponse extends ResponseParam {}

export interface IWalletWalletInfoResponse extends ResponseParam {}
