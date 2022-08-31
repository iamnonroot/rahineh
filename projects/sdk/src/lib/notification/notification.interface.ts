/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { ResponseParam } from "../http.service";

export interface INotificationSetFirebaseNotificationTokenParams {
  token: string;
}

export interface INotificationReadNotificationParams {
  ids: number[];
}

export interface INotificationGetNotificationsParams {}

export interface INotificationSetFirebaseNotificationTokenResponse
  extends ResponseParam {}

export interface INotificationReadNotificationResponse extends ResponseParam {}

export interface INotificationGetNotificationsData {
  id: number;
  image?: string;
  title: string;
  summery: string;
  content: string;
  tags: string[];
  publishedAt: Date;
  readedAt: Date | null;
}

export interface INotificationGetNotificationsResponse extends ResponseParam {
  notifications: INotificationGetNotificationsData[];
}
