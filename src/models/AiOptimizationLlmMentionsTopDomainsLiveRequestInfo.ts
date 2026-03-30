import { BaseAiOptimizationLLmMentionsTargetElement, IBaseAiOptimizationLLmMentionsTargetElement } from "./BaseAiOptimizationLLmMentionsTargetElement";


export interface IAiOptimizationLlmMentionsTopDomainsLiveRequestInfo   {
        
        /** array of objects containing target entities
required field
you can specify up to 10 entities (objects) in the target field
one target entity can contain either one domain or one keyword and related parameters
examples:

target array with a domain entity */
        target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined
        
        /** target domain
required field if you don’t specify keyword
you can specify up to 63 characters in the domain field;
a domain should be specified without https:// and www. */
        domain?: string | undefined
        
        /** target keyword search filter
optional field
possible values:
include, exclude
default value: include */
        search_filter?: string | undefined
        
        /** target keyword search scope
optional field
possible values:
any, question, answer, brand_entities, fan_out_queries
default value: any */
        search_scope?: string[] | undefined
        
        /** indicates if the subdomains of the target domain will be included in the search
optional field
if set to true, the subdomains will be included in the search
default value: false */
        include_subdomains?: boolean | undefined
        
        /** target keyword
required field if you don’t specify domain
you can specify up to 250 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** target keyword match type
optional field
possible values:
word_match, partial_match
word_match – full-text search for terms that match the specified seed keyword with additional words included before, after, or within the seed key phrase.
partial_match – searches for any occurrence of the keyword or its parts within the content
default value: word_match */
        match_type?: string | undefined
        
        /** full name of search location
optional field
if you use this field, you don’t need to specify location_code
if you don’t specify this field, the location_code with 2840 value will be used by default;
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for United States only */
        location_name?: string | undefined
        
        /** search location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: 2840
Note: chat_gpt data is available for 2840 only */
        location_code?: number | undefined
        
        /** full name of search language
optional field
if you use this field, you don’t need to specify language_code;
if you don’t specify this field, the language_code with en value will be used by default;
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for English only */
        language_name?: string | undefined
        
        /** search language code
optional field
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: en
Note: chat_gpt data is available for en only */
        language_code?: string | undefined
        
        /** target platform
optional field
possible values:
chat_gpt, google
default value: google
Note: the data returned depends on the selected platform
Note #2:chat_gpt data is available for the United States and English only */
        platform?: string | undefined
        
        /** links source scope
optional field
this parameter specifies which links will be used to extract domains and aggregation data
possible values: sources, search_results
default value: sources */
        links_scope?: string | undefined
        
        /** array of filter expressions applied before aggregation
optional field
you can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result;
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
=, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['ai_search_volume','>','1000']
The full list of possible filters is available here. */
        initial_dataset_filters?: any[] | undefined
        
        /** maximum number of results in the items array
optional field
you can use this parameter to limit the number of data objects you receive in the items array
minimum value: 1
maximum value: 10
default value: 5 */
        items_list_limit?: number | undefined
        
        /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
sources_domain
search_results_domain
minimum value: 1
maximum value: 10
default value: 5 */
        internal_list_limit?: number | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTopDomainsLiveRequestInfo  implements IAiOptimizationLlmMentionsTopDomainsLiveRequestInfo {
    
    /** array of objects containing target entities
required field
you can specify up to 10 entities (objects) in the target field
one target entity can contain either one domain or one keyword and related parameters
examples:

target array with a domain entity */

    target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined;
    
    /** target domain
required field if you don’t specify keyword
you can specify up to 63 characters in the domain field;
a domain should be specified without https:// and www. */

    domain?: string | undefined;
    
    /** target keyword search filter
optional field
possible values:
include, exclude
default value: include */

    search_filter?: string | undefined;
    
    /** target keyword search scope
optional field
possible values:
any, question, answer, brand_entities, fan_out_queries
default value: any */

    search_scope?: string[] | undefined;
    
    /** indicates if the subdomains of the target domain will be included in the search
optional field
if set to true, the subdomains will be included in the search
default value: false */

    include_subdomains?: boolean | undefined;
    
    /** target keyword
required field if you don’t specify domain
you can specify up to 250 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** target keyword match type
optional field
possible values:
word_match, partial_match
word_match – full-text search for terms that match the specified seed keyword with additional words included before, after, or within the seed key phrase.
partial_match – searches for any occurrence of the keyword or its parts within the content
default value: word_match */

    match_type?: string | undefined;
    
    /** full name of search location
optional field
if you use this field, you don’t need to specify location_code
if you don’t specify this field, the location_code with 2840 value will be used by default;
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for United States only */

    location_name?: string | undefined;
    
    /** search location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: 2840
Note: chat_gpt data is available for 2840 only */

    location_code?: number | undefined;
    
    /** full name of search language
optional field
if you use this field, you don’t need to specify language_code;
if you don’t specify this field, the language_code with en value will be used by default;
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for English only */

    language_name?: string | undefined;
    
    /** search language code
optional field
if you use this field, you don’t need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: en
Note: chat_gpt data is available for en only */

    language_code?: string | undefined;
    
    /** target platform
optional field
possible values:
chat_gpt, google
default value: google
Note: the data returned depends on the selected platform
Note #2:chat_gpt data is available for the United States and English only */

    platform?: string | undefined;
    
    /** links source scope
optional field
this parameter specifies which links will be used to extract domains and aggregation data
possible values: sources, search_results
default value: sources */

    links_scope?: string | undefined;
    
    /** array of filter expressions applied before aggregation
optional field
you can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result;
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
=, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['ai_search_volume','>','1000']
The full list of possible filters is available here. */

    initial_dataset_filters?: any[] | undefined;
    
    /** maximum number of results in the items array
optional field
you can use this parameter to limit the number of data objects you receive in the items array
minimum value: 1
maximum value: 10
default value: 5 */

    items_list_limit?: number | undefined;
    
    /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
sources_domain
search_results_domain
minimum value: 1
maximum value: 10
default value: 5 */

    internal_list_limit?: number | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopDomainsLiveRequestInfo) {

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
            this.domain = data["domain"];
            this.search_filter = data["search_filter"];
            this.search_scope = data["search_scope"];
            this.include_subdomains = data["include_subdomains"];
            this.keyword = data["keyword"];
            this.match_type = data["match_type"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.platform = data["platform"];
            this.links_scope = data["links_scope"];
            this.initial_dataset_filters = data["initial_dataset_filters"];
            this.items_list_limit = data["items_list_limit"];
            this.internal_list_limit = data["internal_list_limit"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopDomainsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopDomainsLiveRequestInfo();
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
        data["domain"] = this.domain;
        data["search_filter"] = this.search_filter;
        data["search_scope"] = this.search_scope;
        data["include_subdomains"] = this.include_subdomains;
        data["keyword"] = this.keyword;
        data["match_type"] = this.match_type;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["platform"] = this.platform;
        data["links_scope"] = this.links_scope;
        data["initial_dataset_filters"] = this.initial_dataset_filters;
        data["items_list_limit"] = this.items_list_limit;
        data["internal_list_limit"] = this.internal_list_limit;
        data["tag"] = this.tag;
        return data;
    }
}