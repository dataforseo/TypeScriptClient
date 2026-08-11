import { SerpSeznamOrganicTaskGetRegularResultInfo, ISerpSeznamOrganicTaskGetRegularResultInfo } from "./SerpSeznamOrganicTaskGetRegularResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpSeznamOrganicTaskGetRegularTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpSeznamOrganicTaskGetRegularResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpSeznamOrganicTaskGetRegularTaskInfo  extends BaseResponseTaskInfo   implements ISerpSeznamOrganicTaskGetRegularTaskInfo {

    
    /** *array of results* */

    result?: SerpSeznamOrganicTaskGetRegularResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpSeznamOrganicTaskGetRegularTaskInfo) {
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
                    this.result.push(SerpSeznamOrganicTaskGetRegularResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpSeznamOrganicTaskGetRegularTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpSeznamOrganicTaskGetRegularTaskInfo();
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