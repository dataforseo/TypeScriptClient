import { SerpYoutubeVideoCommentsTasksReadyResultInfo, ISerpYoutubeVideoCommentsTasksReadyResultInfo } from "./SerpYoutubeVideoCommentsTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpYoutubeVideoCommentsTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: SerpYoutubeVideoCommentsTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpYoutubeVideoCommentsTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements ISerpYoutubeVideoCommentsTasksReadyTaskInfo {

    
    /** *array of results* */

    result?: SerpYoutubeVideoCommentsTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoCommentsTasksReadyTaskInfo) {
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
                    this.result.push(SerpYoutubeVideoCommentsTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYoutubeVideoCommentsTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoCommentsTasksReadyTaskInfo();
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