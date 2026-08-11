import { KeywordsDataDataforseoTrendsLocationsCountryTaskInfo, IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo } from "./KeywordsDataDataforseoTrendsLocationsCountryTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: KeywordsDataDataforseoTrendsLocationsCountryTaskInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataDataforseoTrendsLocationsCountryResponseInfo  extends BaseResponseInfo   implements IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo {

    
    /** *array of tasks* */

    tasks?: KeywordsDataDataforseoTrendsLocationsCountryTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataDataforseoTrendsLocationsCountryResponseInfo) {
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
                    this.tasks.push(KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataDataforseoTrendsLocationsCountryResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataDataforseoTrendsLocationsCountryResponseInfo();
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