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
  IWalletTransactionsByServiceAndInvoiceTypeParams,
  IWalletTransactionsByServiceAndInvoiceTypeResponse,
  IWalletTransactionsByServiceParams,
  IWalletTransactionsByServiceResponse,
  IWalletSumByServiceOfActorParams,
  IWalletSumByServiceOfActorResponse,
  IWalletTransactionsOfActorParams,
  IWalletTransactionsOfActorResponse,
  IWalletWalletInfoOfActorParams,
  IWalletWalletInfoOfActorResponse,
  IWalletDepositParams,
  IWalletDepositResponse,
  IWalletTransactionsParams,
  IWalletTransactionsResponse,
  IWalletWithdrawParams,
  IWalletWithdrawResponse,
  IWalletWalletInfoParams,
  IWalletWalletInfoResponse,
} from "./wallet.interface";

export class CWallet {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * transactionsByServiceAndInvoiceType get transactions by service and invoice type
   * @version 0.0.1
   */
  public TransactionsByServiceAndInvoiceType(
    data?: IWalletTransactionsByServiceAndInvoiceTypeParams
  ) {
    return this.http.request<IWalletTransactionsByServiceAndInvoiceTypeResponse>(
      {
        path: "/wallet/transactions/actor/service/factor",
        method: "GET",
        actor: true,
        data: data,
      }
    );
  }

  /**
   * transactionByservice get transactions by service in month
   * @version 0.0.1
   */
  public TransactionsByService(data?: IWalletTransactionsByServiceParams) {
    return this.http.request<IWalletTransactionsByServiceResponse>({
      path: "/wallet/transactions/actor/service",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * sum by type transactions @type is enum ['deposit', 'withdraw']
   * @version 0.1.1
   */
  public SumByServiceOfActor(data?: IWalletSumByServiceOfActorParams) {
    return this.http.request<IWalletSumByServiceOfActorResponse>({
      path: "/wallet/sum/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * get transactions of actor
   * @version 0.1.1
   */
  public TransactionsOfActor(data?: IWalletTransactionsOfActorParams) {
    return this.http.request<IWalletTransactionsOfActorResponse>({
      path: "/wallet/transactions/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * walletInfo of actor
   * @version 0.1.1
   */
  public WalletInfoOfActor(data?: IWalletWalletInfoOfActorParams) {
    return this.http.request<IWalletWalletInfoOfActorResponse>({
      path: "/wallet/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * depoist is a root method, just can be used with very very super function (like sayan system)
   * @version 0.1.1
   */
  public Deposit(data?: IWalletDepositParams) {
    return this.http.request<IWalletDepositResponse>({
      path: "/wallet/deposit",
      method: "POST",
      auth: true,
      data: data,
    });
  }

  /**
   * transactions is a root function
   * @version 0.0.1
   */
  public Transactions(data?: IWalletTransactionsParams) {
    return this.http.request<IWalletTransactionsResponse>({
      path: "/wallet/transactions",
      method: "GET",
      auth: true,
      data: data,
    });
  }

  /**
   * withdraw is a root function like deposit
   * @version 0.1.1
   */
  public Withdraw(data?: IWalletWithdrawParams) {
    return this.http.request<IWalletWithdrawResponse>({
      path: "/wallet/withdraw",
      method: "POST",
      auth: true,
      data: data,
    });
  }

  /**
   * wallet info of a actor - this ia admin panel function
   * @version 0.1.1
   */
  public WalletInfo(data?: IWalletWalletInfoParams) {
    return this.http.request<IWalletWalletInfoResponse>({
      path: "/wallet",
      method: "GET",
      auth: true,
      data: data,
    });
  }
}
