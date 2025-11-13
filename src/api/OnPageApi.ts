import { OnPageIdListRequestInfo } from "./../models/OnPageIdListRequestInfo";
import { OnPageIdListResponseInfo } from "./../models/OnPageIdListResponseInfo";
import { OnPageErrorsRequestInfo } from "./../models/OnPageErrorsRequestInfo";
import { OnPageErrorsResponseInfo } from "./../models/OnPageErrorsResponseInfo";
import { OnPageForceStopRequestInfo } from "./../models/OnPageForceStopRequestInfo";
import { OnPageForceStopResponseInfo } from "./../models/OnPageForceStopResponseInfo";
import { OnPageAvailableFiltersResponseInfo } from "./../models/OnPageAvailableFiltersResponseInfo";
import { OnPageTaskPostRequestInfo } from "./../models/OnPageTaskPostRequestInfo";
import { OnPageTaskPostResponseInfo } from "./../models/OnPageTaskPostResponseInfo";
import { OnPageTasksReadyResponseInfo } from "./../models/OnPageTasksReadyResponseInfo";
import { OnPageSummaryResponseInfo } from "./../models/OnPageSummaryResponseInfo";
import { OnPagePagesRequestInfo } from "./../models/OnPagePagesRequestInfo";
import { OnPagePagesResponseInfo } from "./../models/OnPagePagesResponseInfo";
import { OnPagePagesByResourceRequestInfo } from "./../models/OnPagePagesByResourceRequestInfo";
import { OnPagePagesByResourceResponseInfo } from "./../models/OnPagePagesByResourceResponseInfo";
import { OnPageResourcesRequestInfo } from "./../models/OnPageResourcesRequestInfo";
import { OnPageResourcesResponseInfo } from "./../models/OnPageResourcesResponseInfo";
import { OnPageDuplicateTagsRequestInfo } from "./../models/OnPageDuplicateTagsRequestInfo";
import { OnPageDuplicateTagsResponseInfo } from "./../models/OnPageDuplicateTagsResponseInfo";
import { OnPageDuplicateContentRequestInfo } from "./../models/OnPageDuplicateContentRequestInfo";
import { OnPageDuplicateContentResponseInfo } from "./../models/OnPageDuplicateContentResponseInfo";
import { OnPageLinksRequestInfo } from "./../models/OnPageLinksRequestInfo";
import { OnPageLinksResponseInfo } from "./../models/OnPageLinksResponseInfo";
import { OnPageRedirectChainsRequestInfo } from "./../models/OnPageRedirectChainsRequestInfo";
import { OnPageRedirectChainsResponseInfo } from "./../models/OnPageRedirectChainsResponseInfo";
import { OnPageNonIndexableRequestInfo } from "./../models/OnPageNonIndexableRequestInfo";
import { OnPageNonIndexableResponseInfo } from "./../models/OnPageNonIndexableResponseInfo";
import { OnPageWaterfallRequestInfo } from "./../models/OnPageWaterfallRequestInfo";
import { OnPageWaterfallResponseInfo } from "./../models/OnPageWaterfallResponseInfo";
import { OnPageKeywordDensityRequestInfo } from "./../models/OnPageKeywordDensityRequestInfo";
import { OnPageKeywordDensityResponseInfo } from "./../models/OnPageKeywordDensityResponseInfo";
import { OnPageMicrodataRequestInfo } from "./../models/OnPageMicrodataRequestInfo";
import { OnPageMicrodataResponseInfo } from "./../models/OnPageMicrodataResponseInfo";
import { OnPageRawHtmlRequestInfo } from "./../models/OnPageRawHtmlRequestInfo";
import { OnPageRawHtmlResponseInfo } from "./../models/OnPageRawHtmlResponseInfo";
import { OnPagePageScreenshotRequestInfo } from "./../models/OnPagePageScreenshotRequestInfo";
import { OnPagePageScreenshotResponseInfo } from "./../models/OnPagePageScreenshotResponseInfo";
import { OnPageContentParsingRequestInfo } from "./../models/OnPageContentParsingRequestInfo";
import { OnPageContentParsingResponseInfo } from "./../models/OnPageContentParsingResponseInfo";
import { OnPageContentParsingLiveRequestInfo } from "./../models/OnPageContentParsingLiveRequestInfo";
import { OnPageContentParsingLiveResponseInfo } from "./../models/OnPageContentParsingLiveResponseInfo";
import { OnPageInstantPagesRequestInfo } from "./../models/OnPageInstantPagesRequestInfo";
import { OnPageInstantPagesResponseInfo } from "./../models/OnPageInstantPagesResponseInfo";
import { OnPageLighthouseLanguagesResponseInfo } from "./../models/OnPageLighthouseLanguagesResponseInfo";
import { OnPageLighthouseAuditsResponseInfo } from "./../models/OnPageLighthouseAuditsResponseInfo";
import { OnPageLighthouseVersionsResponseInfo } from "./../models/OnPageLighthouseVersionsResponseInfo";
import { OnPageLighthouseTaskPostRequestInfo } from "./../models/OnPageLighthouseTaskPostRequestInfo";
import { OnPageLighthouseTaskPostResponseInfo } from "./../models/OnPageLighthouseTaskPostResponseInfo";
import { OnPageLighthouseTasksReadyResponseInfo } from "./../models/OnPageLighthouseTasksReadyResponseInfo";
import { OnPageLighthouseTaskGetJsonResponseInfo } from "./../models/OnPageLighthouseTaskGetJsonResponseInfo";
import { OnPageLighthouseLiveJsonRequestInfo } from "./../models/OnPageLighthouseLiveJsonRequestInfo";
import { OnPageLighthouseLiveJsonResponseInfo } from "./../models/OnPageLighthouseLiveJsonResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class OnPageApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    onPageIdList(body: OnPageIdListRequestInfo[]): Promise<OnPageIdListResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/id_list";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processOnPageIdList(_response);
        });
    }

    protected processOnPageIdList(response: Response): Promise<OnPageIdListResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageIdListResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageIdListResponseInfo | null>(null as any);
    }
    onPageErrors(body: OnPageErrorsRequestInfo[]): Promise<OnPageErrorsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/errors";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processOnPageErrors(_response);
        });
    }

    protected processOnPageErrors(response: Response): Promise<OnPageErrorsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageErrorsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageErrorsResponseInfo | null>(null as any);
    }
    forceStop(body: OnPageForceStopRequestInfo[]): Promise<OnPageForceStopResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/force_stop";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processForceStop(_response);
        });
    }

    protected processForceStop(response: Response): Promise<OnPageForceStopResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageForceStopResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageForceStopResponseInfo | null>(null as any);
    }
    onPageAvailableFilters(): Promise<OnPageAvailableFiltersResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/available_filters";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processOnPageAvailableFilters(_response);
        });
    }

    protected processOnPageAvailableFilters(response: Response): Promise<OnPageAvailableFiltersResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageAvailableFiltersResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageAvailableFiltersResponseInfo | null>(null as any);
    }
    taskPost(body: OnPageTaskPostRequestInfo[]): Promise<OnPageTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTaskPost(_response);
        });
    }

    protected processTaskPost(response: Response): Promise<OnPageTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageTaskPostResponseInfo | null>(null as any);
    }
    onPageTasksReady(): Promise<OnPageTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processOnPageTasksReady(_response);
        });
    }

    protected processOnPageTasksReady(response: Response): Promise<OnPageTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageTasksReadyResponseInfo | null>(null as any);
    }
    summary(id: string): Promise<OnPageSummaryResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/summary/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSummary(_response);
        });
    }

    protected processSummary(response: Response): Promise<OnPageSummaryResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageSummaryResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageSummaryResponseInfo | null>(null as any);
    }
    pages(body: OnPagePagesRequestInfo[]): Promise<OnPagePagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/pages";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPages(_response);
        });
    }

    protected processPages(response: Response): Promise<OnPagePagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPagePagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPagePagesResponseInfo | null>(null as any);
    }
    pagesByResource(body: OnPagePagesByResourceRequestInfo[]): Promise<OnPagePagesByResourceResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/pages_by_resource";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPagesByResource(_response);
        });
    }

    protected processPagesByResource(response: Response): Promise<OnPagePagesByResourceResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPagePagesByResourceResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPagePagesByResourceResponseInfo | null>(null as any);
    }
    resources(body: OnPageResourcesRequestInfo[]): Promise<OnPageResourcesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/resources";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processResources(_response);
        });
    }

    protected processResources(response: Response): Promise<OnPageResourcesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageResourcesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageResourcesResponseInfo | null>(null as any);
    }
    duplicateTags(body: OnPageDuplicateTagsRequestInfo[]): Promise<OnPageDuplicateTagsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/duplicate_tags";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDuplicateTags(_response);
        });
    }

    protected processDuplicateTags(response: Response): Promise<OnPageDuplicateTagsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageDuplicateTagsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageDuplicateTagsResponseInfo | null>(null as any);
    }
    duplicateContent(body: OnPageDuplicateContentRequestInfo[]): Promise<OnPageDuplicateContentResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/duplicate_content";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDuplicateContent(_response);
        });
    }

    protected processDuplicateContent(response: Response): Promise<OnPageDuplicateContentResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageDuplicateContentResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageDuplicateContentResponseInfo | null>(null as any);
    }
    links(body: OnPageLinksRequestInfo[]): Promise<OnPageLinksResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/links";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLinks(_response);
        });
    }

    protected processLinks(response: Response): Promise<OnPageLinksResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLinksResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLinksResponseInfo | null>(null as any);
    }
    redirectChains(body: OnPageRedirectChainsRequestInfo[]): Promise<OnPageRedirectChainsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/redirect_chains";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRedirectChains(_response);
        });
    }

    protected processRedirectChains(response: Response): Promise<OnPageRedirectChainsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageRedirectChainsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageRedirectChainsResponseInfo | null>(null as any);
    }
    nonIndexable(body: OnPageNonIndexableRequestInfo[]): Promise<OnPageNonIndexableResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/non_indexable";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processNonIndexable(_response);
        });
    }

    protected processNonIndexable(response: Response): Promise<OnPageNonIndexableResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageNonIndexableResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageNonIndexableResponseInfo | null>(null as any);
    }
    waterfall(body: OnPageWaterfallRequestInfo[]): Promise<OnPageWaterfallResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/waterfall";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processWaterfall(_response);
        });
    }

    protected processWaterfall(response: Response): Promise<OnPageWaterfallResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageWaterfallResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageWaterfallResponseInfo | null>(null as any);
    }
    keywordDensity(body: OnPageKeywordDensityRequestInfo[]): Promise<OnPageKeywordDensityResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/keyword_density";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processKeywordDensity(_response);
        });
    }

    protected processKeywordDensity(response: Response): Promise<OnPageKeywordDensityResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageKeywordDensityResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageKeywordDensityResponseInfo | null>(null as any);
    }
    microdata(body: OnPageMicrodataRequestInfo[]): Promise<OnPageMicrodataResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/microdata";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processMicrodata(_response);
        });
    }

    protected processMicrodata(response: Response): Promise<OnPageMicrodataResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageMicrodataResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageMicrodataResponseInfo | null>(null as any);
    }
    rawHtml(body: OnPageRawHtmlRequestInfo[]): Promise<OnPageRawHtmlResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/raw_html";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRawHtml(_response);
        });
    }

    protected processRawHtml(response: Response): Promise<OnPageRawHtmlResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageRawHtmlResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageRawHtmlResponseInfo | null>(null as any);
    }
    pageScreenshot(body: OnPagePageScreenshotRequestInfo[]): Promise<OnPagePageScreenshotResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/page_screenshot";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPageScreenshot(_response);
        });
    }

    protected processPageScreenshot(response: Response): Promise<OnPagePageScreenshotResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPagePageScreenshotResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPagePageScreenshotResponseInfo | null>(null as any);
    }
    contentParsing(body: OnPageContentParsingRequestInfo[]): Promise<OnPageContentParsingResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/content_parsing";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentParsing(_response);
        });
    }

    protected processContentParsing(response: Response): Promise<OnPageContentParsingResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageContentParsingResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageContentParsingResponseInfo | null>(null as any);
    }
    contentParsingLive(body: OnPageContentParsingLiveRequestInfo[]): Promise<OnPageContentParsingLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/content_parsing/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentParsingLive(_response);
        });
    }

    protected processContentParsingLive(response: Response): Promise<OnPageContentParsingLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageContentParsingLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageContentParsingLiveResponseInfo | null>(null as any);
    }
    instantPages(body: OnPageInstantPagesRequestInfo[]): Promise<OnPageInstantPagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/instant_pages";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processInstantPages(_response);
        });
    }

    protected processInstantPages(response: Response): Promise<OnPageInstantPagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageInstantPagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageInstantPagesResponseInfo | null>(null as any);
    }
    onPageLighthouseLanguages(): Promise<OnPageLighthouseLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/lighthouse/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processOnPageLighthouseLanguages(_response);
        });
    }

    protected processOnPageLighthouseLanguages(response: Response): Promise<OnPageLighthouseLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLighthouseLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLighthouseLanguagesResponseInfo | null>(null as any);
    }
    lighthouseAudits(): Promise<OnPageLighthouseAuditsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/lighthouse/audits";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLighthouseAudits(_response);
        });
    }

    protected processLighthouseAudits(response: Response): Promise<OnPageLighthouseAuditsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLighthouseAuditsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLighthouseAuditsResponseInfo | null>(null as any);
    }
    lighthouseVersions(): Promise<OnPageLighthouseVersionsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/lighthouse/versions";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLighthouseVersions(_response);
        });
    }

    protected processLighthouseVersions(response: Response): Promise<OnPageLighthouseVersionsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLighthouseVersionsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLighthouseVersionsResponseInfo | null>(null as any);
    }
    lighthouseTaskPost(body: OnPageLighthouseTaskPostRequestInfo[]): Promise<OnPageLighthouseTaskPostResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/lighthouse/task_post";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLighthouseTaskPost(_response);
        });
    }

    protected processLighthouseTaskPost(response: Response): Promise<OnPageLighthouseTaskPostResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLighthouseTaskPostResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLighthouseTaskPostResponseInfo | null>(null as any);
    }
    lighthouseTasksReady(): Promise<OnPageLighthouseTasksReadyResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/lighthouse/tasks_ready";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLighthouseTasksReady(_response);
        });
    }

    protected processLighthouseTasksReady(response: Response): Promise<OnPageLighthouseTasksReadyResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLighthouseTasksReadyResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLighthouseTasksReadyResponseInfo | null>(null as any);
    }
    lighthouseTaskGetJson(id: string): Promise<OnPageLighthouseTaskGetJsonResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/lighthouse/task_get/json/{id}";
        url_ = url_.replace(/[?&]$/, "");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLighthouseTaskGetJson(_response);
        });
    }

    protected processLighthouseTaskGetJson(response: Response): Promise<OnPageLighthouseTaskGetJsonResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLighthouseTaskGetJsonResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLighthouseTaskGetJsonResponseInfo | null>(null as any);
    }
    lighthouseLiveJson(body: OnPageLighthouseLiveJsonRequestInfo[]): Promise<OnPageLighthouseLiveJsonResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/on_page/lighthouse/live/json";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.14",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processLighthouseLiveJson(_response);
        });
    }

    protected processLighthouseLiveJson(response: Response): Promise<OnPageLighthouseLiveJsonResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? OnPageLighthouseLiveJsonResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OnPageLighthouseLiveJsonResponseInfo | null>(null as any);
    }
}