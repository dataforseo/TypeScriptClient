import { SerpYahooLanguagesResultInfo, ISerpYahooLanguagesResultInfo } from "./SerpYahooLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpYahooLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpYahooLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpYahooLanguagesTaskInfo  extends BaseResponseTaskInfo   implements ISerpYahooLanguagesTaskInfo {

    
    /** array of results */

    result?: SerpYahooLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpYahooLanguagesTaskInfo) {
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
                    this.result.push(SerpYahooLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYahooLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYahooLanguagesTaskInfo();
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