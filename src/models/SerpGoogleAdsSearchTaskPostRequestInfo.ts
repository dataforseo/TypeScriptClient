export interface ISerpGoogleAdsSearchTaskPostRequestInfo   {
        
        /** advertiser identifiers
required field if target is not specified
you can specify the maximum of 25 values in this array;
advertiser_ids values for this parameter can be found in the Google Ads Advertisers endpoint; */
        advertiser_ids?: string[] | undefined
        
        /** domain name
required field if advertiser_ids is not specified
domain name associated with an advertiser account */
        target?: string | undefined
        
        /** search engine location code
optional field
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
2840
Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */
        location_code?: number | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value: 40
max value: 700
Your account will be billed per each SERP containing up to 40 results;
Setting depth above 40 may result in additional charges if the search engine returns more than 40 results;
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
corresponds to the function you used for setting a task
possible values:
advanced */
        postback_data?: string | undefined
        
        /** full name of search engine location
optional field
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
London,England,United Kingdom
Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */
        location_name?: string | undefined
        
        /** GPS coordinates of a location
optional field
if you use this field, you don't need to specify location_name or location_code
example:
52.6178549,-155.352142
Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */
        location_coordinate?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** advertising platform
optional field
possible values: all, google_play, google_maps, google_search, google_shopping, youtube
default value: all */
        platform?: string | undefined
        
        /** ad format
optional field
possible values: all, text, image, video */
        format?: string | undefined
        
        /** starting date of the time range
optional field
required field if date_to is specified; 
date format: 'yyyy-mm-dd'
minimum value: 2018-05-31
maximum value: today's date
example:
'2020-01-01' */
        date_from?: string | undefined
        
        /** ending date of the time range
optional field
required field if date_from is specified; 
date format: 'yyyy-mm-dd'
minimum value: 2018-05-31
maximum value: today's date
example:
'2020-01-01' */
        date_to?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAdsSearchTaskPostRequestInfo  implements ISerpGoogleAdsSearchTaskPostRequestInfo {
    
    /** advertiser identifiers
required field if target is not specified
you can specify the maximum of 25 values in this array;
advertiser_ids values for this parameter can be found in the Google Ads Advertisers endpoint; */

    advertiser_ids?: string[] | undefined;
    
    /** domain name
required field if advertiser_ids is not specified
domain name associated with an advertiser account */

    target?: string | undefined;
    
    /** search engine location code
optional field
if you use this field, you don't need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
2840
Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */

    location_code?: number | undefined;
    
    /** parsing depth
optional field
number of results in SERP
default value: 40
max value: 700
Your account will be billed per each SERP containing up to 40 results;
Setting depth above 40 may result in additional charges if the search engine returns more than 40 results;
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
corresponds to the function you used for setting a task
possible values:
advanced */

    postback_data?: string | undefined;
    
    /** full name of search engine location
optional field
if you use this field, you don't need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ads_search/locations
example:
London,England,United Kingdom
Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */

    location_name?: string | undefined;
    
    /** GPS coordinates of a location
optional field
if you use this field, you don't need to specify location_name or location_code
example:
52.6178549,-155.352142
Note: if you don't specify location_name, location_code, or location_coordinate, the ads will be searched across all the available locations */

    location_coordinate?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** advertising platform
optional field
possible values: all, google_play, google_maps, google_search, google_shopping, youtube
default value: all */

    platform?: string | undefined;
    
    /** ad format
optional field
possible values: all, text, image, video */

    format?: string | undefined;
    
    /** starting date of the time range
optional field
required field if date_to is specified; 
date format: 'yyyy-mm-dd'
minimum value: 2018-05-31
maximum value: today's date
example:
'2020-01-01' */

    date_from?: string | undefined;
    
    /** ending date of the time range
optional field
required field if date_from is specified; 
date format: 'yyyy-mm-dd'
minimum value: 2018-05-31
maximum value: today's date
example:
'2020-01-01' */

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