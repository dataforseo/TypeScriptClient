import { ContentAnalysisIdListRequestInfo } from "./../models/ContentAnalysisIdListRequestInfo";
import { ContentAnalysisIdListResponseInfo } from "./../models/ContentAnalysisIdListResponseInfo";
import { ContentAnalysisAvailableFiltersResponseInfo } from "./../models/ContentAnalysisAvailableFiltersResponseInfo";
import { ContentAnalysisLocationsResponseInfo } from "./../models/ContentAnalysisLocationsResponseInfo";
import { ContentAnalysisLanguagesResponseInfo } from "./../models/ContentAnalysisLanguagesResponseInfo";
import { ContentAnalysisCategoriesResponseInfo } from "./../models/ContentAnalysisCategoriesResponseInfo";
import { ContentAnalysisSearchLiveRequestInfo } from "./../models/ContentAnalysisSearchLiveRequestInfo";
import { ContentAnalysisSearchLiveResponseInfo } from "./../models/ContentAnalysisSearchLiveResponseInfo";
import { ContentAnalysisSummaryLiveRequestInfo } from "./../models/ContentAnalysisSummaryLiveRequestInfo";
import { ContentAnalysisSummaryLiveResponseInfo } from "./../models/ContentAnalysisSummaryLiveResponseInfo";
import { ContentAnalysisSentimentAnalysisLiveRequestInfo } from "./../models/ContentAnalysisSentimentAnalysisLiveRequestInfo";
import { ContentAnalysisSentimentAnalysisLiveResponseInfo } from "./../models/ContentAnalysisSentimentAnalysisLiveResponseInfo";
import { ContentAnalysisRatingDistributionLiveRequestInfo } from "./../models/ContentAnalysisRatingDistributionLiveRequestInfo";
import { ContentAnalysisRatingDistributionLiveResponseInfo } from "./../models/ContentAnalysisRatingDistributionLiveResponseInfo";
import { ContentAnalysisPhraseTrendsLiveRequestInfo } from "./../models/ContentAnalysisPhraseTrendsLiveRequestInfo";
import { ContentAnalysisPhraseTrendsLiveResponseInfo } from "./../models/ContentAnalysisPhraseTrendsLiveResponseInfo";
import { ContentAnalysisCategoryTrendsLiveRequestInfo } from "./../models/ContentAnalysisCategoryTrendsLiveRequestInfo";
import { ContentAnalysisCategoryTrendsLiveResponseInfo } from "./../models/ContentAnalysisCategoryTrendsLiveResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class ContentAnalysisApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    contentAnalysisIdList(body: ContentAnalysisIdListRequestInfo[]): Promise<ContentAnalysisIdListResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/id_list";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentAnalysisIdList(_response);
        });
    }

    protected processContentAnalysisIdList(response: Response): Promise<ContentAnalysisIdListResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisIdListResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisIdListResponseInfo | null>(null as any);
    }
    contentAnalysisAvailableFilters(): Promise<ContentAnalysisAvailableFiltersResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/available_filters";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentAnalysisAvailableFilters(_response);
        });
    }

    protected processContentAnalysisAvailableFilters(response: Response): Promise<ContentAnalysisAvailableFiltersResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisAvailableFiltersResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisAvailableFiltersResponseInfo | null>(null as any);
    }
    contentAnalysisLocations(): Promise<ContentAnalysisLocationsResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/locations";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentAnalysisLocations(_response);
        });
    }

    protected processContentAnalysisLocations(response: Response): Promise<ContentAnalysisLocationsResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisLocationsResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisLocationsResponseInfo | null>(null as any);
    }
    contentAnalysisLanguages(): Promise<ContentAnalysisLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentAnalysisLanguages(_response);
        });
    }

    protected processContentAnalysisLanguages(response: Response): Promise<ContentAnalysisLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisLanguagesResponseInfo | null>(null as any);
    }
    contentAnalysisCategories(): Promise<ContentAnalysisCategoriesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/categories";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentAnalysisCategories(_response);
        });
    }

    protected processContentAnalysisCategories(response: Response): Promise<ContentAnalysisCategoriesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisCategoriesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisCategoriesResponseInfo | null>(null as any);
    }
    searchLive(body: ContentAnalysisSearchLiveRequestInfo[]): Promise<ContentAnalysisSearchLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/search/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSearchLive(_response);
        });
    }

    protected processSearchLive(response: Response): Promise<ContentAnalysisSearchLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisSearchLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisSearchLiveResponseInfo | null>(null as any);
    }
    contentAnalysisSummaryLive(body: ContentAnalysisSummaryLiveRequestInfo[]): Promise<ContentAnalysisSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/summary/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentAnalysisSummaryLive(_response);
        });
    }

    protected processContentAnalysisSummaryLive(response: Response): Promise<ContentAnalysisSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisSummaryLiveResponseInfo | null>(null as any);
    }
    sentimentAnalysisLive(body: ContentAnalysisSentimentAnalysisLiveRequestInfo[]): Promise<ContentAnalysisSentimentAnalysisLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/sentiment_analysis/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processSentimentAnalysisLive(_response);
        });
    }

    protected processSentimentAnalysisLive(response: Response): Promise<ContentAnalysisSentimentAnalysisLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisSentimentAnalysisLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisSentimentAnalysisLiveResponseInfo | null>(null as any);
    }
    ratingDistributionLive(body: ContentAnalysisRatingDistributionLiveRequestInfo[]): Promise<ContentAnalysisRatingDistributionLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/rating_distribution/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRatingDistributionLive(_response);
        });
    }

    protected processRatingDistributionLive(response: Response): Promise<ContentAnalysisRatingDistributionLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisRatingDistributionLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisRatingDistributionLiveResponseInfo | null>(null as any);
    }
    phraseTrendsLive(body: ContentAnalysisPhraseTrendsLiveRequestInfo[]): Promise<ContentAnalysisPhraseTrendsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/phrase_trends/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processPhraseTrendsLive(_response);
        });
    }

    protected processPhraseTrendsLive(response: Response): Promise<ContentAnalysisPhraseTrendsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisPhraseTrendsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisPhraseTrendsLiveResponseInfo | null>(null as any);
    }
    categoryTrendsLive(body: ContentAnalysisCategoryTrendsLiveRequestInfo[]): Promise<ContentAnalysisCategoryTrendsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_analysis/category_trends/live";
        url_ = url_.replace(/[?&]$/, "");
        const content_ = JSON.stringify(body);
        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };
        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCategoryTrendsLive(_response);
        });
    }

    protected processCategoryTrendsLive(response: Response): Promise<ContentAnalysisCategoryTrendsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentAnalysisCategoryTrendsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentAnalysisCategoryTrendsLiveResponseInfo | null>(null as any);
    }
}