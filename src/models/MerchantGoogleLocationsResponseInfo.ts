import { MerchantGoogleLocationsTaskInfo, IMerchantGoogleLocationsTaskInfo } from "./MerchantGoogleLocationsTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IMerchantGoogleLocationsResponseInfo  extends IBaseResponseInfo    {
        
        /** *array of tasks* */
        tasks?: MerchantGoogleLocationsTaskInfo[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleLocationsResponseInfo  extends BaseResponseInfo   implements IMerchantGoogleLocationsResponseInfo {

    
    /** *array of tasks* */

    tasks?: MerchantGoogleLocationsTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleLocationsResponseInfo) {
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
                    this.tasks.push(MerchantGoogleLocationsTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleLocationsResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleLocationsResponseInfo();
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