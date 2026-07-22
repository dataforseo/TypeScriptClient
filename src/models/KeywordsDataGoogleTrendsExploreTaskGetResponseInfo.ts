import { KeywordsDataGoogleTrendsExploreTaskGetTaskInfo, IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo } from "./KeywordsDataGoogleTrendsExploreTaskGetTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataGoogleTrendsExploreTaskGetTaskInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleTrendsExploreTaskGetResponseInfo  extends BaseResponseInfo   implements IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo {

    
    /** array of tasks */

    tasks?: KeywordsDataGoogleTrendsExploreTaskGetTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo) {
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
                    this.tasks.push(KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleTrendsExploreTaskGetResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleTrendsExploreTaskGetResponseInfo();
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