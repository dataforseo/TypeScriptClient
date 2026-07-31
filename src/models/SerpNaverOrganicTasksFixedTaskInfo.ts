import { SerpNaverOrganicTasksFixedResultInfo, ISerpNaverOrganicTasksFixedResultInfo } from "./SerpNaverOrganicTasksFixedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpNaverOrganicTasksFixedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpNaverOrganicTasksFixedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpNaverOrganicTasksFixedTaskInfo  extends BaseResponseTaskInfo   implements ISerpNaverOrganicTasksFixedTaskInfo {

    
    /** *array of results* */

    result?: SerpNaverOrganicTasksFixedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpNaverOrganicTasksFixedTaskInfo) {
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
                    this.result.push(SerpNaverOrganicTasksFixedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpNaverOrganicTasksFixedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpNaverOrganicTasksFixedTaskInfo();
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