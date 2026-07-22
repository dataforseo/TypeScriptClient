import { MerchantGoogleLanguagesResultInfo, IMerchantGoogleLanguagesResultInfo } from "./MerchantGoogleLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IMerchantGoogleLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: MerchantGoogleLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IMerchantGoogleLanguagesTaskInfo {

    
    /** array of results */

    result?: MerchantGoogleLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleLanguagesTaskInfo) {
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
                    this.result.push(MerchantGoogleLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleLanguagesTaskInfo();
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