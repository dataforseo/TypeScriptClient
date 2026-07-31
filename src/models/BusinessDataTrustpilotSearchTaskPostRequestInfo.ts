export interface IBusinessDataTrustpilotSearchTaskPostRequestInfo   {
        
        /** *keyword* **required field** the keyword you specify should indicate a business category or company name; you can specify up to 700 characters in the `keyword` filed; all %## will be decoded (plus character ‘+’ will be decoded to a space character); if you need to use the “%” character for your `keyword`, please specify it as “%25” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keyword?: string | undefined
        
        /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priorityYou will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-trustpilot-search-pricing) page. */
        priority?: number | undefined
        
        /** *parsing depth* optional field number of search results to be returned from the API response we strongly recommend setting the parsing depth in the multiples of twenty because our systems processes twenty search results in a row; default value: `10`; maximum value: `140` **Your account will be billed per each SERP containing up to 10 results;**  Setting depth above 10 may result in additional charges if the search engine returns more than 10 results; The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-trustpilot-search-pricing) page. */
        depth?: number | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined
        
        /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        postback_url?: string | undefined
        
        /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class BusinessDataTrustpilotSearchTaskPostRequestInfo  implements IBusinessDataTrustpilotSearchTaskPostRequestInfo {

    
    /** *keyword* **required field** the keyword you specify should indicate a business category or company name; you can specify up to 700 characters in the `keyword` filed; all %## will be decoded (plus character ‘+’ will be decoded to a space character); if you need to use the “%” character for your `keyword`, please specify it as “%25” learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keyword?: string | undefined;

    
    /** *task priority* optional field can take the following values: 1 – normal execution priority (set by default) 2 – high execution priorityYou will be additionally charged for the tasks with high execution priority. The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-trustpilot-search-pricing) page. */

    priority?: number | undefined;

    
    /** *parsing depth* optional field number of search results to be returned from the API response we strongly recommend setting the parsing depth in the multiples of twenty because our systems processes twenty search results in a row; default value: `10`; maximum value: `140` **Your account will be billed per each SERP containing up to 10 results;**  Setting depth above 10 may result in additional charges if the search engine returns more than 10 results; The cost can be calculated on the [Pricing](https://dataforseo.com/pricing/business-data/business-data-api-trustpilot-search-pricing) page. */

    depth?: number | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    
    /** *URL for sending task results* optional field once the task is completed, we will send a POST request with its results compressed in the `gzip` format to the `postback_url` you specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/postbackscript?id=$id` `http://your-server.com/postbackscript?id=$id&tag=$tag` **Note:** special characters in `postback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    postback_url?: string | undefined;

    
    /** *notification URL of a completed task* optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a `$id` variable and ‘$tag’ as urlencoded `$tag` variable. We will set the necessary values before sending the request. example: `http://your-server.com/pingscript?id=$id` `http://your-server.com/pingscript?id=$id&tag=$tag` **Note:** special characters in `pingback_url` will be urlencoded;  i.a., the `#` character will be encoded into `%23` learn more on our [Help Center](https://dataforseo.com/help-center/pingbacks-postbacks-with-dataforseo-api) */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTrustpilotSearchTaskPostRequestInfo) {

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
            this.depth = data["depth"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): BusinessDataTrustpilotSearchTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTrustpilotSearchTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}