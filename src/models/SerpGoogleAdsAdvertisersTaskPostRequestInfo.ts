export interface ISerpGoogleAdsAdvertisersTaskPostRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priority
You will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** search engine location codeoptional fieldif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_advertisers/locationsexample:2840
Note: if you don't specify location_name, location_code, or location_coordinate, advertisers will be searched across all the available locations */
        location_code?: number | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced */
        postback_data?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAdsAdvertisersTaskPostRequestInfo  implements ISerpGoogleAdsAdvertisersTaskPostRequestInfo {

    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priority
You will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;

    
    /** search engine location codeoptional fieldif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_advertisers/locationsexample:2840
Note: if you don't specify location_name, location_code, or location_coordinate, advertisers will be searched across all the available locations */

    location_code?: number | undefined;

    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced */

    postback_data?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAdsAdvertisersTaskPostRequestInfo) {

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
            this.location_code = data["location_code"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
        }
    }

    static fromJS(data: any): SerpGoogleAdsAdvertisersTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAdsAdvertisersTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["location_code"] = this.location_code;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        return data;
    }
}