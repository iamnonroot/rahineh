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
  ICmsDeleteAppParams,
  ICmsDeleteAppResponse,
  ICmsUpdateAppParams,
  ICmsUpdateAppResponse,
  ICmsGetPanelAppsParams,
  ICmsGetPanelAppsResponse,
  ICmsGetAppsParams,
  ICmsGetAppsResponse,
  ICmsCreateAppParams,
  ICmsCreateAppResponse,
  ICmsFilesParams,
  ICmsFilesResponse,
  ICmsPanelParams,
  ICmsPanelResponse,
  ICmsSingletonParams,
  ICmsSingletonResponse,
} from "./cms.interface";

export class CCms {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * getApps function retrive a list of app from server
   * @version 0.1.1
   */
  public DeleteApp(data?: ICmsDeleteAppParams) {
    return this.http.request<ICmsDeleteAppResponse>({
      path: "/cms/apps/delete",
      method: "GET",
      data: data,
    });
  }

  /**
   * getApps function retrive a list of app from server
   * @version 0.1.1
   */
  public UpdateApp(data?: ICmsUpdateAppParams) {
    return this.http.request<ICmsUpdateAppResponse>({
      path: "/cms/apps/update",
      method: "GET",
      data: data,
    });
  }

  /**
   * getPanelApps function retrive a list of panels from server
   * @version 0.1.1
   */
  public GetPanelApps(data?: ICmsGetPanelAppsParams) {
    return this.http.request<ICmsGetPanelAppsResponse>({
      path: "/cms/panel/apps",
      method: "GET",
      data: data,
    });
  }

  /**
   * getApps function retrive a list of app from server
   * @version 0.1.1
   */
  public GetApps(data?: ICmsGetAppsParams) {
    return this.http.request<ICmsGetAppsResponse>({
      path: "/cms/apps",
      method: "GET",
      data: data,
    });
  }

  /**
   * getApps function retrive a list of app from server
   * @version 0.1.1
   */
  public CreateApp(data?: ICmsCreateAppParams) {
    return this.http.request<ICmsCreateAppResponse>({
      path: "/cms/apps",
      method: "GET",
      data: data,
    });
  }

  /**
   * getApps function retrive a list of app from server
   * @version 0.1.1
   */
  public Files(data?: ICmsFilesParams) {
    return this.http.request<ICmsFilesResponse>({
      path: "/cms/files",
      method: "GET",
      data: data,
    });
  }

  /**
   * panel function retrive a list of panel
   * @version 0.1.1
   */
  public Panel(data?: ICmsPanelParams) {
    return this.http.request<ICmsPanelResponse>({
      path: "/cms/panel",
      method: "GET",
      data: data,
    });
  }

  /**
   * singleton function
   * @version 0.1.1
   */
  public Singleton(data?: ICmsSingletonParams) {
    return this.http.request<ICmsSingletonResponse>({
      path: "/cms/setting",
      method: "GET",
      data: data,
    });
  }
}
