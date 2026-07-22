import { BacklinksHistoryLiveResultInfo, IBacklinksHistoryLiveResultInfo } from "./BacklinksHistoryLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBacklinksHistoryLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BacklinksHistoryLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksHistoryLiveTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksHistoryLiveTaskInfo {

    
    /** array of results */

    result?: BacklinksHistoryLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksHistoryLiveTaskInfo) {
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
                    this.result.push(BacklinksHistoryLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksHistoryLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksHistoryLiveTaskInfo();
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