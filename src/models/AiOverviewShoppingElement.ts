import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";


export interface IAiOverviewShoppingElement   {
        
        /** type of element */
        type?: string | undefined
        
        product_id?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** reference page URL */
        url?: string | undefined
        
        /** domain in link */
        domain?: string | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** pricing details
contains the pricing details of the product or service featured in the result */
        price?: PriceInfo | undefined
        
        /** seller of the product */
        seller?: string | undefined
        
        /** text alongside the link title */
        snippet?: string | undefined
        
        /** merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google */
        marketplace?: string | undefined
        
        /** relevant marketplace URL
URL of the page on the marketplace website where the product is hosted */
        marketplace_url?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined

    [key: string]: any;

    }

export class AiOverviewShoppingElement  implements IAiOverviewShoppingElement {
    
    /** type of element */

    type?: string | undefined;

    product_id?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** reference page URL */

    url?: string | undefined;
    
    /** domain in link */

    domain?: string | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;
    
    /** pricing details
contains the pricing details of the product or service featured in the result */

    price?: PriceInfo | undefined;
    
    /** seller of the product */

    seller?: string | undefined;
    
    /** text alongside the link title */

    snippet?: string | undefined;
    
    /** merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google */

    marketplace?: string | undefined;
    
    /** relevant marketplace URL
URL of the page on the marketplace website where the product is hosted */

    marketplace_url?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOverviewShoppingElement) {

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
            this.url = data["url"];
            this.domain = data["domain"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.seller = data["seller"];
            this.snippet = data["snippet"];
            this.marketplace = data["marketplace"];
            this.marketplace_url = data["marketplace_url"];
            this.image_url = data["image_url"];
        }
    }

    static fromJS(data: any): AiOverviewShoppingElement {
        data = typeof data === 'object' ? data : {};


        let result = new AiOverviewShoppingElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["product_id"] = this.product_id;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["seller"] = this.seller;
        data["snippet"] = this.snippet;
        data["marketplace"] = this.marketplace;
        data["marketplace_url"] = this.marketplace_url;
        data["image_url"] = this.image_url;
        return data;
    }
}