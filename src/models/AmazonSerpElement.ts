import { RatingElement, IRatingElement } from "./RatingElement";
import { AmazonDeliveryInfo, IAmazonDeliveryInfo } from "./AmazonDeliveryInfo";
import { AmazonLabelElement, IAmazonLabelElement } from "./AmazonLabelElement";


export interface IAmazonSerpElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */
        xpath?: string | undefined
        
        /** *Amazon domain* */
        domain?: string | undefined
        
        /** *product title* */
        title?: string | undefined
        
        /** *the URL of the product page* */
        url?: string | undefined
        
        /** *URL of the product image featured in the results* */
        image_url?: string | undefined
        
        /** *number of product purchases in the past month* */
        bought_past_month?: number | undefined
        
        /** *the regular price of a product* example: `49.98` */
        price_from?: number | undefined
        
        /** *the upper limit of the product price range* example: `384.99` */
        price_to?: number | undefined
        
        /** *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format* example: `USD` */
        currency?: string | undefined
        
        /** *special offer details* contains special offer details, including coupon and Subscribe & Save discounts */
        special_offers?: string[] | undefined
        
        /** *unique product identifier on Amazon* note that there is no full list of possible values as the `data_asin` is a dynamic value assigned by Amazon example: `B07G82D89J` */
        data_asin?: string | undefined
        
        /** *product rating info* */
        rating?: RatingElement | undefined
        
        /** *'Amazon's choice' label* if the value is `true`, the product is marked with the 'Amazon's choice' label */
        is_amazon_choice?: boolean | undefined
        
        /** *'Best Seller' label* if the value is `true`, the product is marked with the 'Best Seller' label */
        is_best_seller?: boolean | undefined
        
        /** *delivery information* delivery information including free and fast delivery date ranges */
        delivery_info?: AmazonDeliveryInfo | undefined
        
        /** *product labels* array containing an object with main Amazon labels’ information if the product contains no labels, the value will be `null` */
        labels?: AmazonLabelElement[] | undefined

    [key: string]: any;

    }

export class AmazonSerpElement  implements IAmazonSerpElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */

    xpath?: string | undefined;

    
    /** *Amazon domain* */

    domain?: string | undefined;

    
    /** *product title* */

    title?: string | undefined;

    
    /** *the URL of the product page* */

    url?: string | undefined;

    
    /** *URL of the product image featured in the results* */

    image_url?: string | undefined;

    
    /** *number of product purchases in the past month* */

    bought_past_month?: number | undefined;

    
    /** *the regular price of a product* example: `49.98` */

    price_from?: number | undefined;

    
    /** *the upper limit of the product price range* example: `384.99` */

    price_to?: number | undefined;

    
    /** *currency in the [ISO](https://en.wikipedia.org/wiki/ISO_4217) format* example: `USD` */

    currency?: string | undefined;

    
    /** *special offer details* contains special offer details, including coupon and Subscribe & Save discounts */

    special_offers?: string[] | undefined;

    
    /** *unique product identifier on Amazon* note that there is no full list of possible values as the `data_asin` is a dynamic value assigned by Amazon example: `B07G82D89J` */

    data_asin?: string | undefined;

    
    /** *product rating info* */

    rating?: RatingElement | undefined;

    
    /** *'Amazon's choice' label* if the value is `true`, the product is marked with the 'Amazon's choice' label */

    is_amazon_choice?: boolean | undefined;

    
    /** *'Best Seller' label* if the value is `true`, the product is marked with the 'Best Seller' label */

    is_best_seller?: boolean | undefined;

    
    /** *delivery information* delivery information including free and fast delivery date ranges */

    delivery_info?: AmazonDeliveryInfo | undefined;

    
    /** *product labels* array containing an object with main Amazon labels’ information if the product contains no labels, the value will be `null` */

    labels?: AmazonLabelElement[] | undefined;

    [key: string]: any;


    constructor(data?: IAmazonSerpElement) {

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
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.bought_past_month = data["bought_past_month"];
            this.price_from = data["price_from"];
            this.price_to = data["price_to"];
            this.currency = data["currency"];
            this.special_offers = data["special_offers"];
            this.data_asin = data["data_asin"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.is_amazon_choice = data["is_amazon_choice"];
            this.is_best_seller = data["is_best_seller"];
            this.delivery_info = data["delivery_info"] ? AmazonDeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
            if (Array.isArray(data["labels"])) {
                this.labels = [];
                for (let item of data["labels"]) {
                    this.labels.push(AmazonLabelElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AmazonSerpElement {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonSerpElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["bought_past_month"] = this.bought_past_month;
        data["price_from"] = this.price_from;
        data["price_to"] = this.price_to;
        data["currency"] = this.currency;
        data["special_offers"] = this.special_offers;
        data["data_asin"] = this.data_asin;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["is_amazon_choice"] = this.is_amazon_choice;
        data["is_best_seller"] = this.is_best_seller;
        data["delivery_info"] = this.delivery_info ? AmazonDeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        data["labels"] = null;
        if (Array.isArray(this.labels)) {
            data["labels"] = [];
            for (let item of this.labels) {
                if (item && typeof item.toJSON === "function") {
                    data["labels"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}