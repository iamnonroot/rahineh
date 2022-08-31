/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface ITikflightAirportsParams {}

export interface ITikflightMinPricesParams {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  adultCount: number;
  childCount: number;
  infantCount: number;
}

export interface ITikflightSearchParams {
  steps: any[];
}

export interface ITikflightAirportsResponse extends ResponseParam {}

export interface ITikflightMinPricesResponse extends ResponseParam {}

export interface ITikflightSearchResponse extends ResponseParam {}
