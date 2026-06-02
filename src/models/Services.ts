import { PriceInfo, IPriceInfo } from "./PriceInfo";


export interface IServices   {
        
        /** category of the service
example:
“Internet Marketing Service' */
        category?: string | undefined
        
        /** title of the element in SERP
the name of the business entity */
        title?: string | undefined
        
        /** description of the service as provided by the business */
        snippet?: string | undefined
        
        /** pricing information for the service */
        price?: PriceInfo | undefined

    [key: string]: any;

    }

export class Services  implements IServices {
    
    /** category of the service
example:
“Internet Marketing Service' */

    category?: string | undefined;
    
    /** title of the element in SERP
the name of the business entity */

    title?: string | undefined;
    
    /** description of the service as provided by the business */

    snippet?: string | undefined;
    
    /** pricing information for the service */

    price?: PriceInfo | undefined;

    [key: string]: any;


    constructor(data?: IServices) {

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
            this.category = data["category"];
            this.title = data["title"];
            this.snippet = data["snippet"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
        }
    }

    static fromJS(data: any): Services {
        data = typeof data === 'object' ? data : {};


        let result = new Services();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category"] = this.category;
        data["title"] = this.title;
        data["snippet"] = this.snippet;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        return data;
    }
}