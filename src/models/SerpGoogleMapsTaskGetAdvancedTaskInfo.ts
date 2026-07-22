import { SerpGoogleMapsTaskGetAdvancedResultInfo, ISerpGoogleMapsTaskGetAdvancedResultInfo } from "./SerpGoogleMapsTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleMapsTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleMapsTaskGetAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleMapsTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleMapsTaskGetAdvancedTaskInfo {

    
    /** array of results */

    result?: SerpGoogleMapsTaskGetAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleMapsTaskGetAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleMapsTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleMapsTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleMapsTaskGetAdvancedTaskInfo();
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