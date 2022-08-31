/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface ILocationGetAddressByLatLonParams {
  lat: number;
  lon: number;
}

export interface ILocationActorCurrentLocationsParams {
  lat: number;
  lon: number;
}

export interface ILocationActorLoactionsParams {}

export interface ILocationActorSetRealtimeLocationParams {
  lat: number;
  lon: number;
}

export interface ILocationCreateParams {
  name: string;
  address: string;
  number: string;
  unit: string;
  floor: string;
  postal: string;
  description: string;
  lat: number;
  lon: number;
  bitmap: string;
}

export interface ILocationDeleteParams {
  id: number;
}

export interface ILocationUpdateParams {
  id: number;
  name: string;
  address: string;
  number: string;
  unit: string;
  floor: string;
  postal: string;
  description: string;
  bitmap: string;
  lat: number;
  lon: number;
}

export interface ILocationGetAddressByLatLonResponse extends ResponseParam {}

export interface ILocationActorCurrentLocationsResponse extends ResponseParam {}

export interface ILocationActorLoactionsData {
  name: string;
  address: string;
  number: string;
  unit: string;
  floor: string;
  postal: string;
  lat: string;
  lon: string;
  actor: string;
  id: number;
  bitmap?: string | null;
}

export interface ILocationActorLoactionsResponse extends ResponseParam {
  data: ILocationActorLoactionsData[];
}

export interface ILocationActorSetRealtimeLocationResponse
  extends ResponseParam {}

export interface ILocationCreateResponse extends ResponseParam {}

export interface ILocationDeleteResponse extends ResponseParam {}

export interface ILocationUpdateResponse extends ResponseParam {}
