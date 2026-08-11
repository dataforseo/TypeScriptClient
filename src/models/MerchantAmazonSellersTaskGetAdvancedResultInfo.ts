import { BaseMerchantAmazonSellersElementItem, IBaseMerchantAmazonSellersElementItem } from "./BaseMerchantAmazonSellersElementItem";


export interface IMerchantAmazonSellersTaskGetAdvancedResultInfo   {
        
        /** *`asin` received in a POST array* learn more about ASINs in [this help center guide](https://dataforseo.com/help-center/asin-in-amazon-api) */
        asin?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** *search engine domain received in a POST array* */
        se_domain?: string | undefined
        
        /** *location code received in a POST array* */
        location_code?: number | undefined
        
        /** *language code received in a POST array* */
        language_code?: string | undefined
        
        /** *direct URL to Amazon results* you can use it to make sure the provided results are accurate */
        check_url?: string | undefined
        
        /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *product title* title of the product relevant to the `asin` received in a POST array */
        title?: string | undefined
        
        /** *product image url* image URL of the product relevant to the `asin` received in a POST array */
        image?: string | undefined
        
        /** *types of search results found in Amazon Sellers SERP* contains types of all search results (`items`) found in the returned SERP possible item types: `amazon_seller_main_item`, `amazon_seller_item` */
        item_types?: string[] | undefined
        
        /** *the number of results returned in the **`items`** array* */
        items_count?: number | undefined
        
        /** *items in SERP* */
        items?: BaseMerchantAmazonSellersElementItem[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonSellersTaskGetAdvancedResultInfo  implements IMerchantAmazonSellersTaskGetAdvancedResultInfo {

    
    /** *`asin` received in a POST array* learn more about ASINs in [this help center guide](https://dataforseo.com/help-center/asin-in-amazon-api) */

    asin?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** *search engine domain received in a POST array* */

    se_domain?: string | undefined;

    
    /** *location code received in a POST array* */

    location_code?: number | undefined;

    
    /** *language code received in a POST array* */

    language_code?: string | undefined;

    
    /** *direct URL to Amazon results* you can use it to make sure the provided results are accurate */

    check_url?: string | undefined;

    
    /** *date and time when the result was received* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *product title* title of the product relevant to the `asin` received in a POST array */

    title?: string | undefined;

    
    /** *product image url* image URL of the product relevant to the `asin` received in a POST array */

    image?: string | undefined;

    
    /** *types of search results found in Amazon Sellers SERP* contains types of all search results (`items`) found in the returned SERP possible item types: `amazon_seller_main_item`, `amazon_seller_item` */

    item_types?: string[] | undefined;

    
    /** *the number of results returned in the **`items`** array* */

    items_count?: number | undefined;

    
    /** *items in SERP* */

    items?: BaseMerchantAmazonSellersElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonSellersTaskGetAdvancedResultInfo) {

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
            this.asin = data["asin"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.title = data["title"];
            this.image = data["image"];
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseMerchantAmazonSellersElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonSellersTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonSellersTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asin"] = this.asin;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["title"] = this.title;
        data["image"] = this.image;
        data["item_types"] = this.item_types;
        data["items_count"] = this.items_count;
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