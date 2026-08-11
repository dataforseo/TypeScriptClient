import { SerpApiStopCrawlOnMatchInfo, ISerpApiStopCrawlOnMatchInfo } from "./SerpApiStopCrawlOnMatchInfo";


export interface ISerpYahooOrganicLiveAdvancedRequestInfo   {
        
        /** *direct URL of the search query* optional field you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method. example: `https://search.yahoo.com/search?p=rank+checker&n=100&vl=lang_en&vc=us&ei=UTF-8` */
        url?: string | undefined
        
        /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field **all %## will be decoded (plus character '+' will be decoded to a space character)** if you need to use the '%' character for your `keyword`, please specify it as '%25'; if you need to use the “+” character for your `keyword`, please specify it as “%2B” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keyword?: string | undefined
        
        /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `London,England,United Kingdom` */
        location_name?: string | undefined
        
        /** *search engine location code* **required field if you don't specify** `location_name`_or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `2840`n */
        location_code?: number | undefined
        
        /** *GPS coordinates of a location* **required field if you don't specify** `location_name`_or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 (mm) the maximum value for *'radius'*: 199999 (mm) example: `53.476225,-2.243572,200`n */
        location_coordinate?: string | undefined
        
        /** *full name of search engine language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages` example: `English` */
        language_name?: string | undefined
        
        /** *search engine language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`** you can receive the list of available languages of the search engine with their `language_code`_by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages`**example:**`en`n */
        language_code?: string | undefined
        
        /** *device type* optional field return results for a specific device type can take the values:`desktop`, `mobile` default value: `desktop` */
        device?: string | undefined
        
        /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */
        os?: string | undefined
        
        /** *search engine domain* optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: `au.search.yahoo.com`, `uk.search.yahoo.com`, `ca.search.yahoo.com`, etc. */
        se_domain?: string | undefined
        
        /** *parsing depth* optional field number of results in SERP default value: `6` max value: `200` **Your account will be billed per each SERP;**  Each Yahoo SERP can contain fewer than 10 results, so setting depth above the default value may result in additional charges [](https://dataforseo.com/help-center/how-many-results-scraped); The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/yahoo-serp-api) page. */
        depth?: number | undefined
        
        /** *page crawl limit* optional field number of search results pages to crawl default value: `1` max value: `100` **Note:** the `max_crawl_pages` and `depth` parameters complement each other; learn more at [our help center](https://dataforseo.com/help-center/what-is-max-crawl-pages-and-how-does-it-work) */
        max_crawl_pages?: number | undefined
        
        /** *target domain, subdomain, or webpage to get results for* optional field a domain or a subdomain should be specified without `https://` and `www.` note that the results of `target`-specific tasks will only include SERP elements that contain a `url` string; you can also use a wildcard (‘*’) character to specify the search pattern in SERP and narrow down the results; examples: **`example.com`**  - returns results for the website's home page with URLs, such as `https://example.com`, or `https://www.example.com/`, or `https://example.com/`; **`example.com*`** - returns results for the domain, including all its pages; **`*example.com*`** - returns results for the entire domain, including all its pages and subdomains; **`*example.com`**  - returns results for the home page regardless of the subdomain, such as `https://en.example.com`;  **`example.com/example-page`**  - returns results for the exact URL; **`example.com/example-page*`**  - returns results for all domain's URLs that start with the specified string */
        target?: string | undefined
        
        /** *additional parameters of the search query* optional field [get the list of available parameters and additional details here](https://dataforseo.com/help-center/yahoo-search-engine-parameters-and-how-to-use-them) */
        search_param?: string | undefined
        
        /** array of targets to stop crawling optional field if specified, the response will contain SERP results up to and including the specified match_value; you can specify up to 10 target values in this array example: 'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}] learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api Your account will be billed per each SERP crawled through the specified targets */
        stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpYahooOrganicLiveAdvancedRequestInfo  implements ISerpYahooOrganicLiveAdvancedRequestInfo {

    
    /** *direct URL of the search query* optional field you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method. example: `https://search.yahoo.com/search?p=rank+checker&n=100&vl=lang_en&vc=us&ei=UTF-8` */

    url?: string | undefined;

    
    /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field **all %## will be decoded (plus character '+' will be decoded to a space character)** if you need to use the '%' character for your `keyword`, please specify it as '%25'; if you need to use the “+” character for your `keyword`, please specify it as “%2B” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keyword?: string | undefined;

    
    /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `London,England,United Kingdom` */

    location_name?: string | undefined;

    
    /** *search engine location code* **required field if you don't specify** `location_name`_or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `2840`n */

    location_code?: number | undefined;

    
    /** *GPS coordinates of a location* **required field if you don't specify** `location_name`_or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 (mm) the maximum value for *'radius'*: 199999 (mm) example: `53.476225,-2.243572,200`n */

    location_coordinate?: string | undefined;

    
    /** *full name of search engine language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages` example: `English` */

    language_name?: string | undefined;

    
    /** *search engine language code* **required field if you don't specify** `language_name` **if you use this field, you don't need to specify `language_name`** you can receive the list of available languages of the search engine with their `language_code`_by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages`**example:**`en`n */

    language_code?: string | undefined;

    
    /** *device type* optional field return results for a specific device type can take the values:`desktop`, `mobile` default value: `desktop` */

    device?: string | undefined;

    
    /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */

    os?: string | undefined;

    
    /** *search engine domain* optional field we choose the relevant search engine domain automatically according to the location and language you specify however, you can set a custom search engine domain in this field example: `au.search.yahoo.com`, `uk.search.yahoo.com`, `ca.search.yahoo.com`, etc. */

    se_domain?: string | undefined;

    
    /** *parsing depth* optional field number of results in SERP default value: `6` max value: `200` **Your account will be billed per each SERP;**  Each Yahoo SERP can contain fewer than 10 results, so setting depth above the default value may result in additional charges [](https://dataforseo.com/help-center/how-many-results-scraped); The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/yahoo-serp-api) page. */

    depth?: number | undefined;

    
    /** *page crawl limit* optional field number of search results pages to crawl default value: `1` max value: `100` **Note:** the `max_crawl_pages` and `depth` parameters complement each other; learn more at [our help center](https://dataforseo.com/help-center/what-is-max-crawl-pages-and-how-does-it-work) */

    max_crawl_pages?: number | undefined;

    
    /** *target domain, subdomain, or webpage to get results for* optional field a domain or a subdomain should be specified without `https://` and `www.` note that the results of `target`-specific tasks will only include SERP elements that contain a `url` string; you can also use a wildcard (‘*’) character to specify the search pattern in SERP and narrow down the results; examples: **`example.com`**  - returns results for the website's home page with URLs, such as `https://example.com`, or `https://www.example.com/`, or `https://example.com/`; **`example.com*`** - returns results for the domain, including all its pages; **`*example.com*`** - returns results for the entire domain, including all its pages and subdomains; **`*example.com`**  - returns results for the home page regardless of the subdomain, such as `https://en.example.com`;  **`example.com/example-page`**  - returns results for the exact URL; **`example.com/example-page*`**  - returns results for all domain's URLs that start with the specified string */

    target?: string | undefined;

    
    /** *additional parameters of the search query* optional field [get the list of available parameters and additional details here](https://dataforseo.com/help-center/yahoo-search-engine-parameters-and-how-to-use-them) */

    search_param?: string | undefined;

    
    /** array of targets to stop crawling optional field if specified, the response will contain SERP results up to and including the specified match_value; you can specify up to 10 target values in this array example: 'stop_crawl_on_match':[{'match_value':'dataforseo.com','match_type':'with_subdomains'}] learn more about this parameter on our Help Center - https://dataforseo.com/help-center/using-the-stop_crawl_on_match-parameter-in-serp-api Your account will be billed per each SERP crawled through the specified targets */

    stop_crawl_on_match?: SerpApiStopCrawlOnMatchInfo[] | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpYahooOrganicLiveAdvancedRequestInfo) {

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
            this.url = data["url"];
            this.keyword = data["keyword"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.os = data["os"];
            this.se_domain = data["se_domain"];
            this.depth = data["depth"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.target = data["target"];
            this.search_param = data["search_param"];
            if (Array.isArray(data["stop_crawl_on_match"])) {
                this.stop_crawl_on_match = [];
                for (let item of data["stop_crawl_on_match"]) {
                    this.stop_crawl_on_match.push(SerpApiStopCrawlOnMatchInfo.fromJS(item));
                }
            }
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpYahooOrganicLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYahooOrganicLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["os"] = this.os;
        data["se_domain"] = this.se_domain;
        data["depth"] = this.depth;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["target"] = this.target;
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
        data["tag"] = this.tag;
        return data;
    }
}