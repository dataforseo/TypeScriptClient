import { BacklinksIdListRequestInfo } from "./../models/BacklinksIdListRequestInfo";
import { BacklinksIdListResponseInfo } from "./../models/BacklinksIdListResponseInfo";
import { BacklinksErrorsRequestInfo } from "./../models/BacklinksErrorsRequestInfo";
import { BacklinksErrorsResponseInfo } from "./../models/BacklinksErrorsResponseInfo";
import { BacklinksAvailableFiltersResponseInfo } from "./../models/BacklinksAvailableFiltersResponseInfo";
import { BacklinksIndexResponseInfo } from "./../models/BacklinksIndexResponseInfo";
import { BacklinksSummaryLiveRequestInfo } from "./../models/BacklinksSummaryLiveRequestInfo";
import { BacklinksSummaryLiveResponseInfo } from "./../models/BacklinksSummaryLiveResponseInfo";
import { BacklinksHistoryLiveRequestInfo } from "./../models/BacklinksHistoryLiveRequestInfo";
import { BacklinksHistoryLiveResponseInfo } from "./../models/BacklinksHistoryLiveResponseInfo";
import { BacklinksBacklinksLiveRequestInfo } from "./../models/BacklinksBacklinksLiveRequestInfo";
import { BacklinksBacklinksLiveResponseInfo } from "./../models/BacklinksBacklinksLiveResponseInfo";
import { BacklinksAnchorsLiveRequestInfo } from "./../models/BacklinksAnchorsLiveRequestInfo";
import { BacklinksAnchorsLiveResponseInfo } from "./../models/BacklinksAnchorsLiveResponseInfo";
import { BacklinksDomainPagesLiveRequestInfo } from "./../models/BacklinksDomainPagesLiveRequestInfo";
import { BacklinksDomainPagesLiveResponseInfo } from "./../models/BacklinksDomainPagesLiveResponseInfo";
import { BacklinksDomainPagesSummaryLiveRequestInfo } from "./../models/BacklinksDomainPagesSummaryLiveRequestInfo";
import { BacklinksDomainPagesSummaryLiveResponseInfo } from "./../models/BacklinksDomainPagesSummaryLiveResponseInfo";
import { BacklinksReferringDomainsLiveRequestInfo } from "./../models/BacklinksReferringDomainsLiveRequestInfo";
import { BacklinksReferringDomainsLiveResponseInfo } from "./../models/BacklinksReferringDomainsLiveResponseInfo";
import { BacklinksReferringNetworksLiveRequestInfo } from "./../models/BacklinksReferringNetworksLiveRequestInfo";
import { BacklinksReferringNetworksLiveResponseInfo } from "./../models/BacklinksReferringNetworksLiveResponseInfo";
import { BacklinksCompetitorsLiveRequestInfo } from "./../models/BacklinksCompetitorsLiveRequestInfo";
import { BacklinksCompetitorsLiveResponseInfo } from "./../models/BacklinksCompetitorsLiveResponseInfo";
import { BacklinksDomainIntersectionLiveRequestInfo } from "./../models/BacklinksDomainIntersectionLiveRequestInfo";
import { BacklinksDomainIntersectionLiveResponseInfo } from "./../models/BacklinksDomainIntersectionLiveResponseInfo";
import { BacklinksPageIntersectionLiveRequestInfo } from "./../models/BacklinksPageIntersectionLiveRequestInfo";
import { BacklinksPageIntersectionLiveResponseInfo } from "./../models/BacklinksPageIntersectionLiveResponseInfo";
import { BacklinksTimeseriesSummaryLiveRequestInfo } from "./../models/BacklinksTimeseriesSummaryLiveRequestInfo";
import { BacklinksTimeseriesSummaryLiveResponseInfo } from "./../models/BacklinksTimeseriesSummaryLiveResponseInfo";
import { BacklinksTimeseriesNewLostSummaryLiveRequestInfo } from "./../models/BacklinksTimeseriesNewLostSummaryLiveRequestInfo";
import { BacklinksTimeseriesNewLostSummaryLiveResponseInfo } from "./../models/BacklinksTimeseriesNewLostSummaryLiveResponseInfo";
import { BacklinksBulkRanksLiveRequestInfo } from "./../models/BacklinksBulkRanksLiveRequestInfo";
import { BacklinksBulkRanksLiveResponseInfo } from "./../models/BacklinksBulkRanksLiveResponseInfo";
import { BacklinksBulkBacklinksLiveRequestInfo } from "./../models/BacklinksBulkBacklinksLiveRequestInfo";
import { BacklinksBulkBacklinksLiveResponseInfo } from "./../models/BacklinksBulkBacklinksLiveResponseInfo";
import { BacklinksBulkSpamScoreLiveRequestInfo } from "./../models/BacklinksBulkSpamScoreLiveRequestInfo";
import { BacklinksBulkSpamScoreLiveResponseInfo } from "./../models/BacklinksBulkSpamScoreLiveResponseInfo";
import { BacklinksBulkReferringDomainsLiveRequestInfo } from "./../models/BacklinksBulkReferringDomainsLiveRequestInfo";
import { BacklinksBulkReferringDomainsLiveResponseInfo } from "./../models/BacklinksBulkReferringDomainsLiveResponseInfo";
import { BacklinksBulkNewLostBacklinksLiveRequestInfo } from "./../models/BacklinksBulkNewLostBacklinksLiveRequestInfo";
import { BacklinksBulkNewLostBacklinksLiveResponseInfo } from "./../models/BacklinksBulkNewLostBacklinksLiveResponseInfo";
import { BacklinksBulkNewLostReferringDomainsLiveRequestInfo } from "./../models/BacklinksBulkNewLostReferringDomainsLiveRequestInfo";
import { BacklinksBulkNewLostReferringDomainsLiveResponseInfo } from "./../models/BacklinksBulkNewLostReferringDomainsLiveResponseInfo";
import { BacklinksBulkPagesSummaryLiveRequestInfo } from "./../models/BacklinksBulkPagesSummaryLiveRequestInfo";
import { BacklinksBulkPagesSummaryLiveResponseInfo } from "./../models/BacklinksBulkPagesSummaryLiveResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class BacklinksApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    backlinksIdList(body: BacklinksIdListRequestInfo[]): Promise<BacklinksIdListResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/id_list";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBacklinksIdList(_response);
        });
    }

    protected processBacklinksIdList(response: Response): Promise<BacklinksIdListResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksIdListResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksIdListResponseInfo | null>(null as any);
    }
    backlinksErrors(body: BacklinksErrorsRequestInfo[]): Promise<BacklinksErrorsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/errors";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBacklinksErrors(_response);
        });
    }

    protected processBacklinksErrors(response: Response): Promise<BacklinksErrorsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksErrorsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksErrorsResponseInfo | null>(null as any);
    }
    backlinksAvailableFilters(): Promise<BacklinksAvailableFiltersResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/available_filters";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBacklinksAvailableFilters(_response);
        });
    }

    protected processBacklinksAvailableFilters(response: Response): Promise<BacklinksAvailableFiltersResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksAvailableFiltersResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksAvailableFiltersResponseInfo | null>(null as any);
    }
    index(): Promise<BacklinksIndexResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/index";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processIndex(_response);
        });
    }

    protected processIndex(response: Response): Promise<BacklinksIndexResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksIndexResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksIndexResponseInfo | null>(null as any);
    }
    summaryLive(body: BacklinksSummaryLiveRequestInfo[]): Promise<BacklinksSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/summary/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSummaryLive(_response);
        });
    }

    protected processSummaryLive(response: Response): Promise<BacklinksSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksSummaryLiveResponseInfo | null>(null as any);
    }
    historyLive(body: BacklinksHistoryLiveRequestInfo[]): Promise<BacklinksHistoryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/history/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processHistoryLive(_response);
        });
    }

    protected processHistoryLive(response: Response): Promise<BacklinksHistoryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksHistoryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksHistoryLiveResponseInfo | null>(null as any);
    }
    backlinksLive(body: BacklinksBacklinksLiveRequestInfo[]): Promise<BacklinksBacklinksLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/backlinks/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBacklinksLive(_response);
        });
    }

    protected processBacklinksLive(response: Response): Promise<BacklinksBacklinksLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBacklinksLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBacklinksLiveResponseInfo | null>(null as any);
    }
    anchorsLive(body: BacklinksAnchorsLiveRequestInfo[]): Promise<BacklinksAnchorsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/anchors/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processAnchorsLive(_response);
        });
    }

    protected processAnchorsLive(response: Response): Promise<BacklinksAnchorsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksAnchorsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksAnchorsLiveResponseInfo | null>(null as any);
    }
    domainPagesLive(body: BacklinksDomainPagesLiveRequestInfo[]): Promise<BacklinksDomainPagesLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/domain_pages/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDomainPagesLive(_response);
        });
    }

    protected processDomainPagesLive(response: Response): Promise<BacklinksDomainPagesLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksDomainPagesLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksDomainPagesLiveResponseInfo | null>(null as any);
    }
    domainPagesSummaryLive(body: BacklinksDomainPagesSummaryLiveRequestInfo[]): Promise<BacklinksDomainPagesSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/domain_pages_summary/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDomainPagesSummaryLive(_response);
        });
    }

    protected processDomainPagesSummaryLive(response: Response): Promise<BacklinksDomainPagesSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksDomainPagesSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksDomainPagesSummaryLiveResponseInfo | null>(null as any);
    }
    referringDomainsLive(body: BacklinksReferringDomainsLiveRequestInfo[]): Promise<BacklinksReferringDomainsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/referring_domains/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processReferringDomainsLive(_response);
        });
    }

    protected processReferringDomainsLive(response: Response): Promise<BacklinksReferringDomainsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksReferringDomainsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksReferringDomainsLiveResponseInfo | null>(null as any);
    }
    referringNetworksLive(body: BacklinksReferringNetworksLiveRequestInfo[]): Promise<BacklinksReferringNetworksLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/referring_networks/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processReferringNetworksLive(_response);
        });
    }

    protected processReferringNetworksLive(response: Response): Promise<BacklinksReferringNetworksLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksReferringNetworksLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksReferringNetworksLiveResponseInfo | null>(null as any);
    }
    competitorsLive(body: BacklinksCompetitorsLiveRequestInfo[]): Promise<BacklinksCompetitorsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/competitors/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCompetitorsLive(_response);
        });
    }

    protected processCompetitorsLive(response: Response): Promise<BacklinksCompetitorsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksCompetitorsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksCompetitorsLiveResponseInfo | null>(null as any);
    }
    domainIntersectionLive(body: BacklinksDomainIntersectionLiveRequestInfo[]): Promise<BacklinksDomainIntersectionLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/domain_intersection/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDomainIntersectionLive(_response);
        });
    }

    protected processDomainIntersectionLive(response: Response): Promise<BacklinksDomainIntersectionLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksDomainIntersectionLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksDomainIntersectionLiveResponseInfo | null>(null as any);
    }
    pageIntersectionLive(body: BacklinksPageIntersectionLiveRequestInfo[]): Promise<BacklinksPageIntersectionLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/page_intersection/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPageIntersectionLive(_response);
        });
    }

    protected processPageIntersectionLive(response: Response): Promise<BacklinksPageIntersectionLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksPageIntersectionLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksPageIntersectionLiveResponseInfo | null>(null as any);
    }
    timeseriesSummaryLive(body: BacklinksTimeseriesSummaryLiveRequestInfo[]): Promise<BacklinksTimeseriesSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/timeseries_summary/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTimeseriesSummaryLive(_response);
        });
    }

    protected processTimeseriesSummaryLive(response: Response): Promise<BacklinksTimeseriesSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksTimeseriesSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksTimeseriesSummaryLiveResponseInfo | null>(null as any);
    }
    timeseriesNewLostSummaryLive(body: BacklinksTimeseriesNewLostSummaryLiveRequestInfo[]): Promise<BacklinksTimeseriesNewLostSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/timeseries_new_lost_summary/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTimeseriesNewLostSummaryLive(_response);
        });
    }

    protected processTimeseriesNewLostSummaryLive(response: Response): Promise<BacklinksTimeseriesNewLostSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksTimeseriesNewLostSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksTimeseriesNewLostSummaryLiveResponseInfo | null>(null as any);
    }
    bulkRanksLive(body: BacklinksBulkRanksLiveRequestInfo[]): Promise<BacklinksBulkRanksLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/bulk_ranks/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBulkRanksLive(_response);
        });
    }

    protected processBulkRanksLive(response: Response): Promise<BacklinksBulkRanksLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBulkRanksLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBulkRanksLiveResponseInfo | null>(null as any);
    }
    bulkBacklinksLive(body: BacklinksBulkBacklinksLiveRequestInfo[]): Promise<BacklinksBulkBacklinksLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/bulk_backlinks/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBulkBacklinksLive(_response);
        });
    }

    protected processBulkBacklinksLive(response: Response): Promise<BacklinksBulkBacklinksLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBulkBacklinksLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBulkBacklinksLiveResponseInfo | null>(null as any);
    }
    bulkSpamScoreLive(body: BacklinksBulkSpamScoreLiveRequestInfo[]): Promise<BacklinksBulkSpamScoreLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/bulk_spam_score/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBulkSpamScoreLive(_response);
        });
    }

    protected processBulkSpamScoreLive(response: Response): Promise<BacklinksBulkSpamScoreLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBulkSpamScoreLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBulkSpamScoreLiveResponseInfo | null>(null as any);
    }
    bulkReferringDomainsLive(body: BacklinksBulkReferringDomainsLiveRequestInfo[]): Promise<BacklinksBulkReferringDomainsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/bulk_referring_domains/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBulkReferringDomainsLive(_response);
        });
    }

    protected processBulkReferringDomainsLive(response: Response): Promise<BacklinksBulkReferringDomainsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBulkReferringDomainsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBulkReferringDomainsLiveResponseInfo | null>(null as any);
    }
    bulkNewLostBacklinksLive(body: BacklinksBulkNewLostBacklinksLiveRequestInfo[]): Promise<BacklinksBulkNewLostBacklinksLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/bulk_new_lost_backlinks/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBulkNewLostBacklinksLive(_response);
        });
    }

    protected processBulkNewLostBacklinksLive(response: Response): Promise<BacklinksBulkNewLostBacklinksLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBulkNewLostBacklinksLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBulkNewLostBacklinksLiveResponseInfo | null>(null as any);
    }
    bulkNewLostReferringDomainsLive(body: BacklinksBulkNewLostReferringDomainsLiveRequestInfo[]): Promise<BacklinksBulkNewLostReferringDomainsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/bulk_new_lost_referring_domains/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBulkNewLostReferringDomainsLive(_response);
        });
    }

    protected processBulkNewLostReferringDomainsLive(response: Response): Promise<BacklinksBulkNewLostReferringDomainsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBulkNewLostReferringDomainsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBulkNewLostReferringDomainsLiveResponseInfo | null>(null as any);
    }
    bulkPagesSummaryLive(body: BacklinksBulkPagesSummaryLiveRequestInfo[]): Promise<BacklinksBulkPagesSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/backlinks/bulk_pages_summary/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.22",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processBulkPagesSummaryLive(_response);
        });
    }

    protected processBulkPagesSummaryLive(response: Response): Promise<BacklinksBulkPagesSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? BacklinksBulkPagesSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<BacklinksBulkPagesSummaryLiveResponseInfo | null>(null as any);
    }
}