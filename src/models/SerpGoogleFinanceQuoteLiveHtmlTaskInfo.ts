import { SerpGoogleFinanceQuoteLiveHtmlResultInfo, ISerpGoogleFinanceQuoteLiveHtmlResultInfo } from "./SerpGoogleFinanceQuoteLiveHtmlResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleFinanceQuoteLiveHtmlTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: SerpGoogleFinanceQuoteLiveHtmlResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceQuoteLiveHtmlTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleFinanceQuoteLiveHtmlTaskInfo {

    result?: SerpGoogleFinanceQuoteLiveHtmlResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceQuoteLiveHtmlTaskInfo) {
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
                    this.result.push(SerpGoogleFinanceQuoteLiveHtmlResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceQuoteLiveHtmlTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceQuoteLiveHtmlTaskInfo();
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