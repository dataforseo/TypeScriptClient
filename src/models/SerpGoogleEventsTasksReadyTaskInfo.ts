import { SerpGoogleEventsTasksReadyResultInfo, ISerpGoogleEventsTasksReadyResultInfo } from "./SerpGoogleEventsTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleEventsTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleEventsTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleEventsTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleEventsTasksReadyTaskInfo {

    
    /** array of results */

    result?: SerpGoogleEventsTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleEventsTasksReadyTaskInfo) {
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
                    this.result.push(SerpGoogleEventsTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleEventsTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleEventsTasksReadyTaskInfo();
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