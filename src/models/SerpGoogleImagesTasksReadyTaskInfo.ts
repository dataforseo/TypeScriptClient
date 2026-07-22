import { SerpGoogleImagesTasksReadyResultInfo, ISerpGoogleImagesTasksReadyResultInfo } from "./SerpGoogleImagesTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleImagesTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleImagesTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleImagesTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleImagesTasksReadyTaskInfo {

    
    /** array of results */

    result?: SerpGoogleImagesTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleImagesTasksReadyTaskInfo) {
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
                    this.result.push(SerpGoogleImagesTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleImagesTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleImagesTasksReadyTaskInfo();
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