import { BaseAiOptimizationLLmMentionsTargetElement, IBaseAiOptimizationLLmMentionsTargetElement } from "./BaseAiOptimizationLLmMentionsTargetElement";


export interface IAiOptimizationLlmMentionsSearchMentionsLiveRequestInfo   {
        
        /** array of objects containing target entities required field you can specify up to 10 entities (objects) in the target field one target entity can contain either one domain or one keyword and related parameters examples: target array with a domain entity */
        target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined
        
        /** *full name of search location* optional field if you use this field, you don't need to specify `location_code` if you don't specify this field, the `location_code` with `2840` value will be used by default; you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `United States` only */
        location_name?: string | undefined
        
        /** *search location code* optional field if you use this field, you don't need to specify `location_name` you can receive the list of available locations of the search engine with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `2840` Note: `chat_gpt` data is available for `2840` only */
        location_code?: number | undefined
        
        /** *full name of search language* optional field if you use this field, you don't need to specify `language_code`; if you don't specify this field, the `language_code` with `en` value will be used by default; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `English` only */
        language_name?: string | undefined
        
        /** *search language code* optional field if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `en` Note: `chat_gpt` data is available for `en` only */
        language_code?: string | undefined
        
        /** *target platform* optional field possible values: `chat_gpt`, `google` **Note:** if the `platform` is not specified, the data is returned for both platforms **Note #2:**`chat_gpt` data is available for the `United States` and `English` only */
        platform?: string | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['ai_search_volume','>',1000]` The full list of possible filters is available [here.](/v3/ai_optimization/llm_mentions/filters/) */
        filters?: any[] | undefined
        
        /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['ai_search_volume,desc']` **Note:** you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules */
        order_by?: string[] | undefined
        
        /** *offset in the results array of the returned mentions data* optional field default value: `0` example: if you specify the `10` value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects; **Note:** the maximum value is `1000000`, use the `search_after_token` if you would like to offset more results */
        offset?: number | undefined
        
        /** *token for subsequent requests* optional field provided in the identical filed of the response to each request; use this parameter to avoid timeouts while trying to obtain over `1000` results in a single request; by specifying the unique `search_after_token` value from the response array, you will get the subsequent results of the initial task; `search_after_token` values are unique for each subsequent task ; **Note:** if the `search_after_token` is specified in the request, all other parameters should be identical to the previous request */
        search_after_token?: string | undefined
        
        /** *the maximum number of returned objects* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsSearchMentionsLiveRequestInfo  implements IAiOptimizationLlmMentionsSearchMentionsLiveRequestInfo {

    
    /** array of objects containing target entities required field you can specify up to 10 entities (objects) in the target field one target entity can contain either one domain or one keyword and related parameters examples: target array with a domain entity */

    target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined;

    
    /** *full name of search location* optional field if you use this field, you don't need to specify `location_code` if you don't specify this field, the `location_code` with `2840` value will be used by default; you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `United States` only */

    location_name?: string | undefined;

    
    /** *search location code* optional field if you use this field, you don't need to specify `location_name` you can receive the list of available locations of the search engine with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `2840` Note: `chat_gpt` data is available for `2840` only */

    location_code?: number | undefined;

    
    /** *full name of search language* optional field if you use this field, you don't need to specify `language_code`; if you don't specify this field, the `language_code` with `en` value will be used by default; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `English` only */

    language_name?: string | undefined;

    
    /** *search language code* optional field if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `en` Note: `chat_gpt` data is available for `en` only */

    language_code?: string | undefined;

    
    /** *target platform* optional field possible values: `chat_gpt`, `google` **Note:** if the `platform` is not specified, the data is returned for both platforms **Note #2:**`chat_gpt` data is available for the `United States` and `English` only */

    platform?: string | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['ai_search_volume','>',1000]` The full list of possible filters is available [here.](/v3/ai_optimization/llm_mentions/filters/) */

    filters?: any[] | undefined;

    
    /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['ai_search_volume,desc']` **Note:** you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules */

    order_by?: string[] | undefined;

    
    /** *offset in the results array of the returned mentions data* optional field default value: `0` example: if you specify the `10` value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects; **Note:** the maximum value is `1000000`, use the `search_after_token` if you would like to offset more results */

    offset?: number | undefined;

    
    /** *token for subsequent requests* optional field provided in the identical filed of the response to each request; use this parameter to avoid timeouts while trying to obtain over `1000` results in a single request; by specifying the unique `search_after_token` value from the response array, you will get the subsequent results of the initial task; `search_after_token` values are unique for each subsequent task ; **Note:** if the `search_after_token` is specified in the request, all other parameters should be identical to the previous request */

    search_after_token?: string | undefined;

    
    /** *the maximum number of returned objects* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsSearchMentionsLiveRequestInfo) {

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
            if (Array.isArray(data["target"])) {
                this.target = [];
                for (let item of data["target"]) {
                    this.target.push(BaseAiOptimizationLLmMentionsTargetElement.fromJS(item));
                }
            }
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.platform = data["platform"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.offset = data["offset"];
            this.search_after_token = data["search_after_token"];
            this.limit = data["limit"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsSearchMentionsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsSearchMentionsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = null;
        if (Array.isArray(this.target)) {
            data["target"] = [];
            for (let item of this.target) {
                if (item && typeof item.toJSON === "function") {
                    data["target"].push(item?.toJSON());
                }
            }
        }
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["platform"] = this.platform;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["offset"] = this.offset;
        data["search_after_token"] = this.search_after_token;
        data["limit"] = this.limit;
        data["tag"] = this.tag;
        return data;
    }
}