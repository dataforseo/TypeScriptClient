import { AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo, IAiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo } from "./AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IAiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo  extends BaseResponseInfo   implements IAiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo {

    
    /** *array of tasks* */

    tasks?: AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo) {
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
                    this.tasks.push(AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsLocationsAndLanguagesResponseInfo();
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