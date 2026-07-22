export interface ISerpGoogleOrganicLiveHtmlRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as 'allinanchor:', 'allintext:', 'allintitle:', 'allinurl:', ‘cache:’, 'define:', 'filetype:', 'id:', 'inanchor:', 'info:', 'intext:', 'intitle:', 'inurl:', 'link:', 'related:', 'site:', the charge per task will be multiplied by 5 */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200
Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */
        device?: string | undefined
        
        /** load asynchronous ai overviewoptional fieldset to true to obtain ai_overview items is SERPs even if they are loaded asynchronously;if set to false, you will only obtain ai_overview items from cache;default value: falseNote your account will be billed $0.002 extra for each request;if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */
        load_async_ai_overview?: boolean | undefined

    [key: string]: any;

    }

export class SerpGoogleOrganicLiveHtmlRequestInfo  implements ISerpGoogleOrganicLiveHtmlRequestInfo {

    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as 'allinanchor:', 'allintext:', 'allintitle:', 'allinurl:', ‘cache:’, 'define:', 'filetype:', 'id:', 'inanchor:', 'info:', 'intext:', 'intitle:', 'inurl:', 'link:', 'related:', 'site:', the charge per task will be multiplied by 5 */

    keyword?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;

    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;

    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200
Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;

    
    /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */

    device?: string | undefined;

    
    /** load asynchronous ai overviewoptional fieldset to true to obtain ai_overview items is SERPs even if they are loaded asynchronously;if set to false, you will only obtain ai_overview items from cache;default value: falseNote your account will be billed $0.002 extra for each request;if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */

    load_async_ai_overview?: boolean | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleOrganicLiveHtmlRequestInfo) {

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
            this.depth = data["depth"];
            this.device = data["device"];
            this.load_async_ai_overview = data["load_async_ai_overview"];
        }
    }

    static fromJS(data: any): SerpGoogleOrganicLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleOrganicLiveHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["device"] = this.device;
        data["load_async_ai_overview"] = this.load_async_ai_overview;
        return data;
    }
}