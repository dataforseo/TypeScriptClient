import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpGoogleFinanceTickerSearchTaskPostTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceTickerSearchTaskPostTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleFinanceTickerSearchTaskPostTaskInfo {

    result?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceTickerSearchTaskPostTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): SerpGoogleFinanceTickerSearchTaskPostTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceTickerSearchTaskPostTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = this.result;
        return data;
    }
}