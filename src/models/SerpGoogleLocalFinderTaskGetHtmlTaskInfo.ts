import { SerpGoogleLocalFinderTaskGetHtmlResultInfo, ISerpGoogleLocalFinderTaskGetHtmlResultInfo } from "./SerpGoogleLocalFinderTaskGetHtmlResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleLocalFinderTaskGetHtmlTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleLocalFinderTaskGetHtmlResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleLocalFinderTaskGetHtmlTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleLocalFinderTaskGetHtmlTaskInfo {

    
    /** array of results */

    result?: SerpGoogleLocalFinderTaskGetHtmlResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderTaskGetHtmlTaskInfo) {
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
                    this.result.push(SerpGoogleLocalFinderTaskGetHtmlResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleLocalFinderTaskGetHtmlTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderTaskGetHtmlTaskInfo();
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