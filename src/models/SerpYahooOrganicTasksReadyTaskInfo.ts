import { SerpYahooOrganicTasksReadyResultInfo, ISerpYahooOrganicTasksReadyResultInfo } from "./SerpYahooOrganicTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpYahooOrganicTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpYahooOrganicTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpYahooOrganicTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements ISerpYahooOrganicTasksReadyTaskInfo {

    
    /** *array of results* */

    result?: SerpYahooOrganicTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpYahooOrganicTasksReadyTaskInfo) {
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
                    this.result.push(SerpYahooOrganicTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYahooOrganicTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYahooOrganicTasksReadyTaskInfo();
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