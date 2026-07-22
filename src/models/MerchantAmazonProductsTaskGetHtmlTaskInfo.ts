import { MerchantAmazonProductsTaskGetHtmlResultInfo, IMerchantAmazonProductsTaskGetHtmlResultInfo } from "./MerchantAmazonProductsTaskGetHtmlResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IMerchantAmazonProductsTaskGetHtmlTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: MerchantAmazonProductsTaskGetHtmlResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonProductsTaskGetHtmlTaskInfo  extends BaseResponseTaskInfo   implements IMerchantAmazonProductsTaskGetHtmlTaskInfo {

    
    /** array of results */

    result?: MerchantAmazonProductsTaskGetHtmlResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonProductsTaskGetHtmlTaskInfo) {
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
                    this.result.push(MerchantAmazonProductsTaskGetHtmlResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonProductsTaskGetHtmlTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonProductsTaskGetHtmlTaskInfo();
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