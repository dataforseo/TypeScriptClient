import { LlmMessageChainItem, ILlmMessageChainItem } from "./LlmMessageChainItem";


export interface IAiOptimizationChatGptLlmResponsesLiveRequestInfo   {
        
        /** *prompt for the AI model* **required field** the question or task you want to send to the AI model; you can specify **up to 500 characters** in the `user_prompt` field */
        user_prompt?: string | undefined
        
        /** *name of the AI model* **required field** `model_nameconsists of the actual model name and version name;if the basic model name is specified, its latest version will be set by default;for example, if gpt-4.1` is specified, the `gpt-4.1-2025-04-14` will be set as `model_name` automatically; you can receive the list of available LLM models by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/models` */
        model_name?: string | undefined
        
        /** *maximum number of tokens in the AI response* optional field minimum value for reasoning models (e.g., `reasoning` is `true` in the [Models endpoint](/v3/ai_optimization/chat_gpt/llm_responses/models/)): `1024`; minimum value for non-reasoning models: `16`; maximum value: `4096`; default value: `2048` **Note:** if `web_search` is set to `true` or the reasoning model is specified in the request, the output token count may exceed the specified `max_output_tokens` limit */
        max_output_tokens?: number | undefined
        
        /** *randomness of the AI response* optional field higher values make output more diverse;  lower values make output more focused; minimum value: `0` maximum value: `2` default value: `0.94` **Note:** not supported in reasoning models */
        temperature?: number | undefined
        
        /** *diversity of the AI response* optional field  controls diversity of the response by limiting token selection; minimum value: `0` maximum value: `1`  default value: `0.92` **Note:**  `top_p` cannot be used together with `temperature` in the same request */
        top_p?: number | undefined
        
        /** *enable web search* optional field when enabled, the AI model can access and cite current web information; default value: `false`; **Note:** refer to the [Models endpoint](https://docs.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/models/) for a list of models that support `web_search`; */
        web_search?: boolean | undefined
        
        /** *force AI agent to use web search* optional field to enable this parameter, `web_search` must also be enabled; when enabled, the AI model is forced to access and cite current web information; default value: `false`; **Note:** even if the parameter is set to `true`, there is no guarantee web sources will be cited in the response  **Note #2:** not supported in reasoning models */
        force_web_search?: boolean | undefined
        
        /** *ISO country code of the location* optional field to enable this parameter, `web_search` must also be enabled; when enabled, the AI model will search the web from the country you specify; **Note:** not supported in `o3-mini`, `o1-pro`, `o1` models */
        web_search_country_iso_code?: string | undefined
        
        /** *city name of the location* optional field **Note:** not supported in `o3-mini`, `o1-pro`, `o1` models */
        web_search_city?: string | undefined
        
        /** *instructions for the AI behaviour* optional field defines the AI's role, tone, or specific behavior  you can specify **up to 500 characters** in the `system_message` field */
        system_message?: string | undefined
        
        /** conversation history optional field array of message objects representing previous conversation turns; each object must contain: role string with either user or ai role; message string with message content (max 500 characters); you can specify maximum of 10 message objects in the array; Note: for Perplexity models, messages must strictly alternate between user and AI roles (user → ai); example: 'message_chain': [{'role':'user','message':'Hello, what’s up?'},{'role':'ai','message':'Hello! I’m doing well, thank you. How can I assist you today?'}] */
        message_chain?: LlmMessageChainItem[] | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmResponsesLiveRequestInfo  implements IAiOptimizationChatGptLlmResponsesLiveRequestInfo {

    
    /** *prompt for the AI model* **required field** the question or task you want to send to the AI model; you can specify **up to 500 characters** in the `user_prompt` field */

    user_prompt?: string | undefined;

    
    /** *name of the AI model* **required field** `model_nameconsists of the actual model name and version name;if the basic model name is specified, its latest version will be set by default;for example, if gpt-4.1` is specified, the `gpt-4.1-2025-04-14` will be set as `model_name` automatically; you can receive the list of available LLM models by making a separate request to the `https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/models` */

    model_name?: string | undefined;

    
    /** *maximum number of tokens in the AI response* optional field minimum value for reasoning models (e.g., `reasoning` is `true` in the [Models endpoint](/v3/ai_optimization/chat_gpt/llm_responses/models/)): `1024`; minimum value for non-reasoning models: `16`; maximum value: `4096`; default value: `2048` **Note:** if `web_search` is set to `true` or the reasoning model is specified in the request, the output token count may exceed the specified `max_output_tokens` limit */

    max_output_tokens?: number | undefined;

    
    /** *randomness of the AI response* optional field higher values make output more diverse;  lower values make output more focused; minimum value: `0` maximum value: `2` default value: `0.94` **Note:** not supported in reasoning models */

    temperature?: number | undefined;

    
    /** *diversity of the AI response* optional field  controls diversity of the response by limiting token selection; minimum value: `0` maximum value: `1`  default value: `0.92` **Note:**  `top_p` cannot be used together with `temperature` in the same request */

    top_p?: number | undefined;

    
    /** *enable web search* optional field when enabled, the AI model can access and cite current web information; default value: `false`; **Note:** refer to the [Models endpoint](https://docs.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/models/) for a list of models that support `web_search`; */

    web_search?: boolean | undefined;

    
    /** *force AI agent to use web search* optional field to enable this parameter, `web_search` must also be enabled; when enabled, the AI model is forced to access and cite current web information; default value: `false`; **Note:** even if the parameter is set to `true`, there is no guarantee web sources will be cited in the response  **Note #2:** not supported in reasoning models */

    force_web_search?: boolean | undefined;

    
    /** *ISO country code of the location* optional field to enable this parameter, `web_search` must also be enabled; when enabled, the AI model will search the web from the country you specify; **Note:** not supported in `o3-mini`, `o1-pro`, `o1` models */

    web_search_country_iso_code?: string | undefined;

    
    /** *city name of the location* optional field **Note:** not supported in `o3-mini`, `o1-pro`, `o1` models */

    web_search_city?: string | undefined;

    
    /** *instructions for the AI behaviour* optional field defines the AI's role, tone, or specific behavior  you can specify **up to 500 characters** in the `system_message` field */

    system_message?: string | undefined;

    
    /** conversation history optional field array of message objects representing previous conversation turns; each object must contain: role string with either user or ai role; message string with message content (max 500 characters); you can specify maximum of 10 message objects in the array; Note: for Perplexity models, messages must strictly alternate between user and AI roles (user → ai); example: 'message_chain': [{'role':'user','message':'Hello, what’s up?'},{'role':'ai','message':'Hello! I’m doing well, thank you. How can I assist you today?'}] */

    message_chain?: LlmMessageChainItem[] | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmResponsesLiveRequestInfo) {

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
            this.user_prompt = data["user_prompt"];
            this.model_name = data["model_name"];
            this.max_output_tokens = data["max_output_tokens"];
            this.temperature = data["temperature"];
            this.top_p = data["top_p"];
            this.web_search = data["web_search"];
            this.force_web_search = data["force_web_search"];
            this.web_search_country_iso_code = data["web_search_country_iso_code"];
            this.web_search_city = data["web_search_city"];
            this.system_message = data["system_message"];
            if (Array.isArray(data["message_chain"])) {
                this.message_chain = [];
                for (let item of data["message_chain"]) {
                    this.message_chain.push(LlmMessageChainItem.fromJS(item));
                }
            }
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmResponsesLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmResponsesLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["user_prompt"] = this.user_prompt;
        data["model_name"] = this.model_name;
        data["max_output_tokens"] = this.max_output_tokens;
        data["temperature"] = this.temperature;
        data["top_p"] = this.top_p;
        data["web_search"] = this.web_search;
        data["force_web_search"] = this.force_web_search;
        data["web_search_country_iso_code"] = this.web_search_country_iso_code;
        data["web_search_city"] = this.web_search_city;
        data["system_message"] = this.system_message;
        data["message_chain"] = null;
        if (Array.isArray(this.message_chain)) {
            data["message_chain"] = [];
            for (let item of this.message_chain) {
                if (item && typeof item.toJSON === "function") {
                    data["message_chain"].push(item?.toJSON());
                }
            }
        }
        data["tag"] = this.tag;
        return data;
    }
}