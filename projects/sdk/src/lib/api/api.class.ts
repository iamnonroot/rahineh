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
  IApiListAliasesParams,
  IApiListAliasesResponse,
} from "./api.interface";

export class CApi {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * This method has no description
   * @version 0.0.0
   */
  public ListAliases(data?: IApiListAliasesParams) {
    return this.http.request<IApiListAliasesResponse>({
      path: "/api/list-aliases",
      method: "GET",
      data: data,
    });
  }
}
