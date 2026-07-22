import { SerpBingOrganicLiveRegularResultInfo, ISerpBingOrganicLiveRegularResultInfo } from "./SerpBingOrganicLiveRegularResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpBingOrganicLiveRegularTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpBingOrganicLiveRegularResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpBingOrganicLiveRegularTaskInfo  extends BaseResponseTaskInfo   implements ISerpBingOrganicLiveRegularTaskInfo {

    
    /** array of results */

    result?: SerpBingOrganicLiveRegularResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBingOrganicLiveRegularTaskInfo) {
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
                    this.result.push(SerpBingOrganicLiveRegularResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBingOrganicLiveRegularTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingOrganicLiveRegularTaskInfo();
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