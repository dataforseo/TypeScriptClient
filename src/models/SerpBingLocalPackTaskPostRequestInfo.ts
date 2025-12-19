export interface ISerpBingLocalPackTaskPostRequestInfo   {
        
        /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character '+' will be decoded to a space character)
if you need to use the '%' character for your keyword, please specify it as '%25';
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location code
required field if you don't specify location_name or location_coordinate
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations
example:
2840 */
        location_code?: number | undefined
        
        /** search engine language code
required field if you don't specify language_name
if you use this field, you don't need to specify language_name
you can receive the list of available locations of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages
example:
en */
        language_code?: string | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value: 5
max value: 200
Your account will be billed per each SERP containing up to 5 results;
Setting depth above 5 may result in additional charges if the search engine returns more than 5 results;
The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
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
corresponds to the datatype that will be sent to your server
possible values:
regular, html */
        postback_data?: string | undefined
        
        /** full name of search engine location
required field if you don't specify location_code or location_coordinate
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations
example:
London,England,United Kingdom */
        location_name?: string | undefined
        
        /** full name of search engine language
required field if you don't specify language_code
if you use this field, you don't need to specify language_code
you can receive the list of available locations of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages
example:
English */
        language_name?: string | undefined
        
        /** device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows */
        os?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** additional parameters of the search query
optional field
get the list of available parameters and additional details here */
        search_param?: string | undefined
        
        /** direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.bing.com/search?q=rank%20checker&count=50&first=1&setlang=en&cc=US&safesearch=Moderate&FORM=SEPAGE */
        url?: string | undefined
        
        /** GPS coordinates of a location
required field if you don't specify location_name or location_code
if you use this field, you don't need to specify location_name or location_code
location_coordinate parameter should be specified in the 'latitude,longitude' format
the maximum number of decimal digits for 'latitude' and 'longitude': 7
example:
53.476225,-2.243572 */
        location_coordinate?: string | undefined

    [key: string]: any;

    }

export class SerpBingLocalPackTaskPostRequestInfo  implements ISerpBingLocalPackTaskPostRequestInfo {
    
    /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character '+' will be decoded to a space character)
if you need to use the '%' character for your keyword, please specify it as '%25';
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine location code
required field if you don't specify location_name or location_coordinate
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations
example:
2840 */

    location_code?: number | undefined;
    
    /** search engine language code
required field if you don't specify language_name
if you use this field, you don't need to specify language_name
you can receive the list of available locations of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages
example:
en */

    language_code?: string | undefined;
    
    /** parsing depth
optional field
number of results in SERP
default value: 5
max value: 200
Your account will be billed per each SERP containing up to 5 results;
Setting depth above 5 may result in additional charges if the search engine returns more than 5 results;
The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
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
corresponds to the datatype that will be sent to your server
possible values:
regular, html */

    postback_data?: string | undefined;
    
    /** full name of search engine location
required field if you don't specify location_code or location_coordinate
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations
example:
London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** full name of search engine language
required field if you don't specify language_code
if you use this field, you don't need to specify language_code
you can receive the list of available locations of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/{{low_se_name}}/languages
example:
English */

    language_name?: string | undefined;
    
    /** device operating system
optional field
note that this API provides results for desktop only
choose from the following values: windows, macos
default value: windows */

    os?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** page crawl limit
optional field
number of search results pages to crawl
max value: 100
Note: the max_crawl_pages and depth parameters complement each other;
learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** additional parameters of the search query
optional field
get the list of available parameters and additional details here */

    search_param?: string | undefined;
    
    /** direct URL of the search query
optional field
you can specify a direct URL and we will sort it out to the necessary fields. Note that this method is the most difficult for our API to process and also requires you to specify the exact language and location in the URL. In most cases, we wouldn’t recommend using this method.
example:
https://www.bing.com/search?q=rank%20checker&count=50&first=1&setlang=en&cc=US&safesearch=Moderate&FORM=SEPAGE */

    url?: string | undefined;
    
    /** GPS coordinates of a location
required field if you don't specify location_name or location_code
if you use this field, you don't need to specify location_name or location_code
location_coordinate parameter should be specified in the 'latitude,longitude' format
the maximum number of decimal digits for 'latitude' and 'longitude': 7
example:
53.476225,-2.243572 */

    location_coordinate?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpBingLocalPackTaskPostRequestInfo) {

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
            this.priority = data["priority"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.search_param = data["search_param"];
            this.url = data["url"];
            this.location_coordinate = data["location_coordinate"];
        }
    }

    static fromJS(data: any): SerpBingLocalPackTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingLocalPackTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["depth"] = this.depth;
        data["priority"] = this.priority;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["search_param"] = this.search_param;
        data["url"] = this.url;
        data["location_coordinate"] = this.location_coordinate;
        return data;
    }
}