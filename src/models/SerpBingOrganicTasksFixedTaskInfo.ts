import { SerpBingOrganicTasksFixedResultInfo, ISerpBingOrganicTasksFixedResultInfo } from "./SerpBingOrganicTasksFixedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpBingOrganicTasksFixedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpBingOrganicTasksFixedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpBingOrganicTasksFixedTaskInfo  extends BaseResponseTaskInfo   implements ISerpBingOrganicTasksFixedTaskInfo {

    
    /** *array of results* */

    result?: SerpBingOrganicTasksFixedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBingOrganicTasksFixedTaskInfo) {
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
                    this.result.push(SerpBingOrganicTasksFixedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBingOrganicTasksFixedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingOrganicTasksFixedTaskInfo();
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