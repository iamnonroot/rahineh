/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface IDynamicDynamicComponentParams {
  key: string;
  data: object;
}

export interface IDynamicSimpleDynamicComponentGetByKeyParams {
  key: string;
}

export interface IDynamicDynamicPageParams {
  key: string;
}

export interface IDynamicDynamicInputParams {
  source: object;
  actor: string;
}

export interface IDynamicDyanmicQueryParams {
  key: string;
  page: number;
  limit: number;
}

export interface IDynamicDyanmicSubmitParams {
  key: string;
  data: object;
}

export interface IDynamicDynamicComponentResponse extends ResponseParam {}

export interface IDynamicSimpleDynamicComponentGetByKeyResponse
  extends ResponseParam {}

export interface IDynamicDynamicPageResponse extends ResponseParam {}

export interface IDynamicDynamicInputResponse extends ResponseParam {}

export interface IDynamicDyanmicQueryResponse extends ResponseParam {}

export interface IDynamicDyanmicSubmitResponse extends ResponseParam {}
