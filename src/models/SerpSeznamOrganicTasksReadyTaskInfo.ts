import { SerpSeznamOrganicTasksReadyResultInfo, ISerpSeznamOrganicTasksReadyResultInfo } from "./SerpSeznamOrganicTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpSeznamOrganicTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpSeznamOrganicTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpSeznamOrganicTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements ISerpSeznamOrganicTasksReadyTaskInfo {

    
    /** array of results */

    result?: SerpSeznamOrganicTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpSeznamOrganicTasksReadyTaskInfo) {
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
                    this.result.push(SerpSeznamOrganicTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpSeznamOrganicTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpSeznamOrganicTasksReadyTaskInfo();
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