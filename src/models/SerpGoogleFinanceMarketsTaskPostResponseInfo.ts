import { SerpGoogleFinanceMarketsTaskPostTaskInfo, ISerpGoogleFinanceMarketsTaskPostTaskInfo } from "./SerpGoogleFinanceMarketsTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpGoogleFinanceMarketsTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: SerpGoogleFinanceMarketsTaskPostTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleFinanceMarketsTaskPostResponseInfo  extends BaseResponseInfo   implements ISerpGoogleFinanceMarketsTaskPostResponseInfo {

    tasks?: SerpGoogleFinanceMarketsTaskPostTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceMarketsTaskPostResponseInfo) {
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
                    this.tasks.push(SerpGoogleFinanceMarketsTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceMarketsTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceMarketsTaskPostResponseInfo();
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