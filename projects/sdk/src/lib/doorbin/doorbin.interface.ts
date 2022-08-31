/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface IDoorbinIndexParams {
  id: number;
  shop: string;
  title: string;
  link: string;
  thumbnail: string;
  gallery: {}[];
  price: number;
  categoryName: string;
  categoryID: string;
  type: string;
}

export interface IDoorbinSearchParams {
  actor: string;
  q: string;
}

export interface IDoorbinFindAllParams {}

export interface IDoorbinIndexResponse extends ResponseParam {}

export interface IDoorbinSearchResponse extends ResponseParam {}

export interface IDoorbinFindAllResponse extends ResponseParam {}
