export interface ISerpGoogleEventsLiveAdvancedRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language codeoptional fieldif you use this field, you don't need to specify language_nameby default, language settings correspond to one of the local official languages of the specified locationyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 700Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically;The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locationsexample:London,England,United Kingdom */
        location_name?: string | undefined
        
        /** full name of search engine languageoptional fieldif you use this field, you don't need to specify language_codeby default, language settings correspond to one of the local official languages of the specified locationyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */
        language_name?: string | undefined
        
        /** device operating systemoptional fieldnote that this API provides results for desktop onlychoose from the following values: windows, macosdefault value: windows */
        os?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatdata will be provided for the country the specified coordinates belong tothe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** date range to get events foroptional fieldif you do not use this field, we will return all eventspossible values: today, tomorrow, week, weekend, next_week, month, next_month */
        date_range?: string | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */
        se_domain?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleEventsLiveAdvancedRequestInfo  implements ISerpGoogleEventsLiveAdvancedRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** search engine language codeoptional fieldif you use this field, you don't need to specify language_nameby default, language settings correspond to one of the local official languages of the specified locationyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;
    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 700Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/events/locationsexample:London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** full name of search engine languageoptional fieldif you use this field, you don't need to specify language_codeby default, language settings correspond to one of the local official languages of the specified locationyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */

    language_name?: string | undefined;
    
    /** device operating systemoptional fieldnote that this API provides results for desktop onlychoose from the following values: windows, macosdefault value: windows */

    os?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatdata will be provided for the country the specified coordinates belong tothe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** date range to get events foroptional fieldif you do not use this field, we will return all eventspossible values: today, tomorrow, week, weekend, next_week, month, next_month */

    date_range?: string | undefined;
    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */

    se_domain?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleEventsLiveAdvancedRequestInfo) {

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
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.location_coordinate = data["location_coordinate"];
            this.date_range = data["date_range"];
            this.se_domain = data["se_domain"];
        }
    }

    static fromJS(data: any): SerpGoogleEventsLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleEventsLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["location_coordinate"] = this.location_coordinate;
        data["date_range"] = this.date_range;
        data["se_domain"] = this.se_domain;
        return data;
    }
}