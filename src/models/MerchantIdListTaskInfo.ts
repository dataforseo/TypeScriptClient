import { MerchantIdListResultInfo, IMerchantIdListResultInfo } from "./MerchantIdListResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IMerchantIdListTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** *array of results* */
        result?: MerchantIdListResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantIdListTaskInfo  extends BaseResponseTaskInfo   implements IMerchantIdListTaskInfo {

    
    /** *array of results* */

    result?: MerchantIdListResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantIdListTaskInfo) {
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
                    this.result.push(MerchantIdListResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantIdListTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantIdListTaskInfo();
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