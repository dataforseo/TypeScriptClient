import { SerpGoogleJobsTaskPostTaskInfo, ISerpGoogleJobsTaskPostTaskInfo } from "./SerpGoogleJobsTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleJobsTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleJobsTaskPostTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleJobsTaskPostResponseInfo  extends BaseResponseInfo   implements ISerpGoogleJobsTaskPostResponseInfo {

    tasks?: SerpGoogleJobsTaskPostTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleJobsTaskPostResponseInfo) {
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
                    this.tasks.push(SerpGoogleJobsTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleJobsTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleJobsTaskPostResponseInfo();
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