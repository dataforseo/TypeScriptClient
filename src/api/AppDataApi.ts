import { AppDataIdListRequestInfo } from "./../models/AppDataIdListRequestInfo";
import { AppDataIdListResponseInfo } from "./../models/AppDataIdListResponseInfo";
import { AppDataErrorsRequestInfo } from "./../models/AppDataErrorsRequestInfo";
import { AppDataErrorsResponseInfo } from "./../models/AppDataErrorsResponseInfo";
import { AppDataGoogleCategoriesResponseInfo } from "./../models/AppDataGoogleCategoriesResponseInfo";
import { AppDataGoogleLocationsResponseInfo } from "./../models/AppDataGoogleLocationsResponseInfo";
import { AppDataGoogleLocationsCountryResponseInfo } from "./../models/AppDataGoogleLocationsCountryResponseInfo";
import { AppDataGoogleLanguagesResponseInfo } from "./../models/AppDataGoogleLanguagesResponseInfo";
import { AppDataGoogleAppSearchesTaskPostRequestInfo } from "./../models/AppDataGoogleAppSearchesTaskPostRequestInfo";
import { AppDataGoogleAppSearchesTaskPostResponseInfo } from "./../models/AppDataGoogleAppSearchesTaskPostResponseInfo";
import { AppDataGoogleAppSearchesTasksReadyResponseInfo } from "./../models/AppDataGoogleAppSearchesTasksReadyResponseInfo";
import { AppDataTasksReadyResponseInfo } from "./../models/AppDataTasksReadyResponseInfo";
import { AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo } from "./../models/AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo";
import { AppDataGoogleAppSearchesTaskGetHtmlResponseInfo } from "./../models/AppDataGoogleAppSearchesTaskGetHtmlResponseInfo";
import { AppDataGoogleAppListTaskPostRequestInfo } from "./../models/AppDataGoogleAppListTaskPostRequestInfo";
import { AppDataGoogleAppListTaskPostResponseInfo } from "./../models/AppDataGoogleAppListTaskPostResponseInfo";
import { AppDataGoogleAppListTasksReadyResponseInfo } from "./../models/AppDataGoogleAppListTasksReadyResponseInfo";
import { AppDataGoogleAppListTaskGetAdvancedResponseInfo } from "./../models/AppDataGoogleAppListTaskGetAdvancedResponseInfo";
import { AppDataGoogleAppListTaskGetHtmlResponseInfo } from "./../models/AppDataGoogleAppListTaskGetHtmlResponseInfo";
import { AppDataGoogleAppInfoTaskPostRequestInfo } from "./../models/AppDataGoogleAppInfoTaskPostRequestInfo";
import { AppDataGoogleAppInfoTaskPostResponseInfo } from "./../models/AppDataGoogleAppInfoTaskPostResponseInfo";
import { AppDataGoogleAppInfoTasksReadyResponseInfo } from "./../models/AppDataGoogleAppInfoTasksReadyResponseInfo";
import { AppDataGoogleAppInfoTaskGetAdvancedResponseInfo } from "./../models/AppDataGoogleAppInfoTaskGetAdvancedResponseInfo";
import { AppDataGoogleAppInfoTaskGetHtmlResponseInfo } from "./../models/AppDataGoogleAppInfoTaskGetHtmlResponseInfo";
import { AppDataGoogleAppReviewsTaskPostRequestInfo } from "./../models/AppDataGoogleAppReviewsTaskPostRequestInfo";
import { AppDataGoogleAppReviewsTaskPostResponseInfo } from "./../models/AppDataGoogleAppReviewsTaskPostResponseInfo";
import { AppDataGoogleAppReviewsTasksReadyResponseInfo } from "./../models/AppDataGoogleAppReviewsTasksReadyResponseInfo";
import { AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo } from "./../models/AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo";
import { AppDataGoogleAppReviewsTaskGetHtmlResponseInfo } from "./../models/AppDataGoogleAppReviewsTaskGetHtmlResponseInfo";
import { AppDataGoogleAppListingsCategoriesResponseInfo } from "./../models/AppDataGoogleAppListingsCategoriesResponseInfo";
import { AppDataGoogleAppListingsSearchLiveRequestInfo } from "./../models/AppDataGoogleAppListingsSearchLiveRequestInfo";
import { AppDataGoogleAppListingsSearchLiveResponseInfo } from "./../models/AppDataGoogleAppListingsSearchLiveResponseInfo";
import { AppDataAppleCategoriesResponseInfo } from "./../models/AppDataAppleCategoriesResponseInfo";
import { AppDataAppleLocationsResponseInfo } from "./../models/AppDataAppleLocationsResponseInfo";
import { AppDataAppleLanguagesResponseInfo } from "./../models/AppDataAppleLanguagesResponseInfo";
import { AppDataAppleAppSearchesTaskPostRequestInfo } from "./../models/AppDataAppleAppSearchesTaskPostRequestInfo";
import { AppDataAppleAppSearchesTaskPostResponseInfo } from "./../models/AppDataAppleAppSearchesTaskPostResponseInfo";
import { AppDataAppleAppSearchesTasksReadyResponseInfo } from "./../models/AppDataAppleAppSearchesTasksReadyResponseInfo";
import { AppDataAppleAppSearchesTaskGetAdvancedResponseInfo } from "./../models/AppDataAppleAppSearchesTaskGetAdvancedResponseInfo";
import { AppDataAppleAppInfoTaskPostRequestInfo } from "./../models/AppDataAppleAppInfoTaskPostRequestInfo";
import { AppDataAppleAppInfoTaskPostResponseInfo } from "./../models/AppDataAppleAppInfoTaskPostResponseInfo";
import { AppDataAppleAppInfoTasksReadyResponseInfo } from "./../models/AppDataAppleAppInfoTasksReadyResponseInfo";
import { AppDataAppleAppInfoTaskGetAdvancedResponseInfo } from "./../models/AppDataAppleAppInfoTaskGetAdvancedResponseInfo";
import { AppDataAppleAppListTaskPostRequestInfo } from "./../models/AppDataAppleAppListTaskPostRequestInfo";
import { AppDataAppleAppListTaskPostResponseInfo } from "./../models/AppDataAppleAppListTaskPostResponseInfo";
import { AppDataAppleAppListTasksReadyResponseInfo } from "./../models/AppDataAppleAppListTasksReadyResponseInfo";
import { AppDataAppleAppListTaskGetAdvancedResponseInfo } from "./../models/AppDataAppleAppListTaskGetAdvancedResponseInfo";
import { AppDataAppleAppReviewsTaskPostRequestInfo } from "./../models/AppDataAppleAppReviewsTaskPostRequestInfo";
import { AppDataAppleAppReviewsTaskPostResponseInfo } from "./../models/AppDataAppleAppReviewsTaskPostResponseInfo";
import { AppDataAppleAppReviewsTasksReadyResponseInfo } from "./../models/AppDataAppleAppReviewsTasksReadyResponseInfo";
import { AppDataAppleAppReviewsTaskGetAdvancedResponseInfo } from "./../models/AppDataAppleAppReviewsTaskGetAdvancedResponseInfo";
import { AppDataAppleAppListingsCategoriesResponseInfo } from "./../models/AppDataAppleAppListingsCategoriesResponseInfo";
import { AppDataAppleAppListingsSearchLiveRequestInfo } from "./../models/AppDataAppleAppListingsSearchLiveRequestInfo";
import { AppDataAppleAppListingsSearchLiveResponseInfo } from "./../models/AppDataAppleAppListingsSearchLiveResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class AppDataApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    appDataIdList(body: AppDataIdListRequestInfo[]): Promise<AppDataIdListResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/id_list";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataIdList(_response);
        });
    }

    protected processAppDataIdList(response: Response): Promise<AppDataIdListResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataIdListResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataIdListResponseInfo | null>(null as any);
    }
    appDataErrors(body: AppDataErrorsRequestInfo[]): Promise<AppDataErrorsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/errors";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataErrors(_response);
        });
    }

    protected processAppDataErrors(response: Response): Promise<AppDataErrorsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataErrorsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataErrorsResponseInfo | null>(null as any);
    }
    googleCategories(): Promise<AppDataGoogleCategoriesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/categories";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleCategories(_response);
        });
    }

    protected processGoogleCategories(response: Response): Promise<AppDataGoogleCategoriesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleCategoriesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleCategoriesResponseInfo | null>(null as any);
    }
    appDataGoogleLocations(): Promise<AppDataGoogleLocationsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/locations";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataGoogleLocations(_response);
        });
    }

    protected processAppDataGoogleLocations(response: Response): Promise<AppDataGoogleLocationsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleLocationsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleLocationsResponseInfo | null>(null as any);
    }
    appDataGoogleLocationsCountry(country: string): Promise<AppDataGoogleLocationsCountryResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/locations/{country}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{country}", encodeURIComponent("" + country));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataGoogleLocationsCountry(_response);
        });
    }

    protected processAppDataGoogleLocationsCountry(response: Response): Promise<AppDataGoogleLocationsCountryResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleLocationsCountryResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleLocationsCountryResponseInfo | null>(null as any);
    }
    appDataGoogleLanguages(): Promise<AppDataGoogleLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataGoogleLanguages(_response);
        });
    }

    protected processAppDataGoogleLanguages(response: Response): Promise<AppDataGoogleLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleLanguagesResponseInfo | null>(null as any);
    }
    googleAppSearchesTaskPost(body: AppDataGoogleAppSearchesTaskPostRequestInfo[]): Promise<AppDataGoogleAppSearchesTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_searches/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppSearchesTaskPost(_response);
        });
    }

    protected processGoogleAppSearchesTaskPost(response: Response): Promise<AppDataGoogleAppSearchesTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppSearchesTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppSearchesTaskPostResponseInfo | null>(null as any);
    }
    googleAppSearchesTasksReady(): Promise<AppDataGoogleAppSearchesTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_searches/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppSearchesTasksReady(_response);
        });
    }

    protected processGoogleAppSearchesTasksReady(response: Response): Promise<AppDataGoogleAppSearchesTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppSearchesTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppSearchesTasksReadyResponseInfo | null>(null as any);
    }
    appDataTasksReady(): Promise<AppDataTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataTasksReady(_response);
        });
    }

    protected processAppDataTasksReady(response: Response): Promise<AppDataTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataTasksReadyResponseInfo | null>(null as any);
    }
    googleAppSearchesTaskGetAdvanced(id: string): Promise<AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_searches/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppSearchesTaskGetAdvanced(_response);
        });
    }

    protected processGoogleAppSearchesTaskGetAdvanced(response: Response): Promise<AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo | null>(null as any);
    }
    googleAppSearchesTaskGetHtml(id: string): Promise<AppDataGoogleAppSearchesTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_searches/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppSearchesTaskGetHtml(_response);
        });
    }

    protected processGoogleAppSearchesTaskGetHtml(response: Response): Promise<AppDataGoogleAppSearchesTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppSearchesTaskGetHtmlResponseInfo | null>(null as any);
    }
    googleAppListTaskPost(body: AppDataGoogleAppListTaskPostRequestInfo[]): Promise<AppDataGoogleAppListTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_list/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppListTaskPost(_response);
        });
    }

    protected processGoogleAppListTaskPost(response: Response): Promise<AppDataGoogleAppListTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppListTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppListTaskPostResponseInfo | null>(null as any);
    }
    googleAppListTasksReady(): Promise<AppDataGoogleAppListTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_list/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppListTasksReady(_response);
        });
    }

    protected processGoogleAppListTasksReady(response: Response): Promise<AppDataGoogleAppListTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppListTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppListTasksReadyResponseInfo | null>(null as any);
    }
    googleAppListTaskGetAdvanced(id: string): Promise<AppDataGoogleAppListTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_list/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppListTaskGetAdvanced(_response);
        });
    }

    protected processGoogleAppListTaskGetAdvanced(response: Response): Promise<AppDataGoogleAppListTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppListTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppListTaskGetAdvancedResponseInfo | null>(null as any);
    }
    googleAppListTaskGetHtml(id: string): Promise<AppDataGoogleAppListTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_list/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppListTaskGetHtml(_response);
        });
    }

    protected processGoogleAppListTaskGetHtml(response: Response): Promise<AppDataGoogleAppListTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppListTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppListTaskGetHtmlResponseInfo | null>(null as any);
    }
    googleAppInfoTaskPost(body: AppDataGoogleAppInfoTaskPostRequestInfo[]): Promise<AppDataGoogleAppInfoTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_info/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppInfoTaskPost(_response);
        });
    }

    protected processGoogleAppInfoTaskPost(response: Response): Promise<AppDataGoogleAppInfoTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppInfoTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppInfoTaskPostResponseInfo | null>(null as any);
    }
    googleAppInfoTasksReady(): Promise<AppDataGoogleAppInfoTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_info/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppInfoTasksReady(_response);
        });
    }

    protected processGoogleAppInfoTasksReady(response: Response): Promise<AppDataGoogleAppInfoTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppInfoTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppInfoTasksReadyResponseInfo | null>(null as any);
    }
    googleAppInfoTaskGetAdvanced(id: string): Promise<AppDataGoogleAppInfoTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_info/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppInfoTaskGetAdvanced(_response);
        });
    }

    protected processGoogleAppInfoTaskGetAdvanced(response: Response): Promise<AppDataGoogleAppInfoTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppInfoTaskGetAdvancedResponseInfo | null>(null as any);
    }
    googleAppInfoTaskGetHtml(id: string): Promise<AppDataGoogleAppInfoTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_info/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppInfoTaskGetHtml(_response);
        });
    }

    protected processGoogleAppInfoTaskGetHtml(response: Response): Promise<AppDataGoogleAppInfoTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppInfoTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppInfoTaskGetHtmlResponseInfo | null>(null as any);
    }
    googleAppReviewsTaskPost(body: AppDataGoogleAppReviewsTaskPostRequestInfo[]): Promise<AppDataGoogleAppReviewsTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_reviews/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppReviewsTaskPost(_response);
        });
    }

    protected processGoogleAppReviewsTaskPost(response: Response): Promise<AppDataGoogleAppReviewsTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppReviewsTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppReviewsTaskPostResponseInfo | null>(null as any);
    }
    googleAppReviewsTasksReady(): Promise<AppDataGoogleAppReviewsTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_reviews/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppReviewsTasksReady(_response);
        });
    }

    protected processGoogleAppReviewsTasksReady(response: Response): Promise<AppDataGoogleAppReviewsTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppReviewsTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppReviewsTasksReadyResponseInfo | null>(null as any);
    }
    googleAppReviewsTaskGetAdvanced(id: string): Promise<AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_reviews/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppReviewsTaskGetAdvanced(_response);
        });
    }

    protected processGoogleAppReviewsTaskGetAdvanced(response: Response): Promise<AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo | null>(null as any);
    }
    googleAppReviewsTaskGetHtml(id: string): Promise<AppDataGoogleAppReviewsTaskGetHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_reviews/task_get/html/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppReviewsTaskGetHtml(_response);
        });
    }

    protected processGoogleAppReviewsTaskGetHtml(response: Response): Promise<AppDataGoogleAppReviewsTaskGetHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppReviewsTaskGetHtmlResponseInfo | null>(null as any);
    }
    googleAppListingsCategories(): Promise<AppDataGoogleAppListingsCategoriesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_listings/categories";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppListingsCategories(_response);
        });
    }

    protected processGoogleAppListingsCategories(response: Response): Promise<AppDataGoogleAppListingsCategoriesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppListingsCategoriesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppListingsCategoriesResponseInfo | null>(null as any);
    }
    googleAppListingsSearchLive(body: AppDataGoogleAppListingsSearchLiveRequestInfo[]): Promise<AppDataGoogleAppListingsSearchLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/google/app_listings/search/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGoogleAppListingsSearchLive(_response);
        });
    }

    protected processGoogleAppListingsSearchLive(response: Response): Promise<AppDataGoogleAppListingsSearchLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataGoogleAppListingsSearchLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataGoogleAppListingsSearchLiveResponseInfo | null>(null as any);
    }
    appleCategories(): Promise<AppDataAppleCategoriesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/categories";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleCategories(_response);
        });
    }

    protected processAppleCategories(response: Response): Promise<AppDataAppleCategoriesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleCategoriesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleCategoriesResponseInfo | null>(null as any);
    }
    appDataAppleLocations(): Promise<AppDataAppleLocationsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/locations";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataAppleLocations(_response);
        });
    }

    protected processAppDataAppleLocations(response: Response): Promise<AppDataAppleLocationsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleLocationsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleLocationsResponseInfo | null>(null as any);
    }
    appDataAppleLanguages(): Promise<AppDataAppleLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppDataAppleLanguages(_response);
        });
    }

    protected processAppDataAppleLanguages(response: Response): Promise<AppDataAppleLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleLanguagesResponseInfo | null>(null as any);
    }
    appleAppSearchesTaskPost(body: AppDataAppleAppSearchesTaskPostRequestInfo[]): Promise<AppDataAppleAppSearchesTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_searches/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppSearchesTaskPost(_response);
        });
    }

    protected processAppleAppSearchesTaskPost(response: Response): Promise<AppDataAppleAppSearchesTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppSearchesTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppSearchesTaskPostResponseInfo | null>(null as any);
    }
    appleAppSearchesTasksReady(): Promise<AppDataAppleAppSearchesTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_searches/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppSearchesTasksReady(_response);
        });
    }

    protected processAppleAppSearchesTasksReady(response: Response): Promise<AppDataAppleAppSearchesTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppSearchesTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppSearchesTasksReadyResponseInfo | null>(null as any);
    }
    appleAppSearchesTaskGetAdvanced(id: string): Promise<AppDataAppleAppSearchesTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_searches/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppSearchesTaskGetAdvanced(_response);
        });
    }

    protected processAppleAppSearchesTaskGetAdvanced(response: Response): Promise<AppDataAppleAppSearchesTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppSearchesTaskGetAdvancedResponseInfo | null>(null as any);
    }
    appleAppInfoTaskPost(body: AppDataAppleAppInfoTaskPostRequestInfo[]): Promise<AppDataAppleAppInfoTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_info/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppInfoTaskPost(_response);
        });
    }

    protected processAppleAppInfoTaskPost(response: Response): Promise<AppDataAppleAppInfoTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppInfoTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppInfoTaskPostResponseInfo | null>(null as any);
    }
    appleAppInfoTasksReady(): Promise<AppDataAppleAppInfoTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_info/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppInfoTasksReady(_response);
        });
    }

    protected processAppleAppInfoTasksReady(response: Response): Promise<AppDataAppleAppInfoTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppInfoTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppInfoTasksReadyResponseInfo | null>(null as any);
    }
    appleAppInfoTaskGetAdvanced(id: string): Promise<AppDataAppleAppInfoTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_info/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppInfoTaskGetAdvanced(_response);
        });
    }

    protected processAppleAppInfoTaskGetAdvanced(response: Response): Promise<AppDataAppleAppInfoTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppInfoTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppInfoTaskGetAdvancedResponseInfo | null>(null as any);
    }
    appleAppListTaskPost(body: AppDataAppleAppListTaskPostRequestInfo[]): Promise<AppDataAppleAppListTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_list/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppListTaskPost(_response);
        });
    }

    protected processAppleAppListTaskPost(response: Response): Promise<AppDataAppleAppListTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppListTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppListTaskPostResponseInfo | null>(null as any);
    }
    appleAppListTasksReady(): Promise<AppDataAppleAppListTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_list/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppListTasksReady(_response);
        });
    }

    protected processAppleAppListTasksReady(response: Response): Promise<AppDataAppleAppListTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppListTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppListTasksReadyResponseInfo | null>(null as any);
    }
    appleAppListTaskGetAdvanced(id: string): Promise<AppDataAppleAppListTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_list/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppListTaskGetAdvanced(_response);
        });
    }

    protected processAppleAppListTaskGetAdvanced(response: Response): Promise<AppDataAppleAppListTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppListTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppListTaskGetAdvancedResponseInfo | null>(null as any);
    }
    appleAppReviewsTaskPost(body: AppDataAppleAppReviewsTaskPostRequestInfo[]): Promise<AppDataAppleAppReviewsTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_reviews/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppReviewsTaskPost(_response);
        });
    }

    protected processAppleAppReviewsTaskPost(response: Response): Promise<AppDataAppleAppReviewsTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppReviewsTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppReviewsTaskPostResponseInfo | null>(null as any);
    }
    appleAppReviewsTasksReady(): Promise<AppDataAppleAppReviewsTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_reviews/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppReviewsTasksReady(_response);
        });
    }

    protected processAppleAppReviewsTasksReady(response: Response): Promise<AppDataAppleAppReviewsTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppReviewsTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppReviewsTasksReadyResponseInfo | null>(null as any);
    }
    appleAppReviewsTaskGetAdvanced(id: string): Promise<AppDataAppleAppReviewsTaskGetAdvancedResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_reviews/task_get/advanced/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppReviewsTaskGetAdvanced(_response);
        });
    }

    protected processAppleAppReviewsTaskGetAdvanced(response: Response): Promise<AppDataAppleAppReviewsTaskGetAdvancedResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppReviewsTaskGetAdvancedResponseInfo | null>(null as any);
    }
    appleAppListingsCategories(): Promise<AppDataAppleAppListingsCategoriesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_listings/categories";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppListingsCategories(_response);
        });
    }

    protected processAppleAppListingsCategories(response: Response): Promise<AppDataAppleAppListingsCategoriesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppListingsCategoriesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppListingsCategoriesResponseInfo | null>(null as any);
    }
    appleAppListingsSearchLive(body: AppDataAppleAppListingsSearchLiveRequestInfo[]): Promise<AppDataAppleAppListingsSearchLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/app_data/apple/app_listings/search/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.8",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAppleAppListingsSearchLive(_response);
        });
    }

    protected processAppleAppListingsSearchLive(response: Response): Promise<AppDataAppleAppListingsSearchLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? AppDataAppleAppListingsSearchLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<AppDataAppleAppListingsSearchLiveResponseInfo | null>(null as any);
    }
}