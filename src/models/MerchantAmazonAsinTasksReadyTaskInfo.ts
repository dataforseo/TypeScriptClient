import { MerchantAmazonAsinTasksReadyResultInfo, IMerchantAmazonAsinTasksReadyResultInfo } from "./MerchantAmazonAsinTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IMerchantAmazonAsinTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: MerchantAmazonAsinTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonAsinTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IMerchantAmazonAsinTasksReadyTaskInfo {

    
    /** array of results */

    result?: MerchantAmazonAsinTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonAsinTasksReadyTaskInfo) {
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
                    this.result.push(MerchantAmazonAsinTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonAsinTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonAsinTasksReadyTaskInfo();
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