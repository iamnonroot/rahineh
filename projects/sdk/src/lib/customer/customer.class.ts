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
  ICustomerSetNecessaryDataParams,
  ICustomerSetNecessaryDataResponse,
  ICustomerSetProfileDataParams,
  ICustomerSetProfileDataResponse,
  ICustomerRequestVerifyCodeParams,
  ICustomerRequestVerifyCodeResponse,
  ICustomerRequestVerifyPhoneParams,
  ICustomerRequestVerifyPhoneResponse,
  ICustomerVerifyTokenParams,
  ICustomerVerifyTokenResponse,
  ICustomerJustMeParams,
  ICustomerJustMeResponse,
  ICustomerLogoutParams,
  ICustomerLogoutResponse,
  ICustomerMeParams,
  ICustomerMeResponse,
} from "./customer.interface";

export class CCustomer {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * setNecessaryData function used to set the necessary data of profile if is not set
   * @version 0.1.1
   */
  public SetNecessaryData(data?: ICustomerSetNecessaryDataParams) {
    return this.http.request<ICustomerSetNecessaryDataResponse>({
      path: "/customer/set/necessaryData",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * setProfileData function used to set the profile data and update
   * @version 0.1.1
   */
  public SetProfileData(data?: ICustomerSetProfileDataParams) {
    return this.http.request<ICustomerSetProfileDataResponse>({
      path: "/customer/set/profileData",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * requestVerifyCode function validate code with phone
   * @version 0.1.1
   */
  public RequestVerifyCode(data?: ICustomerRequestVerifyCodeParams) {
    return this.http.request<ICustomerRequestVerifyCodeResponse>({
      path: "/customer/verify/code",
      method: "POST",
      data: data,
    });
  }

  /**
   * requestVerifyPhone function sends verification code to phone with sms or another message provider
   * @version 0.1.1
   */
  public RequestVerifyPhone(data?: ICustomerRequestVerifyPhoneParams) {
    return this.http.request<ICustomerRequestVerifyPhoneResponse>({
      path: "/customer/verify/phone",
      method: "POST",
      data: data,
    });
  }

  /**
   * verifyToken function used to verify a token
   * @version 0.1.1
   */
  public VerifyToken(data?: ICustomerVerifyTokenParams) {
    return this.http.request<ICustomerVerifyTokenResponse>({
      path: "/customer/verify/token",
      method: "GET",
      data: data,
    });
  }

  /**
   * justMe function used for get customer profile
   * @version 0.1.1
   */
  public JustMe(data?: ICustomerJustMeParams) {
    return this.http.request<ICustomerJustMeResponse>({
      path: "/customer/justMe",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * logout function used to log out
   * @version 0.1.1
   */
  public Logout(data?: ICustomerLogoutParams) {
    return this.http.request<ICustomerLogoutResponse>({
      path: "/customer/logout",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * me function used for get customer profile data and its wallet
   * @version 0.1.1
   */
  public Me(data?: ICustomerMeParams) {
    return this.http.request<ICustomerMeResponse>({
      path: "/customer/me",
      method: "GET",
      actor: true,
      data: data,
    });
  }
}
