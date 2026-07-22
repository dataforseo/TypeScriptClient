export interface ISerpGoogleFinanceQuoteLiveHtmlRequestInfo   {
        
        /** ticker or stock symbolrequired fieldin this field you can pass the ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange;you can specify up to 700 characters in the keyword field;all %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */
        device?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceQuoteLiveHtmlRequestInfo  implements ISerpGoogleFinanceQuoteLiveHtmlRequestInfo {

    
    /** ticker or stock symbolrequired fieldin this field you can pass the ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange;you can specify up to 700 characters in the keyword field;all %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;

    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;

    
    /** device typeoptional fieldreturn results for a specific device typepossible value: desktop */

    device?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceQuoteLiveHtmlRequestInfo) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.device = data["device"];
        }
    }

    static fromJS(data: any): SerpGoogleFinanceQuoteLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceQuoteLiveHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        return data;
    }
}