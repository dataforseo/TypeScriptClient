import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IHotelsPackElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** price indicated in the element */
        price?: PriceInfo | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */
        hotel_identifier?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** indicates whether the element is an ad */
        is_paid?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP;
if there is none, equals null */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class HotelsPackElement  implements IHotelsPackElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** price indicated in the element */

    price?: PriceInfo | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */

    hotel_identifier?: string | undefined;
    
    /** website domain */

    domain?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** indicates whether the element is an ad */

    is_paid?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP;
if there is none, equals null */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IHotelsPackElement) {

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
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.title = data["title"];
            this.description = data["description"];
            this.hotel_identifier = data["hotel_identifier"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.is_paid = data["is_paid"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): HotelsPackElement {
        data = typeof data === 'object' ? data : {};


        let result = new HotelsPackElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["title"] = this.title;
        data["description"] = this.description;
        data["hotel_identifier"] = this.hotel_identifier;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["is_paid"] = this.is_paid;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}