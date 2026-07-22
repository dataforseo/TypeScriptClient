import { SerpBaiduLanguagesResultInfo, ISerpBaiduLanguagesResultInfo } from "./SerpBaiduLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpBaiduLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpBaiduLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpBaiduLanguagesTaskInfo  extends BaseResponseTaskInfo   implements ISerpBaiduLanguagesTaskInfo {

    
    /** array of results */

    result?: SerpBaiduLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBaiduLanguagesTaskInfo) {
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
                    this.result.push(SerpBaiduLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBaiduLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBaiduLanguagesTaskInfo();
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