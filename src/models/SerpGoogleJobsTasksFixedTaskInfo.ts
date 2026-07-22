import { SerpGoogleJobsTasksFixedResultInfo, ISerpGoogleJobsTasksFixedResultInfo } from "./SerpGoogleJobsTasksFixedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleJobsTasksFixedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleJobsTasksFixedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleJobsTasksFixedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleJobsTasksFixedTaskInfo {

    
    /** array of results */

    result?: SerpGoogleJobsTasksFixedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleJobsTasksFixedTaskInfo) {
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
                    this.result.push(SerpGoogleJobsTasksFixedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleJobsTasksFixedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleJobsTasksFixedTaskInfo();
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