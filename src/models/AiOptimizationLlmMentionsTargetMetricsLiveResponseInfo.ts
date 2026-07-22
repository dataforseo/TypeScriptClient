import { AiOptimizationLlmMentionsTargetMetricsLiveTaskInfo, IAiOptimizationLlmMentionsTargetMetricsLiveTaskInfo } from "./AiOptimizationLlmMentionsTargetMetricsLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IAiOptimizationLlmMentionsTargetMetricsLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: AiOptimizationLlmMentionsTargetMetricsLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTargetMetricsLiveResponseInfo  extends BaseResponseInfo   implements IAiOptimizationLlmMentionsTargetMetricsLiveResponseInfo {

    
    /** array of tasks */

    tasks?: AiOptimizationLlmMentionsTargetMetricsLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTargetMetricsLiveResponseInfo) {
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
                    this.tasks.push(AiOptimizationLlmMentionsTargetMetricsLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTargetMetricsLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTargetMetricsLiveResponseInfo();
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