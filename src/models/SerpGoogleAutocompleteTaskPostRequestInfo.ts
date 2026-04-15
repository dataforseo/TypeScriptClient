export interface ISerpGoogleAutocompleteTaskPostRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name;you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** search bar cursor pointeroptional fieldthe horizontal numerical position of the cursor pointer within the keyword in the search bar;by modifying the position of the cursor pointer, you will obtain different autocomplete suggestions for the same seed keyword;minimal value: 0default value: the number of the last character of the specified keywordexample:|which query are s - 'cursor_pointer': 0which query is s| - 'cursor_pointer': 16which que|ry is s - 'cursor_pointer': 9 */
        cursor_pointer?: number | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default);2 – high execution priorityYou will be additionally charged for the tasks with high execution priority;The cost can be calculated on the Pricing page */
        priority?: number | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be url-encoded;i.e., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced */
        postback_data?: string | undefined
        
        /** search client for autocompleteoptional fieldautocomplete results may differ depending on the search client;possible values:chrome — used when google search is opened in google chrome;chrome-omni — used in the address bar in chrome;gws-wiz — used in google search home page;gws-wiz-serp — used in google search engine results page;safari — used when google search is opened in safari browser;firefox — used when google search is opened in firefox browser;psy-ab — may be used when google search is opened in google chrome browser;toolbar — returns XML;youtube — returns JSONP;gws-wiz-local — used in google local;img — used in google's image search;products-cc — used in google shopping search */
        client?: string | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_codeif you use this field, you don't need to specify location_code;you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/autocomplete/locationsexample:London,England,United Kingdom */
        location_name?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_code;you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languagesexample:English */
        language_name?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAutocompleteTaskPostRequestInfo  implements ISerpGoogleAutocompleteTaskPostRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”;learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name;you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;
    
    /** search bar cursor pointeroptional fieldthe horizontal numerical position of the cursor pointer within the keyword in the search bar;by modifying the position of the cursor pointer, you will obtain different autocomplete suggestions for the same seed keyword;minimal value: 0default value: the number of the last character of the specified keywordexample:|which query are s - 'cursor_pointer': 0which query is s| - 'cursor_pointer': 16which que|ry is s - 'cursor_pointer': 9 */

    cursor_pointer?: number | undefined;
    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default);2 – high execution priorityYou will be additionally charged for the tasks with high execution priority;The cost can be calculated on the Pricing page */

    priority?: number | undefined;
    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;
    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be url-encoded;i.e., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced */

    postback_data?: string | undefined;
    
    /** search client for autocompleteoptional fieldautocomplete results may differ depending on the search client;possible values:chrome — used when google search is opened in google chrome;chrome-omni — used in the address bar in chrome;gws-wiz — used in google search home page;gws-wiz-serp — used in google search engine results page;safari — used when google search is opened in safari browser;firefox — used when google search is opened in firefox browser;psy-ab — may be used when google search is opened in google chrome browser;toolbar — returns XML;youtube — returns JSONP;gws-wiz-local — used in google local;img — used in google's image search;products-cc — used in google shopping search */

    client?: string | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_codeif you use this field, you don't need to specify location_code;you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/serp/google/autocomplete/locationsexample:London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_code;you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/serp/google/languagesexample:English */

    language_name?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAutocompleteTaskPostRequestInfo) {

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
            this.cursor_pointer = data["cursor_pointer"];
            this.priority = data["priority"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.client = data["client"];
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpGoogleAutocompleteTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAutocompleteTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["cursor_pointer"] = this.cursor_pointer;
        data["priority"] = this.priority;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["client"] = this.client;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["tag"] = this.tag;
        return data;
    }
}