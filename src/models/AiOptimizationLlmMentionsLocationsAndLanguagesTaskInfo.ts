import { AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo, IAiOptimizationLlmMentionsLocationsAndLanguagesResultInfo } from "./AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IAiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo {

    
    /** array of results */

    result?: AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo) {
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
                    this.result.push(AiOptimizationLlmMentionsLocationsAndLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsLocationsAndLanguagesTaskInfo();
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