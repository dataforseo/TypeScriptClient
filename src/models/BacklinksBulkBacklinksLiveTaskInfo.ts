import { BacklinksBulkBacklinksLiveResultInfo, IBacklinksBulkBacklinksLiveResultInfo } from "./BacklinksBulkBacklinksLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBacklinksBulkBacklinksLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: BacklinksBulkBacklinksLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksBulkBacklinksLiveTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksBulkBacklinksLiveTaskInfo {

    
    /** *array of results* */

    result?: BacklinksBulkBacklinksLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkBacklinksLiveTaskInfo) {
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
                    this.result.push(BacklinksBulkBacklinksLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksBulkBacklinksLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkBacklinksLiveTaskInfo();
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