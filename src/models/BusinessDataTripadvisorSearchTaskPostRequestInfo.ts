export interface IBusinessDataTripadvisorSearchTaskPostRequestInfo   {
        
        /** *keyword* **required field** the keyword you specify should indicate a business category, company name, or a prominent place; you can specify up to 700 characters in the `keyword` filed; all %## will be decoded (plus character ‘+’ will be decoded to a space character); if you need to use the “%” character for your `keyword`, please specify it as “%25” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keyword?: string | undefined
        
        /** *full name of search engine location* **required field if you don't specify `location_code`** you can receive the list of available locations with `location_name` by making a separate request to the `https://api.dataforseo.com/v3/business_data/tripadvisor/locations` example: `London,England,United Kingdom` */
        location_name?: string | undefined
        
        /** *search engine location code* **required field if you don't specify `location_name`** you can receive the list of available locations with `location_code` by making a separate request to the `https://api.dataforseo.com/v3/business_data/tripadvisor/locations` example: `1003854` */
        location_code?: number | undefined
        
        /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priorityYou will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-tripadvisor-search-pricing) page. */
        priority?: number | undefined
        
        /** *parsing depth* optional field number of search results to be returned from the API response we strongly recommend setting the parsing depth in the multiples of thirty because our systems processes thirty search results in a row; default value: `30`; maximum value: `210` **Your account will be billed per each SERP containing up to 30 results;**  Setting depth above 30 may result in additional charges if the search engine returns more than 30 results; The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-tripadvisor-search-pricing) page. */
        depth?: number | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined
        
        /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        postback_url?: string | undefined
        
        /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorSearchTaskPostRequestInfo  implements IBusinessDataTripadvisorSearchTaskPostRequestInfo {

    
    /** *keyword* **required field** the keyword you specify should indicate a business category, company name, or a prominent place; you can specify up to 700 characters in the `keyword` filed; all %## will be decoded (plus character ‘+’ will be decoded to a space character); if you need to use the “%” character for your `keyword`, please specify it as “%25” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keyword?: string | undefined;

    
    /** *full name of search engine location* **required field if you don't specify `location_code`** you can receive the list of available locations with `location_name` by making a separate request to the `https://api.dataforseo.com/v3/business_data/tripadvisor/locations` example: `London,England,United Kingdom` */

    location_name?: string | undefined;

    
    /** *search engine location code* **required field if you don't specify `location_name`** you can receive the list of available locations with `location_code` by making a separate request to the `https://api.dataforseo.com/v3/business_data/tripadvisor/locations` example: `1003854` */

    location_code?: number | undefined;

    
    /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priorityYou will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-tripadvisor-search-pricing) page. */

    priority?: number | undefined;

    
    /** *parsing depth* optional field number of search results to be returned from the API response we strongly recommend setting the parsing depth in the multiples of thirty because our systems processes thirty search results in a row; default value: `30`; maximum value: `210` **Your account will be billed per each SERP containing up to 30 results;**  Setting depth above 30 may result in additional charges if the search engine returns more than 30 results; The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-tripadvisor-search-pricing) page. */

    depth?: number | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    
    /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    postback_url?: string | undefined;

    
    /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorSearchTaskPostRequestInfo) {

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
            this.priority = data["priority"];
            this.depth = data["depth"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorSearchTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorSearchTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}