import { SerpGoogleOrganicTaskGetRegularResultInfo, ISerpGoogleOrganicTaskGetRegularResultInfo } from "./SerpGoogleOrganicTaskGetRegularResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleOrganicTaskGetRegularTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleOrganicTaskGetRegularResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleOrganicTaskGetRegularTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleOrganicTaskGetRegularTaskInfo {

    
    /** array of results */

    result?: SerpGoogleOrganicTaskGetRegularResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleOrganicTaskGetRegularTaskInfo) {
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
                    this.result.push(SerpGoogleOrganicTaskGetRegularResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleOrganicTaskGetRegularTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleOrganicTaskGetRegularTaskInfo();
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