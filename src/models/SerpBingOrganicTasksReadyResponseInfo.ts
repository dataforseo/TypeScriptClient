import { SerpBingOrganicTasksReadyTaskInfo, ISerpBingOrganicTasksReadyTaskInfo } from "./SerpBingOrganicTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpBingOrganicTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: SerpBingOrganicTasksReadyTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpBingOrganicTasksReadyResponseInfo  extends BaseResponseInfo   implements ISerpBingOrganicTasksReadyResponseInfo {

    
    /** *array of tasks* */

    tasks?: SerpBingOrganicTasksReadyTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBingOrganicTasksReadyResponseInfo) {
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
                    this.tasks.push(SerpBingOrganicTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBingOrganicTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingOrganicTasksReadyResponseInfo();
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