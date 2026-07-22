import { KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo, IKeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo } from "./KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo  extends BaseResponseInfo   implements IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo {

    
    /** array of tasks */

    tasks?: KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo) {
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
                    this.tasks.push(KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo();
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