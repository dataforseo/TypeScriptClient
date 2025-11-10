import { ContentGenerationGenerateLiveRequestInfo } from "./../models/ContentGenerationGenerateLiveRequestInfo";
import { ContentGenerationGenerateLiveResponseInfo } from "./../models/ContentGenerationGenerateLiveResponseInfo";
import { ContentGenerationGenerateTextLiveRequestInfo } from "./../models/ContentGenerationGenerateTextLiveRequestInfo";
import { ContentGenerationGenerateTextLiveResponseInfo } from "./../models/ContentGenerationGenerateTextLiveResponseInfo";
import { ContentGenerationGenerateMetaTagsLiveRequestInfo } from "./../models/ContentGenerationGenerateMetaTagsLiveRequestInfo";
import { ContentGenerationGenerateMetaTagsLiveResponseInfo } from "./../models/ContentGenerationGenerateMetaTagsLiveResponseInfo";
import { ContentGenerationGenerateSubTopicsLiveRequestInfo } from "./../models/ContentGenerationGenerateSubTopicsLiveRequestInfo";
import { ContentGenerationGenerateSubTopicsLiveResponseInfo } from "./../models/ContentGenerationGenerateSubTopicsLiveResponseInfo";
import { ContentGenerationParaphraseLiveRequestInfo } from "./../models/ContentGenerationParaphraseLiveRequestInfo";
import { ContentGenerationParaphraseLiveResponseInfo } from "./../models/ContentGenerationParaphraseLiveResponseInfo";
import { ContentGenerationCheckGrammarLiveRequestInfo } from "./../models/ContentGenerationCheckGrammarLiveRequestInfo";
import { ContentGenerationCheckGrammarLiveResponseInfo } from "./../models/ContentGenerationCheckGrammarLiveResponseInfo";
import { ContentGenerationCheckGrammarLanguagesResponseInfo } from "./../models/ContentGenerationCheckGrammarLanguagesResponseInfo";
import { ContentGenerationGrammarRulesResponseInfo } from "./../models/ContentGenerationGrammarRulesResponseInfo";
import { ContentGenerationTextSummaryLiveRequestInfo } from "./../models/ContentGenerationTextSummaryLiveRequestInfo";
import { ContentGenerationTextSummaryLiveResponseInfo } from "./../models/ContentGenerationTextSummaryLiveResponseInfo";
import { ContentGenerationTextSummaryLanguagesResponseInfo } from "./../models/ContentGenerationTextSummaryLanguagesResponseInfo";
import { ApiException, throwException } from "./../models/ApiException"

export class ContentGenerationApi {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl ?? "https://";
    }

    generateLive(body: ContentGenerationGenerateLiveRequestInfo[]): Promise<ContentGenerationGenerateLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/generate/live";
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
            return this.processGenerateLive(_response);
        });
    }

    protected processGenerateLive(response: Response): Promise<ContentGenerationGenerateLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationGenerateLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationGenerateLiveResponseInfo | null>(null as any);
    }
    generateTextLive(body: ContentGenerationGenerateTextLiveRequestInfo[]): Promise<ContentGenerationGenerateTextLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/generate_text/live";
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
            return this.processGenerateTextLive(_response);
        });
    }

    protected processGenerateTextLive(response: Response): Promise<ContentGenerationGenerateTextLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationGenerateTextLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationGenerateTextLiveResponseInfo | null>(null as any);
    }
    generateMetaTagsLive(body: ContentGenerationGenerateMetaTagsLiveRequestInfo[]): Promise<ContentGenerationGenerateMetaTagsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/generate_meta_tags/live";
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
            return this.processGenerateMetaTagsLive(_response);
        });
    }

    protected processGenerateMetaTagsLive(response: Response): Promise<ContentGenerationGenerateMetaTagsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationGenerateMetaTagsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationGenerateMetaTagsLiveResponseInfo | null>(null as any);
    }
    generateSubTopicsLive(body: ContentGenerationGenerateSubTopicsLiveRequestInfo[]): Promise<ContentGenerationGenerateSubTopicsLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/generate_sub_topics/live";
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
            return this.processGenerateSubTopicsLive(_response);
        });
    }

    protected processGenerateSubTopicsLive(response: Response): Promise<ContentGenerationGenerateSubTopicsLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationGenerateSubTopicsLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationGenerateSubTopicsLiveResponseInfo | null>(null as any);
    }
    paraphraseLive(body: ContentGenerationParaphraseLiveRequestInfo[]): Promise<ContentGenerationParaphraseLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/paraphrase/live";
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
            return this.processParaphraseLive(_response);
        });
    }

    protected processParaphraseLive(response: Response): Promise<ContentGenerationParaphraseLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationParaphraseLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationParaphraseLiveResponseInfo | null>(null as any);
    }
    checkGrammarLive(body: ContentGenerationCheckGrammarLiveRequestInfo[]): Promise<ContentGenerationCheckGrammarLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/check_grammar/live";
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
            return this.processCheckGrammarLive(_response);
        });
    }

    protected processCheckGrammarLive(response: Response): Promise<ContentGenerationCheckGrammarLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationCheckGrammarLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationCheckGrammarLiveResponseInfo | null>(null as any);
    }
    contentGenerationCheckGrammarLanguages(): Promise<ContentGenerationCheckGrammarLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/check_grammar/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentGenerationCheckGrammarLanguages(_response);
        });
    }

    protected processContentGenerationCheckGrammarLanguages(response: Response): Promise<ContentGenerationCheckGrammarLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationCheckGrammarLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationCheckGrammarLanguagesResponseInfo | null>(null as any);
    }
    grammarRules(): Promise<ContentGenerationGrammarRulesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/grammar_rules";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGrammarRules(_response);
        });
    }

    protected processGrammarRules(response: Response): Promise<ContentGenerationGrammarRulesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationGrammarRulesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationGrammarRulesResponseInfo | null>(null as any);
    }
    textSummaryLive(body: ContentGenerationTextSummaryLiveRequestInfo[]): Promise<ContentGenerationTextSummaryLiveResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/text_summary/live";
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
            return this.processTextSummaryLive(_response);
        });
    }

    protected processTextSummaryLive(response: Response): Promise<ContentGenerationTextSummaryLiveResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationTextSummaryLiveResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationTextSummaryLiveResponseInfo | null>(null as any);
    }
    contentGenerationTextSummaryLanguages(): Promise<ContentGenerationTextSummaryLanguagesResponseInfo | null> {
        let url_ = this.baseUrl + "/v3/content_generation/text_summary/languages";
        url_ = url_.replace(/[?&]$/, "");
        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "User-Agent": "typescript-client/2.0.13",
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processContentGenerationTextSummaryLanguages(_response);
        });
    }

    protected processContentGenerationTextSummaryLanguages(response: Response): Promise<ContentGenerationTextSummaryLanguagesResponseInfo | null> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
                let result200: any = null;
                let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                result200 = resultData200 ? ContentGenerationTextSummaryLanguagesResponseInfo.fromJS(resultData200) : <any>null;
                return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContentGenerationTextSummaryLanguagesResponseInfo | null>(null as any);
    }
}