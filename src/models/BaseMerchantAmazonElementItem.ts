import { RatingElement, IRatingElement } from "./RatingElement";
import { AmazonDeliveryInfo, IAmazonDeliveryInfo } from "./AmazonDeliveryInfo";
import { AmazonLabelElement, IAmazonLabelElement } from "./AmazonLabelElement";
import { AmazonSerpElement, IAmazonSerpElement } from "./AmazonSerpElement";
import { RelatedSearchesElement, IRelatedSearchesElement } from "./RelatedSearchesElement";


export interface IBaseMerchantAmazonElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank in SERP* absolute position among all the elements found in Amazon SERP */
        rank_absolute?: number | undefined
        
        /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseMerchantAmazonElementItem  implements IBaseMerchantAmazonElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank in SERP* absolute position among all the elements found in Amazon SERP */

    rank_absolute?: number | undefined;

    
    /** *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseMerchantAmazonElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseMerchantAmazonElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "amazon_paid") {

            let result = new MerchantAmazonPaidSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "amazon_serp") {

            let result = new MerchantAmazonSerpSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "editorial_recommendations") {

            let result = new MerchantEditorialRecommendationsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            let result = new MerchantRelatedSearchesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_rated_from_our_brands") {

            let result = new MerchantTopRatedFromOurBrandsSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseMerchantAmazonElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["xpath"] = this.xpath;
        return data;
    }
}

 
export interface IMerchantAmazonPaidSerpElementItem  extends IBaseMerchantAmazonElementItem    {
        
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

export class MerchantAmazonPaidSerpElementItem  extends BaseMerchantAmazonElementItem   implements IMerchantAmazonPaidSerpElementItem {

    
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


    constructor(data?: IMerchantAmazonPaidSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
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

    static fromJS(data: any): MerchantAmazonPaidSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonPaidSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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

 
export interface IMerchantAmazonSerpSerpElementItem  extends IBaseMerchantAmazonElementItem    {
        
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

export class MerchantAmazonSerpSerpElementItem  extends BaseMerchantAmazonElementItem   implements IMerchantAmazonSerpSerpElementItem {

    
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


    constructor(data?: IMerchantAmazonSerpSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
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

    static fromJS(data: any): MerchantAmazonSerpSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonSerpSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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

 
export interface IMerchantEditorialRecommendationsSerpElementItem  extends IBaseMerchantAmazonElementItem    {
        
        /** *the alignment of the element in Amazon SERP* possible values: `left`, `right` */
        position?: string | undefined
        
        /** *Amazon product items* */
        items?: AmazonSerpElement[] | undefined

    [key: string]: any;

    }

export class MerchantEditorialRecommendationsSerpElementItem  extends BaseMerchantAmazonElementItem   implements IMerchantEditorialRecommendationsSerpElementItem {

    
    /** *the alignment of the element in Amazon SERP* possible values: `left`, `right` */

    position?: string | undefined;

    
    /** *Amazon product items* */

    items?: AmazonSerpElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantEditorialRecommendationsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AmazonSerpElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantEditorialRecommendationsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantEditorialRecommendationsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IMerchantRelatedSearchesSerpElementItem  extends IBaseMerchantAmazonElementItem    {
        
        /** *the alignment of the element in Amazon SERP* possible values: `left`, `right` */
        position?: string | undefined
        
        /** *Amazon product items* */
        items?: RelatedSearchesElement[] | undefined

    [key: string]: any;

    }

export class MerchantRelatedSearchesSerpElementItem  extends BaseMerchantAmazonElementItem   implements IMerchantRelatedSearchesSerpElementItem {

    
    /** *the alignment of the element in Amazon SERP* possible values: `left`, `right` */

    position?: string | undefined;

    
    /** *Amazon product items* */

    items?: RelatedSearchesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantRelatedSearchesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(RelatedSearchesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantRelatedSearchesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantRelatedSearchesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface IMerchantTopRatedFromOurBrandsSerpElementItem  extends IBaseMerchantAmazonElementItem    {
        
        /** *the alignment of the element in Amazon SERP* possible values: `left`, `right` */
        position?: string | undefined
        
        /** *Amazon product items* */
        items?: AmazonSerpElement[] | undefined

    [key: string]: any;

    }

export class MerchantTopRatedFromOurBrandsSerpElementItem  extends BaseMerchantAmazonElementItem   implements IMerchantTopRatedFromOurBrandsSerpElementItem {

    
    /** *the alignment of the element in Amazon SERP* possible values: `left`, `right` */

    position?: string | undefined;

    
    /** *Amazon product items* */

    items?: AmazonSerpElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantTopRatedFromOurBrandsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AmazonSerpElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantTopRatedFromOurBrandsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantTopRatedFromOurBrandsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}