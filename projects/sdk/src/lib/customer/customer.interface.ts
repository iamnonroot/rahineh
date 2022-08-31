/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface ICustomerSetNecessaryDataParams {
  firstname: string;
  lastname: string;
}

export interface ICustomerSetProfileDataParams {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  gender: number;
}

export interface ICustomerRequestVerifyCodeParams {
  phone: string;
  code: string;
  scope: string;
}

export interface ICustomerRequestVerifyPhoneParams {
  phone: string;
  scope: string;
}

export interface ICustomerVerifyTokenParams {
  token: string;
}

export interface ICustomerJustMeParams {}

export interface ICustomerLogoutParams {}

export interface ICustomerMeParams {}

export interface ICustomerSetNecessaryDataResponse extends ResponseParam {}

export interface ICustomerSetProfileDataResponse extends ResponseParam {}

export interface ICustomerRequestVerifyCodeResponse extends ResponseParam {
  data: { token: string; type?: string; expires?: Date };
}

export interface ICustomerRequestVerifyPhoneResponse extends ResponseParam {}

export interface ICustomerVerifyTokenResponse extends ResponseParam {}

export interface ICustomerJustMeResponse extends ResponseParam {
  profile: {
    actor: string;
    phone: string;
    email: string;
    firstname: string;
    lastname: string;
    age?: number | null;
    national_code: string;
    nationality: string;
    owner: string;
    verify_code: string;
    gender: number;
  };
}

export interface ICustomerLogoutResponse extends ResponseParam {}

export interface ICustomerMeProfileData {
  actor: string;
  phone: string;
  email: string;
  firstname: string;
  lastname: string;
  age?: number | null;
  national_code: string;
  nationality: string;
  owner: string;
  verify_code: string;
  gender: number;
}

export interface ICustomerMeWalletData {
  value: number;
  withdrawable: number;
  locked: number;
  currency: string;
}

export interface ICustomerMeResponse extends ResponseParam {
  customer: { profile: ICustomerMeProfileData; wallet: ICustomerMeWalletData };
}
