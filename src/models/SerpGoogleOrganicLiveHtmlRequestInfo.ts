import { SerpApiStopCrawlOnMatchInfo, ISerpApiStopCrawlOnMatchInfo } from "./SerpApiStopCrawlOnMatchInfo";


export interface ISerpGoogleOrganicLiveHtmlRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as 'allinanchor:', 'allintext:', 'allintitle:', 'allinurl:', ‘cache:’, 'define:', 'filetype:', 'id:', 'inanchor:', 'info:', 'intext:', 'intitle:', 'inurl:', 'link:', 'related:', 'site:', the charge per task will be multiplied by 5 */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */
        device?: string | undefined
        
        /** load asynchronous ai overviewoptional fieldset to true to obtain ai_overview items is SERPs even if they are loaded asynchronously;if set to false, you will only obtain ai_overview items from cache;default value: falseNote your account will be billed $0.002 extra for each request;if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */
        load_async_ai_overview?: boolean | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */
        location_name?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */
        language_name?: string | undefined
        
        /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */
        os?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** array of targets to stop crawling
optional field
if specified, the response will contain SERP results up to and including the specified match_value;
you can specify up to 10 target values in this array
example:
'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}]
learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api
Your account will be billed per each SERP crawled through the specified targets */
        stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined
        
        /** target match typerequired field if stop_crawl_on_match is specifiedtype of match for the match_valuepossible values:domain – specific domain or subdomainwith_subdomains – main domain and subdomainswildcard –  wildcard pattern */
        match_type?: string | undefined
        
        /** target domain, subdomain, or wildcard valuerequired field if stop_crawl_on_match is specifiedspecify a target domain, subdomain, or wildcard value;Note: domain or subdomain must be specified without a request protocol;example: 'match_value': 'dataforseo.com','match_value': '/blog/post-*' */
        match_value?: string | undefined
        
        /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: you will be charged for each page crawled (10 organic results per page);learn more about pricing on our Pricing page;Note#2: the max_crawl_pages and depth parameters complement each other;learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details hereNote: the following search engine parameters are not supported and will be automatically unset if specified: lr, cr, as_qdr, as_sitesearch, as_occt, as_filetype. */
        search_param?: string | undefined
        
        /** expand ai overviewoptional fieldset to true to expand the ai_overview item;default value: false */
        expand_ai_overview?: boolean | undefined
        
        /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZSNote: the following search engine parameters are not supported and will be automatically unset if specified in the URL: lr, cr, as_qdr, as_sitesearch, as_occt, as_filetype. */
        url?: string | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */
        se_domain?: string | undefined
        
        /** target matching modeoptional fieldto enable this parameter, stop_crawl_on_match must also be enableddefines how the crawl should stop when multiple targets are specified in stop_crawl_on_matchpossible values: all, anyall – the crawl stops only when all specified targets are foundany – the crawl stops when any single target is founddefault value: anylearn more about this parameter on our Help Center */
        target_search_mode?: string | undefined
        
        /** SERP element types to check for targetsoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be checked for target matchesif not specified, all first-level elements with url and domain fields are checked for targetspossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as ignore_targets_inexample:'find_targets_in': ['organic', 'featured_snippet']learn more about this parameter on our Help Center */
        find_targets_in?: string[] | undefined
        
        /** SERP element types to exclude from target searchoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be excluded when searching for target matchespossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as find_targets_inexample:'ignore_targets_in': ['paid', 'images']learn more about this parameter on our Help Center */
        ignore_targets_in?: string[] | undefined

    [key: string]: any;

    }

export class SerpGoogleOrganicLiveHtmlRequestInfo  implements ISerpGoogleOrganicLiveHtmlRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character '+' will be decoded to a space character)if you need to use the '%' character for your keyword, please specify it as '%25';if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as 'allinanchor:', 'allintext:', 'allintitle:', 'allinurl:', ‘cache:’, 'define:', 'filetype:', 'id:', 'inanchor:', 'info:', 'intext:', 'intitle:', 'inurl:', 'link:', 'related:', 'site:', the charge per task will be multiplied by 5 */

    keyword?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;
    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 200Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */

    device?: string | undefined;
    
    /** load asynchronous ai overviewoptional fieldset to true to obtain ai_overview items is SERPs even if they are loaded asynchronously;if set to false, you will only obtain ai_overview items from cache;default value: falseNote your account will be billed $0.002 extra for each request;if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */

    load_async_ai_overview?: boolean | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */

    language_name?: string | undefined;
    
    /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */

    os?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** array of targets to stop crawling
optional field
if specified, the response will contain SERP results up to and including the specified match_value;
you can specify up to 10 target values in this array
example:
'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}]
learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api
Your account will be billed per each SERP crawled through the specified targets */

    stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined;
    
    /** target match typerequired field if stop_crawl_on_match is specifiedtype of match for the match_valuepossible values:domain – specific domain or subdomainwith_subdomains – main domain and subdomainswildcard –  wildcard pattern */

    match_type?: string | undefined;
    
    /** target domain, subdomain, or wildcard valuerequired field if stop_crawl_on_match is specifiedspecify a target domain, subdomain, or wildcard value;Note: domain or subdomain must be specified without a request protocol;example: 'match_value': 'dataforseo.com','match_value': '/blog/post-*' */

    match_value?: string | undefined;
    
    /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: you will be charged for each page crawled (10 organic results per page);learn more about pricing on our Pricing page;Note#2: the max_crawl_pages and depth parameters complement each other;learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details hereNote: the following search engine parameters are not supported and will be automatically unset if specified: lr, cr, as_qdr, as_sitesearch, as_occt, as_filetype. */

    search_param?: string | undefined;
    
    /** expand ai overviewoptional fieldset to true to expand the ai_overview item;default value: false */

    expand_ai_overview?: boolean | undefined;
    
    /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZSNote: the following search engine parameters are not supported and will be automatically unset if specified in the URL: lr, cr, as_qdr, as_sitesearch, as_occt, as_filetype. */

    url?: string | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */

    se_domain?: string | undefined;
    
    /** target matching modeoptional fieldto enable this parameter, stop_crawl_on_match must also be enableddefines how the crawl should stop when multiple targets are specified in stop_crawl_on_matchpossible values: all, anyall – the crawl stops only when all specified targets are foundany – the crawl stops when any single target is founddefault value: anylearn more about this parameter on our Help Center */

    target_search_mode?: string | undefined;
    
    /** SERP element types to check for targetsoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be checked for target matchesif not specified, all first-level elements with url and domain fields are checked for targetspossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as ignore_targets_inexample:'find_targets_in': ['organic', 'featured_snippet']learn more about this parameter on our Help Center */

    find_targets_in?: string[] | undefined;
    
    /** SERP element types to exclude from target searchoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be excluded when searching for target matchespossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as find_targets_inexample:'ignore_targets_in': ['paid', 'images']learn more about this parameter on our Help Center */

    ignore_targets_in?: string[] | undefined;

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
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            if (Array.isArray(data["stop_crawl_on_match"])) {
                this.stop_crawl_on_match = [];
                for (let item of data["stop_crawl_on_match"]) {
                    this.stop_crawl_on_match.push(SerpApiStopCrawlOnMatchInfo.fromJS(item));
                }
            }
            this.match_type = data["match_type"];
            this.match_value = data["match_value"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.search_param = data["search_param"];
            this.expand_ai_overview = data["expand_ai_overview"];
            this.url = data["url"];
            this.location_coordinate = data["location_coordinate"];
            this.se_domain = data["se_domain"];
            this.target_search_mode = data["target_search_mode"];
            this.find_targets_in = data["find_targets_in"];
            this.ignore_targets_in = data["ignore_targets_in"];
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
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["stop_crawl_on_match"] = null;
        if (Array.isArray(this.stop_crawl_on_match)) {
            data["stop_crawl_on_match"] = [];
            for (let item of this.stop_crawl_on_match) {
                if (item && typeof item.toJSON === "function") {
                    data["stop_crawl_on_match"].push(item?.toJSON());
                }
            }
        }
        data["match_type"] = this.match_type;
        data["match_value"] = this.match_value;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["search_param"] = this.search_param;
        data["expand_ai_overview"] = this.expand_ai_overview;
        data["url"] = this.url;
        data["location_coordinate"] = this.location_coordinate;
        data["se_domain"] = this.se_domain;
        data["target_search_mode"] = this.target_search_mode;
        data["find_targets_in"] = this.find_targets_in;
        data["ignore_targets_in"] = this.ignore_targets_in;
        return data;
    }
}