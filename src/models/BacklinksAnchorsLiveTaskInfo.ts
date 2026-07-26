import { BacklinksAnchorsLiveResultInfo, IBacklinksAnchorsLiveResultInfo } from "./BacklinksAnchorsLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IBacklinksAnchorsLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: BacklinksAnchorsLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksAnchorsLiveTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksAnchorsLiveTaskInfo {

    
    /** *array of results* */

    result?: BacklinksAnchorsLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksAnchorsLiveTaskInfo) {
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
                    this.result.push(BacklinksAnchorsLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksAnchorsLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksAnchorsLiveTaskInfo();
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