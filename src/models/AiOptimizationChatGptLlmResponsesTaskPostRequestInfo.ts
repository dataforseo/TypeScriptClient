import { LlmMessageChainItem, ILlmMessageChainItem } from "./LlmMessageChainItem";


export interface IAiOptimizationChatGptLlmResponsesTaskPostRequestInfo   {
        
        /** prompt for the AI modelrequired fieldthe question or task you want to send to the AI model;you can specify up to 500 characters in the user_prompt field */
        user_prompt?: string | undefined
        
        /** name of the AI modelrequired fieldmodel_nameconsists of the actual model name and version name;if the basic model name is specified, its latest version will be set by default;for example, if gpt-4.1 is specified, the gpt-4.1-2025-04-14 will be set as model_name automatically;you can receive the list of available LLM models by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/models */
        model_name?: string | undefined
        
        /** maximum number of tokens in the AI responseoptional fieldminimum value for reasoning models (e.g., reasoning is true in the Models endpoint): 1024;minimum value for non-reasoning models: 16;maximum value: 4096;default value: 2048 */
        max_output_tokens?: number | undefined
        
        /** randomness of the AI responseoptional fieldhigher values make output more diverse; lower values make output more focused;minimum value: 0maximum value: 2default value: 0.94Note: not supported in reasoning models */
        temperature?: number | undefined
        
        /**  */
        top_p?: number | undefined
        
        /** instructions for the AI behaviouroptional fielddefines the AI's role, tone, or specific behavior;you can specify up to 500 characters in the system_message field */
        system_message?: string | undefined
        
        /** conversation history
optional field
array of message objects representing previous conversation turns;
each object must contain:
role string with either user or ai role;
message string with message content (max 500 characters);
you can specify maximum of 10 message objects in the array;
Note: for Perplexity models, messages must strictly alternate between user and AI roles (user → ai);
example:
'message_chain': [{'role':'user','message':'Hello, what’s up?'},{'role':'ai','message':'Hello! I’m doing well, thank you. How can I assist you today?'}] */
        message_chain?: LlmMessageChainItem[] | undefined
        
        /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special character in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        postback_url?: string | undefined
        
        /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special character in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data array of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmResponsesTaskPostRequestInfo  implements IAiOptimizationChatGptLlmResponsesTaskPostRequestInfo {
    
    /** prompt for the AI modelrequired fieldthe question or task you want to send to the AI model;you can specify up to 500 characters in the user_prompt field */

    user_prompt?: string | undefined;
    
    /** name of the AI modelrequired fieldmodel_nameconsists of the actual model name and version name;if the basic model name is specified, its latest version will be set by default;for example, if gpt-4.1 is specified, the gpt-4.1-2025-04-14 will be set as model_name automatically;you can receive the list of available LLM models by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/chat_gpt/llm_responses/models */

    model_name?: string | undefined;
    
    /** maximum number of tokens in the AI responseoptional fieldminimum value for reasoning models (e.g., reasoning is true in the Models endpoint): 1024;minimum value for non-reasoning models: 16;maximum value: 4096;default value: 2048 */

    max_output_tokens?: number | undefined;
    
    /** randomness of the AI responseoptional fieldhigher values make output more diverse; lower values make output more focused;minimum value: 0maximum value: 2default value: 0.94Note: not supported in reasoning models */

    temperature?: number | undefined;
    
    /**  */

    top_p?: number | undefined;
    
    /** instructions for the AI behaviouroptional fielddefines the AI's role, tone, or specific behavior;you can specify up to 500 characters in the system_message field */

    system_message?: string | undefined;
    
    /** conversation history
optional field
array of message objects representing previous conversation turns;
each object must contain:
role string with either user or ai role;
message string with message content (max 500 characters);
you can specify maximum of 10 message objects in the array;
Note: for Perplexity models, messages must strictly alternate between user and AI roles (user → ai);
example:
'message_chain': [{'role':'user','message':'Hello, what’s up?'},{'role':'ai','message':'Hello! I’m doing well, thank you. How can I assist you today?'}] */

    message_chain?: LlmMessageChainItem[] | undefined;
    
    /** URL for sending task resultsoptional fieldonce the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.example:http://your-server.com/postbackscript?id=$idhttp://your-server.com/postbackscript?id=$id&tag=$tagNote: special character in postback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** notification URL of a completed taskoptional fieldwhen a task is completed we will notify you by GET request sent to the URL you have specifiedyou can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the requestexample:http://your-server.com/pingscript?id=$idhttp://your-server.com/pingscript?id=$id&tag=$tagNote: special character in pingback_url will be urlencoded;i.a., the # character will be encoded into %23learn more on our Help Center */

    pingback_url?: string | undefined;
    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data array of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmResponsesTaskPostRequestInfo) {

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
            this.system_message = data["system_message"];
            if (Array.isArray(data["message_chain"])) {
                this.message_chain = [];
                for (let item of data["message_chain"]) {
                    this.message_chain.push(LlmMessageChainItem.fromJS(item));
                }
            }
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmResponsesTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmResponsesTaskPostRequestInfo();
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
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        data["tag"] = this.tag;
        return data;
    }
}