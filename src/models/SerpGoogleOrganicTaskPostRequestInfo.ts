export interface ISerpGoogleOrganicTaskPostRequestInfo   {
        
        /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS */
        url?: string | undefined
        
        /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value: 10
max value: 700
Your account will be billed per each SERP containing up to 10 results;
Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;
The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: you will be charged for each page crawled (10 organic results per page);
learn more about pricing on our Pricing page;
Note#2: the max_crawl_pages and depth parameters complement each other;
learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840 */
        location_code?: number | undefined
        
        /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English */
        language_name?: string | undefined
        
        /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en */
        language_code?: string | undefined
        
        /** search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc. */
        se_domain?: string | undefined
        
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
        
        /** display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true */
        group_organic_results?: boolean | undefined
        
        /** calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: you will be charged extra $0.0006 for using this parameter */
        calculate_rectangles?: boolean | undefined
        
        /** browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_width?: number | undefined
        
        /** browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_height?: number | undefined
        
        /** browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_resolution_ratio?: number | undefined
        
        /** clicks on the corresponding element
optional field
specify the click depth on the people_also_ask element to get additional people_also_ask_element items;
Note your account will be billed $0.00015 extra for each click regardless of task priority;
if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balance
possible values: from 1 to 4 */
        people_also_ask_click_depth?: number | undefined
        
        /** load asynchronous ai overview
optional field
set to true to obtain ai_overview items is SERPs even if they are loaded asynchronically;
if set to false, you will only obtain ai_overview items from cache;
default value: false
Note: you will be charged extra $0.0006 for using this parameter;
if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */
        load_async_ai_overview?: boolean | undefined
        
        /** expand ai overview
optional field
set to true to expand the ai_overview item;
default value: false;
Note: this parameter applies only to HTML task results */
        expand_ai_overview?: boolean | undefined
        
        /** additional parameters of the search query
optional field
get the list of available parameters and additional details here */
        search_param?: string | undefined
        
        /** remove specific parameters from URLs
optional field
using this field, you can specify up to 10 parameters to remove from URLs in the result
example:
'remove_from_url': ['srsltid'] */
        remove_from_url?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
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

export class SerpGoogleOrganicTaskPostRequestInfo  implements ISerpGoogleOrganicTaskPostRequestInfo {
    
    /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
if this field contains such parameters as ‘allinanchor:’, ‘allintext:’, ‘allintitle:’, ‘allinurl:’, ‘define:’, ‘filetype:’, ‘id:’, ‘inanchor:’, ‘info:’, ‘intext:’, ‘intitle:’, ‘inurl:’, ‘link:’, ‘site:’, the charge per task will be multiplied by 5
Note: queries containing the ‘cache:’ parameter are not supported and will return a validation error
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.google.co.uk/search?q=%20rank%20tracker%20api&hl=en&gl=GB&uule=w+CAIQIFISCXXeIa8LoNhHEZkq1d1aOpZS */

    url?: string | undefined;
    
    /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default);
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** parsing depth
optional field
number of results in SERP
default value: 10
max value: 700
Your account will be billed per each SERP containing up to 10 results;
Setting depth above 10 may result in additional charges if the search engine returns more than 10 results;
The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: you will be charged for each page crawled (10 organic results per page);
learn more about pricing on our Pricing page;
Note#2: the max_crawl_pages and depth parameters complement each other;
learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locations
example:
2840 */

    location_code?: number | undefined;
    
    /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude,radius” format
the maximum number of decimal digits for “latitude” and “longitude”: 7
the minimum value for “radius”: 199.9 (mm)
the maximum value for “radius”: 199999 (mm)
example:
53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English */

    language_name?: string | undefined;
    
    /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en */

    language_code?: string | undefined;
    
    /** search engine domain
optional field
we choose the relevant search engine domain automatically according to the location and language you specify
however, you can set a custom search engine domain in this field
example:
google.co.uk, google.com.au, google.de, etc. */

    se_domain?: string | undefined;
    
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
    
    /** display related results
optional field
if set to true, the related_result element in the response will be provided as a snippet of its parent organic result;
if set to false, the related_result element will be provided as a separate organic result;
default value: true */

    group_organic_results?: boolean | undefined;
    
    /** calcualte pixel rankings for SERP elements in advanced results
optional field
pixel ranking refers to the distance between the result snippet and top left corner of the screen;
Visit Help Center to learn more>>
by default, the parameter is set to false
Note: you will be charged extra $0.0006 for using this parameter */

    calculate_rectangles?: boolean | undefined;
    
    /** browser screen width
optional field
you can set a custom browser screen width to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1920 for desktop;
360 for mobile on android;
375 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_width?: number | undefined;
    
    /** browser screen height
optional field
you can set a custom browser screen height to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1080 for desktop;
640 for mobile on android;
812 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_height?: number | undefined;
    
    /** browser screen resolution ratio
optional field
you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;
by default, the parameter is set to:
1 for desktop;
3 for mobile on android;
3 for mobile on iOS;
Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_resolution_ratio?: number | undefined;
    
    /** clicks on the corresponding element
optional field
specify the click depth on the people_also_ask element to get additional people_also_ask_element items;
Note your account will be billed $0.00015 extra for each click regardless of task priority;
if the element is absent or we perform fewer clicks than you specified, all extra charges will be returned to your account balance
possible values: from 1 to 4 */

    people_also_ask_click_depth?: number | undefined;
    
    /** load asynchronous ai overview
optional field
set to true to obtain ai_overview items is SERPs even if they are loaded asynchronically;
if set to false, you will only obtain ai_overview items from cache;
default value: false
Note: you will be charged extra $0.0006 for using this parameter;
if the element is absent or contains 'asynchronous_ai_overview': false, all extra charges will be returned to your account balance */

    load_async_ai_overview?: boolean | undefined;
    
    /** expand ai overview
optional field
set to true to expand the ai_overview item;
default value: false;
Note: this parameter applies only to HTML task results */

    expand_ai_overview?: boolean | undefined;
    
    /** additional parameters of the search query
optional field
get the list of available parameters and additional details here */

    search_param?: string | undefined;
    
    /** remove specific parameters from URLs
optional field
using this field, you can specify up to 10 parameters to remove from URLs in the result
example:
'remove_from_url': ['srsltid'] */

    remove_from_url?: string[] | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
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
            this.url = data["url"];
            this.priority = data["priority"];
            this.depth = data["depth"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.se_domain = data["se_domain"];
            this.device = data["device"];
            this.os = data["os"];
            this.group_organic_results = data["group_organic_results"];
            this.calculate_rectangles = data["calculate_rectangles"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_resolution_ratio = data["browser_screen_resolution_ratio"];
            this.people_also_ask_click_depth = data["people_also_ask_click_depth"];
            this.load_async_ai_overview = data["load_async_ai_overview"];
            this.expand_ai_overview = data["expand_ai_overview"];
            this.search_param = data["search_param"];
            this.remove_from_url = data["remove_from_url"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
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
        data["url"] = this.url;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["se_domain"] = this.se_domain;
        data["device"] = this.device;
        data["os"] = this.os;
        data["group_organic_results"] = this.group_organic_results;
        data["calculate_rectangles"] = this.calculate_rectangles;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_resolution_ratio"] = this.browser_screen_resolution_ratio;
        data["people_also_ask_click_depth"] = this.people_also_ask_click_depth;
        data["load_async_ai_overview"] = this.load_async_ai_overview;
        data["expand_ai_overview"] = this.expand_ai_overview;
        data["search_param"] = this.search_param;
        data["remove_from_url"] = this.remove_from_url;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}