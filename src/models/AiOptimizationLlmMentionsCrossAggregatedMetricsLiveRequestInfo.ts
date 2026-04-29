import { AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo, IAiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo } from "./AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo";


export interface IAiOptimizationLlmMentionsCrossAggregatedMetricsLiveRequestInfo   {
        
        /** array of objects containing target entities with aggregation keys */
        targets?: AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo[] | undefined
        
        /** full name of search locationoptional fieldif you use this field, you don't need to specify location_codeif you don't specify this field, the location_code with 2840 value will be used by default;you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesNote: chat_gpt data is available for United States only */
        location_name?: string | undefined
        
        /** search location codeoptional fieldif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesdefault value: 2840Note: chat_gpt data is available for 2840 only */
        location_code?: number | undefined
        
        /** full name of search languageoptional fieldif you use this field, you don't need to specify language_code;if you don't specify this field, the language_code with en value will be used by default;you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesNote: chat_gpt data is available for English only */
        language_name?: string | undefined
        
        /** search language codeoptional fieldif you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesdefault value: enNote: chat_gpt data is available for en onlyn */
        language_code?: string | undefined
        
        /** target platformoptional fieldpossible values:chat_gpt, googledefault value: googleNote: the data returned depends on the selected platformNote #2:chat_gpt data is available for the United States and English only */
        platform?: string | undefined
        
        /** array of filter expressions applied before aggregationoptional fieldyou can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result;you can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:=, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_matchyou can use the % operator with like and not_like to match any string of zero or more charactersexample:['ai_search_volume','>','1000']the full list of possible filters is available here.learn more about the initial dataset filters in this help center article. */
        initial_dataset_filters?: any[] | undefined
        
        /** maximum number of elements within internal arraysoptional fieldyou can use this field to limit the number of elements within the following arrays:sources_domainsearch_results_domainminimum value: 1maximum value: 10default value: 5 */
        internal_list_limit?: number | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsCrossAggregatedMetricsLiveRequestInfo  implements IAiOptimizationLlmMentionsCrossAggregatedMetricsLiveRequestInfo {
    
    /** array of objects containing target entities with aggregation keys */

    targets?: AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo[] | undefined;
    
    /** full name of search locationoptional fieldif you use this field, you don't need to specify location_codeif you don't specify this field, the location_code with 2840 value will be used by default;you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesNote: chat_gpt data is available for United States only */

    location_name?: string | undefined;
    
    /** search location codeoptional fieldif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesdefault value: 2840Note: chat_gpt data is available for 2840 only */

    location_code?: number | undefined;
    
    /** full name of search languageoptional fieldif you use this field, you don't need to specify language_code;if you don't specify this field, the language_code with en value will be used by default;you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesNote: chat_gpt data is available for English only */

    language_name?: string | undefined;
    
    /** search language codeoptional fieldif you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languagesdefault value: enNote: chat_gpt data is available for en onlyn */

    language_code?: string | undefined;
    
    /** target platformoptional fieldpossible values:chat_gpt, googledefault value: googleNote: the data returned depends on the selected platformNote #2:chat_gpt data is available for the United States and English only */

    platform?: string | undefined;
    
    /** array of filter expressions applied before aggregationoptional fieldyou can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result;you can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:=, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_matchyou can use the % operator with like and not_like to match any string of zero or more charactersexample:['ai_search_volume','>','1000']the full list of possible filters is available here.learn more about the initial dataset filters in this help center article. */

    initial_dataset_filters?: any[] | undefined;
    
    /** maximum number of elements within internal arraysoptional fieldyou can use this field to limit the number of elements within the following arrays:sources_domainsearch_results_domainminimum value: 1maximum value: 10default value: 5 */

    internal_list_limit?: number | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsCrossAggregatedMetricsLiveRequestInfo) {

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
                    this.targets.push(AiOptimizationLLmMentionsCrossAggregateMetricsTargetInfo.fromJS(item));
                }
            }
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.platform = data["platform"];
            this.initial_dataset_filters = data["initial_dataset_filters"];
            this.internal_list_limit = data["internal_list_limit"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsCrossAggregatedMetricsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsCrossAggregatedMetricsLiveRequestInfo();
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
        data["initial_dataset_filters"] = this.initial_dataset_filters;
        data["internal_list_limit"] = this.internal_list_limit;
        data["tag"] = this.tag;
        return data;
    }
}