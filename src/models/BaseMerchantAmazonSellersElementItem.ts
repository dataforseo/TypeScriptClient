import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { AmazonApplicableVouchersItem, IAmazonApplicableVouchersItem } from "./AmazonApplicableVouchersItem";
import { RatingElement, IRatingElement } from "./RatingElement";
import { AmazonDeliveryInfo, IAmazonDeliveryInfo } from "./AmazonDeliveryInfo";


export interface IBaseMerchantAmazonSellersElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP absolute position among all the elements found in Amazon Sellers SERP */
        rank_absolute?: number | undefined
        
        /** alignment of the element in SERP possible values: left, right */
        position?: string | undefined
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** business name of the seller */
        seller_name?: string | undefined
        
        /** url forwarding to the seller’s page on Amazon */
        seller_url?: string | undefined
        
        /** sender company name */
        ships_from?: string | undefined
        
        /** product pricing details if there are no details, the value will be null */
        price?: PriceInfo | undefined
        
        /** value of the percentage discount */
        percentage_discount?: number | undefined
        
        /** array of objects containing information about applicable vouchers */
        applicable_vouchers?: AmazonApplicableVouchersItem[] | undefined
        
        /** seller rating details seller popularity rate based on customer reviews */
        rating?: RatingElement | undefined
        
        /** product condition condition of the product offered by the seller */
        condition?: string | undefined
        
        /** product condition details expanded details on the condition of the product offered by the seller */
        condition_description?: string | undefined
        
        /** delivery information delivery information including free and fast delivery date ranges */
        delivery_info?: AmazonDeliveryInfo | undefined

    [key: string]: any;

    }

export class BaseMerchantAmazonSellersElementItem  implements IBaseMerchantAmazonSellersElementItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** position within a group of elements with identical type values positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank in SERP absolute position among all the elements found in Amazon Sellers SERP */

    rank_absolute?: number | undefined;

    
    /** alignment of the element in SERP possible values: left, right */

    position?: string | undefined;

    
    /** XPath of the element */

    xpath?: string | undefined;

    
    /** business name of the seller */

    seller_name?: string | undefined;

    
    /** url forwarding to the seller’s page on Amazon */

    seller_url?: string | undefined;

    
    /** sender company name */

    ships_from?: string | undefined;

    
    /** product pricing details if there are no details, the value will be null */

    price?: PriceInfo | undefined;

    
    /** value of the percentage discount */

    percentage_discount?: number | undefined;

    
    /** array of objects containing information about applicable vouchers */

    applicable_vouchers?: AmazonApplicableVouchersItem[] | undefined;

    
    /** seller rating details seller popularity rate based on customer reviews */

    rating?: RatingElement | undefined;

    
    /** product condition condition of the product offered by the seller */

    condition?: string | undefined;

    
    /** product condition details expanded details on the condition of the product offered by the seller */

    condition_description?: string | undefined;

    
    /** delivery information delivery information including free and fast delivery date ranges */

    delivery_info?: AmazonDeliveryInfo | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseMerchantAmazonSellersElementItem) {

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
            this.seller_name = data["seller_name"];
            this.seller_url = data["seller_url"];
            this.ships_from = data["ships_from"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.percentage_discount = data["percentage_discount"];
            if (Array.isArray(data["applicable_vouchers"])) {
                this.applicable_vouchers = [];
                for (let item of data["applicable_vouchers"]) {
                    this.applicable_vouchers.push(AmazonApplicableVouchersItem.fromJS(item));
                }
            }
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.condition = data["condition"];
            this.condition_description = data["condition_description"];
            this.delivery_info = data["delivery_info"] ? AmazonDeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseMerchantAmazonSellersElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "amazon_seller_main_item") {

            let result = new MerchantAmazonSellerMainItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "amazon_seller_item") {

            let result = new MerchantAmazonSellerItemSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseMerchantAmazonSellersElementItem();
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
        data["seller_name"] = this.seller_name;
        data["seller_url"] = this.seller_url;
        data["ships_from"] = this.ships_from;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["percentage_discount"] = this.percentage_discount;
        data["applicable_vouchers"] = null;
        if (Array.isArray(this.applicable_vouchers)) {
            data["applicable_vouchers"] = [];
            for (let item of this.applicable_vouchers) {
                if (item && typeof item.toJSON === "function") {
                    data["applicable_vouchers"].push(item?.toJSON());
                }
            }
        }
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["condition"] = this.condition;
        data["condition_description"] = this.condition_description;
        data["delivery_info"] = this.delivery_info ? AmazonDeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        return data;
    }
}

 
export interface IMerchantAmazonSellerMainItemSerpElementItem  extends IBaseMerchantAmazonSellersElementItem    {

    [key: string]: any;

    }

export class MerchantAmazonSellerMainItemSerpElementItem  extends BaseMerchantAmazonSellersElementItem   implements IMerchantAmazonSellerMainItemSerpElementItem {

    [key: string]: any;


    constructor(data?: IMerchantAmazonSellerMainItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): MerchantAmazonSellerMainItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonSellerMainItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}

 
export interface IMerchantAmazonSellerItemSerpElementItem  extends IBaseMerchantAmazonSellersElementItem    {

    [key: string]: any;

    }

export class MerchantAmazonSellerItemSerpElementItem  extends BaseMerchantAmazonSellersElementItem   implements IMerchantAmazonSellerItemSerpElementItem {

    [key: string]: any;


    constructor(data?: IMerchantAmazonSellerItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): MerchantAmazonSellerItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonSellerItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}