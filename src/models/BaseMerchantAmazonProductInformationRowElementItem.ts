export interface IBaseMerchantAmazonProductInformationRowElementItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseMerchantAmazonProductInformationRowElementItem  implements IBaseMerchantAmazonProductInformationRowElementItem {

    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseMerchantAmazonProductInformationRowElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
        }
    }

    static fromJS(data: any): BaseMerchantAmazonProductInformationRowElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "product_information_image_row") {

            let result = new ProductInformationRowProductInformationImageRowElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_information_text_row") {

            let result = new ProductInformationRowProductInformationTextRowElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseMerchantAmazonProductInformationRowElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}

 
export interface IProductInformationRowProductInformationImageRowElementItem  extends IBaseMerchantAmazonProductInformationRowElementItem    {
        
        /** alternative text of the related product image */
        alt?: string | undefined
        
        /** URL of the image */
        url?: string | undefined

    [key: string]: any;

    }

export class ProductInformationRowProductInformationImageRowElementItem  extends BaseMerchantAmazonProductInformationRowElementItem   implements IProductInformationRowProductInformationImageRowElementItem {

    
    /** alternative text of the related product image */

    alt?: string | undefined;

    
    /** URL of the image */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationRowProductInformationImageRowElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.alt = data["alt"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): ProductInformationRowProductInformationImageRowElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationRowProductInformationImageRowElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["alt"] = this.alt;
        data["url"] = this.url;
        return data;
    }
}

 
export interface IProductInformationRowProductInformationTextRowElementItem  extends IBaseMerchantAmazonProductInformationRowElementItem    {
        
        /** text of the voucher */
        text?: string | undefined

    [key: string]: any;

    }

export class ProductInformationRowProductInformationTextRowElementItem  extends BaseMerchantAmazonProductInformationRowElementItem   implements IProductInformationRowProductInformationTextRowElementItem {

    
    /** text of the voucher */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationRowProductInformationTextRowElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.text = data["text"];
        }
    }

    static fromJS(data: any): ProductInformationRowProductInformationTextRowElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationRowProductInformationTextRowElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["text"] = this.text;
        return data;
    }
}