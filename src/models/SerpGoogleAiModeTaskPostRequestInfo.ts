export interface ISerpGoogleAiModeTaskPostRequestInfo   {
        
        /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your `keyword`, please specify it as “%25”; if you need to use the “+” character for your `keyword`, please specify it as “%2B” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keyword?: string | undefined
        
        /** *search engine location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/locations` **Note:** check [Google Search Help](https://support.google.com/websearch/answer/16011537?hl=en&co=GENIE.Platform%3DAndroid#) for the list of countries where AI Mode is currently available */
        location_code?: number | undefined
        
        /** *search engine language code* required field if you don't specify `language_name`; if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages` */
        language_code?: string | undefined
        
        /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/google-ai-mode-serp-api) page. */
        priority?: number | undefined
        
        /** *device type* optional field return results for a specific device type can take the values:`desktop`, `mobile` default value: `desktop` */
        device?: string | undefined
        
        /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        pingback_url?: string | undefined
        
        /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        postback_url?: string | undefined
        
        /** *postback_url datatype* **required field if you specify `postback_url`** corresponds to the function you used for setting a task possible values: `advanced`, `html` */
        postback_data?: string | undefined
        
        /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/locations` **Note:** check [Google Search Help](https://support.google.com/websearch/answer/16011537?hl=en&co=GENIE.Platform%3DAndroid#) for the list of countries where AI Mode is currently available */
        location_name?: string | undefined
        
        /** *full name of search engine language* required field if you don't specify `language_code`; if you use this field, you don't need to specify `language_code`; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages`; */
        language_name?: string | undefined
        
        /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */
        os?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined
        
        /** *calculate pixel rankings for SERP elements in advanced results* optional field pixel ranking refers to the distance between the result snippet and top left corner of the screen; [Visit Help Center to learn more>>](https://dataforseo.com/help-center/pixel-ranking-in-serp-api) by default, the parameter is set to `false` **Note:** if set to `true`, the charge per task will be multiplied by 2 */
        calculate_rectangles?: boolean | undefined
        
        /** *browser screen width* optional field you can set a custom browser screen width to calculate pixel rankings for a particular device; can be specified within the following range: `240-9999`; by default, the parameter is set to: `1920` for `desktop`; `360` for `mobile` on `android`; `375` for `mobile` on `iOS`; **Note:** to use this parameter, set `calculate_rectangles` to `true` */
        browser_screen_width?: number | undefined
        
        /** *browser screen height* optional field you can set a custom browser screen height to calculate pixel rankings for a particular device; can be specified within the following range: `240-9999`; by default, the parameter is set to: `1080` for `desktop`; `640` for `mobile` on `android`; `812` for `mobile` on `iOS`; **Note:** to use this parameter, set `calculate_rectangles` to `true` */
        browser_screen_height?: number | undefined
        
        /** *browser screen resolution ratio* optional field you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device; can be specified within the following range: `0.5-3`; by default, the parameter is set to: `1` for `desktop`; `3` for `mobile` on `android`; `3` for `mobile` on `iOS`; **Note:** to use this parameter, set `calculate_rectangles` to `true` */
        browser_screen_resolution_ratio?: number | undefined
        
        /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,zoom'* format if *'zoom'* is not specified, *9z* will be applied as a default value the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'zoom'*: 4z the maximum value for *'zoom'*: 18z example: `52.6178549,-155.352142,18z` */
        location_coordinate?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAiModeTaskPostRequestInfo  implements ISerpGoogleAiModeTaskPostRequestInfo {

    
    /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character ‘+’ will be decoded to a space character) if you need to use the “%” character for your `keyword`, please specify it as “%25”; if you need to use the “+” character for your `keyword`, please specify it as “%2B” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keyword?: string | undefined;

    
    /** *search engine location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/locations` **Note:** check [Google Search Help](https://support.google.com/websearch/answer/16011537?hl=en&co=GENIE.Platform%3DAndroid#) for the list of countries where AI Mode is currently available */

    location_code?: number | undefined;

    
    /** *search engine language code* required field if you don't specify `language_name`; if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages` */

    language_code?: string | undefined;

    
    /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priority You will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/serp/google-ai-mode-serp-api) page. */

    priority?: number | undefined;

    
    /** *device type* optional field return results for a specific device type can take the values:`desktop`, `mobile` default value: `desktop` */

    device?: string | undefined;

    
    /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    pingback_url?: string | undefined;

    
    /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    postback_url?: string | undefined;

    
    /** *postback_url datatype* **required field if you specify `postback_url`** corresponds to the function you used for setting a task possible values: `advanced`, `html` */

    postback_data?: string | undefined;

    
    /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/locations` **Note:** check [Google Search Help](https://support.google.com/websearch/answer/16011537?hl=en&co=GENIE.Platform%3DAndroid#) for the list of countries where AI Mode is currently available */

    location_name?: string | undefined;

    
    /** *full name of search engine language* required field if you don't specify `language_code`; if you use this field, you don't need to specify `language_code`; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages`; */

    language_name?: string | undefined;

    
    /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */

    os?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    
    /** *calculate pixel rankings for SERP elements in advanced results* optional field pixel ranking refers to the distance between the result snippet and top left corner of the screen; [Visit Help Center to learn more>>](https://dataforseo.com/help-center/pixel-ranking-in-serp-api) by default, the parameter is set to `false` **Note:** if set to `true`, the charge per task will be multiplied by 2 */

    calculate_rectangles?: boolean | undefined;

    
    /** *browser screen width* optional field you can set a custom browser screen width to calculate pixel rankings for a particular device; can be specified within the following range: `240-9999`; by default, the parameter is set to: `1920` for `desktop`; `360` for `mobile` on `android`; `375` for `mobile` on `iOS`; **Note:** to use this parameter, set `calculate_rectangles` to `true` */

    browser_screen_width?: number | undefined;

    
    /** *browser screen height* optional field you can set a custom browser screen height to calculate pixel rankings for a particular device; can be specified within the following range: `240-9999`; by default, the parameter is set to: `1080` for `desktop`; `640` for `mobile` on `android`; `812` for `mobile` on `iOS`; **Note:** to use this parameter, set `calculate_rectangles` to `true` */

    browser_screen_height?: number | undefined;

    
    /** *browser screen resolution ratio* optional field you can set a custom browser screen resolution ratio to calculate pixel rankings for a particular device; can be specified within the following range: `0.5-3`; by default, the parameter is set to: `1` for `desktop`; `3` for `mobile` on `android`; `3` for `mobile` on `iOS`; **Note:** to use this parameter, set `calculate_rectangles` to `true` */

    browser_screen_resolution_ratio?: number | undefined;

    
    /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,zoom'* format if *'zoom'* is not specified, *9z* will be applied as a default value the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'zoom'*: 4z the maximum value for *'zoom'*: 18z example: `52.6178549,-155.352142,18z` */

    location_coordinate?: string | undefined;

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