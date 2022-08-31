/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface IRideCheckParams {
  lat: string;
  lon: string;
  service: string;
}

export interface IRideNearMeParams {
  lat: string;
  lon: string;
  within: string;
}

export interface IRideRequestParams {
  origin: object;
  destinations: {
    firstname: string;
    lastname: string;
    fullname: string;
    number: string;
    unit: string;
    floor: string;
    postal: string;
    description: string;
    consignmentValue: string;
    consignmentType: string;
    phone: string;
    lat: number;
    lon: number;
  }[];
}

export interface IRideCheckResponse extends ResponseParam {}

export interface IRideNearMeResponse extends ResponseParam {}

export interface IRideRequestResponse extends ResponseParam {}
