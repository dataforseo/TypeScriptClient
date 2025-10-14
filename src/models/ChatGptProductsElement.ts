import { RatingElement, IRatingElement } from "./RatingElement";


export interface IChatGptProductsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** product id */
        product_id?: string | undefined
        
        /** source title */
        title?: string | undefined
        
        /** rating of the corresponding local businesses
popularity rate based on reviews as displayed in the results */
        rating?: RatingElement | undefined
        
        /** product price */
        price?: number | undefined
        
        /** currency of the listed price
ISO code of the currency applied to the price */
        currency?: string | undefined
        
        /** tag text */
        tag?: string | undefined
        
        /** source URL */
        url?: string | undefined
        
        /** source domain */
        domain?: string | undefined
        
        /** image URLs of the element
contains URLs leading to the images on the original resource or DataForSEO storage (in case the original source is not available) */
        images?: string[] | undefined

    [key: string]: any;

    }

export class ChatGptProductsElement  implements IChatGptProductsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** product id */

    product_id?: string | undefined;
    
    /** source title */

    title?: string | undefined;
    
    /** rating of the corresponding local businesses
popularity rate based on reviews as displayed in the results */

    rating?: RatingElement | undefined;
    
    /** product price */

    price?: number | undefined;
    
    /** currency of the listed price
ISO code of the currency applied to the price */

    currency?: string | undefined;
    
    /** tag text */

    tag?: string | undefined;
    
    /** source URL */

    url?: string | undefined;
    
    /** source domain */

    domain?: string | undefined;
    
    /** image URLs of the element
contains URLs leading to the images on the original resource or DataForSEO storage (in case the original source is not available) */

    images?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IChatGptProductsElement) {

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
            this.product_id = data["product_id"];
            this.title = data["title"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"];
            this.currency = data["currency"];
            this.tag = data["tag"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.images = data["images"];
        }
    }

    static fromJS(data: any): ChatGptProductsElement {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptProductsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["product_id"] = this.product_id;
        data["title"] = this.title;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price;
        data["currency"] = this.currency;
        data["tag"] = this.tag;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["images"] = this.images;
        return data;
    }
}