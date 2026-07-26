import { RatingElement, IRatingElement } from "./RatingElement";
import { DeliveryInfo, IDeliveryInfo } from "./DeliveryInfo";
import { SpecialOfferInfo, ISpecialOfferInfo } from "./SpecialOfferInfo";


export interface IGoogleShoppingSponsoredCarouselElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *[XPath](https://en.wikipedia.org/wiki/XPath) of the element* */
        xpath?: string | undefined
        
        /** *title of the element* */
        title?: string | undefined
        
        /** *tags assigned to the product* */
        tags?: string[] | undefined
        
        /** *name of the seller* the name of the company that placed a corresponding product on Google Shopping */
        seller?: string | undefined
        
        /** *product price* example: `384.99` */
        price?: number | undefined
        
        /** *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format* example: `USD` */
        currency?: string | undefined
        
        /** *product rating* the product popularity rate based on product reviews */
        product_rating?: RatingElement | undefined
        
        /** *URLs to the images of the product* the first URL in the array is the featured image of the product */
        product_images?: string[] | undefined
        
        /** *unique ad click referral parameter* using this parameter you can get a URL of the advertisement in [Google Shopping Sellers Ad URL](/v3/merchant/google/sellers/ad_url/) */
        shop_ad_aclk?: string | undefined
        
        /** *delivery information* delivery information including free and fast delivery date ranges */
        delivery_info?: DeliveryInfo | undefined
        
        /** *special offer from the seller* information on the special offer from the seller, including discount and coupon info */
        special_offer_info?: SpecialOfferInfo | undefined

    [key: string]: any;

    }

export class GoogleShoppingSponsoredCarouselElement  implements IGoogleShoppingSponsoredCarouselElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *[XPath](https://en.wikipedia.org/wiki/XPath) of the element* */

    xpath?: string | undefined;

    
    /** *title of the element* */

    title?: string | undefined;

    
    /** *tags assigned to the product* */

    tags?: string[] | undefined;

    
    /** *name of the seller* the name of the company that placed a corresponding product on Google Shopping */

    seller?: string | undefined;

    
    /** *product price* example: `384.99` */

    price?: number | undefined;

    
    /** *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format* example: `USD` */

    currency?: string | undefined;

    
    /** *product rating* the product popularity rate based on product reviews */

    product_rating?: RatingElement | undefined;

    
    /** *URLs to the images of the product* the first URL in the array is the featured image of the product */

    product_images?: string[] | undefined;

    
    /** *unique ad click referral parameter* using this parameter you can get a URL of the advertisement in [Google Shopping Sellers Ad URL](/v3/merchant/google/sellers/ad_url/) */

    shop_ad_aclk?: string | undefined;

    
    /** *delivery information* delivery information including free and fast delivery date ranges */

    delivery_info?: DeliveryInfo | undefined;

    
    /** *special offer from the seller* information on the special offer from the seller, including discount and coupon info */

    special_offer_info?: SpecialOfferInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleShoppingSponsoredCarouselElement) {

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
            this.xpath = data["xpath"];
            this.title = data["title"];
            this.tags = data["tags"];
            this.seller = data["seller"];
            this.price = data["price"];
            this.currency = data["currency"];
            this.product_rating = data["product_rating"] ? RatingElement.fromJS(data["product_rating"]) : <any>undefined;
            this.product_images = data["product_images"];
            this.shop_ad_aclk = data["shop_ad_aclk"];
            this.delivery_info = data["delivery_info"] ? DeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
            this.special_offer_info = data["special_offer_info"] ? SpecialOfferInfo.fromJS(data["special_offer_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleShoppingSponsoredCarouselElement {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleShoppingSponsoredCarouselElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["xpath"] = this.xpath;
        data["title"] = this.title;
        data["tags"] = this.tags;
        data["seller"] = this.seller;
        data["price"] = this.price;
        data["currency"] = this.currency;
        data["product_rating"] = this.product_rating ? RatingElement.fromJS(this.product_rating)?.toJSON() : <any>undefined;
        data["product_images"] = this.product_images;
        data["shop_ad_aclk"] = this.shop_ad_aclk;
        data["delivery_info"] = this.delivery_info ? DeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        data["special_offer_info"] = this.special_offer_info ? SpecialOfferInfo.fromJS(this.special_offer_info)?.toJSON() : <any>undefined;
        return data;
    }
}