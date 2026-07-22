import { SerpGoogleMapsLiveAdvancedTaskInfo, ISerpGoogleMapsLiveAdvancedTaskInfo } from "./SerpGoogleMapsLiveAdvancedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleMapsLiveAdvancedResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleMapsLiveAdvancedTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleMapsLiveAdvancedResponseInfo  extends BaseResponseInfo   implements ISerpGoogleMapsLiveAdvancedResponseInfo {

    tasks?: SerpGoogleMapsLiveAdvancedTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleMapsLiveAdvancedResponseInfo) {
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
                    this.tasks.push(SerpGoogleMapsLiveAdvancedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleMapsLiveAdvancedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleMapsLiveAdvancedResponseInfo();
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