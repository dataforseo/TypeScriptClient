export interface IAiOptimizationChatGptLlmScraperLiveHtmlRequestInfo   {
        
        /** keyword
required field
you can specify up to 2000 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/locations
example:
London,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/locations
example:
2840 */
        location_code?: number | undefined
        
        /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languages
example:
English */
        language_name?: string | undefined
        
        /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languages
example:en */
        language_code?: string | undefined
        
        /** force AI agent to use web search
optional field
when enabled, the AI model is forced to access and cite current web information;
default value: false;
Note: even if the parameter is set to true, there is no guarantee web sources will be cited in the response */
        force_web_search?: boolean | undefined
        
        /** return expanded citation bar in HTML results
optional field
to enable this parameter, force_web_search must also be enabled;
when enabled, the endpoint will return HTML data from the expanded citation bar;
default value: false */
        expand_citations?: boolean | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmScraperLiveHtmlRequestInfo  implements IAiOptimizationChatGptLlmScraperLiveHtmlRequestInfo {
    
    /** keyword
required field
you can specify up to 2000 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/locations
example:
London,England,United Kingdom */

    location_name?: string | undefined;
    
    /** search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/locations
example:
2840 */

    location_code?: number | undefined;
    
    /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languages
example:
English */

    language_name?: string | undefined;
    
    /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languages
example:en */

    language_code?: string | undefined;
    
    /** force AI agent to use web search
optional field
when enabled, the AI model is forced to access and cite current web information;
default value: false;
Note: even if the parameter is set to true, there is no guarantee web sources will be cited in the response */

    force_web_search?: boolean | undefined;
    
    /** return expanded citation bar in HTML results
optional field
to enable this parameter, force_web_search must also be enabled;
when enabled, the endpoint will return HTML data from the expanded citation bar;
default value: false */

    expand_citations?: boolean | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmScraperLiveHtmlRequestInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.force_web_search = data["force_web_search"];
            this.expand_citations = data["expand_citations"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmScraperLiveHtmlRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmScraperLiveHtmlRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["force_web_search"] = this.force_web_search;
        data["expand_citations"] = this.expand_citations;
        data["tag"] = this.tag;
        return data;
    }
}