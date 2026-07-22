export interface ISerpGoogleAiModeTaskPostRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsNote: check  Google Search Help for the list of countries where AI Mode is currently available */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_name;if you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ai_mode/languages */
        language_code?: string | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priority
You will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */
        device?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced, html */
        postback_data?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAiModeTaskPostRequestInfo  implements ISerpGoogleAiModeTaskPostRequestInfo {

    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsNote: check  Google Search Help for the list of countries where AI Mode is currently available */

    location_code?: number | undefined;

    
    /** search engine language coderequired field if you don't specify language_name;if you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ai_mode/languages */

    language_code?: string | undefined;

    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priority
You will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;

    
    /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */

    device?: string | undefined;

    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced, html */

    postback_data?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAiModeTaskPostRequestInfo) {

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
            this.priority = data["priority"];
            this.device = data["device"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
        }
    }

    static fromJS(data: any): SerpGoogleAiModeTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAiModeTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["priority"] = this.priority;
        data["device"] = this.device;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        return data;
    }
}