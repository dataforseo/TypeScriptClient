export interface ISerpGoogleNewsLiveHtmlRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as 'allinanchor:', 'allintext:', 'allintitle:', 'allinurl:', 'define:', 'filetype:', 'id:', 'inanchor:', 'info:', 'intext:', 'intitle:', 'inurl:', 'link:', 'related:', 'site:', the charge per task will be multiplied by 5Note: queries containing the ‘cache:’ parameter are not supported and will return a validation errorlearn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available locations of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automaticallyThe cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */
        location_name?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available locations of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */
        language_name?: string | undefined
        
        /** device operating systemoptional fieldnote that this API provides results for desktop onlychoose from the following values: windows, macosdefault value: windows */
        os?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */
        search_param?: string | undefined
        
        /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS */
        url?: string | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */
        se_domain?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleNewsLiveHtmlRequestInfo  implements ISerpGoogleNewsLiveHtmlRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as 'allinanchor:', 'allintext:', 'allintitle:', 'allinurl:', 'define:', 'filetype:', 'id:', 'inanchor:', 'info:', 'intext:', 'intitle:', 'inurl:', 'link:', 'related:', 'site:', the charge per task will be multiplied by 5Note: queries containing the ‘cache:’ parameter are not supported and will return a validation errorlearn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available locations of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;
    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automaticallyThe cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available locations of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */

    language_name?: string | undefined;
    
    /** device operating systemoptional fieldnote that this API provides results for desktop onlychoose from the following values: windows, macosdefault value: windows */

    os?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */

    search_param?: string | undefined;
    
    /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS */

    url?: string | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */

    se_domain?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleNewsLiveHtmlRequestInfo) {

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
            this.search_param = data["search_param"];
            this.url = data["url"];
            this.location_coordinate = data["location_coordinate"];
            this.se_domain = data["se_domain"];
        }
    }

    static fromJS(data: any): SerpGoogleNewsLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleNewsLiveHtmlRequestInfo();
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
        data["search_param"] = this.search_param;
        data["url"] = this.url;
        data["location_coordinate"] = this.location_coordinate;
        data["se_domain"] = this.se_domain;
        return data;
    }
}