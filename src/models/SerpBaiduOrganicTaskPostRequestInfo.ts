import { SerpApiStopCrawlOnMatchInfo, ISerpApiStopCrawlOnMatchInfo } from "./SerpApiStopCrawlOnMatchInfo";


export interface ISerpBaiduOrganicTaskPostRequestInfo   {
        
        /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your `keyword`, please specify it as “%25”; if you need to use the “+” character for your `keyword`, please specify it as “%2B” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keyword?: string | undefined
        
        /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/baidu-organic-serp-api) page. */
        priority?: number | undefined
        
        /** *parsing depth* optional field number of results in SERP default value: `10` max value: `700` **Your account will be billed per each SERP containing up to 10 results;**  Setting depth above 10 may result in additional charges [if the search engine returns more than 10 results](https://dataforseo.com/help-center/how-many-results-scraped); The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/baidu-organic-serp-api) page. */
        depth?: number | undefined
        
        /** *page crawl limit* optional field number of search results pages to crawl default value: `1` max value: `100` **Note:** the `max_crawl_pages` and `depth` parameters complement each other; learn more at [our help center](https://dataforseo.com/help-center/what-is-max-crawl-pages-and-how-does-it-work) */
        max_crawl_pages?: number | undefined
        
        /** *full name of search engine language* **required field if you don't specify** `language_code` you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages`**note** that the only language supported in Baidu search engine is `Chinese (Simplified)`. However, Baidu may as well return results for queries in other languages, so specifying `keyword` in Chinese is not mandatory example: `Chinese (Simplified)` */
        language_name?: string | undefined
        
        /** *search engine language code* **required field if you don't specify** `language_name` you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages`**note** that the only language supported in Baidu search engine is `Chinese (Simplified)` with the `zh_CN` language code. However, Baidu may as well return results for queries in other languages, so specifying `keyword` in Chinese is not mandatory example: `zh_CN` */
        language_code?: string | undefined
        
        /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `New York,New York,United States` */
        location_name?: string | undefined
        
        /** *search engine location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `2156` */
        location_code?: number | undefined
        
        /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 (mm) the maximum value for *'radius'*: 199999 (mm)if you use this field, the returned results will be based on the closest city found for your coordinates. Thus, **we don't recommend** using this field as the results might not be relevant to the specified coordinates example: `53.476225,-2.243572,200` */
        location_coordinate?: string | undefined
        
        /** *device type* optional field return results for a specific device type can take the values: `desktop`, `mobile`, `tablet` default value: `desktop` */
        device?: string | undefined
        
        /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` if you specify `tablet` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */
        os?: string | undefined
        
        /** *include direct URL for each ranked result* optional field if set to `true`, the returned results will contain direct URLs of the ranked websites by default, the URLs in Baidu results are encoded by the search engine, for example: `http://www.baidu.com/link?url=KQt6LSwU5OHnPtB8210R8flBP40grY6lTPxH_0UO7S2kgiZMTmw3ztV0hCo5c1kL`default value: `false` **Note:** if set to `true`, **the charge per task will be multiplied by 10** as our system runs a separate request for each ranked website to return its direct URL */
        get_website_url?: boolean | undefined
        
        /** array of targets to stop crawling optional field if specified, the response will contain SERP results up to and including the specified match_value; you can specify up to 10 target values in this array example: 'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}] learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api Your account will be billed per each SERP crawled through the specified targets */
        stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined
        
        /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        postback_url?: string | undefined
        
        /** *postback_url datatype* **required field if you specify `postback_url`** corresponds to the datatype that will be sent to your server possible values: `regular`, `html` */
        postback_data?: string | undefined
        
        /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class SerpBaiduOrganicTaskPostRequestInfo  implements ISerpBaiduOrganicTaskPostRequestInfo {

    
    /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your `keyword`, please specify it as “%25”; if you need to use the “+” character for your `keyword`, please specify it as “%2B” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keyword?: string | undefined;

    
    /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/baidu-organic-serp-api) page. */

    priority?: number | undefined;

    
    /** *parsing depth* optional field number of results in SERP default value: `10` max value: `700` **Your account will be billed per each SERP containing up to 10 results;**  Setting depth above 10 may result in additional charges [if the search engine returns more than 10 results](https://dataforseo.com/help-center/how-many-results-scraped); The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/baidu-organic-serp-api) page. */

    depth?: number | undefined;

    
    /** *page crawl limit* optional field number of search results pages to crawl default value: `1` max value: `100` **Note:** the `max_crawl_pages` and `depth` parameters complement each other; learn more at [our help center](https://dataforseo.com/help-center/what-is-max-crawl-pages-and-how-does-it-work) */

    max_crawl_pages?: number | undefined;

    
    /** *full name of search engine language* **required field if you don't specify** `language_code` you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages`**note** that the only language supported in Baidu search engine is `Chinese (Simplified)`. However, Baidu may as well return results for queries in other languages, so specifying `keyword` in Chinese is not mandatory example: `Chinese (Simplified)` */

    language_name?: string | undefined;

    
    /** *search engine language code* **required field if you don't specify** `language_name` you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages`**note** that the only language supported in Baidu search engine is `Chinese (Simplified)` with the `zh_CN` language code. However, Baidu may as well return results for queries in other languages, so specifying `keyword` in Chinese is not mandatory example: `zh_CN` */

    language_code?: string | undefined;

    
    /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `New York,New York,United States` */

    location_name?: string | undefined;

    
    /** *search engine location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `2156` */

    location_code?: number | undefined;

    
    /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 (mm) the maximum value for *'radius'*: 199999 (mm)if you use this field, the returned results will be based on the closest city found for your coordinates. Thus, **we don't recommend** using this field as the results might not be relevant to the specified coordinates example: `53.476225,-2.243572,200` */

    location_coordinate?: string | undefined;

    
    /** *device type* optional field return results for a specific device type can take the values: `desktop`, `mobile`, `tablet` default value: `desktop` */

    device?: string | undefined;

    
    /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` if you specify `tablet` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */

    os?: string | undefined;

    
    /** *include direct URL for each ranked result* optional field if set to `true`, the returned results will contain direct URLs of the ranked websites by default, the URLs in Baidu results are encoded by the search engine, for example: `http://www.baidu.com/link?url=KQt6LSwU5OHnPtB8210R8flBP40grY6lTPxH_0UO7S2kgiZMTmw3ztV0hCo5c1kL`default value: `false` **Note:** if set to `true`, **the charge per task will be multiplied by 10** as our system runs a separate request for each ranked website to return its direct URL */

    get_website_url?: boolean | undefined;

    
    /** array of targets to stop crawling optional field if specified, the response will contain SERP results up to and including the specified match_value; you can specify up to 10 target values in this array example: 'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}] learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api Your account will be billed per each SERP crawled through the specified targets */

    stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    
    /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    postback_url?: string | undefined;

    
    /** *postback_url datatype* **required field if you specify `postback_url`** corresponds to the datatype that will be sent to your server possible values: `regular`, `html` */

    postback_data?: string | undefined;

    
    /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpBaiduOrganicTaskPostRequestInfo) {

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
            this.priority = data["priority"];
            this.depth = data["depth"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.device = data["device"];
            this.os = data["os"];
            this.get_website_url = data["get_website_url"];
            if (Array.isArray(data["stop_crawl_on_match"])) {
                this.stop_crawl_on_match = [];
                for (let item of data["stop_crawl_on_match"]) {
                    this.stop_crawl_on_match.push(SerpApiStopCrawlOnMatchInfo.fromJS(item));
                }
            }
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): SerpBaiduOrganicTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBaiduOrganicTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["device"] = this.device;
        data["os"] = this.os;
        data["get_website_url"] = this.get_website_url;
        data["stop_crawl_on_match"] = null;
        if (Array.isArray(this.stop_crawl_on_match)) {
            data["stop_crawl_on_match"] = [];
            for (let item of this.stop_crawl_on_match) {
                if (item && typeof item.toJSON === "function") {
                    data["stop_crawl_on_match"].push(item?.toJSON());
                }
            }
        }
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}