/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface INimkatClearParams {}

export interface INimkatGetItemParams {
  key: string;
}

export interface INimkatKeysParams {}

export interface INimkatRemoveItemParams {
  key: string;
}

export interface INimkatSetItemParams {
  key: string;
  value: string;
}

export interface INimkatClearResponse extends ResponseParam {}

export interface INimkatGetItemResponse extends ResponseParam {}

export interface INimkatKeysResponse extends ResponseParam {}

export interface INimkatRemoveItemResponse extends ResponseParam {}

export interface INimkatSetItemResponse extends ResponseParam {}
