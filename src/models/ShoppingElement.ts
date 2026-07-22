import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IShoppingElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** price indicated in the element */
        price?: PriceInfo | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** link description */
        description?: string | undefined
        
        /** merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google */
        marketplace?: string | undefined
        
        /** relevant marketplace URL
URL of the page on the marketplace website where the product is hosted */
        marketplace_url?: string | undefined
        
        /** source URL */
        url?: string | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP;
if there is none, equals null */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class ShoppingElement  implements IShoppingElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of a given link element */

    title?: string | undefined;

    
    /** price indicated in the element */

    price?: PriceInfo | undefined;

    
    /** reference source name or title */

    source?: string | undefined;

    
    /** link description */

    description?: string | undefined;

    
    /** merchant account provider
commerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google */

    marketplace?: string | undefined;

    
    /** relevant marketplace URL
URL of the page on the marketplace website where the product is hosted */

    marketplace_url?: string | undefined;

    
    /** source URL */

    url?: string | undefined;

    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP;
if there is none, equals null */

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