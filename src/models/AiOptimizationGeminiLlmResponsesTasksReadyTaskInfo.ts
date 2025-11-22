import { AiOptimizationGeminiLlmResponsesTasksReadyResultInfo, IAiOptimizationGeminiLlmResponsesTasksReadyResultInfo } from "./AiOptimizationGeminiLlmResponsesTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAiOptimizationGeminiLlmResponsesTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: AiOptimizationGeminiLlmResponsesTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationGeminiLlmResponsesTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IAiOptimizationGeminiLlmResponsesTasksReadyTaskInfo {
    
    /** array of results */

    result?: AiOptimizationGeminiLlmResponsesTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationGeminiLlmResponsesTasksReadyTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["result"])) {
                this.result = [];
                for (let item of data["result"]) {
                    this.result.push(AiOptimizationGeminiLlmResponsesTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationGeminiLlmResponsesTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationGeminiLlmResponsesTasksReadyTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = null;
        if (Array.isArray(this.result)) {
            data["result"] = [];
            for (let item of this.result) {
                if (item && typeof item.toJSON === "function") {
                    data["result"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}