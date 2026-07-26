import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IPopularProductsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** link description */
        description?: string | undefined
        
        /** indicates whether the product is sold by multiple sellers */
        more_sellers?: boolean | undefined
        
        /** seller of the product */
        seller?: string | undefined
        
        /** URL of the image the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** price indicated in the element */
        price?: PriceInfo | undefined
        
        /** the item’s rating  the popularity rate based on reviews and displayed in SERP; if there is none, equals null */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class PopularProductsElement  implements IPopularProductsElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of a given link element */

    title?: string | undefined;

    
    /** link description */

    description?: string | undefined;

    
    /** indicates whether the product is sold by multiple sellers */

    more_sellers?: boolean | undefined;

    
    /** seller of the product */

    seller?: string | undefined;

    
    /** URL of the image the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;

    
    /** price indicated in the element */

    price?: PriceInfo | undefined;

    
    /** the item’s rating  the popularity rate based on reviews and displayed in SERP; if there is none, equals null */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IPopularProductsElement) {

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
            this.description = data["description"];
            this.more_sellers = data["more_sellers"];
            this.seller = data["seller"];
            this.image_url = data["image_url"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PopularProductsElement {
        data = typeof data === 'object' ? data : {};


        let result = new PopularProductsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["more_sellers"] = this.more_sellers;
        data["seller"] = this.seller;
        data["image_url"] = this.image_url;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}