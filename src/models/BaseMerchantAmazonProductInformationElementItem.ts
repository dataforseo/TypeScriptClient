import { ProductInformationRows, IProductInformationRows } from "./ProductInformationRows";


export interface IBaseMerchantAmazonProductInformationElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *name of the section related to product information specified in the `contents`* */
        section_name?: string | undefined

    [key: string]: any;

    }

export class BaseMerchantAmazonProductInformationElementItem  implements IBaseMerchantAmazonProductInformationElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *name of the section related to product information specified in the `contents`* */

    section_name?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseMerchantAmazonProductInformationElementItem) {

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
            this.section_name = data["section_name"];
        }
    }

    static fromJS(data: any): BaseMerchantAmazonProductInformationElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "product_information_details_item") {

            let result = new ProductInformationProductInformationDetailsItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_information_text_item") {

            let result = new ProductInformationProductInformationTextItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_information_extended_item") {

            let result = new ProductInformationProductInformationExtendedItem();
            result.init(data);
            return result;
        }

        let result = new BaseMerchantAmazonProductInformationElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["section_name"] = this.section_name;
        return data;
    }
}

 
export interface IProductInformationProductInformationDetailsItem  extends IBaseMerchantAmazonProductInformationElementItem    {
        
        /** *contains information specified about the product within the `section_name`* */
        body?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class ProductInformationProductInformationDetailsItem  extends BaseMerchantAmazonProductInformationElementItem   implements IProductInformationProductInformationDetailsItem {

    
    /** *contains information specified about the product within the `section_name`* */

    body?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationProductInformationDetailsItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.body = data["body"];
        }
    }

    static fromJS(data: any): ProductInformationProductInformationDetailsItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationProductInformationDetailsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["body"] = this.body;
        return data;
    }
}

 
export interface IProductInformationProductInformationTextItem  extends IBaseMerchantAmazonProductInformationElementItem    {
        
        /** *text specified under the given `title` within the `section_name`* */
        text?: string | undefined

    [key: string]: any;

    }

export class ProductInformationProductInformationTextItem  extends BaseMerchantAmazonProductInformationElementItem   implements IProductInformationProductInformationTextItem {

    
    /** *text specified under the given `title` within the `section_name`* */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationProductInformationTextItem) {
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

    static fromJS(data: any): ProductInformationProductInformationTextItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationProductInformationTextItem();
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

 
export interface IProductInformationProductInformationExtendedItem  extends IBaseMerchantAmazonProductInformationElementItem    {
        
        /** *contains information specified about the product within the `section_name`* */
        contents?: ProductInformationRows[] | undefined

    [key: string]: any;

    }

export class ProductInformationProductInformationExtendedItem  extends BaseMerchantAmazonProductInformationElementItem   implements IProductInformationProductInformationExtendedItem {

    
    /** *contains information specified about the product within the `section_name`* */

    contents?: ProductInformationRows[] | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationProductInformationExtendedItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["contents"])) {
                this.contents = [];
                for (let item of data["contents"]) {
                    this.contents.push(ProductInformationRows.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ProductInformationProductInformationExtendedItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationProductInformationExtendedItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["contents"] = null;
        if (Array.isArray(this.contents)) {
            data["contents"] = [];
            for (let item of this.contents) {
                if (item && typeof item.toJSON === "function") {
                    data["contents"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}