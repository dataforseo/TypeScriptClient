import { RatingElement, IRatingElement } from "./RatingElement";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { DeliveryInfo, IDeliveryInfo } from "./DeliveryInfo";


export interface IProductSeller   {
        
        /** type of element */
        type?: string | undefined
        
        /** *product title* */
        title?: string | undefined
        
        /** *seller url* url of the page where the product is sold */
        url?: string | undefined
        
        /** *rating of the seller* */
        seller_rating?: RatingElement | undefined
        
        /** number of seller reviews number of reviews on the product seller’s account */
        seller_review_count?: number | undefined
        
        /** *product price* product price details on the seller's website */
        price?: PriceInfo | undefined
        
        /** *delivery information* product delivery information */
        delivery_info?: DeliveryInfo | undefined
        
        /** *product availability information* can take the following values: `in_stock`, `limited_stock`, `out_of_stock`, `backordered`, `pre_order_available`, `on_display_to_order` */
        product_availability?: string | undefined

    [key: string]: any;

    }

export class ProductSeller  implements IProductSeller {

    
    /** type of element */

    type?: string | undefined;

    
    /** *product title* */

    title?: string | undefined;

    
    /** *seller url* url of the page where the product is sold */

    url?: string | undefined;

    
    /** *rating of the seller* */

    seller_rating?: RatingElement | undefined;

    
    /** number of seller reviews number of reviews on the product seller’s account */

    seller_review_count?: number | undefined;

    
    /** *product price* product price details on the seller's website */

    price?: PriceInfo | undefined;

    
    /** *delivery information* product delivery information */

    delivery_info?: DeliveryInfo | undefined;

    
    /** *product availability information* can take the following values: `in_stock`, `limited_stock`, `out_of_stock`, `backordered`, `pre_order_available`, `on_display_to_order` */

    product_availability?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductSeller) {

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
            this.seller_rating = data["seller_rating"] ? RatingElement.fromJS(data["seller_rating"]) : <any>undefined;
            this.seller_review_count = data["seller_review_count"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.delivery_info = data["delivery_info"] ? DeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
            this.product_availability = data["product_availability"];
        }
    }

    static fromJS(data: any): ProductSeller {
        data = typeof data === 'object' ? data : {};


        let result = new ProductSeller();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["seller_rating"] = this.seller_rating ? RatingElement.fromJS(this.seller_rating)?.toJSON() : <any>undefined;
        data["seller_review_count"] = this.seller_review_count;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["delivery_info"] = this.delivery_info ? DeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        data["product_availability"] = this.product_availability;
        return data;
    }
}