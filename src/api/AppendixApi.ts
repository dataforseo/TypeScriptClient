import { AppendixUserDataResponseInfo } from "./../models/AppendixUserDataResponseInfo";
import { AppendixErrorsResponseInfo } from "./../models/AppendixErrorsResponseInfo";
import { AppendixWebhookResendRequestInfo } from "./../models/AppendixWebhookResendRequestInfo";
import { AppendixWebhookResendResponseInfo } from "./../models/AppendixWebhookResendResponseInfo";
import { AppendixStatusResponseInfo } from "./../models/AppendixStatusResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class AppendixApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    userData(): Promise<AppendixUserDataResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/appendix/user_data";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.1.0",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUserData(_response);
        });
    }

    protected processUserData(response: Response): Promise<AppendixUserDataResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppendixUserDataResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppendixUserDataResponseInfo | null>(null as any);
    }
    errors(): Promise<AppendixErrorsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/appendix/errors";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.1.0",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processErrors(_response);
        });
    }

    protected processErrors(response: Response): Promise<AppendixErrorsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppendixErrorsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppendixErrorsResponseInfo | null>(null as any);
    }
    webhookResend(body: AppendixWebhookResendRequestInfo[]): Promise<AppendixWebhookResendResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/appendix/webhook_resend";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.1.0",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processWebhookResend(_response);
        });
    }

    protected processWebhookResend(response: Response): Promise<AppendixWebhookResendResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppendixWebhookResendResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppendixWebhookResendResponseInfo | null>(null as any);
    }
    appendixStatus(): Promise<AppendixStatusResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/appendix/status";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.1.0",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppendixStatus(_response);
        });
    }

    protected processAppendixStatus(response: Response): Promise<AppendixStatusResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppendixStatusResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppendixStatusResponseInfo | null>(null as any);
    }
}