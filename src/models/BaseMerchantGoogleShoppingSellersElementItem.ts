import { RatingElement, IRatingElement } from "./RatingElement";
import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IBaseMerchantGoogleShoppingSellersElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in Google Shopping SERP
possible values:
left, right */
        position?: string | undefined
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** product title */
        title?: string | undefined
        
        /** Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint */
        url?: string | undefined
        
        /** details and special offers
if there are no details, the value will be null */
        details?: string | undefined
        
        /** product price without tax and shipping */
        base_price?: number | undefined
        
        /** the amount of tax
tax is specified as the actual amount of money, not as the percentage */
        tax?: number | undefined
        
        /** product shipping price */
        shipping_price?: number | undefined
        
        /** product price including tax and shipping */
        total_price?: number | undefined
        
        /** currency in the ISO format
example:
USD */
        currency?: string | undefined
        
        /** name of the seller
the name of the company that placed a corresponding product on Google Shopping */
        seller_name?: string | undefined
        
        /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */
        shop_ad_aclk?: string | undefined

    [key: string]: any;

    }

export class BaseMerchantGoogleShoppingSellersElementItem  implements IBaseMerchantGoogleShoppingSellersElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in Google Shopping SERP
possible values:
left, right */

    position?: string | undefined;
    
    /** XPath of the element */

    xpath?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** product title */

    title?: string | undefined;
    
    /** Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint */

    url?: string | undefined;
    
    /** details and special offers
if there are no details, the value will be null */

    details?: string | undefined;
    
    /** product price without tax and shipping */

    base_price?: number | undefined;
    
    /** the amount of tax
tax is specified as the actual amount of money, not as the percentage */

    tax?: number | undefined;
    
    /** product shipping price */

    shipping_price?: number | undefined;
    
    /** product price including tax and shipping */

    total_price?: number | undefined;
    
    /** currency in the ISO format
example:
USD */

    currency?: string | undefined;
    
    /** name of the seller
the name of the company that placed a corresponding product on Google Shopping */

    seller_name?: string | undefined;
    
    /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */

    shop_ad_aclk?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseMerchantGoogleShoppingSellersElementItem) {

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
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.details = data["details"];
            this.base_price = data["base_price"];
            this.tax = data["tax"];
            this.shipping_price = data["shipping_price"];
            this.total_price = data["total_price"];
            this.currency = data["currency"];
            this.seller_name = data["seller_name"];
            this.shop_ad_aclk = data["shop_ad_aclk"];
        }
    }

    static fromJS(data: any): BaseMerchantGoogleShoppingSellersElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "shops_list") {

            let result = new GoogleShoppingSellersShopsListElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "buy_on_google") {

            let result = new GoogleShoppingSellersBuyOnGoogleElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseMerchantGoogleShoppingSellersElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["details"] = this.details;
        data["base_price"] = this.base_price;
        data["tax"] = this.tax;
        data["shipping_price"] = this.shipping_price;
        data["total_price"] = this.total_price;
        data["currency"] = this.currency;
        data["seller_name"] = this.seller_name;
        data["shop_ad_aclk"] = this.shop_ad_aclk;
        return data;
    }
}

 
export interface IGoogleShoppingSellersShopsListElementItem  extends IBaseMerchantGoogleShoppingSellersElementItem    {
        
        /** monthly price multiplier
indicates the number of months covered by the monthly payment for the product */
        price_multiplier?: number | undefined
        
        /** installment details as displayed in the results
shows how the product price can be broken down into monthly payments, if applicable */
        displayed_payment_breakdown?: string | undefined
        
        /** shop rating
the shop popularity rate based on product reviews */
        rating?: RatingElement | undefined
        
        /** indicated condition of the product
possible values: Used, Refurbished, New, Pre-owned, null */
        product_condition?: string | undefined
        
        /** data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP */
        product_annotation?: string | undefined
        
        /** product availability information
product availability information
can take the following values: in_stock, limited_stock, out_of_stock, backordered, pre_order_available, on_display_to_order */
        product_availability?: string | undefined

    [key: string]: any;

    }

export class GoogleShoppingSellersShopsListElementItem  extends BaseMerchantGoogleShoppingSellersElementItem   implements IGoogleShoppingSellersShopsListElementItem {
    
    /** monthly price multiplier
indicates the number of months covered by the monthly payment for the product */

    price_multiplier?: number | undefined;
    
    /** installment details as displayed in the results
shows how the product price can be broken down into monthly payments, if applicable */

    displayed_payment_breakdown?: string | undefined;
    
    /** shop rating
the shop popularity rate based on product reviews */

    rating?: RatingElement | undefined;
    
    /** indicated condition of the product
possible values: Used, Refurbished, New, Pre-owned, null */

    product_condition?: string | undefined;
    
    /** data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP */

    product_annotation?: string | undefined;
    
    /** product availability information
product availability information
can take the following values: in_stock, limited_stock, out_of_stock, backordered, pre_order_available, on_display_to_order */

    product_availability?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleShoppingSellersShopsListElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.price_multiplier = data["price_multiplier"];
            this.displayed_payment_breakdown = data["displayed_payment_breakdown"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.product_condition = data["product_condition"];
            this.product_annotation = data["product_annotation"];
            this.product_availability = data["product_availability"];
        }
    }

    static fromJS(data: any): GoogleShoppingSellersShopsListElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleShoppingSellersShopsListElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["price_multiplier"] = this.price_multiplier;
        data["displayed_payment_breakdown"] = this.displayed_payment_breakdown;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["product_condition"] = this.product_condition;
        data["product_annotation"] = this.product_annotation;
        data["product_availability"] = this.product_availability;
        return data;
    }
}

 
export interface IGoogleShoppingSellersBuyOnGoogleElementItem  extends IBaseMerchantGoogleShoppingSellersElementItem    {
        
        /** shop rating
the shop popularity rate based on product reviews */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class GoogleShoppingSellersBuyOnGoogleElementItem  extends BaseMerchantGoogleShoppingSellersElementItem   implements IGoogleShoppingSellersBuyOnGoogleElementItem {
    
    /** shop rating
the shop popularity rate based on product reviews */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleShoppingSellersBuyOnGoogleElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleShoppingSellersBuyOnGoogleElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleShoppingSellersBuyOnGoogleElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}