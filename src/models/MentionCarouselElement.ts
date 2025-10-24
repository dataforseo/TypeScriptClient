import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { LinkElement, ILinkElement } from "./LinkElement";


export interface IMentionCarouselElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the row */
        title?: string | undefined
        
        /** price of the app element */
        price?: PriceInfo | undefined
        
        /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** additional elements in the mention_carousel item */
        mentioned_in?: LinkElement[] | undefined

    [key: string]: any;

    }

export class MentionCarouselElement  implements IMentionCarouselElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the row */

    title?: string | undefined;
    
    /** price of the app element */

    price?: PriceInfo | undefined;
    
    /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;
    
    /** additional elements in the mention_carousel item */

    mentioned_in?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMentionCarouselElement) {

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
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            if (Array.isArray(data["mentioned_in"])) {
                this.mentioned_in = [];
                for (let item of data["mentioned_in"]) {
                    this.mentioned_in.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MentionCarouselElement {
        data = typeof data === 'object' ? data : {};


        let result = new MentionCarouselElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["mentioned_in"] = null;
        if (Array.isArray(this.mentioned_in)) {
            data["mentioned_in"] = [];
            for (let item of this.mentioned_in) {
                if (item && typeof item.toJSON === "function") {
                    data["mentioned_in"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}