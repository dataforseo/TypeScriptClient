export interface IAiOptimizationChatGptLlmScraperTaskPostRequestInfo   {
        
        /** keywordrequired fieldyou can specify up to 2000 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** full name of search engine locationrequired field if you don't specify location_codeif you use this field, you don't need to specify location_codeyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/locationsexample:United States */
        location_name?: string | undefined
        
        /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/locationsexample:2840 */
        location_code?: number | undefined
        
        /** full name of search engine languagerequired field if you don't specify language_code;if you use this field, you don't need to specify language_code;you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languages */
        language_name?: string | undefined
        
        /** search engine language coderequired field if you don't specify language_name;if you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languagesn */
        language_code?: string | undefined
        
        /** force AI agent to use web searchoptional fieldwhen enabled, the AI model is forced to access and cite current web information;default value: false;Note: even if the parameter is set to true, there is no guarantee web sources will be cited in the response */
        force_web_search?: boolean | undefined
        
        /** return expanded citation bar in HTML resultsoptional fieldto enable this parameter, force_web_search must also be enabled;when enabled, the HTML endpoint will return data from the expanded citation bar;default value: false */
        expand_citations?: boolean | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced, html */
        postback_data?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmScraperTaskPostRequestInfo  implements IAiOptimizationChatGptLlmScraperTaskPostRequestInfo {
    
    /** keywordrequired fieldyou can specify up to 2000 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** task priorityoptional fieldcan take the following values:1 – normal execution priority (set by default)2 – high execution priorityYou will be additionally charged for the tasks with high execution priority.The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** full name of search engine locationrequired field if you don't specify location_codeif you use this field, you don't need to specify location_codeyou can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/locationsexample:United States */

    location_name?: string | undefined;
    
    /** search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/locationsexample:2840 */

    location_code?: number | undefined;
    
    /** full name of search engine languagerequired field if you don't specify language_code;if you use this field, you don't need to specify language_code;you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languages */

    language_name?: string | undefined;
    
    /** search engine language coderequired field if you don't specify language_name;if you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_scraper/languagesn */

    language_code?: string | undefined;
    
    /** force AI agent to use web searchoptional fieldwhen enabled, the AI model is forced to access and cite current web information;default value: false;Note: even if the parameter is set to true, there is no guarantee web sources will be cited in the response */

    force_web_search?: boolean | undefined;
    
    /** return expanded citation bar in HTML resultsoptional fieldto enable this parameter, force_web_search must also be enabled;when enabled, the HTML endpoint will return data from the expanded citation bar;default value: false */

    expand_citations?: boolean | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special characters in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatyperequired field if you specify postback_urlcorresponds to the function you used for setting a taskpossible values:advanced, html */

    postback_data?: string | undefined;
    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special characters in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmScraperTaskPostRequestInfo) {

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
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.force_web_search = data["force_web_search"];
            this.expand_citations = data["expand_citations"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmScraperTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmScraperTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["force_web_search"] = this.force_web_search;
        data["expand_citations"] = this.expand_citations;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}