export interface IAmazonApplicableVouchersItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *text of the voucher* */
        text?: string | undefined
        
        /** *value of the fixed discount* */
        fixed_discount?: number | undefined
        
        /** *currency code of the fixed discount* */
        fixed_discount_currency?: string | undefined
        
        /** *value of the percentage discount* if the discount is fixed, the value will be `null` */
        percentage_discount?: number | undefined
        
        /** *important details about the terms of discount vouchers* */
        important_details?: string | undefined

    [key: string]: any;

    }

export class AmazonApplicableVouchersItem  implements IAmazonApplicableVouchersItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *text of the voucher* */

    text?: string | undefined;

    
    /** *value of the fixed discount* */

    fixed_discount?: number | undefined;

    
    /** *currency code of the fixed discount* */

    fixed_discount_currency?: string | undefined;

    
    /** *value of the percentage discount* if the discount is fixed, the value will be `null` */

    percentage_discount?: number | undefined;

    
    /** *important details about the terms of discount vouchers* */

    important_details?: string | undefined;

    [key: string]: any;


    constructor(data?: IAmazonApplicableVouchersItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.text = data["text"];
            this.fixed_discount = data["fixed_discount"];
            this.fixed_discount_currency = data["fixed_discount_currency"];
            this.percentage_discount = data["percentage_discount"];
            this.important_details = data["important_details"];
        }
    }

    static fromJS(data: any): AmazonApplicableVouchersItem {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonApplicableVouchersItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["text"] = this.text;
        data["fixed_discount"] = this.fixed_discount;
        data["fixed_discount_currency"] = this.fixed_discount_currency;
        data["percentage_discount"] = this.percentage_discount;
        data["important_details"] = this.important_details;
        return data;
    }
}