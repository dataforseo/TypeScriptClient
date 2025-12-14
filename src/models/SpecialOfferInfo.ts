export interface ISpecialOfferInfo   {
        
        /** product title */
        title?: string | undefined
        
        /** subtitle of the special offer */
        sub_title?: string | undefined
        
        /** amount of the fixed discount */
        fixed_discount?: number | undefined
        
        /** currency of the fixed discount */
        fixed_discount_currency?: string | undefined
        
        /** percentage of the discount */
        percentage_discount?: number | undefined
        
        /** code of coupon discount */
        coupon_code?: string | undefined
        
        /** information on coupon discount */
        coupon_info?: string | undefined
        
        /** URL to the product page on the seller’s website
Note: this field is deprecated and will return null */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined

    [key: string]: any;

    }

export class SpecialOfferInfo  implements ISpecialOfferInfo {
    
    /** product title */

    title?: string | undefined;
    
    /** subtitle of the special offer */

    sub_title?: string | undefined;
    
    /** amount of the fixed discount */

    fixed_discount?: number | undefined;
    
    /** currency of the fixed discount */

    fixed_discount_currency?: string | undefined;
    
    /** percentage of the discount */

    percentage_discount?: number | undefined;
    
    /** code of coupon discount */

    coupon_code?: string | undefined;
    
    /** information on coupon discount */

    coupon_info?: string | undefined;
    
    /** URL to the product page on the seller’s website
Note: this field is deprecated and will return null */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;

    [key: string]: any;


    constructor(data?: ISpecialOfferInfo) {

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
            this.title = data["title"];
            this.sub_title = data["sub_title"];
            this.fixed_discount = data["fixed_discount"];
            this.fixed_discount_currency = data["fixed_discount_currency"];
            this.percentage_discount = data["percentage_discount"];
            this.coupon_code = data["coupon_code"];
            this.coupon_info = data["coupon_info"];
            this.url = data["url"];
            this.domain = data["domain"];
        }
    }

    static fromJS(data: any): SpecialOfferInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SpecialOfferInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        data["fixed_discount"] = this.fixed_discount;
        data["fixed_discount_currency"] = this.fixed_discount_currency;
        data["percentage_discount"] = this.percentage_discount;
        data["coupon_code"] = this.coupon_code;
        data["coupon_info"] = this.coupon_info;
        data["url"] = this.url;
        data["domain"] = this.domain;
        return data;
    }
}