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
  INimkatClearParams,
  INimkatClearResponse,
  INimkatGetItemParams,
  INimkatGetItemResponse,
  INimkatKeysParams,
  INimkatKeysResponse,
  INimkatRemoveItemParams,
  INimkatRemoveItemResponse,
  INimkatSetItemParams,
  INimkatSetItemResponse,
} from "./nimkat.interface";

export class CNimkat {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * clear function root function
   * @version 0.1.1
   */
  public Clear(data?: INimkatClearParams) {
    return this.http.request<INimkatClearResponse>({
      path: "/nimkat/clear",
      method: "POST",
      actor: true,
      auth: true,
      data: data,
    });
  }

  /**
   * get function get data from nimkat storage (like localstorage inteface)
   * @version 0.1.1
   */
  public GetItem(data?: INimkatGetItemParams) {
    return this.http.request<INimkatGetItemResponse>({
      path: "/nimkat/get",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * keys function get keys from nimkat
   * @version 0.1.1
   */
  public Keys(data?: INimkatKeysParams) {
    return this.http.request<INimkatKeysResponse>({
      path: "/nimkat/keys",
      method: "get",
      actor: true,
      data: data,
    });
  }

  /**
   * set function set data to nimkat storage (like localstorage inteface)
   * @version 0.1.1
   */
  public RemoveItem(data?: INimkatRemoveItemParams) {
    return this.http.request<INimkatRemoveItemResponse>({
      path: "/nimkat/remove",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * set function set data to nimkat storage (like localstorage inteface)
   * @version 0.1.1
   */
  public SetItem(data?: INimkatSetItemParams) {
    return this.http.request<INimkatSetItemResponse>({
      path: "/nimkat/set",
      method: "POST",
      actor: true,
      data: data,
    });
  }
}
