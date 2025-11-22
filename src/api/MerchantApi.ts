import { MerchantIdListRequestInfo } from "./../models/MerchantIdListRequestInfo";
import { MerchantIdListResponseInfo } from "./../models/MerchantIdListResponseInfo";
import { MerchantErrorsRequestInfo } from "./../models/MerchantErrorsRequestInfo";
import { MerchantErrorsResponseInfo } from "./../models/MerchantErrorsResponseInfo";
import { MerchantGoogleLanguagesResponseInfo } from "./../models/MerchantGoogleLanguagesResponseInfo";
import { MerchantGoogleLocationsResponseInfo } from "./../models/MerchantGoogleLocationsResponseInfo";
import { MerchantGoogleLocationsCountryResponseInfo } from "./../models/MerchantGoogleLocationsCountryResponseInfo";
import { MerchantGoogleProductsTaskPostRequestInfo } from "./../models/MerchantGoogleProductsTaskPostRequestInfo";
import { MerchantGoogleProductsTaskPostResponseInfo } from "./../models/MerchantGoogleProductsTaskPostResponseInfo";
import { MerchantGoogleProductsTasksReadyResponseInfo } from "./../models/MerchantGoogleProductsTasksReadyResponseInfo";
import { MerchantTasksReadyResponseInfo } from "./../models/MerchantTasksReadyResponseInfo";
import { MerchantGoogleProductsTaskGetAdvancedResponseInfo } from "./../models/MerchantGoogleProductsTaskGetAdvancedResponseInfo";
import { MerchantGoogleProductsTaskGetHtmlResponseInfo } from "./../models/MerchantGoogleProductsTaskGetHtmlResponseInfo";
import { MerchantGoogleSellersTaskPostRequestInfo } from "./../models/MerchantGoogleSellersTaskPostRequestInfo";
import { MerchantGoogleSellersTaskPostResponseInfo } from "./../models/MerchantGoogleSellersTaskPostResponseInfo";
import { MerchantGoogleSellersTasksReadyResponseInfo } from "./../models/MerchantGoogleSellersTasksReadyResponseInfo";
import { MerchantGoogleSellersTaskGetAdvancedResponseInfo } from "./../models/MerchantGoogleSellersTaskGetAdvancedResponseInfo";
import { MerchantGoogleProductInfoTaskPostRequestInfo } from "./../models/MerchantGoogleProductInfoTaskPostRequestInfo";
import { MerchantGoogleProductInfoTaskPostResponseInfo } from "./../models/MerchantGoogleProductInfoTaskPostResponseInfo";
import { MerchantGoogleProductInfoTasksReadyResponseInfo } from "./../models/MerchantGoogleProductInfoTasksReadyResponseInfo";
import { MerchantGoogleProductInfoTaskGetAdvancedResponseInfo } from "./../models/MerchantGoogleProductInfoTaskGetAdvancedResponseInfo";
import { MerchantGoogleSellersAdUrlResponseInfo } from "./../models/MerchantGoogleSellersAdUrlResponseInfo";
import { MerchantAmazonLocationsResponseInfo } from "./../models/MerchantAmazonLocationsResponseInfo";
import { MerchantAmazonLocationsCountryResponseInfo } from "./../models/MerchantAmazonLocationsCountryResponseInfo";
import { MerchantAmazonLanguagesResponseInfo } from "./../models/MerchantAmazonLanguagesResponseInfo";
import { MerchantAmazonProductsTaskPostRequestInfo } from "./../models/MerchantAmazonProductsTaskPostRequestInfo";
import { MerchantAmazonProductsTaskPostResponseInfo } from "./../models/MerchantAmazonProductsTaskPostResponseInfo";
import { MerchantAmazonProductsTasksReadyResponseInfo } from "./../models/MerchantAmazonProductsTasksReadyResponseInfo";
import { MerchantAmazonProductsTaskGetAdvancedResponseInfo } from "./../models/MerchantAmazonProductsTaskGetAdvancedResponseInfo";
import { MerchantAmazonProductsTaskGetHtmlResponseInfo } from "./../models/MerchantAmazonProductsTaskGetHtmlResponseInfo";
import { MerchantAmazonAsinTaskPostRequestInfo } from "./../models/MerchantAmazonAsinTaskPostRequestInfo";
import { MerchantAmazonAsinTaskPostResponseInfo } from "./../models/MerchantAmazonAsinTaskPostResponseInfo";
import { MerchantAmazonAsinTasksReadyResponseInfo } from "./../models/MerchantAmazonAsinTasksReadyResponseInfo";
import { MerchantAmazonAsinTaskGetAdvancedResponseInfo } from "./../models/MerchantAmazonAsinTaskGetAdvancedResponseInfo";
import { MerchantAmazonAsinTaskGetHtmlResponseInfo } from "./../models/MerchantAmazonAsinTaskGetHtmlResponseInfo";
import { MerchantAmazonSellersTaskPostRequestInfo } from "./../models/MerchantAmazonSellersTaskPostRequestInfo";
import { MerchantAmazonSellersTaskPostResponseInfo } from "./../models/MerchantAmazonSellersTaskPostResponseInfo";
import { MerchantAmazonSellersTasksReadyResponseInfo } from "./../models/MerchantAmazonSellersTasksReadyResponseInfo";
import { MerchantAmazonSellersTaskGetAdvancedResponseInfo } from "./../models/MerchantAmazonSellersTaskGetAdvancedResponseInfo";
import { MerchantAmazonSellersTaskGetHtmlResponseInfo } from "./../models/MerchantAmazonSellersTaskGetHtmlResponseInfo";
import { MerchantAmazonReviewsTaskPostRequestInfo } from "./../models/MerchantAmazonReviewsTaskPostRequestInfo";
import { MerchantAmazonReviewsTaskPostResponseInfo } from "./../models/MerchantAmazonReviewsTaskPostResponseInfo";
import { MerchantAmazonReviewsTasksReadyResponseInfo } from "./../models/MerchantAmazonReviewsTasksReadyResponseInfo";
import { MerchantAmazonReviewsTaskGetAdvancedResponseInfo } from "./../models/MerchantAmazonReviewsTaskGetAdvancedResponseInfo";
import { MerchantAmazonReviewsTaskGetHtmlResponseInfo } from "./../models/MerchantAmazonReviewsTaskGetHtmlResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class MerchantApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    merchantIdList(body: MerchantIdListRequestInfo[]): Promise<MerchantIdListResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/id_list";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantIdList(_response);
        });
    }

    protected processMerchantIdList(response: Response): Promise<MerchantIdListResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantIdListResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantIdListResponseInfo | null>(null as any);
    }
    merchantErrors(body: MerchantErrorsRequestInfo[]): Promise<MerchantErrorsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/errors";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantErrors(_response);
        });
    }

    protected processMerchantErrors(response: Response): Promise<MerchantErrorsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantErrorsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantErrorsResponseInfo | null>(null as any);
    }
    merchantGoogleLanguages(): Promise<MerchantGoogleLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantGoogleLanguages(_response);
        });
    }

    protected processMerchantGoogleLanguages(response: Response): Promise<MerchantGoogleLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleLanguagesResponseInfo | null>(null as any);
    }
    merchantGoogleLocations(): Promise<MerchantGoogleLocationsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/locations";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantGoogleLocations(_response);
        });
    }

    protected processMerchantGoogleLocations(response: Response): Promise<MerchantGoogleLocationsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleLocationsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleLocationsResponseInfo | null>(null as any);
    }
    merchantGoogleLocationsCountry(country: string): Promise<MerchantGoogleLocationsCountryResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/locations/{country}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{country}", encodeURIComponent("" + country));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantGoogleLocationsCountry(_response);
        });
    }

    protected processMerchantGoogleLocationsCountry(response: Response): Promise<MerchantGoogleLocationsCountryResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleLocationsCountryResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleLocationsCountryResponseInfo | null>(null as any);
    }
    googleProductsTaskPost(body: MerchantGoogleProductsTaskPostRequestInfo[]): Promise<MerchantGoogleProductsTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/products/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleProductsTaskPost(_response);
        });
    }

    protected processGoogleProductsTaskPost(response: Response): Promise<MerchantGoogleProductsTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleProductsTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleProductsTaskPostResponseInfo | null>(null as any);
    }
    googleProductsTasksReady(): Promise<MerchantGoogleProductsTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/products/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleProductsTasksReady(_response);
        });
    }

    protected processGoogleProductsTasksReady(response: Response): Promise<MerchantGoogleProductsTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleProductsTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleProductsTasksReadyResponseInfo | null>(null as any);
    }
    merchantTasksReady(): Promise<MerchantTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantTasksReady(_response);
        });
    }

    protected processMerchantTasksReady(response: Response): Promise<MerchantTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantTasksReadyResponseInfo | null>(null as any);
    }
    googleProductsTaskGetAdvanced(id: string): Promise<MerchantGoogleProductsTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/products/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleProductsTaskGetAdvanced(_response);
        });
    }

    protected processGoogleProductsTaskGetAdvanced(response: Response): Promise<MerchantGoogleProductsTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleProductsTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleProductsTaskGetAdvancedResponseInfo | null>(null as any);
    }
    googleProductsTaskGetHtml(id: string): Promise<MerchantGoogleProductsTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/products/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleProductsTaskGetHtml(_response);
        });
    }

    protected processGoogleProductsTaskGetHtml(response: Response): Promise<MerchantGoogleProductsTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleProductsTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleProductsTaskGetHtmlResponseInfo | null>(null as any);
    }
    googleSellersTaskPost(body: MerchantGoogleSellersTaskPostRequestInfo[]): Promise<MerchantGoogleSellersTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/sellers/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleSellersTaskPost(_response);
        });
    }

    protected processGoogleSellersTaskPost(response: Response): Promise<MerchantGoogleSellersTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleSellersTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleSellersTaskPostResponseInfo | null>(null as any);
    }
    googleSellersTasksReady(): Promise<MerchantGoogleSellersTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/sellers/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleSellersTasksReady(_response);
        });
    }

    protected processGoogleSellersTasksReady(response: Response): Promise<MerchantGoogleSellersTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleSellersTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleSellersTasksReadyResponseInfo | null>(null as any);
    }
    googleSellersTaskGetAdvanced(id: string): Promise<MerchantGoogleSellersTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/sellers/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleSellersTaskGetAdvanced(_response);
        });
    }

    protected processGoogleSellersTaskGetAdvanced(response: Response): Promise<MerchantGoogleSellersTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleSellersTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleSellersTaskGetAdvancedResponseInfo | null>(null as any);
    }
    googleProductInfoTaskPost(body: MerchantGoogleProductInfoTaskPostRequestInfo[]): Promise<MerchantGoogleProductInfoTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/product_info/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleProductInfoTaskPost(_response);
        });
    }

    protected processGoogleProductInfoTaskPost(response: Response): Promise<MerchantGoogleProductInfoTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleProductInfoTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleProductInfoTaskPostResponseInfo | null>(null as any);
    }
    googleProductInfoTasksReady(): Promise<MerchantGoogleProductInfoTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/product_info/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleProductInfoTasksReady(_response);
        });
    }

    protected processGoogleProductInfoTasksReady(response: Response): Promise<MerchantGoogleProductInfoTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleProductInfoTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleProductInfoTasksReadyResponseInfo | null>(null as any);
    }
    googleProductInfoTaskGetAdvanced(id: string): Promise<MerchantGoogleProductInfoTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/product_info/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleProductInfoTaskGetAdvanced(_response);
        });
    }

    protected processGoogleProductInfoTaskGetAdvanced(response: Response): Promise<MerchantGoogleProductInfoTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleProductInfoTaskGetAdvancedResponseInfo | null>(null as any);
    }
    googleSellersAdUrl(shop_ad_aclk: string): Promise<MerchantGoogleSellersAdUrlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/google/sellers/ad_url/{shop_ad_aclk}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{shop_ad_aclk}", encodeURIComponent("" + shop_ad_aclk));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleSellersAdUrl(_response);
        });
    }

    protected processGoogleSellersAdUrl(response: Response): Promise<MerchantGoogleSellersAdUrlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantGoogleSellersAdUrlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantGoogleSellersAdUrlResponseInfo | null>(null as any);
    }
    merchantAmazonLocations(): Promise<MerchantAmazonLocationsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/locations";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantAmazonLocations(_response);
        });
    }

    protected processMerchantAmazonLocations(response: Response): Promise<MerchantAmazonLocationsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonLocationsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonLocationsResponseInfo | null>(null as any);
    }
    merchantAmazonLocationsCountry(country: string): Promise<MerchantAmazonLocationsCountryResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/locations/{country}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{country}", encodeURIComponent("" + country));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantAmazonLocationsCountry(_response);
        });
    }

    protected processMerchantAmazonLocationsCountry(response: Response): Promise<MerchantAmazonLocationsCountryResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonLocationsCountryResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonLocationsCountryResponseInfo | null>(null as any);
    }
    merchantAmazonLanguages(): Promise<MerchantAmazonLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMerchantAmazonLanguages(_response);
        });
    }

    protected processMerchantAmazonLanguages(response: Response): Promise<MerchantAmazonLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonLanguagesResponseInfo | null>(null as any);
    }
    amazonProductsTaskPost(body: MerchantAmazonProductsTaskPostRequestInfo[]): Promise<MerchantAmazonProductsTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/products/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonProductsTaskPost(_response);
        });
    }

    protected processAmazonProductsTaskPost(response: Response): Promise<MerchantAmazonProductsTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonProductsTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonProductsTaskPostResponseInfo | null>(null as any);
    }
    amazonProductsTasksReady(): Promise<MerchantAmazonProductsTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/products/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonProductsTasksReady(_response);
        });
    }

    protected processAmazonProductsTasksReady(response: Response): Promise<MerchantAmazonProductsTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonProductsTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonProductsTasksReadyResponseInfo | null>(null as any);
    }
    amazonProductsTaskGetAdvanced(id: string): Promise<MerchantAmazonProductsTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/products/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonProductsTaskGetAdvanced(_response);
        });
    }

    protected processAmazonProductsTaskGetAdvanced(response: Response): Promise<MerchantAmazonProductsTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonProductsTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonProductsTaskGetAdvancedResponseInfo | null>(null as any);
    }
    amazonProductsTaskGetHtml(id: string): Promise<MerchantAmazonProductsTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/products/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonProductsTaskGetHtml(_response);
        });
    }

    protected processAmazonProductsTaskGetHtml(response: Response): Promise<MerchantAmazonProductsTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonProductsTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonProductsTaskGetHtmlResponseInfo | null>(null as any);
    }
    amazonAsinTaskPost(body: MerchantAmazonAsinTaskPostRequestInfo[]): Promise<MerchantAmazonAsinTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/asin/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonAsinTaskPost(_response);
        });
    }

    protected processAmazonAsinTaskPost(response: Response): Promise<MerchantAmazonAsinTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonAsinTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonAsinTaskPostResponseInfo | null>(null as any);
    }
    amazonAsinTasksReady(): Promise<MerchantAmazonAsinTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/asin/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonAsinTasksReady(_response);
        });
    }

    protected processAmazonAsinTasksReady(response: Response): Promise<MerchantAmazonAsinTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonAsinTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonAsinTasksReadyResponseInfo | null>(null as any);
    }
    amazonAsinTaskGetAdvanced(id: string): Promise<MerchantAmazonAsinTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/asin/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonAsinTaskGetAdvanced(_response);
        });
    }

    protected processAmazonAsinTaskGetAdvanced(response: Response): Promise<MerchantAmazonAsinTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonAsinTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonAsinTaskGetAdvancedResponseInfo | null>(null as any);
    }
    amazonAsinTaskGetHtml(id: string): Promise<MerchantAmazonAsinTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/asin/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonAsinTaskGetHtml(_response);
        });
    }

    protected processAmazonAsinTaskGetHtml(response: Response): Promise<MerchantAmazonAsinTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonAsinTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonAsinTaskGetHtmlResponseInfo | null>(null as any);
    }
    amazonSellersTaskPost(body: MerchantAmazonSellersTaskPostRequestInfo[]): Promise<MerchantAmazonSellersTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/sellers/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonSellersTaskPost(_response);
        });
    }

    protected processAmazonSellersTaskPost(response: Response): Promise<MerchantAmazonSellersTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonSellersTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonSellersTaskPostResponseInfo | null>(null as any);
    }
    amazonSellersTasksReady(): Promise<MerchantAmazonSellersTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/sellers/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonSellersTasksReady(_response);
        });
    }

    protected processAmazonSellersTasksReady(response: Response): Promise<MerchantAmazonSellersTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonSellersTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonSellersTasksReadyResponseInfo | null>(null as any);
    }
    amazonSellersTaskGetAdvanced(id: string): Promise<MerchantAmazonSellersTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/sellers/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonSellersTaskGetAdvanced(_response);
        });
    }

    protected processAmazonSellersTaskGetAdvanced(response: Response): Promise<MerchantAmazonSellersTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonSellersTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonSellersTaskGetAdvancedResponseInfo | null>(null as any);
    }
    amazonSellersTaskGetHtml(id: string): Promise<MerchantAmazonSellersTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/sellers/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonSellersTaskGetHtml(_response);
        });
    }

    protected processAmazonSellersTaskGetHtml(response: Response): Promise<MerchantAmazonSellersTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonSellersTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonSellersTaskGetHtmlResponseInfo | null>(null as any);
    }
    amazonReviewsTaskPost(body: MerchantAmazonReviewsTaskPostRequestInfo[]): Promise<MerchantAmazonReviewsTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/reviews/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonReviewsTaskPost(_response);
        });
    }

    protected processAmazonReviewsTaskPost(response: Response): Promise<MerchantAmazonReviewsTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonReviewsTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonReviewsTaskPostResponseInfo | null>(null as any);
    }
    amazonReviewsTasksReady(): Promise<MerchantAmazonReviewsTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/reviews/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonReviewsTasksReady(_response);
        });
    }

    protected processAmazonReviewsTasksReady(response: Response): Promise<MerchantAmazonReviewsTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonReviewsTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonReviewsTasksReadyResponseInfo | null>(null as any);
    }
    amazonReviewsTaskGetAdvanced(id: string): Promise<MerchantAmazonReviewsTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/reviews/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonReviewsTaskGetAdvanced(_response);
        });
    }

    protected processAmazonReviewsTaskGetAdvanced(response: Response): Promise<MerchantAmazonReviewsTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonReviewsTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonReviewsTaskGetAdvancedResponseInfo | null>(null as any);
    }
    amazonReviewsTaskGetHtml(id: string): Promise<MerchantAmazonReviewsTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/merchant/amazon/reviews/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.15",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAmazonReviewsTaskGetHtml(_response);
        });
    }

    protected processAmazonReviewsTaskGetHtml(response: Response): Promise<MerchantAmazonReviewsTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? MerchantAmazonReviewsTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<MerchantAmazonReviewsTaskGetHtmlResponseInfo | null>(null as any);
    }
}