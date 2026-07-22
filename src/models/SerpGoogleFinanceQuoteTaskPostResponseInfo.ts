import { SerpGoogleFinanceQuoteTaskPostTaskInfo, ISerpGoogleFinanceQuoteTaskPostTaskInfo } from "./SerpGoogleFinanceQuoteTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleFinanceQuoteTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleFinanceQuoteTaskPostTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceQuoteTaskPostResponseInfo  extends BaseResponseInfo   implements ISerpGoogleFinanceQuoteTaskPostResponseInfo {

    tasks?: SerpGoogleFinanceQuoteTaskPostTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceQuoteTaskPostResponseInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["tasks"])) {
                this.tasks = [];
                for (let item of data["tasks"]) {
                    this.tasks.push(SerpGoogleFinanceQuoteTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceQuoteTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceQuoteTaskPostResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["tasks"] = null;
        if (Array.isArray(this.tasks)) {
            data["tasks"] = [];
            for (let item of this.tasks) {
                if (item && typeof item.toJSON === "function") {
                    data["tasks"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}