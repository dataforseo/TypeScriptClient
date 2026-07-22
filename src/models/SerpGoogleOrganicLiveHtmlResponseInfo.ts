import { SerpGoogleOrganicLiveHtmlTaskInfo, ISerpGoogleOrganicLiveHtmlTaskInfo } from "./SerpGoogleOrganicLiveHtmlTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleOrganicLiveHtmlResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleOrganicLiveHtmlTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleOrganicLiveHtmlResponseInfo  extends BaseResponseInfo   implements ISerpGoogleOrganicLiveHtmlResponseInfo {

    tasks?: SerpGoogleOrganicLiveHtmlTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleOrganicLiveHtmlResponseInfo) {
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
                    this.tasks.push(SerpGoogleOrganicLiveHtmlTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleOrganicLiveHtmlResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleOrganicLiveHtmlResponseInfo();
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