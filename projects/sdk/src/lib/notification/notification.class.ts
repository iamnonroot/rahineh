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
  INotificationSetFirebaseNotificationTokenParams,
  INotificationSetFirebaseNotificationTokenResponse,
  INotificationReadNotificationParams,
  INotificationReadNotificationResponse,
  INotificationGetNotificationsParams,
  INotificationGetNotificationsResponse,
} from "./notification.interface";

export class CNotification {
  constructor(private http: TikSDKHTTPService) {}

  /**
   * setFirebaseNotificationToken function set user's notification token from Firebase
   * @version 0.1.1
   */
  public SetFirebaseNotificationToken(
    data?: INotificationSetFirebaseNotificationTokenParams
  ) {
    return this.http.request<INotificationSetFirebaseNotificationTokenResponse>(
      {
        path: "/notification/notification/firebase/set",
        method: "POST",
        actor: true,
        data: data,
      }
    );
  }

  /**
   * getNotifications function set read of a notification to true
   * @version 0.1.1
   */
  public ReadNotification(data?: INotificationReadNotificationParams) {
    return this.http.request<INotificationReadNotificationResponse>({
      path: "/notification/notification/read/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }

  /**
   * getNotifications function get a list of notifications
   * @version 0.1.1
   */
  public GetNotifications(data?: INotificationGetNotificationsParams) {
    return this.http.request<INotificationGetNotificationsResponse>({
      path: "/notification/notification/actor",
      method: "GET",
      actor: true,
      data: data,
    });
  }
}
