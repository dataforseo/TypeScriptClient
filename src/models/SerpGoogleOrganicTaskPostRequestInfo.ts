import { SerpApiStopCrawlOnMatchInfo, ISerpApiStopCrawlOnMatchInfo } from "./SerpApiStopCrawlOnMatchInfo";


export interface ISerpGoogleOrganicTaskPostRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5Note: queries containing the ‘cache:’ parameter are not supported and will return a validation errorlearn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 700Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */
        device?: string | undefined
        
        /** load asynchronous ai overviewoptional fieldset to true to obtain ai_overview items is SERPs even if they are loaded asynchronously;if set to false, you will only obtain ai_overview items from cache;default value: falseNote: you will be charged extra $0.0006 for using this parameter;if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */
        load_async_ai_overview?: boolean | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:regular, advanced, html */
        postback_data?: string | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default);2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */
        location_name?: string | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */
        language_name?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */
        os?: string | undefined
        
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
        
        /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */
        search_param?: string | undefined
        
        /** remove specific parameters from URLsoptional fieldusing this field, you can specify up to 10 parameters to remove from URLs in the resultexample:'remove_from_url': ['srsltid'] */
        remove_from_url?: string[] | undefined
        
        /** expand ai overviewoptional fieldset to true to expand the ai_overview item;default value: false;Note: this parameter applies only to HTML task results */
        expand_ai_overview?: boolean | undefined
        
        /** clicks on the corresponding elementoptional fieldspecify the click depth on the people_also_ask element to get additional people_also_ask_element items;Note your account will be billed $0.00015 extra for each click regardless of task priority;if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balancepossible values: from 1 to 4 */
        people_also_ask_click_depth?: number | undefined
        
        /** display related resultsoptional fieldif set to true, the related_result element in the response will be provided as a snippet of its parent organic result;if set to false, the related_result element will be provided as a separate organic result;default value: true */
        group_organic_results?: boolean | undefined
        
        /** calcualte pixel rankings for SERP elements in advanced resultsoptional fieldpixel ranking refers to the distance between the result snippet and top left corner of the screen;Visit Help Center to learn more>>by default, the parameter is set to falseNote: you will be charged extra $0.0006 for using this parameter */
        calculate_rectangles?: boolean | undefined
        
        /** browser screen widthoptional fieldyou can set a custom browser screen width to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1920 for desktop;360 for mobile on android;375 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_width?: number | undefined
        
        /** browser screen heightoptional fieldyou can set a custom browser screen height to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1080 for desktop;640 for mobile on android;812 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_height?: number | undefined
        
        /** browser screen resolution ratiooptional fieldyou can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;can be specified within the following range: 0.5-3;by default, the parameter is set to:1 for desktop;3 for mobile on android;3 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_resolution_ratio?: number | undefined
        
        /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS */
        url?: string | undefined
        
        /** target matching modeoptional fieldto enable this parameter, stop_crawl_on_match must also be enableddefines how the crawl should stop when multiple targets are specified in stop_crawl_on_matchpossible values: all, anyall – the crawl stops only when all specified targets are foundany – the crawl stops when any single target is founddefault value: anylearn more about this parameter on our Help Center */
        target_search_mode?: string | undefined
        
        /** SERP element types to check for targetsoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be checked for target matchesif not specified, all first-level elements with url and domain fields are checked for targetspossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as ignore_targets_inexample:'find_targets_in': ['organic', 'featured_snippet']learn more about this parameter on our Help Center */
        find_targets_in?: string[] | undefined
        
        /** SERP element types to exclude from target searchoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be excluded when searching for target matchespossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as find_targets_inexample:'ignore_targets_in': ['paid', 'images']learn more about this parameter on our Help Center */
        ignore_targets_in?: string[] | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */
        se_domain?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleOrganicTaskPostRequestInfo  implements ISerpGoogleOrganicTaskPostRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5Note: queries containing the ‘cache:’ parameter are not supported and will return a validation errorlearn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;
    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 10max value: 700Your account will be billed per each SERP containing up to 10 results;Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */

    device?: string | undefined;
    
    /** load asynchronous ai overviewoptional fieldset to true to obtain ai_overview items is SERPs even if they are loaded asynchronously;if set to false, you will only obtain ai_overview items from cache;default value: falseNote: you will be charged extra $0.0006 for using this parameter;if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */

    load_async_ai_overview?: boolean | undefined;
    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;
    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:regular, advanced, html */

    postback_data?: string | undefined;
    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default);2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */

    language_name?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */

    os?: string | undefined;
    
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
    
    /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */

    search_param?: string | undefined;
    
    /** remove specific parameters from URLsoptional fieldusing this field, you can specify up to 10 parameters to remove from URLs in the resultexample:'remove_from_url': ['srsltid'] */

    remove_from_url?: string[] | undefined;
    
    /** expand ai overviewoptional fieldset to true to expand the ai_overview item;default value: false;Note: this parameter applies only to HTML task results */

    expand_ai_overview?: boolean | undefined;
    
    /** clicks on the corresponding elementoptional fieldspecify the click depth on the people_also_ask element to get additional people_also_ask_element items;Note your account will be billed $0.00015 extra for each click regardless of task priority;if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balancepossible values: from 1 to 4 */

    people_also_ask_click_depth?: number | undefined;
    
    /** display related resultsoptional fieldif set to true, the related_result element in the response will be provided as a snippet of its parent organic result;if set to false, the related_result element will be provided as a separate organic result;default value: true */

    group_organic_results?: boolean | undefined;
    
    /** calcualte pixel rankings for SERP elements in advanced resultsoptional fieldpixel ranking refers to the distance between the result snippet and top left corner of the screen;Visit Help Center to learn more>>by default, the parameter is set to falseNote: you will be charged extra $0.0006 for using this parameter */

    calculate_rectangles?: boolean | undefined;
    
    /** browser screen widthoptional fieldyou can set a custom browser screen width to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1920 for desktop;360 for mobile on android;375 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_width?: number | undefined;
    
    /** browser screen heightoptional fieldyou can set a custom browser screen height to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1080 for desktop;640 for mobile on android;812 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_height?: number | undefined;
    
    /** browser screen resolution ratiooptional fieldyou can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;can be specified within the following range: 0.5-3;by default, the parameter is set to:1 for desktop;3 for mobile on android;3 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_resolution_ratio?: number | undefined;
    
    /** direct URL of the search queryoptional fieldyou can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.example:https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS */

    url?: string | undefined;
    
    /** target matching modeoptional fieldto enable this parameter, stop_crawl_on_match must also be enableddefines how the crawl should stop when multiple targets are specified in stop_crawl_on_matchpossible values: all, anyall – the crawl stops only when all specified targets are foundany – the crawl stops when any single target is founddefault value: anylearn more about this parameter on our Help Center */

    target_search_mode?: string | undefined;
    
    /** SERP element types to check for targetsoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be checked for target matchesif not specified, all first-level elements with url and domain fields are checked for targetspossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as ignore_targets_inexample:'find_targets_in': ['organic', 'featured_snippet']learn more about this parameter on our Help Center */

    find_targets_in?: string[] | undefined;
    
    /** SERP element types to exclude from target searchoptional fieldto enable this parameter, stop_crawl_on_match must also be enabledspecifies which SERP element types should be excluded when searching for target matchespossible values: organic, paid, local_pack, featured_snippet, events, google_flights, images, jobs, knowledge_graph, local_service, map, scholarly_articles, third_party_reviews, twitterNote: cannot contain the same element types as find_targets_inexample:'ignore_targets_in': ['paid', 'images']learn more about this parameter on our Help Center */

    ignore_targets_in?: string[] | undefined;
    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */

    se_domain?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleOrganicTaskPostRequestInfo) {

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
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.priority = data["priority"];
            this.location_name = data["location_name"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.tag = data["tag"];
            this.os = data["os"];
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
            this.remove_from_url = data["remove_from_url"];
            this.expand_ai_overview = data["expand_ai_overview"];
            this.people_also_ask_click_depth = data["people_also_ask_click_depth"];
            this.group_organic_results = data["group_organic_results"];
            this.calculate_rectangles = data["calculate_rectangles"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_resolution_ratio = data["browser_screen_resolution_ratio"];
            this.url = data["url"];
            this.target_search_mode = data["target_search_mode"];
            this.find_targets_in = data["find_targets_in"];
            this.ignore_targets_in = data["ignore_targets_in"];
            this.se_domain = data["se_domain"];
        }
    }

    static fromJS(data: any): SerpGoogleOrganicTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleOrganicTaskPostRequestInfo();
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
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["tag"] = this.tag;
        data["os"] = this.os;
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
        data["remove_from_url"] = this.remove_from_url;
        data["expand_ai_overview"] = this.expand_ai_overview;
        data["people_also_ask_click_depth"] = this.people_also_ask_click_depth;
        data["group_organic_results"] = this.group_organic_results;
        data["calculate_rectangles"] = this.calculate_rectangles;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_resolution_ratio"] = this.browser_screen_resolution_ratio;
        data["url"] = this.url;
        data["target_search_mode"] = this.target_search_mode;
        data["find_targets_in"] = this.find_targets_in;
        data["ignore_targets_in"] = this.ignore_targets_in;
        data["se_domain"] = this.se_domain;
        return data;
    }
}