import { KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo, IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo } from "./KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo  extends BaseResponseInfo   implements IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo {

    
    /** *array of tasks* */

    tasks?: KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo) {
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
                    this.tasks.push(KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo();
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