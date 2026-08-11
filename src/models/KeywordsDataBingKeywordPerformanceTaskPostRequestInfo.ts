export interface IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo   {
        
        /** *keywords* **required field** The maximum number of keywords you can specify: 1000 The maximum number of characters for each keyword: 80 The maximum number of words for each keyword phrase: 10 the specified keywords will be converted to lowercase, data will be provided in a separate array learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keywords?: string[] | undefined
        
        /** *device type* optional field specify this field if you want to get the data for a particular device typepossible values: `desktop`, `mobile`, `tablet`, `all` default value: `all` */
        device?: string | undefined
        
        /** *keywords match type* optional field can take the following values: `aggregate` returns data across all match types; `broad` returns data for all user queries containing the specified keyword with varying word order; `phrase` returns data for all user queries containing the specified keyword with identical word order; `exact` returns data for user query that matches the specified keyword;**Note:** the `aggregate` match type is applied by default */
        match?: string | undefined
        
        /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `'United States'` */
        location_name?: string | undefined
        
        /** *search engine location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `2840` */
        location_code?: number | undefined
        
        /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude'* format **the data will be provided for the country the specified coordinates belong to** example: `52.6178549,-155.352142` */
        location_coordinate?: string | undefined
        
        /** *full name of search engine language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `English` */
        language_name?: string | undefined
        
        /** *search engine language code* **required field if you don't specify** `language_name` you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `'en'` */
        language_code?: string | undefined
        
        /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        postback_url?: string | undefined
        
        /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        pingback_url?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataBingKeywordPerformanceTaskPostRequestInfo  implements IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo {

    
    /** *keywords* **required field** The maximum number of keywords you can specify: 1000 The maximum number of characters for each keyword: 80 The maximum number of words for each keyword phrase: 10 the specified keywords will be converted to lowercase, data will be provided in a separate array learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keywords?: string[] | undefined;

    
    /** *device type* optional field specify this field if you want to get the data for a particular device typepossible values: `desktop`, `mobile`, `tablet`, `all` default value: `all` */

    device?: string | undefined;

    
    /** *keywords match type* optional field can take the following values: `aggregate` returns data across all match types; `broad` returns data for all user queries containing the specified keyword with varying word order; `phrase` returns data for all user queries containing the specified keyword with identical word order; `exact` returns data for user query that matches the specified keyword;**Note:** the `aggregate` match type is applied by default */

    match?: string | undefined;

    
    /** *full name of search engine location* **required field if you don't specify** `location_code` or `location_coordinate` **if you use this field, you don't need to specify `location_code` or `location_coordinate`** you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `'United States'` */

    location_name?: string | undefined;

    
    /** *search engine location code* **required field if you don't specify** `location_name` or `location_coordinate` **if you use this field, you don't need to specify `location_name` or `location_coordinate`** you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `2840` */

    location_code?: number | undefined;

    
    /** *GPS coordinates of a location* **required field if you don't specify** `location_name` or `location_code` **if you use this field, you don't need to specify `location_name` or `location_code`** `location_coordinate` parameter should be specified in the *'latitude,longitude'* format **the data will be provided for the country the specified coordinates belong to** example: `52.6178549,-155.352142` */

    location_coordinate?: string | undefined;

    
    /** *full name of search engine language* **required field if you don't specify** `language_code` **if you use this field, you don't need to specify `language_code`** you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `English` */

    language_name?: string | undefined;

    
    /** *search engine language code* **required field if you don't specify** `language_name` you can receive the list of available locations and languages by making a separate request to `https://api.dataforseo.com/v3/keywords_data/bing/keyword_performance/locations_and_languages` example: `'en'` */

    language_code?: string | undefined;

    
    /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    postback_url?: string | undefined;

    
    /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded; i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    pingback_url?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordPerformanceTaskPostRequestInfo) {

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
            this.keywords = data["keywords"];
            this.device = data["device"];
            this.match = data["match"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordPerformanceTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordPerformanceTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["device"] = this.device;
        data["match"] = this.match;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        data["tag"] = this.tag;
        return data;
    }
}