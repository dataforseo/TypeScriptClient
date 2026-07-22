import { SerpGoogleMapsLiveAdvancedResultInfo, ISerpGoogleMapsLiveAdvancedResultInfo } from "./SerpGoogleMapsLiveAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleMapsLiveAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: SerpGoogleMapsLiveAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleMapsLiveAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleMapsLiveAdvancedTaskInfo {

    result?: SerpGoogleMapsLiveAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleMapsLiveAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleMapsLiveAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleMapsLiveAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleMapsLiveAdvancedTaskInfo();
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