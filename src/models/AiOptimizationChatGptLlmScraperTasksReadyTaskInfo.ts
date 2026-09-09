import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAiOptimizationChatGptLlmScraperTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: any | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmScraperTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IAiOptimizationChatGptLlmScraperTasksReadyTaskInfo {

    
    /** *array of results* */

    result?: any | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmScraperTasksReadyTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmScraperTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmScraperTasksReadyTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = this.result;
        return data;
    }
}