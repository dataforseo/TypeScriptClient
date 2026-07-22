export interface ISerpGoogleFinanceMarketsLiveHtmlRequestInfo   {
        
        /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** device typeoptional fieldpossible value: desktop */
        device?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceMarketsLiveHtmlRequestInfo  implements ISerpGoogleFinanceMarketsLiveHtmlRequestInfo {

    
    /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;

    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;

    
    /** device typeoptional fieldpossible value: desktop */

    device?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceMarketsLiveHtmlRequestInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.device = data["device"];
        }
    }

    static fromJS(data: any): SerpGoogleFinanceMarketsLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceMarketsLiveHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        return data;
    }
}