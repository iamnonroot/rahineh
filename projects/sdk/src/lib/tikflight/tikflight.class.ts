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
  ITikflightAirportsParams,
  ITikflightAirportsResponse,
  ITikflightMinPricesParams,
  ITikflightMinPricesResponse,
  ITikflightSearchParams,
  ITikflightSearchResponse,
} from "./tikflight.interface";

export class CTikflight {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * airports
   * @version 0.1.1
   */
  public Airports(data?: ITikflightAirportsParams) {
    return this.http.request<ITikflightAirportsResponse>({
      path: "/tikflight/airports",
      method: "GET",
      data: data,
    });
  }

  /**
   * minPrices function returns a list of flights
   * @version 0.1.1
   */
  public MinPrices(data?: ITikflightMinPricesParams) {
    return this.http.request<ITikflightMinPricesResponse>({
      path: "/tikflight/minPrices",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * steps
   * @version 0.1.1
   */
  public Search(data?: ITikflightSearchParams) {
    return this.http.request<ITikflightSearchResponse>({
      path: "/tikflight/search",
      method: "GET",
      data: data,
    });
  }
}
