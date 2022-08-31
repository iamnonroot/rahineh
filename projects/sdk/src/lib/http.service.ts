import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import qs from "qs";
import { HTTPEndpoint } from "../config";
import { map, filter } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TikSDKHTTPService {
  public token?: string;
  public actor = "actor";

  constructor(private http: HttpClient) {}

  public request<T>(param: RequestParam) {
    let url = param.url ?? `${param.endpoint ?? HTTPEndpoint}${param.path}`;

    let headers: any = {};

    if (param.actor) {
      headers["x-request-party-type"] = this.actor;
    } else {
      headers["x-request-party-type"] = "third-party";
    }
    if ((param.auth || param.actor) && this.token) {
      headers["authorization"] = `Bearer ${this.token}`;
    }

    let request: any = {
      url,
      headers,
      method: param.method,
    };

    if (param.method.toLowerCase() != "get" && param.data) {
      request.body = param.data;
    } else if (param.data) {
      request.url += `?${qs.stringify(param.data)}`;
    }

    return this.http
      .request<T>(
        new HttpRequest(request.method, request.url, request.body, {
          responseType: "json",
          headers: new HttpHeaders({
            "content-type": "application/json",
            ...headers,
          }),
        })
      )
      .pipe(
        map<any, T | undefined>((res) => {
          if ("type" in res && res.type == 0) return undefined;
          else return res.body;
        }),
        filter((res) => res != undefined)
      );
  }
}

interface RequestParam {
  method: string;
  path?: string;
  data?: any;
  auth?: boolean;
  actor?: boolean;
  endpoint?: string;
  url?: string;
}

export interface ResponseParam {
  status: boolean;
  code: number;
  message: string;
}
