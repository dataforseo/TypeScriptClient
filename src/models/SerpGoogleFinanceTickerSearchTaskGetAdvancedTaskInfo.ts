import { SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo, ISerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo } from "./SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleFinanceTickerSearchTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceTickerSearchTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleFinanceTickerSearchTaskGetAdvancedTaskInfo {

    
    /** *array of results* */

    result?: SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceTickerSearchTaskGetAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleFinanceTickerSearchTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceTickerSearchTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceTickerSearchTaskGetAdvancedTaskInfo();
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