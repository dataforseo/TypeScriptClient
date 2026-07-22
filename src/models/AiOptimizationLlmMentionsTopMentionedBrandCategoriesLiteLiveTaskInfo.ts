import { AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo, IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo } from "./AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveTaskInfo  extends BaseResponseTaskInfo   implements IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveTaskInfo {

    
    /** array of results */

    result?: AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveTaskInfo) {
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
                    this.result.push(AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiteLiveTaskInfo();
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