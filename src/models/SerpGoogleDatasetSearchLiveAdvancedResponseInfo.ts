import { SerpGoogleDatasetSearchLiveAdvancedTaskInfo, ISerpGoogleDatasetSearchLiveAdvancedTaskInfo } from "./SerpGoogleDatasetSearchLiveAdvancedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleDatasetSearchLiveAdvancedResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleDatasetSearchLiveAdvancedTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetSearchLiveAdvancedResponseInfo  extends BaseResponseInfo   implements ISerpGoogleDatasetSearchLiveAdvancedResponseInfo {

    tasks?: SerpGoogleDatasetSearchLiveAdvancedTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleDatasetSearchLiveAdvancedResponseInfo) {
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
                    this.tasks.push(SerpGoogleDatasetSearchLiveAdvancedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleDatasetSearchLiveAdvancedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleDatasetSearchLiveAdvancedResponseInfo();
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