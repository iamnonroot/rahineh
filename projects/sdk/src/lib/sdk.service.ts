/**
 * TikSDK
 * @desciprion This file generated automatically by SDK generator
 * @author !R00T <iamnonroot@gmail.com> as SDK developer
 * @author Dr.Felfel <felfelpardaz@gmail.com> as Backend developer
 * @date Tue Aug 23 2022 22:44:41
 * @license MIT
 */

import { Injectable } from "@angular/core";
import { TikSDKHTTPService } from "./http.service";

import { CWallet } from "./wallet/wallet.class";
import { CLocation } from "./location/location.class";
import { CNotification } from "./notification/notification.class";
import { CClub } from "./club/club.class";
import { CCms } from "./cms/cms.class";
import { CCustomer } from "./customer/customer.class";
import { CApi } from "./api/api.class";
import { CDoorbin } from "./doorbin/doorbin.class";
import { CDynamic } from "./dynamic/dynamic.class";
import { CHttp } from "./http/http.class";
import { CNimkat } from "./nimkat/nimkat.class";
import { CPayment } from "./payment/payment.class";
import { CProduct } from "./product/product.class";
import { CRide } from "./ride/ride.class";
import { CSms } from "./sms/sms.class";
import { CStaff } from "./staff/staff.class";
import { CTikflight } from "./tikflight/tikflight.class";
import { CTikpay } from "./tikpay/tikpay.class";

@Injectable({
  providedIn: "root",
})
export class TikSdkService {
  constructor(private http: TikSDKHTTPService) {}

  public Wallet: CWallet = new CWallet(this.http);
  public Location: CLocation = new CLocation(this.http);
  public Notification: CNotification = new CNotification(this.http);
  public Club: CClub = new CClub(this.http);
  public Cms: CCms = new CCms(this.http);
  public Customer: CCustomer = new CCustomer(this.http);
  public Api: CApi = new CApi(this.http);
  public Doorbin: CDoorbin = new CDoorbin(this.http);
  public Dynamic: CDynamic = new CDynamic(this.http);
  public Http: CHttp = new CHttp(this.http);
  public Nimkat: CNimkat = new CNimkat(this.http);
  public Payment: CPayment = new CPayment(this.http);
  public Product: CProduct = new CProduct(this.http);
  public Ride: CRide = new CRide(this.http);
  public Sms: CSms = new CSms(this.http);
  public Staff: CStaff = new CStaff(this.http);
  public Tikflight: CTikflight = new CTikflight(this.http);
  public Tikpay: CTikpay = new CTikpay(this.http);
}
