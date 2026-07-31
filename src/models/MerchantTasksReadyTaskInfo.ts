import { MerchantTasksReadyResultInfo, IMerchantTasksReadyResultInfo } from "./MerchantTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IMerchantTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: MerchantTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IMerchantTasksReadyTaskInfo {

    
    /** *array of results* */

    result?: MerchantTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantTasksReadyTaskInfo) {
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
                    this.result.push(MerchantTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantTasksReadyTaskInfo();
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