import { SerpBaiduOrganicTaskGetAdvancedResultInfo, ISerpBaiduOrganicTaskGetAdvancedResultInfo } from "./SerpBaiduOrganicTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpBaiduOrganicTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpBaiduOrganicTaskGetAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpBaiduOrganicTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpBaiduOrganicTaskGetAdvancedTaskInfo {

    
    /** *array of results* */

    result?: SerpBaiduOrganicTaskGetAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBaiduOrganicTaskGetAdvancedTaskInfo) {
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
                    this.result.push(SerpBaiduOrganicTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBaiduOrganicTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBaiduOrganicTaskGetAdvancedTaskInfo();
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