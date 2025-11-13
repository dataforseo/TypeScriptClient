import { SerpApiStopCrawlOnMatchInfo, ISerpApiStopCrawlOnMatchInfo } from "./SerpApiStopCrawlOnMatchInfo";


export interface ISerpNaverOrganicTaskPostRequestInfo   {
        
        /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields
in most cases, we wouldn’t recommend using this method;
example:
https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=iphone */
        url?: string | undefined
        
        /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value: 15
max value: 700
Your account will be billed per each SERP containing up to 15 results;
Setting depth above 15 may result in additional charges if the search engine returns more than 15 results;
The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** page crawl limit
optional field
number of search results pages to crawl
default value: 1
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** device type
optional field
can take the values:desktop, mobile
default value: desktop */
        device?: string | undefined
        
        /** device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android */
        os?: string | undefined
        
        /** search engine domain
optional field
we choose the relevant search engine domain automatically
however, you can set a custom search engine domain in this field
example:
search.naver.com */
        se_domain?: string | undefined
        
        /** additional parameters of the search query
optional field
get the list of available parameters and additional details here */
        search_param?: string | undefined
        
        /** array of targets to stop crawling
optional field
if specified, the response will contain SERP results up to and including the specified match_value;
you can specify up to 10 target values in this array
example:
'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}]
learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api
Your account will be billed per each SERP crawled through the specified targets */
        stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined
        
        /** array of targets to stop crawling
required field if stop_crawl_on_match is specified;
specify a target domain or wildcard value;
Note: domain name must be specified without a request protocol;
example: dataforseo.com */
        match_value?: string | undefined
        
        /** array of targets to stop crawling
required field if stop_crawl_on_match is specified;
type of match for the match_value
possible values: domain, with_subdomains, wildcard */
        match_type?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
regular, advanced, html */
        postback_data?: string | undefined
        
        /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class SerpNaverOrganicTaskPostRequestInfo  implements ISerpNaverOrganicTaskPostRequestInfo {
    
    /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields
in most cases, we wouldn’t recommend using this method;
example:
https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=iphone */

    url?: string | undefined;
    
    /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** parsing depth
optional field
number of results in SERP
default value: 15
max value: 700
Your account will be billed per each SERP containing up to 15 results;
Setting depth above 15 may result in additional charges if the search engine returns more than 15 results;
The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** page crawl limit
optional field
number of search results pages to crawl
default value: 1
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** device type
optional field
can take the values:desktop, mobile
default value: desktop */

    device?: string | undefined;
    
    /** device operating system
optional field
if you specify desktop in the device field, choose from the following values: windows, macos
default value: windows
if you specify mobile in the device field, choose from the following values: android, ios
default value: android */

    os?: string | undefined;
    
    /** search engine domain
optional field
we choose the relevant search engine domain automatically
however, you can set a custom search engine domain in this field
example:
search.naver.com */

    se_domain?: string | undefined;
    
    /** additional parameters of the search query
optional field
get the list of available parameters and additional details here */

    search_param?: string | undefined;
    
    /** array of targets to stop crawling
optional field
if specified, the response will contain SERP results up to and including the specified match_value;
you can specify up to 10 target values in this array
example:
'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}]
learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api
Your account will be billed per each SERP crawled through the specified targets */

    stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined;
    
    /** array of targets to stop crawling
required field if stop_crawl_on_match is specified;
specify a target domain or wildcard value;
Note: domain name must be specified without a request protocol;
example: dataforseo.com */

    match_value?: string | undefined;
    
    /** array of targets to stop crawling
required field if stop_crawl_on_match is specified;
type of match for the match_value
possible values: domain, with_subdomains, wildcard */

    match_type?: string[] | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatype
required field if you specify postback_url
corresponds to the function you used for setting a task
possible values:
regular, advanced, html */

    postback_data?: string | undefined;
    
    /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpNaverOrganicTaskPostRequestInfo) {

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
            this.url = data["url"];
            this.priority = data["priority"];
            this.depth = data["depth"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.device = data["device"];
            this.os = data["os"];
            this.se_domain = data["se_domain"];
            this.search_param = data["search_param"];
            if (Array.isArray(data["stop_crawl_on_match"])) {
                this.stop_crawl_on_match = [];
                for (let item of data["stop_crawl_on_match"]) {
                    this.stop_crawl_on_match.push(SerpApiStopCrawlOnMatchInfo.fromJS(item));
                }
            }
            this.match_value = data["match_value"];
            this.match_type = data["match_type"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): SerpNaverOrganicTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpNaverOrganicTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["url"] = this.url;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["device"] = this.device;
        data["os"] = this.os;
        data["se_domain"] = this.se_domain;
        data["search_param"] = this.search_param;
        data["stop_crawl_on_match"] = null;
        if (Array.isArray(this.stop_crawl_on_match)) {
            data["stop_crawl_on_match"] = [];
            for (let item of this.stop_crawl_on_match) {
                if (item && typeof item.toJSON === "function") {
                    data["stop_crawl_on_match"].push(item?.toJSON());
                }
            }
        }
        data["match_value"] = this.match_value;
        data["match_type"] = this.match_type;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}