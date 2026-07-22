import { KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo, IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo } from "./KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo  extends BaseResponseInfo   implements IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo {

    
    /** array of tasks */

    tasks?: KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo) {
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
                    this.tasks.push(KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo();
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