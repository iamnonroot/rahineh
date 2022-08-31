/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface IHttpRequestParams {
  method: string;
  url: string;
  service: string;
  apiName: string;
  query: string;
  headers: object;
  body: object;
  authorization: string;
  authorization_type: string;
}

export interface IHttpRequestResponse extends ResponseParam {}
