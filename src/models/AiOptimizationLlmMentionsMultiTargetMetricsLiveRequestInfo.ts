import { AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo, IAiOptimizationLLmMentionsMultiTargetMetricsRequestInfo } from "./AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo";


export interface IAiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo   {
        
        targets?: AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo[] | undefined
        
        /** *full name of search location* optional field if you use this field, you don't need to specify `location_code` if you don't specify this field, the `location_code` with `2840` value will be used by default; you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `United States` only */
        location_name?: string | undefined
        
        /** *search location code* optional field if you use this field, you don't need to specify `location_name` you can receive the list of available locations of the search engine with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `2840` Note: `chat_gpt` data is available for `2840` only */
        location_code?: number | undefined
        
        /** *full name of search language* optional field if you use this field, you don't need to specify `language_code`; if you don't specify this field, the `language_code` with `en` value will be used by default; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `English` only */
        language_name?: string | undefined
        
        /** *search language code* optional field if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `en` Note: `chat_gpt` data is available for `en` only */
        language_code?: string | undefined
        
        /** *target platform* optional field possible values: `chat_gpt`, `google` default value: `google` **Note:** if the `platform` is not specified, the data is returned for both platforms **Note #2:**`chat_gpt` data is available for the `United States` and `English` only */
        platform?: string | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['ai_search_volume','>',1000]` The full list of possible filters is available [here.](/v3/ai_optimization/llm_mentions/filters/) */
        filters?: any[] | undefined
        
        /** *array of filter expressions applied before aggregation* optional field you can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result; **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['ai_search_volume','>',1000]` the full list of possible filters is available [here.](/v3/ai_optimization/llm_mentions/filters) learn more about the initial dataset filters in [this help center article.](https://dataforseo.com/help-center/what-are-the-initial-dataset-filters-and-how-do-they-work) */
        initial_dataset_filters?: any[] | undefined
        
        /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['ai_search_volume,desc']` **Note:** you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules */
        order_by?: string[] | undefined
        
        /** *the maximum number of returned objects* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *offset in the results array of the returned mentions data* optional field default value: `0` example: if you specify the `10` value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects; **Note:** the maximum value is `1000000`, use the `search_after_token` if you would like to offset more results */
        offset?: number | undefined
        
        /** *maximum number of elements within internal arrays* optional field you can use this field to limit the number of elements within the following arrays: `sources_domain` `search_results_domain` minimum value: `1` maximum value: `10` default value: `5` */
        internal_list_limit?: number | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo  implements IAiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo {

    targets?: AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo[] | undefined;

    
    /** *full name of search location* optional field if you use this field, you don't need to specify `location_code` if you don't specify this field, the `location_code` with `2840` value will be used by default; you can receive the list of available locations of the search engine with their `location_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `United States` only */

    location_name?: string | undefined;

    
    /** *search location code* optional field if you use this field, you don't need to specify `location_name` you can receive the list of available locations of the search engine with their `location_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `2840` Note: `chat_gpt` data is available for `2840` only */

    location_code?: number | undefined;

    
    /** *full name of search language* optional field if you use this field, you don't need to specify `language_code`; if you don't specify this field, the `language_code` with `en` value will be used by default; you can receive the list of available languages of the search engine with their `language_name` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` Note: `chat_gpt` data is available for `English` only */

    language_name?: string | undefined;

    
    /** *search language code* optional field if you use this field, you don't need to specify `language_name`; you can receive the list of available languages of the search engine with their `language_code` by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages` default value: `en` Note: `chat_gpt` data is available for `en` only */

    language_code?: string | undefined;

    
    /** *target platform* optional field possible values: `chat_gpt`, `google` default value: `google` **Note:** if the `platform` is not specified, the data is returned for both platforms **Note #2:**`chat_gpt` data is available for the `United States` and `English` only */

    platform?: string | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['ai_search_volume','>',1000]` The full list of possible filters is available [here.](/v3/ai_optimization/llm_mentions/filters/) */

    filters?: any[] | undefined;

    
    /** *array of filter expressions applied before aggregation* optional field you can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result; **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['ai_search_volume','>',1000]` the full list of possible filters is available [here.](/v3/ai_optimization/llm_mentions/filters) learn more about the initial dataset filters in [this help center article.](https://dataforseo.com/help-center/what-are-the-initial-dataset-filters-and-how-do-they-work) */

    initial_dataset_filters?: any[] | undefined;

    
    /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['ai_search_volume,desc']` **Note:** you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules */

    order_by?: string[] | undefined;

    
    /** *the maximum number of returned objects* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *offset in the results array of the returned mentions data* optional field default value: `0` example: if you specify the `10` value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects; **Note:** the maximum value is `1000000`, use the `search_after_token` if you would like to offset more results */

    offset?: number | undefined;

    
    /** *maximum number of elements within internal arrays* optional field you can use this field to limit the number of elements within the following arrays: `sources_domain` `search_results_domain` minimum value: `1` maximum value: `10` default value: `5` */

    internal_list_limit?: number | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo) {

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
            if (Array.isArray(data["targets"])) {
                this.targets = [];
                for (let item of data["targets"]) {
                    this.targets.push(AiOptimizationLLmMentionsMultiTargetMetricsRequestInfo.fromJS(item));
                }
            }
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.platform = data["platform"];
            this.filters = data["filters"];
            this.initial_dataset_filters = data["initial_dataset_filters"];
            this.order_by = data["order_by"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.internal_list_limit = data["internal_list_limit"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsMultiTargetMetricsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["targets"] = null;
        if (Array.isArray(this.targets)) {
            data["targets"] = [];
            for (let item of this.targets) {
                if (item && typeof item.toJSON === "function") {
                    data["targets"].push(item?.toJSON());
                }
            }
        }
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["platform"] = this.platform;
        data["filters"] = this.filters;
        data["initial_dataset_filters"] = this.initial_dataset_filters;
        data["order_by"] = this.order_by;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["internal_list_limit"] = this.internal_list_limit;
        data["tag"] = this.tag;
        return data;
    }
}