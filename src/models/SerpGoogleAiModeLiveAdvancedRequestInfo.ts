export interface ISerpGoogleAiModeLiveAdvancedRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsNote: check  Google Search Help for the list of countries where AI Mode is currently available */
        location_code?: number | undefined
        
        /** search engine language coderequired field if you don't specify language_name;if you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ai_mode/languages */
        language_code?: string | undefined
        
        /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */
        device?: string | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsNote: check  Google Search Help for the list of countries where AI Mode is currently available */
        location_name?: string | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_code;if you use this field, you don't need to specify language_code;you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ai_mode/languages; */
        language_name?: string | undefined
        
        /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */
        os?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** calculate pixel rankings for SERP elements in advanced resultsoptional fieldpixel ranking refers to the distance between the result snippet and top left corner of the screen;Visit Help Center to learn more>>by default, the parameter is set to falseNote: if set to true, the charge per task will be multiplied by 2 */
        calculate_rectangles?: boolean | undefined
        
        /** browser screen widthoptional fieldyou can set a custom browser screen width to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1920 for desktop;360 for mobile on android;375 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_width?: number | undefined
        
        /** browser screen heightoptional fieldyou can set a custom browser screen height to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1080 for desktop;640 for mobile on android;812 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_height?: number | undefined
        
        /** browser screen resolution ratiooptional fieldyou can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;can be specified within the following range: 0.5-3;by default, the parameter is set to:1 for desktop;3 for mobile on android;3 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */
        browser_screen_resolution_ratio?: number | undefined
        
        /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,zoom' formatif 'zoom' is not specified, 9z will be applied as a default valuethe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'zoom': 4zthe maximum value for 'zoom': 18zexample:52.6178549,-155.352142,18z */
        location_coordinate?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAiModeLiveAdvancedRequestInfo  implements ISerpGoogleAiModeLiveAdvancedRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsNote: check  Google Search Help for the list of countries where AI Mode is currently available */

    location_code?: number | undefined;
    
    /** search engine language coderequired field if you don't specify language_name;if you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ai_mode/languages */

    language_code?: string | undefined;
    
    /** device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop */

    device?: string | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_code or location_coordinateif you use this field, you don't need to specify location_code or location_coordinateyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsNote: check  Google Search Help for the list of countries where AI Mode is currently available */

    location_name?: string | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_code;if you use this field, you don't need to specify language_code;you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/ai_mode/languages; */

    language_name?: string | undefined;
    
    /** device operating systemoptional fieldif you specify desktop in the device field, choose from the following values: windows, macosdefault value: windowsif you specify mobile in the device field, choose from the following values: android, iosdefault value: android */

    os?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** calculate pixel rankings for SERP elements in advanced resultsoptional fieldpixel ranking refers to the distance between the result snippet and top left corner of the screen;Visit Help Center to learn more>>by default, the parameter is set to falseNote: if set to true, the charge per task will be multiplied by 2 */

    calculate_rectangles?: boolean | undefined;
    
    /** browser screen widthoptional fieldyou can set a custom browser screen width to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1920 for desktop;360 for mobile on android;375 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_width?: number | undefined;
    
    /** browser screen heightoptional fieldyou can set a custom browser screen height to calculate pixel rankings for a particular device;can be specified within the following range: 240-9999;by default, the parameter is set to:1080 for desktop;640 for mobile on android;812 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_height?: number | undefined;
    
    /** browser screen resolution ratiooptional fieldyou can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device;can be specified within the following range: 0.5-3;by default, the parameter is set to:1 for desktop;3 for mobile on android;3 for mobile on iOS;Note: to use this parameter, set calculate_rectangles to true */

    browser_screen_resolution_ratio?: number | undefined;
    
    /** GPS coordinates of a locationrequired field if you don't specify location_name or location_codeif you use this field, you don't need to specify location_name or location_codelocation_coordinate parameter should be specified in the 'latitude,longitude,zoom' formatif 'zoom' is not specified, 9z will be applied as a default valuethe maximum number of decimal digits for 'latitude' and 'longitude': 7the minimum value for 'zoom': 4zthe maximum value for 'zoom': 18zexample:52.6178549,-155.352142,18z */

    location_coordinate?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAiModeLiveAdvancedRequestInfo) {

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
            this.device = data["device"];
            this.location_name = data["location_name"];
            this.language_name = data["language_name"];
            this.os = data["os"];
            this.tag = data["tag"];
            this.calculate_rectangles = data["calculate_rectangles"];
            this.browser_screen_width = data["browser_screen_width"];
            this.browser_screen_height = data["browser_screen_height"];
            this.browser_screen_resolution_ratio = data["browser_screen_resolution_ratio"];
            this.location_coordinate = data["location_coordinate"];
        }
    }

    static fromJS(data: any): SerpGoogleAiModeLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAiModeLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["location_name"] = this.location_name;
        data["language_name"] = this.language_name;
        data["os"] = this.os;
        data["tag"] = this.tag;
        data["calculate_rectangles"] = this.calculate_rectangles;
        data["browser_screen_width"] = this.browser_screen_width;
        data["browser_screen_height"] = this.browser_screen_height;
        data["browser_screen_resolution_ratio"] = this.browser_screen_resolution_ratio;
        data["location_coordinate"] = this.location_coordinate;
        return data;
    }
}