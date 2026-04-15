export interface ISerpGoogleAdsSearchTaskPostRequestInfo   {
        
        /** advertiser identifiersrequired field if target is not specifiedyou can specify the maximum of 25 values in this array;advertiser_ids values for this parameter can be found in the Google Ads Advertisers endpoint; */
        advertiser_ids?: string[] | undefined
        
        /** domain namerequired field if advertiser_ids is not specifieddomain name associated with an advertiser account */
        target?: string | undefined
        
        /** search engine location codeoptional fieldif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locationsexample:2840Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */
        location_code?: number | undefined
        
        /** parsing depthoptional fieldnumber of results in SERPdefault value: 40max value: 700Your account will be billed per each SERP containing up to 40 results;Setting depth above 40 may result in additional charges if the search engine returns more than 40 results;The cost can be calculated on the Pricing page. */
        depth?: number | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced */
        postback_data?: string | undefined
        
        /** full name of search engine locationoptional fieldif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locationsexample:London,England,United KingdomNote: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */
        location_name?: string | undefined
        
        /** GPS coordinates of a locationoptional fieldif you use this field, you don't need to specify location_name or location_codeexample:52.6178549,-155.352142Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */
        location_coordinate?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** advertising platformoptional fieldpossible values: all, google_play, google_maps, google_search, google_shopping, youtubedefault value: all */
        platform?: string | undefined
        
        /** ad formatoptional fieldpossible values: all, text, image, video */
        format?: string | undefined
        
        /** starting date of the time rangeoptional fieldrequired field if date_to is specified; date format: 'yyyy-mm-dd'minimum value: 2018-05-31maximum value: today's dateexample:'2020-01-01' */
        date_from?: string | undefined
        
        /** ending date of the time rangeoptional fieldrequired field if date_from is specified; date format: 'yyyy-mm-dd'minimum value: 2018-05-31maximum value: today's dateexample:'2020-01-01' */
        date_to?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAdsSearchTaskPostRequestInfo  implements ISerpGoogleAdsSearchTaskPostRequestInfo {
    
    /** advertiser identifiersrequired field if target is not specifiedyou can specify the maximum of 25 values in this array;advertiser_ids values for this parameter can be found in the Google Ads Advertisers endpoint; */

    advertiser_ids?: string[] | undefined;
    
    /** domain namerequired field if advertiser_ids is not specifieddomain name associated with an advertiser account */

    target?: string | undefined;
    
    /** search engine location codeoptional fieldif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locationsexample:2840Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */

    location_code?: number | undefined;
    
    /** parsing depthoptional fieldnumber of results in SERPdefault value: 40max value: 700Your account will be billed per each SERP containing up to 40 results;Setting depth above 40 may result in additional charges if the search engine returns more than 40 results;The cost can be calculated on the Pricing page. */

    depth?: number | undefined;
    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;
    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced */

    postback_data?: string | undefined;
    
    /** full name of search engine locationoptional fieldif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locationsexample:London,England,United KingdomNote: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */

    location_name?: string | undefined;
    
    /** GPS coordinates of a locationoptional fieldif you use this field, you don't need to specify location_name or location_codeexample:52.6178549,-155.352142Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */

    location_coordinate?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** advertising platformoptional fieldpossible values: all, google_play, google_maps, google_search, google_shopping, youtubedefault value: all */

    platform?: string | undefined;
    
    /** ad formatoptional fieldpossible values: all, text, image, video */

    format?: string | undefined;
    
    /** starting date of the time rangeoptional fieldrequired field if date_to is specified; date format: 'yyyy-mm-dd'minimum value: 2018-05-31maximum value: today's dateexample:'2020-01-01' */

    date_from?: string | undefined;
    
    /** ending date of the time rangeoptional fieldrequired field if date_from is specified; date format: 'yyyy-mm-dd'minimum value: 2018-05-31maximum value: today's dateexample:'2020-01-01' */

    date_to?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAdsSearchTaskPostRequestInfo) {

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
            this.advertiser_ids = data["advertiser_ids"];
            this.target = data["target"];
            this.location_code = data["location_code"];
            this.depth = data["depth"];
            this.priority = data["priority"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.location_name = data["location_name"];
            this.location_coordinate = data["location_coordinate"];
            this.tag = data["tag"];
            this.platform = data["platform"];
            this.format = data["format"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
        }
    }

    static fromJS(data: any): SerpGoogleAdsSearchTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAdsSearchTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["advertiser_ids"] = this.advertiser_ids;
        data["target"] = this.target;
        data["location_code"] = this.location_code;
        data["depth"] = this.depth;
        data["priority"] = this.priority;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["location_name"] = this.location_name;
        data["location_coordinate"] = this.location_coordinate;
        data["tag"] = this.tag;
        data["platform"] = this.platform;
        data["format"] = this.format;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        return data;
    }
}