export interface IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo   {
        
        /** *target domain* **required field** the domain name of the target website the domain should be specified without `https://` */
        target?: string | undefined
        
        /** *full name of the location* **required field if you don't specify** `location_code` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `United Kingdom` */
        location_name?: string | undefined
        
        /** *unique location identifier* **required field if you don't specify** `location_name` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `2840` */
        location_code?: number | undefined
        
        /** *full name of the language* optional field if you use this field, you don't need to specify `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `English` **Note:** if omitted, results default to the language with the most keyword records in the specified location; refer to the `available_languages.keywords` field of the [Locations and Languages endpoint](https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages) to determine the default language */
        language_name?: string | undefined
        
        /** *language code* optional field if you use this field, you don't need to specify `language_name` you can receive the list of available languages with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `en` **Note:** if omitted, results default to the language with the most keyword records in the specified location; refer to the `available_languages.keywords` field of the [Locations and Languages endpoint](https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages) to determine the default language */
        language_code?: string | undefined
        
        /** *include data from SERP for each keyword* optional field if set to `true`, we will return a `serp_info` array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response default value: `false` */
        include_serp_info?: boolean | undefined
        
        /** *indicates if the subdomains will be included in the search* optional field if set to `false`, the subdomains will be ignored default value: `true` */
        include_subdomains?: boolean | undefined
        
        /** *include or exclude data from clickstream-based metrics in the result* optional field if the parameter is set to_`true`, you will receive `clickstream_keyword_info`, `keyword_info_normalized_with_clickstream`, and `keyword_info_normalized_with_bing` fields in the response default value: `false` with this parameter enabled, you will be charged double the price for the request learn more about how clickstream-based metrics are calculated in this [help center article](https://dataforseo.com/help-center/what-are-clickstream-based-metrics-and-how-do-we-calculate-them)n' */
        include_clickstream_data?: boolean | undefined
        
        /** *the maximum number of keywords in the results array* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *offset in the results array of returned keywords* optional field default value: `0` if you specify the `10` value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords **Note:** we recommend using this parameter only when retrieving up to 10,000 results for retrieving over 10,000 results, use the `offset_token` instead. */
        offset?: number | undefined
        
        /** *offset token for subsequent requests* optional field provided in the identical filed of the response to each request; use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request; by specifying the unique `offset_token` value from the response array, you will get the subsequent results of the initial task; `offset_token` values are unique for each subsequent task **Note:** if the `offset_token` is specified in the request, all other parameters except `limit` will not be taken into account when processing a task. learn more about this parameter on our [Help Center](https://dataforseo.com/help-center/what-is-the-difference-between-the-offset-and-offset_token-parameters#offset_token) */
        offset_token?: string | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, ``, `>=`, `=`, `<>`, `in`, `not_in`, `match`, `not_match`, `ilike`, `not_ilike`, `like`, `not_like` you can use the `%` operator with `like` and `not_like`, as well as `ilike` and `not_ilike` to match any string of zero or more characters **note that you can not filter the results by `relevance`** example: `['keyword_info.search_volume','>',0]` for more information about filters, please refer to [Dataforseo Labs - Filters](/v3/dataforseo_labs/filters) or this [help center guide](https://dataforseo.com/help-center/how-to-use-filters-in-dataforseo-labs-api) */
        filters?: any[] | undefined
        
        /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting parameter default rule: `['relevance,desc']` relevance is used as the default sorting rule to provide you with the closest keyword ideas. We recommend using this sorting rule to get highly-relevant search terms. **Note** that `relevance` is only our internal system identifier, so **it can not be used as a filter**, and you will not find this field in the `result` array. The relevance score is based on a similar principle as used in [the Keywords For Keywords](/v3/keywords_data/google/keywords_for_keywords/live/?php) endpoint.**note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['relevance,desc','keyword_info.search_volume,desc']` */
        order_by?: string[] | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo  implements IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo {

    
    /** *target domain* **required field** the domain name of the target website the domain should be specified without `https://` */

    target?: string | undefined;

    
    /** *full name of the location* **required field if you don't specify** `location_code` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `United Kingdom` */

    location_name?: string | undefined;

    
    /** *unique location identifier* **required field if you don't specify** `location_name` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `2840` */

    location_code?: number | undefined;

    
    /** *full name of the language* optional field if you use this field, you don't need to specify `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `English` **Note:** if omitted, results default to the language with the most keyword records in the specified location; refer to the `available_languages.keywords` field of the [Locations and Languages endpoint](https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages) to determine the default language */

    language_name?: string | undefined;

    
    /** *language code* optional field if you use this field, you don't need to specify `language_name` you can receive the list of available languages with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` example: `en` **Note:** if omitted, results default to the language with the most keyword records in the specified location; refer to the `available_languages.keywords` field of the [Locations and Languages endpoint](https://docs.dataforseo.com/v3/dataforseo_labs/locations_and_languages) to determine the default language */

    language_code?: string | undefined;

    
    /** *include data from SERP for each keyword* optional field if set to `true`, we will return a `serp_info` array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response default value: `false` */

    include_serp_info?: boolean | undefined;

    
    /** *indicates if the subdomains will be included in the search* optional field if set to `false`, the subdomains will be ignored default value: `true` */

    include_subdomains?: boolean | undefined;

    
    /** *include or exclude data from clickstream-based metrics in the result* optional field if the parameter is set to_`true`, you will receive `clickstream_keyword_info`, `keyword_info_normalized_with_clickstream`, and `keyword_info_normalized_with_bing` fields in the response default value: `false` with this parameter enabled, you will be charged double the price for the request learn more about how clickstream-based metrics are calculated in this [help center article](https://dataforseo.com/help-center/what-are-clickstream-based-metrics-and-how-do-we-calculate-them)n' */

    include_clickstream_data?: boolean | undefined;

    
    /** *the maximum number of keywords in the results array* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *offset in the results array of returned keywords* optional field default value: `0` if you specify the `10` value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords **Note:** we recommend using this parameter only when retrieving up to 10,000 results for retrieving over 10,000 results, use the `offset_token` instead. */

    offset?: number | undefined;

    
    /** *offset token for subsequent requests* optional field provided in the identical filed of the response to each request; use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request; by specifying the unique `offset_token` value from the response array, you will get the subsequent results of the initial task; `offset_token` values are unique for each subsequent task **Note:** if the `offset_token` is specified in the request, all other parameters except `limit` will not be taken into account when processing a task. learn more about this parameter on our [Help Center](https://dataforseo.com/help-center/what-is-the-difference-between-the-offset-and-offset_token-parameters#offset_token) */

    offset_token?: string | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, ``, `>=`, `=`, `<>`, `in`, `not_in`, `match`, `not_match`, `ilike`, `not_ilike`, `like`, `not_like` you can use the `%` operator with `like` and `not_like`, as well as `ilike` and `not_ilike` to match any string of zero or more characters **note that you can not filter the results by `relevance`** example: `['keyword_info.search_volume','>',0]` for more information about filters, please refer to [Dataforseo Labs - Filters](/v3/dataforseo_labs/filters) or this [help center guide](https://dataforseo.com/help-center/how-to-use-filters-in-dataforseo-labs-api) */

    filters?: any[] | undefined;

    
    /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting parameter default rule: `['relevance,desc']` relevance is used as the default sorting rule to provide you with the closest keyword ideas. We recommend using this sorting rule to get highly-relevant search terms. **Note** that `relevance` is only our internal system identifier, so **it can not be used as a filter**, and you will not find this field in the `result` array. The relevance score is based on a similar principle as used in [the Keywords For Keywords](/v3/keywords_data/google/keywords_for_keywords/live/?php) endpoint.**note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['relevance,desc','keyword_info.search_volume,desc']` */

    order_by?: string[] | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo) {

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
            this.target = data["target"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.include_serp_info = data["include_serp_info"];
            this.include_subdomains = data["include_subdomains"];
            this.include_clickstream_data = data["include_clickstream_data"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["include_serp_info"] = this.include_serp_info;
        data["include_subdomains"] = this.include_subdomains;
        data["include_clickstream_data"] = this.include_clickstream_data;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}