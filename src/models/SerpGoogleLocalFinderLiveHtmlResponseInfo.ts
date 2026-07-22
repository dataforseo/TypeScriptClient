import { SerpGoogleLocalFinderLiveHtmlTaskInfo, ISerpGoogleLocalFinderLiveHtmlTaskInfo } from "./SerpGoogleLocalFinderLiveHtmlTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleLocalFinderLiveHtmlResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleLocalFinderLiveHtmlTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleLocalFinderLiveHtmlResponseInfo  extends BaseResponseInfo   implements ISerpGoogleLocalFinderLiveHtmlResponseInfo {

    tasks?: SerpGoogleLocalFinderLiveHtmlTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderLiveHtmlResponseInfo) {
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
                    this.tasks.push(SerpGoogleLocalFinderLiveHtmlTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleLocalFinderLiveHtmlResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderLiveHtmlResponseInfo();
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