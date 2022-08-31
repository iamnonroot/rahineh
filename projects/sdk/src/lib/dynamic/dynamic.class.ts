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
  IDynamicDynamicComponentParams,
  IDynamicDynamicComponentResponse,
  IDynamicSimpleDynamicComponentGetByKeyParams,
  IDynamicSimpleDynamicComponentGetByKeyResponse,
  IDynamicDynamicPageParams,
  IDynamicDynamicPageResponse,
  IDynamicDynamicInputParams,
  IDynamicDynamicInputResponse,
  IDynamicDyanmicQueryParams,
  IDynamicDyanmicQueryResponse,
  IDynamicDyanmicSubmitParams,
  IDynamicDyanmicSubmitResponse,
} from "./dynamic.interface";

export class CDynamic {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * dynamicComponent main function like graphql just one route
   * @version 0.1.1
   */
  public DynamicComponent(data?: IDynamicDynamicComponentParams) {
    return this.http.request<IDynamicDynamicComponentResponse>({
      path: "/dynamic/dynamicComponent",
      method: "POST",
      data: data,
    });
  }

  /**
   * getByKey function
   * @version 0.1.1
   */
  public SimpleDynamicComponentGetByKey(
    data?: IDynamicSimpleDynamicComponentGetByKeyParams
  ) {
    return this.http.request<IDynamicSimpleDynamicComponentGetByKeyResponse>({
      path: "/dynamic/getByKey",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * page function Get page by key
   * @version 0.1.1
   */
  public DynamicPage(data?: IDynamicDynamicPageParams) {
    return this.http.request<IDynamicDynamicPageResponse>({
      path: "/dynamic/getPageByKey",
      method: "GET",
      data: data,
    });
  }

  /**
   * dynamic input for generate dyanmic filtered input data
   * @version 0.1.1
   */
  public DynamicInput(data?: IDynamicDynamicInputParams) {
    return this.http.request<IDynamicDynamicInputResponse>({
      path: "/dynamic/input",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * dynamic query for generate dyanmic filter data
   * @version 0.1.1
   */
  public DyanmicQuery(data?: IDynamicDyanmicQueryParams) {
    return this.http.request<IDynamicDyanmicQueryResponse>({
      path: "/dynamic/query",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * dynamic query for generate dyanmic filter data
   * @version 0.1.1
   */
  public DyanmicSubmit(data?: IDynamicDyanmicSubmitParams) {
    return this.http.request<IDynamicDyanmicSubmitResponse>({
      path: "/dynamic/submit",
      method: "POST",
      actor: true,
      data: data,
    });
  }
}
