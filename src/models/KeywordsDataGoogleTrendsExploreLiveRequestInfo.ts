export interface IKeywordsDataGoogleTrendsExploreLiveRequestInfo   {
        
        /** *keywords* **required field** the maximum number of keywords you can specify: 5 the maximum number of characters you can specify in a keyword: 100 the minimum number of characters must be greater than 1 comma characters (`,`) in the specified keywords will be unset and ignored **Note:** keywords cannot consist of a combination of the following characters: `|  ' - + = ~ ! : * ( ) [ ] { }` **Note:** to obtain `google_trends_topics_list` and `google_trends_queries_list` items, specify no more than 1 keyword learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keywords?: string[] | undefined
        
        /** *full name of search engine location* optional field if you don't use this field, you will recieve global results **if you use this field, you don't need to specify `location_code`** you can use this field as an array to set several locations, each corresponding to a specific keyword - [learn more](https://dataforseo.com/help-center/multiple-locations-in-google-trends-api); you can receive the list of available locations of the search engine with their `location_name` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/locations` example: `United Kingdom` */
        location_name?: string | undefined
        
        /** *search engine location code* optional field if you don't use this field, you will recieve global results **if you use this field, you don't need to specify `location_name`** you can use this field as an array to set several locations, each corresponding to a specific keyword - [learn more](https://dataforseo.com/help-center/multiple-locations-in-google-trends-api); you can receive the list of available locations of the search engines with their `location_code` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/locations` example: `2840` */
        location_code?: string | undefined
        
        /** *full name of search engine language* optional field default value: `English` if you use this field, you don't need to specify `language_code` you can receive the list of available languages of the search engine with their `language_name` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/languages` example: `English` */
        language_name?: string | undefined
        
        /** *search engine language code* optional field default value: `en` if you use this field, you don't need to specify `language_name` you can receive the list of available languages of the search engine with their `language_code` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/languages` example: `en` */
        language_code?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** *google trends search category* optional field if you don't specify this field, the `0` value will be applied by default and the search will be carried out across all available categories you can receive the list of available categories with their `category_code` by making a separate request to the `https://api.dataforseo.com/v3/keywords_data/google_trends/categories` */
        category_code?: number | undefined
        
        /** *starting date of the time range* optional field if you don't specify this field, the current day and month of the preceding year will be used by default minimal value for the `web` type: `2004-01-01` minimal value for other types: `2008-01-01` date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */
        date_from?: string | undefined
        
        /** *ending date of the time range* optional field if you don't specify this field, the today's date will be used by default date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */
        date_to?: string | undefined
        
        /** *preset time ranges* optional field if you specify `date_from` or `date_to` parameters, this field will be ignored when setting a task *possible values for all `type` parameters:* `past_hour`, `past_4_hours`, `past_day`, `past_7_days`, `past_30_days`, `past_90_days`, `past_12_months`, `past_5_years` *possible values for `web` only:* `2004_present` *possible values for `news`, `youtube`, `images`, `froogle`:* `2008_present` */
        time_range?: string | undefined
        
        /** *types of items returned* optional field to speed up the execution of the request, specify one item at a time; possible values: `'google_trends_graph'`, `'google_trends_map'`, `'google_trends_topics_list'`,`'google_trends_queries_list'` default value: `'google_trends_graph'` **Note:** to obtain `google_trends_topics_list` and `google_trends_queries_list` items, specify no more than 1 keyword in the `keywords` field */
        item_types?: string[] | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleTrendsExploreLiveRequestInfo  implements IKeywordsDataGoogleTrendsExploreLiveRequestInfo {

    
    /** *keywords* **required field** the maximum number of keywords you can specify: 5 the maximum number of characters you can specify in a keyword: 100 the minimum number of characters must be greater than 1 comma characters (`,`) in the specified keywords will be unset and ignored **Note:** keywords cannot consist of a combination of the following characters: `|  ' - + = ~ ! : * ( ) [ ] { }` **Note:** to obtain `google_trends_topics_list` and `google_trends_queries_list` items, specify no more than 1 keyword learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keywords?: string[] | undefined;

    
    /** *full name of search engine location* optional field if you don't use this field, you will recieve global results **if you use this field, you don't need to specify `location_code`** you can use this field as an array to set several locations, each corresponding to a specific keyword - [learn more](https://dataforseo.com/help-center/multiple-locations-in-google-trends-api); you can receive the list of available locations of the search engine with their `location_name` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/locations` example: `United Kingdom` */

    location_name?: string | undefined;

    
    /** *search engine location code* optional field if you don't use this field, you will recieve global results **if you use this field, you don't need to specify `location_name`** you can use this field as an array to set several locations, each corresponding to a specific keyword - [learn more](https://dataforseo.com/help-center/multiple-locations-in-google-trends-api); you can receive the list of available locations of the search engines with their `location_code` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/locations` example: `2840` */

    location_code?: string | undefined;

    
    /** *full name of search engine language* optional field default value: `English` if you use this field, you don't need to specify `language_code` you can receive the list of available languages of the search engine with their `language_name` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/languages` example: `English` */

    language_name?: string | undefined;

    
    /** *search engine language code* optional field default value: `en` if you use this field, you don't need to specify `language_name` you can receive the list of available languages of the search engine with their `language_code` by making a separate request to `https://api.dataforseo.com/v3/keywords_data/google_trends/languages` example: `en` */

    language_code?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** *google trends search category* optional field if you don't specify this field, the `0` value will be applied by default and the search will be carried out across all available categories you can receive the list of available categories with their `category_code` by making a separate request to the `https://api.dataforseo.com/v3/keywords_data/google_trends/categories` */

    category_code?: number | undefined;

    
    /** *starting date of the time range* optional field if you don't specify this field, the current day and month of the preceding year will be used by default minimal value for the `web` type: `2004-01-01` minimal value for other types: `2008-01-01` date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */

    date_from?: string | undefined;

    
    /** *ending date of the time range* optional field if you don't specify this field, the today's date will be used by default date format: `'yyyy-mm-dd'` example: `'2019-01-15'` */

    date_to?: string | undefined;

    
    /** *preset time ranges* optional field if you specify `date_from` or `date_to` parameters, this field will be ignored when setting a task *possible values for all `type` parameters:* `past_hour`, `past_4_hours`, `past_day`, `past_7_days`, `past_30_days`, `past_90_days`, `past_12_months`, `past_5_years` *possible values for `web` only:* `2004_present` *possible values for `news`, `youtube`, `images`, `froogle`:* `2008_present` */

    time_range?: string | undefined;

    
    /** *types of items returned* optional field to speed up the execution of the request, specify one item at a time; possible values: `'google_trends_graph'`, `'google_trends_map'`, `'google_trends_topics_list'`,`'google_trends_queries_list'` default value: `'google_trends_graph'` **Note:** to obtain `google_trends_topics_list` and `google_trends_queries_list` items, specify no more than 1 keyword in the `keywords` field */

    item_types?: string[] | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleTrendsExploreLiveRequestInfo) {

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
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.type = data["type"];
            this.category_code = data["category_code"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.time_range = data["time_range"];
            this.item_types = data["item_types"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataGoogleTrendsExploreLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleTrendsExploreLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["type"] = this.type;
        data["category_code"] = this.category_code;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["time_range"] = this.time_range;
        data["item_types"] = this.item_types;
        data["tag"] = this.tag;
        return data;
    }
}