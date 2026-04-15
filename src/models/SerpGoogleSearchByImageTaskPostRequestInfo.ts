export interface ISerpGoogleSearchByImageTaskPostRequestInfo   {
        
        /** URL of the imagerequired fieldthe results will be based on the image you specified in this fieldexample:https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg */
        image_url?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */
        language_code?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced, html */
        postback_data?: string | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */
        location_name?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */
        language_name?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */
        max_crawl_pages?: number | undefined
        
        /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */
        search_param?: string | undefined
        
        /** calculate pixel rankings for SERP elements in advanced resultsoptional fieldpixel ranking refers to the distance between the result snippet and top left corner of the screen;Visit Help Center to learn more>>by default, the parameter is set to falseNote: if set to true, the charge per task will be multiplied by 2 */
        calculate_rectangles?: boolean | undefined
        
        /** browser screen widthoptional fieldyou can set a custom browser screen width to calculate pixel rankings for a particular device;by default, the parameter is set to 1920;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_width?: number | undefined
        
        /** browser screen heightoptional fieldyou can set a custom browser screen height to calculate pixel rankings for a particular device;by default, the parameter is set to 1080;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_height?: number | undefined
        
        /** browser screen resolution ratiooptional fieldyou can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;by default, the parameter is set to 1;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_resolution_ratio?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */
        location_coordinate?: string | undefined
        
        /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */
        se_domain?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleSearchByImageTaskPostRequestInfo  implements ISerpGoogleSearchByImageTaskPostRequestInfo {
    
    /** URL of the imagerequired fieldthe results will be based on the image you specified in this fieldexample:https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg */

    image_url?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en */

    language_code?: string | undefined;
    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;
    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the datatype that will be sent to your serverpossible values:advanced, html */

    postback_data?: string | undefined;
    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_codeif you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English */

    language_name?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** page crawl limitoptional fieldnumber of search results pages to crawlmax value: 100Note: the max_crawl_pages and depth parameters complement each other;learn more at our help center */

    max_crawl_pages?: number | undefined;
    
    /** additional parameters of the search queryoptional fieldget the list of available parameters and additional details here */

    search_param?: string | undefined;
    
    /** calculate pixel rankings for SERP elements in advanced resultsoptional fieldpixel ranking refers to the distance between the result snippet and top left corner of the screen;Visit Help Center to learn more>>by default, the parameter is set to falseNote: if set to true, the charge per task will be multiplied by 2 */

    calculate_rectangles?: boolean | undefined;
    
    /** browser screen widthoptional fieldyou can set a custom browser screen width to calculate pixel rankings for a particular device;by default, the parameter is set to 1920;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_width?: number | undefined;
    
    /** browser screen heightoptional fieldyou can set a custom browser screen height to calculate pixel rankings for a particular device;by default, the parameter is set to 1080;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_height?: number | undefined;
    
    /** browser screen resolution ratiooptional fieldyou can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;by default, the parameter is set to 1;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_resolution_ratio?: number | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,radius' formatthe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'radius': 199.9 (mm)the maximum value for 'radius': 199999 (mm)example:53.476225,-2.243572,200 */

    location_coordinate?: string | undefined;
    
    /** search engine domainoptional fieldwe choose the relevant search engine domain automatically according to the location and language you specifyhowever, you can set a custom search engine domain in this fieldexample:google.co.uk, google.com.au, google.de, etc. */

    se_domain?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleSearchByImageTaskPostRequestInfo) {

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
            this.image_url = data["image_url"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.pingback_url = data["pingback_url"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.priority = data["priority"];
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.tag = data["tag"];
            this.max_crawl_pages = data["max_crawl_pages"];
            this.search_param = data["search_param"];
            this.calculate_rectangles = data["calculate_rectangles"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_resolution_ratio = data["browser_screen_resolution_ratio"];
            this.location_coordinate = data["location_coordinate"];
            this.se_domain = data["se_domain"];
        }
    }

    static fromJS(data: any): SerpGoogleSearchByImageTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleSearchByImageTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["image_url"] = this.image_url;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["pingback_url"] = this.pingback_url;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["tag"] = this.tag;
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["search_param"] = this.search_param;
        data["calculate_rectangles"] = this.calculate_rectangles;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_resolution_ratio"] = this.browser_screen_resolution_ratio;
        data["location_coordinate"] = this.location_coordinate;
        data["se_domain"] = this.se_domain;
        return data;
    }
}