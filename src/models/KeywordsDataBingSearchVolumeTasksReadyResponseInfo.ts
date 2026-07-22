import { KeywordsDataBingSearchVolumeTasksReadyTaskInfo, IKeywordsDataBingSearchVolumeTasksReadyTaskInfo } from "./KeywordsDataBingSearchVolumeTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IKeywordsDataBingSearchVolumeTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataBingSearchVolumeTasksReadyTaskInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeTasksReadyResponseInfo  extends BaseResponseInfo   implements IKeywordsDataBingSearchVolumeTasksReadyResponseInfo {

    
    /** array of tasks */

    tasks?: KeywordsDataBingSearchVolumeTasksReadyTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeTasksReadyResponseInfo) {
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
                    this.tasks.push(KeywordsDataBingSearchVolumeTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeTasksReadyResponseInfo();
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