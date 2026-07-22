import { SerpBaiduOrganicTasksReadyResultInfo, ISerpBaiduOrganicTasksReadyResultInfo } from "./SerpBaiduOrganicTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpBaiduOrganicTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpBaiduOrganicTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpBaiduOrganicTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements ISerpBaiduOrganicTasksReadyTaskInfo {

    
    /** array of results */

    result?: SerpBaiduOrganicTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBaiduOrganicTasksReadyTaskInfo) {
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
                    this.result.push(SerpBaiduOrganicTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBaiduOrganicTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBaiduOrganicTasksReadyTaskInfo();
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