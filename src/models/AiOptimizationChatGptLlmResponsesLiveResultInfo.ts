import { BaseAiOptimizationLlmResponseElementItem, IBaseAiOptimizationLlmResponseElementItem } from "./BaseAiOptimizationLlmResponseElementItem";


export interface IAiOptimizationChatGptLlmResponsesLiveResultInfo   {
        
        /** *name of the AI model used* */
        model_name?: string | undefined
        
        /** *number of tokens in the input* total count of tokens processed */
        input_tokens?: number | undefined
        
        /** *number of tokens in the output* total count of tokens generated in the AI response */
        output_tokens?: number | undefined
        
        /** *number of reasoning tokens* total count of tokens used to generate reasoning content */
        reasoning_tokens?: number | undefined
        
        /** *indicates if web search was used* */
        web_search?: boolean | undefined
        
        /** *cost of AI tokens, USD* the price charged by the third-party AI model provider for according to its [Pricing](https://platform.openai.com/docs/pricing) */
        money_spent?: number | undefined
        
        /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *array of response items* contains structured AI response data */
        items?: BaseAiOptimizationLlmResponseElementItem[] | undefined
        
        /** *array of fan-out queries* contains related search queries derived from the main query to provide a more comprehensive response */
        fan_out_queries?: string[] | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmResponsesLiveResultInfo  implements IAiOptimizationChatGptLlmResponsesLiveResultInfo {

    
    /** *name of the AI model used* */

    model_name?: string | undefined;

    
    /** *number of tokens in the input* total count of tokens processed */

    input_tokens?: number | undefined;

    
    /** *number of tokens in the output* total count of tokens generated in the AI response */

    output_tokens?: number | undefined;

    
    /** *number of reasoning tokens* total count of tokens used to generate reasoning content */

    reasoning_tokens?: number | undefined;

    
    /** *indicates if web search was used* */

    web_search?: boolean | undefined;

    
    /** *cost of AI tokens, USD* the price charged by the third-party AI model provider for according to its [Pricing](https://platform.openai.com/docs/pricing) */

    money_spent?: number | undefined;

    
    /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *array of response items* contains structured AI response data */

    items?: BaseAiOptimizationLlmResponseElementItem[] | undefined;

    
    /** *array of fan-out queries* contains related search queries derived from the main query to provide a more comprehensive response */

    fan_out_queries?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmResponsesLiveResultInfo) {

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
            this.model_name = data["model_name"];
            this.input_tokens = data["input_tokens"];
            this.output_tokens = data["output_tokens"];
            this.reasoning_tokens = data["reasoning_tokens"];
            this.web_search = data["web_search"];
            this.money_spent = data["money_spent"];
            this.datetime = data["datetime"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseAiOptimizationLlmResponseElementItem.fromJS(item));
                }
            }
            this.fan_out_queries = data["fan_out_queries"];
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmResponsesLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmResponsesLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["model_name"] = this.model_name;
        data["input_tokens"] = this.input_tokens;
        data["output_tokens"] = this.output_tokens;
        data["reasoning_tokens"] = this.reasoning_tokens;
        data["web_search"] = this.web_search;
        data["money_spent"] = this.money_spent;
        data["datetime"] = this.datetime;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["fan_out_queries"] = this.fan_out_queries;
        return data;
    }
}