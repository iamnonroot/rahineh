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
  ILocationGetAddressByLatLonParams,
  ILocationGetAddressByLatLonResponse,
  ILocationActorCurrentLocationsParams,
  ILocationActorCurrentLocationsResponse,
  ILocationActorLoactionsParams,
  ILocationActorLoactionsResponse,
  ILocationActorSetRealtimeLocationParams,
  ILocationActorSetRealtimeLocationResponse,
  ILocationCreateParams,
  ILocationCreateResponse,
  ILocationDeleteParams,
  ILocationDeleteResponse,
  ILocationUpdateParams,
  ILocationUpdateResponse,
} from "./location.interface";

export class CLocation {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * get address by latitude and longitude
   * @version 0.1.3
   */
  public GetAddressByLatLon(data?: ILocationGetAddressByLatLonParams) {
    return this.http.request<ILocationGetAddressByLatLonResponse>({
      path: "/location/get/location/address",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * update current location of actor
   * @version 0.1.1
   * @deprecated wrong name
   */
  public ActorCurrentLocations(data?: ILocationActorCurrentLocationsParams) {
    return this.http.request<ILocationActorCurrentLocationsResponse>({
      path: "/location/current/update",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * get all location of authenticated actor (me)
   * @version 0.1.1
   */
  public ActorLoactions(data?: ILocationActorLoactionsParams) {
    return this.http.request<ILocationActorLoactionsResponse>({
      path: "/location/list/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * update authenticated actor location
   * @version 0.1.2
   */
  public ActorSetRealtimeLocation(
    data?: ILocationActorSetRealtimeLocationParams
  ) {
    return this.http.request<ILocationActorSetRealtimeLocationResponse>({
      path: "/location/realtime/set",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * created function create a new location
   * @version 0.1.1
   */
  public Create(data?: ILocationCreateParams) {
    return this.http.request<ILocationCreateResponse>({
      path: "/location/create",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * delete function delete an exist location
   * @version 0.1.1
   */
  public Delete(data?: ILocationDeleteParams) {
    return this.http.request<ILocationDeleteResponse>({
      path: "/location/delete",
      method: "POST",
      actor: true,
      data: data,
    });
  }

  /**
   * update function update a location
   * @version 0.1.1
   */
  public Update(data?: ILocationUpdateParams) {
    return this.http.request<ILocationUpdateResponse>({
      path: "/location/update",
      method: "POST",
      actor: true,
      data: data,
    });
  }
}
