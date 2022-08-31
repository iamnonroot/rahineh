/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface ICmsDeleteAppParams {}

export interface ICmsUpdateAppParams {}

export interface ICmsGetPanelAppsParams {}

export interface ICmsGetAppsParams {}

export interface ICmsCreateAppParams {}

export interface ICmsFilesParams {
  search: string;
}

export interface ICmsPanelParams {
  actor: string;
}

export interface ICmsSingletonParams {}

export interface ICmsDeleteAppResponse extends ResponseParam {}

export interface ICmsUpdateAppResponse extends ResponseParam {}

export interface ICmsGetPanelAppsResponse extends ResponseParam {}

export interface ICmsGetAppsResponse extends ResponseParam {}

export interface ICmsCreateAppResponse extends ResponseParam {}

export interface ICmsFilesResponse extends ResponseParam {}

export interface ICmsPanelResponse extends ResponseParam {}

export interface ICmsSingletonResponse extends ResponseParam {}
