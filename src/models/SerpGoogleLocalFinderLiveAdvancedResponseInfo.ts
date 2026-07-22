import { SerpGoogleLocalFinderLiveAdvancedTaskInfo, ISerpGoogleLocalFinderLiveAdvancedTaskInfo } from "./SerpGoogleLocalFinderLiveAdvancedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleLocalFinderLiveAdvancedResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleLocalFinderLiveAdvancedTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleLocalFinderLiveAdvancedResponseInfo  extends BaseResponseInfo   implements ISerpGoogleLocalFinderLiveAdvancedResponseInfo {

    tasks?: SerpGoogleLocalFinderLiveAdvancedTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderLiveAdvancedResponseInfo) {
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
                    this.tasks.push(SerpGoogleLocalFinderLiveAdvancedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleLocalFinderLiveAdvancedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderLiveAdvancedResponseInfo();
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