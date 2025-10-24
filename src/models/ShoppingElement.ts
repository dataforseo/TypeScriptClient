import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IShoppingElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the row */
        title?: string | undefined
        
        /** price of the app element */
        price?: PriceInfo | undefined
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google */
        marketplace?: string | undefined
        
        /** URL to the merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account */
        marketplace_url?: string | undefined
        
        /** URL of element */
        url?: string | undefined
        
        /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class ShoppingElement  implements IShoppingElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the row */

    title?: string | undefined;
    
    /** price of the app element */

    price?: PriceInfo | undefined;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google */

    marketplace?: string | undefined;
    
    /** URL to the merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account */

    marketplace_url?: string | undefined;
    
    /** URL of element */

    url?: string | undefined;
    
    /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IShoppingElement) {

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
            this.title = data["title"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.source = data["source"];
            this.description = data["description"];
            this.marketplace = data["marketplace"];
            this.marketplace_url = data["marketplace_url"];
            this.url = data["url"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ShoppingElement {
        data = typeof data === 'object' ? data : {};


        let result = new ShoppingElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["source"] = this.source;
        data["description"] = this.description;
        data["marketplace"] = this.marketplace;
        data["marketplace_url"] = this.marketplace_url;
        data["url"] = this.url;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}