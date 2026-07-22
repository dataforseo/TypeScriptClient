import { SerpGoogleLocalFinderLiveHtmlResultInfo, ISerpGoogleLocalFinderLiveHtmlResultInfo } from "./SerpGoogleLocalFinderLiveHtmlResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleLocalFinderLiveHtmlTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: SerpGoogleLocalFinderLiveHtmlResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleLocalFinderLiveHtmlTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleLocalFinderLiveHtmlTaskInfo {

    result?: SerpGoogleLocalFinderLiveHtmlResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderLiveHtmlTaskInfo) {
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
                    this.result.push(SerpGoogleLocalFinderLiveHtmlResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleLocalFinderLiveHtmlTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderLiveHtmlTaskInfo();
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