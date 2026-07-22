import { SerpGoogleEventsLiveAdvancedResultInfo, ISerpGoogleEventsLiveAdvancedResultInfo } from "./SerpGoogleEventsLiveAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleEventsLiveAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: SerpGoogleEventsLiveAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleEventsLiveAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleEventsLiveAdvancedTaskInfo {

    result?: SerpGoogleEventsLiveAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleEventsLiveAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleEventsLiveAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleEventsLiveAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleEventsLiveAdvancedTaskInfo();
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