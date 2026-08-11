import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface ICommercialUnitsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *title of a given link element* */
        title?: string | undefined
        
        /** *source URL* */
        url?: string | undefined
        
        /** *domain where a link points* */
        domain?: string | undefined
        
        /** *price indicated in the element* */
        price?: PriceInfo | undefined
        
        /** *reference source name or title* */
        source?: string | undefined
        
        /** *the item's rating* the popularity rate based on reviews and displayed in SERP; if there is none, equals `null` */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class CommercialUnitsElement  implements ICommercialUnitsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *title of a given link element* */

    title?: string | undefined;

    
    /** *source URL* */

    url?: string | undefined;

    
    /** *domain where a link points* */

    domain?: string | undefined;

    
    /** *price indicated in the element* */

    price?: PriceInfo | undefined;

    
    /** *reference source name or title* */

    source?: string | undefined;

    
    /** *the item's rating* the popularity rate based on reviews and displayed in SERP; if there is none, equals `null` */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: ICommercialUnitsElement) {

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
            this.url = data["url"];
            this.domain = data["domain"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.source = data["source"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CommercialUnitsElement {
        data = typeof data === 'object' ? data : {};


        let result = new CommercialUnitsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["source"] = this.source;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}