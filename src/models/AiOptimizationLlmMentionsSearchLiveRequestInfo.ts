import { BaseAiOptimizationLLmMentionsTargetElement, IBaseAiOptimizationLLmMentionsTargetElement } from "./BaseAiOptimizationLLmMentionsTargetElement";


export interface IAiOptimizationLlmMentionsSearchLiveRequestInfo   {
        
        /** array of objects containing target entities
required field
you can specify up to 10 entities (objects) in the target field
one target entity can contain either one domain or one keyword and related parameters
examples:

target array with a domain entity */
        target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined
        
        /** domain entity in the target arrayexample:{'domain': 'en.wikipedia.org', 'search_filter': 'exclude', 'search_scope': ['sources']} */
        domain_entity?: any | undefined
        
        /** target domainrequired field if you don't specify keywordyou can specify up to 63 characters in the domain field;a domain should be specified without https:// and www. */
        domain?: string | undefined
        
        /** target keyword search filteroptional fieldpossible values:include, excludedefault value: include */
        search_filter?: string | undefined
        
        /** target keyword search scopeoptional fieldpossible values:any, question, answer, brand_entities, fan_out_queriesdefault value: any */
        search_scope?: string[] | undefined
        
        /** indicates if the subdomains of the target domain will be included in the searchoptional fieldif set to true, the subdomains will be included in the searchdefault value: false */
        include_subdomains?: boolean | undefined
        
        /** keyword entity in the target arrayexample:{'keyword': 'bmw', 'search_filter': 'include', 'search_scope': ['question'], 'match_type ': 'partial_match'} */
        keyword_entity?: any | undefined
        
        /** target keywordrequired field if you don't specify domainyou can specify up to 250 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** target keyword match typedefines how the specified keyword is matchedoptional fieldpossible values:word_match - full-text search for terms that match the specified seed keyword with additional words included before, after, or within the key phrase (e.g., search for 'light' will return results with 'light bulb', 'light switch');partial_match - substring search that finds all instances containing the specified sequence of characters, even if it appears inside a longer word (e.g., search for 'light' will return results with 'lighting', 'highlight');default value: word_match */
        match_type?: string | undefined
        
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
        
        /** array of results filtering parametersoptional fieldyou can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:=, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_matchyou can use the % operator with like and not_like to match any string of zero or more charactersexample:['ai_search_volume','>','1000']The full list of possible filters is available here. */
        filters?: any[] | undefined
        
        /** results sorting rulesoptional fieldyou can use the same values as in the filters array to sort the resultspossible sorting types:asc - results will be sorted in the ascending orderdesc - results will be sorted in the descending orderyou should use a comma to set up a sorting typeexample:['ai_search_volume,desc']note that you can set no more than three sorting rules in a single requestyou should use a comma to separate several sorting rules */
        order_by?: string[] | undefined
        
        /** offset in the results array of the returned mentions dataoptional fielddefault value: 0example: if you specify the 10 value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects;Note: the maximum value is 9,000, use the search_after_token if you would like to offset more results */
        offset?: number | undefined
        
        /** token for subsequent requestsoptional fieldprovided in the identical filed of the response to each request;use this parameter to avoid timeouts while trying to obtain over 20,000 results in a single request;by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;search_after_token values are unique for each subsequent task ;Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request */
        search_after_token?: string | undefined
        
        /** the maximum number of returned objectsoptional fielddefault value: 100maximum value: 1000 */
        limit?: number | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsSearchLiveRequestInfo  implements IAiOptimizationLlmMentionsSearchLiveRequestInfo {
    
    /** array of objects containing target entities
required field
you can specify up to 10 entities (objects) in the target field
one target entity can contain either one domain or one keyword and related parameters
examples:

target array with a domain entity */

    target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined;
    
    /** domain entity in the target arrayexample:{'domain': 'en.wikipedia.org', 'search_filter': 'exclude', 'search_scope': ['sources']} */

    domain_entity?: any | undefined;
    
    /** target domainrequired field if you don't specify keywordyou can specify up to 63 characters in the domain field;a domain should be specified without https:// and www. */

    domain?: string | undefined;
    
    /** target keyword search filteroptional fieldpossible values:include, excludedefault value: include */

    search_filter?: string | undefined;
    
    /** target keyword search scopeoptional fieldpossible values:any, question, answer, brand_entities, fan_out_queriesdefault value: any */

    search_scope?: string[] | undefined;
    
    /** indicates if the subdomains of the target domain will be included in the searchoptional fieldif set to true, the subdomains will be included in the searchdefault value: false */

    include_subdomains?: boolean | undefined;
    
    /** keyword entity in the target arrayexample:{'keyword': 'bmw', 'search_filter': 'include', 'search_scope': ['question'], 'match_type ': 'partial_match'} */

    keyword_entity?: any | undefined;
    
    /** target keywordrequired field if you don't specify domainyou can specify up to 250 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** target keyword match typedefines how the specified keyword is matchedoptional fieldpossible values:word_match - full-text search for terms that match the specified seed keyword with additional words included before, after, or within the key phrase (e.g., search for 'light' will return results with 'light bulb', 'light switch');partial_match - substring search that finds all instances containing the specified sequence of characters, even if it appears inside a longer word (e.g., search for 'light' will return results with 'lighting', 'highlight');default value: word_match */

    match_type?: string | undefined;
    
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
    
    /** array of results filtering parametersoptional fieldyou can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:=, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_matchyou can use the % operator with like and not_like to match any string of zero or more charactersexample:['ai_search_volume','>','1000']The full list of possible filters is available here. */

    filters?: any[] | undefined;
    
    /** results sorting rulesoptional fieldyou can use the same values as in the filters array to sort the resultspossible sorting types:asc - results will be sorted in the ascending orderdesc - results will be sorted in the descending orderyou should use a comma to set up a sorting typeexample:['ai_search_volume,desc']note that you can set no more than three sorting rules in a single requestyou should use a comma to separate several sorting rules */

    order_by?: string[] | undefined;
    
    /** offset in the results array of the returned mentions dataoptional fielddefault value: 0example: if you specify the 10 value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects;Note: the maximum value is 9,000, use the search_after_token if you would like to offset more results */

    offset?: number | undefined;
    
    /** token for subsequent requestsoptional fieldprovided in the identical filed of the response to each request;use this parameter to avoid timeouts while trying to obtain over 20,000 results in a single request;by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;search_after_token values are unique for each subsequent task ;Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request */

    search_after_token?: string | undefined;
    
    /** the maximum number of returned objectsoptional fielddefault value: 100maximum value: 1000 */

    limit?: number | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsSearchLiveRequestInfo) {

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
            this.domain_entity = data["domain_entity"];
            this.domain = data["domain"];
            this.search_filter = data["search_filter"];
            this.search_scope = data["search_scope"];
            this.include_subdomains = data["include_subdomains"];
            this.keyword_entity = data["keyword_entity"];
            this.keyword = data["keyword"];
            this.match_type = data["match_type"];
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

    static fromJS(data: any): AiOptimizationLlmMentionsSearchLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsSearchLiveRequestInfo();
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
        data["domain_entity"] = this.domain_entity;
        data["domain"] = this.domain;
        data["search_filter"] = this.search_filter;
        data["search_scope"] = this.search_scope;
        data["include_subdomains"] = this.include_subdomains;
        data["keyword_entity"] = this.keyword_entity;
        data["keyword"] = this.keyword;
        data["match_type"] = this.match_type;
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