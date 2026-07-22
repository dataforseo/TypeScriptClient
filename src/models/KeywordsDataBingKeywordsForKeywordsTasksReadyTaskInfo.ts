import { KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo, IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo } from "./KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo {

    
    /** array of results */

    result?: KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo) {
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
                    this.result.push(KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo();
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