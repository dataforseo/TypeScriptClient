import { SerpYoutubeVideoSubtitlesTasksFixedTaskInfo, ISerpYoutubeVideoSubtitlesTasksFixedTaskInfo } from "./SerpYoutubeVideoSubtitlesTasksFixedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: SerpYoutubeVideoSubtitlesTasksFixedTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpYoutubeVideoSubtitlesTasksFixedResponseInfo  extends BaseResponseInfo   implements ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo {

    
    /** *array of tasks* */

    tasks?: SerpYoutubeVideoSubtitlesTasksFixedTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoSubtitlesTasksFixedResponseInfo) {
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
                    this.tasks.push(SerpYoutubeVideoSubtitlesTasksFixedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYoutubeVideoSubtitlesTasksFixedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoSubtitlesTasksFixedResponseInfo();
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