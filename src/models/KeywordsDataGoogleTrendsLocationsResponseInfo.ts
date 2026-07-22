import { KeywordsDataGoogleTrendsLocationsTaskInfo, IKeywordsDataGoogleTrendsLocationsTaskInfo } from "./KeywordsDataGoogleTrendsLocationsTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IKeywordsDataGoogleTrendsLocationsResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataGoogleTrendsLocationsTaskInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleTrendsLocationsResponseInfo  extends BaseResponseInfo   implements IKeywordsDataGoogleTrendsLocationsResponseInfo {

    
    /** array of tasks */

    tasks?: KeywordsDataGoogleTrendsLocationsTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleTrendsLocationsResponseInfo) {
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
                    this.tasks.push(KeywordsDataGoogleTrendsLocationsTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleTrendsLocationsResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleTrendsLocationsResponseInfo();
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