export interface ISerpGoogleAiModeLiveHtmlRequestInfo   {
        
        /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character '+' will be decoded to a space character) if you need to use the '%' character for your `keyword`, please specify it as '%25'; if you need to use the “+” character for your `keyword`, please specify it as “%2B”; */
        keyword?: string | undefined
        
        /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `London,England,United Kingdom` */
        location_name?: string | undefined
        
        /** *search engine location code* **required field if you don't specify** `location_name`_or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `2840`n */
        location_code?: number | undefined
        
        /** *GPS coordinates of a location* **required field if you don't specify** `location_name`_or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 (mm) the maximum value for *'radius'*: 199999 (mm) example: `53.476225,-2.243572,200`n */
        location_coordinate?: string | undefined
        
        /** *full name of search engine language* required field if you don't specify `language_code`; if you use this field, you don't need to specify `language_code`; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages`; */
        language_name?: string | undefined
        
        /** *search engine language code* required field if you don't specify `language_name`; if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code`_by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages`n */
        language_code?: string | undefined
        
        /** *device type* optional field return results for a specific device type can take the values:`desktop`, `mobile` default value: `desktop` */
        device?: string | undefined
        
        /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */
        os?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleAiModeLiveHtmlRequestInfo  implements ISerpGoogleAiModeLiveHtmlRequestInfo {

    
    /** *keyword* **required field** you can specify **up to 700 characters** in the `keyword` field all %## will be decoded (plus character '+' will be decoded to a space character) if you need to use the '%' character for your `keyword`, please specify it as '%25'; if you need to use the “+” character for your `keyword`, please specify it as “%2B”; */

    keyword?: string | undefined;

    
    /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `London,England,United Kingdom` */

    location_name?: string | undefined;

    
    /** *search engine location code* **required field if you don't specify** `location_name`_or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations of the search engines with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/serp/{{low_se_name}}/locations` example: `2840`n */

    location_code?: number | undefined;

    
    /** *GPS coordinates of a location* **required field if you don't specify** `location_name`_or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude,radius'* format the maximum number of decimal digits for *'latitude'* and *'longitude'*: 7 the minimum value for *'radius'*: 199.9 (mm) the maximum value for *'radius'*: 199999 (mm) example: `53.476225,-2.243572,200`n */

    location_coordinate?: string | undefined;

    
    /** *full name of search engine language* required field if you don't specify `language_code`; if you use this field, you don't need to specify `language_code`; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages`; */

    language_name?: string | undefined;

    
    /** *search engine language code* required field if you don't specify `language_name`; if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code`_by making a separate request to the `https://api.dataforseo.com/v3/serp/google/ai_mode/languages`n */

    language_code?: string | undefined;

    
    /** *device type* optional field return results for a specific device type can take the values:`desktop`, `mobile` default value: `desktop` */

    device?: string | undefined;

    
    /** *device operating system* optional field if you specify `desktop` in the `device` field, choose from the following values: `windows`, `macos` default value: `windows` if you specify `mobile` in the `device` field, choose from the following values: `android`, `ios` default value: `android` */

    os?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleAiModeLiveHtmlRequestInfo) {

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
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.os = data["os"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpGoogleAiModeLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAiModeLiveHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["os"] = this.os;
        data["tag"] = this.tag;
        return data;
    }
}