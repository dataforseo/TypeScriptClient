import { AiOptimizationClaudeLlmResponsesTaskGetTaskInfo, IAiOptimizationClaudeLlmResponsesTaskGetTaskInfo } from "./AiOptimizationClaudeLlmResponsesTaskGetTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IAiOptimizationClaudeLlmResponsesTaskGetResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: AiOptimizationClaudeLlmResponsesTaskGetTaskInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationClaudeLlmResponsesTaskGetResponseInfo  extends BaseResponseInfo   implements IAiOptimizationClaudeLlmResponsesTaskGetResponseInfo {

    
    /** *array of tasks* */

    tasks?: AiOptimizationClaudeLlmResponsesTaskGetTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationClaudeLlmResponsesTaskGetResponseInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["tasks"])) {
                this.tasks = [];
                for (let item of data["tasks"]) {
                    this.tasks.push(AiOptimizationClaudeLlmResponsesTaskGetTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationClaudeLlmResponsesTaskGetResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationClaudeLlmResponsesTaskGetResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["tasks"] = null;
        if (Array.isArray(this.tasks)) {
            data["tasks"] = [];
            for (let item of this.tasks) {
                if (item && typeof item.toJSON === "function") {
                    data["tasks"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}