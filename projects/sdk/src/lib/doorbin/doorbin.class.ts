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
  IDoorbinIndexParams,
  IDoorbinIndexResponse,
  IDoorbinSearchParams,
  IDoorbinSearchResponse,
  IDoorbinFindAllParams,
  IDoorbinFindAllResponse,
} from "./doorbin.interface";

export class CDoorbin {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * index function used for index product data in search engine
   * @version 0.1.1
   */
  public Index(data?: IDoorbinIndexParams) {
    return this.http.request<IDoorbinIndexResponse>({
      path: "/doorbin/index",
      method: "POST",
      auth: true,
      data: data,
    });
  }

  /**
   * search function used for search product data
   * @version 0.1.1
   */
  public Search(data?: IDoorbinSearchParams) {
    return this.http.request<IDoorbinSearchResponse>({
      path: "/doorbin/search",
      method: "GET",
      auth: true,
      data: data,
    });
  }

  /**
   * search function used for search product data
   * @version 0.1.1
   */
  public FindAll(data?: IDoorbinFindAllParams) {
    return this.http.request<IDoorbinFindAllResponse>({
      path: "/doorbin",
      method: "GET",
      data: data,
    });
  }
}
