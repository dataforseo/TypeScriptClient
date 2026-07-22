import { SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo, ISerpGoogleFinanceTickerSearchLiveAdvancedResultInfo } from "./SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo {

    result?: SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleFinanceTickerSearchLiveAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo();
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