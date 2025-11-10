import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IMerchantAmazonReviewsTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: any | undefined

    [key: string]: any;

    }

export class MerchantAmazonReviewsTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements IMerchantAmazonReviewsTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: any | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonReviewsTaskGetAdvancedTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): MerchantAmazonReviewsTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonReviewsTaskGetAdvancedTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = this.result;
        return data;
    }
}