import { KeywordsDataDataforseoTrendsLocationsCountryResultInfo, IKeywordsDataDataforseoTrendsLocationsCountryResultInfo } from "./KeywordsDataDataforseoTrendsLocationsCountryResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataDataforseoTrendsLocationsCountryResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataDataforseoTrendsLocationsCountryTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo {

    
    /** array of results */

    result?: KeywordsDataDataforseoTrendsLocationsCountryResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo) {
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
                    this.result.push(KeywordsDataDataforseoTrendsLocationsCountryResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataDataforseoTrendsLocationsCountryTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataDataforseoTrendsLocationsCountryTaskInfo();
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