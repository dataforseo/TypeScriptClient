import { DomainAnalyticsIdListRequestInfo } from "./../models/DomainAnalyticsIdListRequestInfo";
import { DomainAnalyticsIdListResponseInfo } from "./../models/DomainAnalyticsIdListResponseInfo";
import { DomainAnalyticsErrorsRequestInfo } from "./../models/DomainAnalyticsErrorsRequestInfo";
import { DomainAnalyticsErrorsResponseInfo } from "./../models/DomainAnalyticsErrorsResponseInfo";
import { DomainAnalyticsTechnologiesAvailableFiltersResponseInfo } from "./../models/DomainAnalyticsTechnologiesAvailableFiltersResponseInfo";
import { DomainAnalyticsTechnologiesLocationsResponseInfo } from "./../models/DomainAnalyticsTechnologiesLocationsResponseInfo";
import { DomainAnalyticsTechnologiesLanguagesResponseInfo } from "./../models/DomainAnalyticsTechnologiesLanguagesResponseInfo";
import { DomainAnalyticsTechnologiesTechnologiesResponseInfo } from "./../models/DomainAnalyticsTechnologiesTechnologiesResponseInfo";
import { DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo } from "./../models/DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo";
import { DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo } from "./../models/DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo";
import { DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo } from "./../models/DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo";
import { DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo } from "./../models/DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo";
import { DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo } from "./../models/DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo";
import { DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo } from "./../models/DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo";
import { DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo } from "./../models/DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo";
import { DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo } from "./../models/DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo";
import { DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo } from "./../models/DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo";
import { DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo } from "./../models/DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo";
import { DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo } from "./../models/DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo";
import { DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo } from "./../models/DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo";
import { DomainAnalyticsWhoisAvailableFiltersResponseInfo } from "./../models/DomainAnalyticsWhoisAvailableFiltersResponseInfo";
import { DomainAnalyticsWhoisOverviewLiveRequestInfo } from "./../models/DomainAnalyticsWhoisOverviewLiveRequestInfo";
import { DomainAnalyticsWhoisOverviewLiveResponseInfo } from "./../models/DomainAnalyticsWhoisOverviewLiveResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class DomainAnalyticsApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    domainAnalyticsIdList(body: DomainAnalyticsIdListRequestInfo[]): Promise<DomainAnalyticsIdListResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/id_list";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDomainAnalyticsIdList(_response);
        });
    }

    protected processDomainAnalyticsIdList(response: Response): Promise<DomainAnalyticsIdListResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsIdListResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsIdListResponseInfo | null>(null as any);
    }
    domainAnalyticsErrors(body: DomainAnalyticsErrorsRequestInfo[]): Promise<DomainAnalyticsErrorsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/errors";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDomainAnalyticsErrors(_response);
        });
    }

    protected processDomainAnalyticsErrors(response: Response): Promise<DomainAnalyticsErrorsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsErrorsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsErrorsResponseInfo | null>(null as any);
    }
    technologiesAvailableFilters(): Promise<DomainAnalyticsTechnologiesAvailableFiltersResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/available_filters";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesAvailableFilters(_response);
        });
    }

    protected processTechnologiesAvailableFilters(response: Response): Promise<DomainAnalyticsTechnologiesAvailableFiltersResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesAvailableFiltersResponseInfo | null>(null as any);
    }
    technologiesLocations(): Promise<DomainAnalyticsTechnologiesLocationsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/locations";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesLocations(_response);
        });
    }

    protected processTechnologiesLocations(response: Response): Promise<DomainAnalyticsTechnologiesLocationsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesLocationsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesLocationsResponseInfo | null>(null as any);
    }
    technologiesLanguages(): Promise<DomainAnalyticsTechnologiesLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesLanguages(_response);
        });
    }

    protected processTechnologiesLanguages(response: Response): Promise<DomainAnalyticsTechnologiesLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesLanguagesResponseInfo | null>(null as any);
    }
    technologiesTechnologies(): Promise<DomainAnalyticsTechnologiesTechnologiesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/technologies";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesTechnologies(_response);
        });
    }

    protected processTechnologiesTechnologies(response: Response): Promise<DomainAnalyticsTechnologiesTechnologiesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesTechnologiesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesTechnologiesResponseInfo | null>(null as any);
    }
    technologiesAggregationTechnologiesLive(body: DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo[]): Promise<DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/aggregation_technologies/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesAggregationTechnologiesLive(_response);
        });
    }

    protected processTechnologiesAggregationTechnologiesLive(response: Response): Promise<DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo | null>(null as any);
    }
    technologiesTechnologiesSummaryLive(body: DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo[]): Promise<DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/technologies_summary/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesTechnologiesSummaryLive(_response);
        });
    }

    protected processTechnologiesTechnologiesSummaryLive(response: Response): Promise<DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo | null>(null as any);
    }
    technologiesTechnologyStatsLive(body: DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo[]): Promise<DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/technology_stats/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesTechnologyStatsLive(_response);
        });
    }

    protected processTechnologiesTechnologyStatsLive(response: Response): Promise<DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo | null>(null as any);
    }
    technologiesDomainsByTechnologyLive(body: DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo[]): Promise<DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/domains_by_technology/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesDomainsByTechnologyLive(_response);
        });
    }

    protected processTechnologiesDomainsByTechnologyLive(response: Response): Promise<DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo | null>(null as any);
    }
    technologiesDomainsByHtmlTermsLive(body: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo[]): Promise<DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/domains_by_html_terms/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesDomainsByHtmlTermsLive(_response);
        });
    }

    protected processTechnologiesDomainsByHtmlTermsLive(response: Response): Promise<DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo | null>(null as any);
    }
    technologiesDomainTechnologiesLive(body: DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo[]): Promise<DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/technologies/domain_technologies/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processTechnologiesDomainTechnologiesLive(_response);
        });
    }

    protected processTechnologiesDomainTechnologiesLive(response: Response): Promise<DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo | null>(null as any);
    }
    whoisAvailableFilters(): Promise<DomainAnalyticsWhoisAvailableFiltersResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/whois/available_filters";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processWhoisAvailableFilters(_response);
        });
    }

    protected processWhoisAvailableFilters(response: Response): Promise<DomainAnalyticsWhoisAvailableFiltersResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsWhoisAvailableFiltersResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsWhoisAvailableFiltersResponseInfo | null>(null as any);
    }
    whoisOverviewLive(body: DomainAnalyticsWhoisOverviewLiveRequestInfo[]): Promise<DomainAnalyticsWhoisOverviewLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/domain_analytics/whois/overview/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.17",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processWhoisOverviewLive(_response);
        });
    }

    protected processWhoisOverviewLive(response: Response): Promise<DomainAnalyticsWhoisOverviewLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? DomainAnalyticsWhoisOverviewLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DomainAnalyticsWhoisOverviewLiveResponseInfo | null>(null as any);
    }
}