import { BaseAiOptimizationLLmMentionsTargetElement, IBaseAiOptimizationLLmMentionsTargetElement } from "./BaseAiOptimizationLLmMentionsTargetElement";


export interface IAiOptimizationLlmMentionsHistoricalLiveRequestInfo   {
        
        /** array of objects containing target entities
required field
you can specify up to 10 entities (objects) in the target field
one target entity can contain either one domain or one keyword and related parameters
examples:

target array with a domain entity */
        target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined
        
        /** start date of the time range
optional field
minimal value 2025-08-01
date format 'yyyy-mm-dd' */
        date_from?: string | undefined
        
        /** end date of the time range
optional field
Note value specified in date_from cannot exceed the value in date_to
date format 'yyyy-mm-dd' */
        date_to?: string | undefined
        
        /** full name of search location
optional field
if you use this field, you don't need to specify location_code
if you don't specify this field, the location_code with 2840 value will be used by default;
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for United States only */
        location_name?: string | undefined
        
        /** search location code
optional field
if you use this field, you don't need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: 2840
Note: chat_gpt data is available for 2840 only */
        location_code?: number | undefined
        
        /** full name of search language
optional field
if you use this field, you don't need to specify language_code;
if you don't specify this field, the language_code with en value will be used by default;
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for English only */
        language_name?: string | undefined
        
        /** search language code
optional field
if you use this field, you don't need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: en
Note: chat_gpt data is available for en only */
        language_code?: string | undefined
        
        /** target platform
optional field
possible values:
chat_gpt, google
Note: if the platform is not specified, the data is returned for both platforms
Note #2:chat_gpt data is available for the United States and English only */
        platform?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsHistoricalLiveRequestInfo  implements IAiOptimizationLlmMentionsHistoricalLiveRequestInfo {

    
    /** array of objects containing target entities
required field
you can specify up to 10 entities (objects) in the target field
one target entity can contain either one domain or one keyword and related parameters
examples:

target array with a domain entity */

    target?: BaseAiOptimizationLLmMentionsTargetElement[] | undefined;

    
    /** start date of the time range
optional field
minimal value 2025-08-01
date format 'yyyy-mm-dd' */

    date_from?: string | undefined;

    
    /** end date of the time range
optional field
Note value specified in date_from cannot exceed the value in date_to
date format 'yyyy-mm-dd' */

    date_to?: string | undefined;

    
    /** full name of search location
optional field
if you use this field, you don't need to specify location_code
if you don't specify this field, the location_code with 2840 value will be used by default;
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for United States only */

    location_name?: string | undefined;

    
    /** search location code
optional field
if you use this field, you don't need to specify location_name
you can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: 2840
Note: chat_gpt data is available for 2840 only */

    location_code?: number | undefined;

    
    /** full name of search language
optional field
if you use this field, you don't need to specify language_code;
if you don't specify this field, the language_code with en value will be used by default;
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
Note: chat_gpt data is available for English only */

    language_name?: string | undefined;

    
    /** search language code
optional field
if you use this field, you don't need to specify language_name;
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
default value: en
Note: chat_gpt data is available for en only */

    language_code?: string | undefined;

    
    /** target platform
optional field
possible values:
chat_gpt, google
Note: if the platform is not specified, the data is returned for both platforms
Note #2:chat_gpt data is available for the United States and English only */

    platform?: string | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsHistoricalLiveRequestInfo) {

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
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.platform = data["platform"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsHistoricalLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsHistoricalLiveRequestInfo();
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
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["platform"] = this.platform;
        data["tag"] = this.tag;
        return data;
    }
}