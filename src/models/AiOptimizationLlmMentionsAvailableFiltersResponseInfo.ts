import { AiOptimizationLlmMentionsAvailableFiltersTaskInfo, IAiOptimizationLlmMentionsAvailableFiltersTaskInfo } from "./AiOptimizationLlmMentionsAvailableFiltersTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IAiOptimizationLlmMentionsAvailableFiltersResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: AiOptimizationLlmMentionsAvailableFiltersTaskInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsAvailableFiltersResponseInfo  extends BaseResponseInfo   implements IAiOptimizationLlmMentionsAvailableFiltersResponseInfo {

    tasks?: AiOptimizationLlmMentionsAvailableFiltersTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsAvailableFiltersResponseInfo) {
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
                    this.tasks.push(AiOptimizationLlmMentionsAvailableFiltersTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsAvailableFiltersResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsAvailableFiltersResponseInfo();
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