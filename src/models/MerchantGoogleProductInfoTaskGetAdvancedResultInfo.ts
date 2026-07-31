import { ProductInfoElement, IProductInfoElement } from "./ProductInfoElement";


export interface IMerchantGoogleProductInfoTaskGetAdvancedResultInfo   {
        
        /** *product ID in a POST array* learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */
        product_id?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** *search engine domain in a POST array* */
        se_domain?: string | undefined
        
        /** *location code in a POST array* */
        location_code?: number | undefined
        
        /** *language code in a POST array* */
        language_code?: string | undefined
        
        /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** *date and time when the result was received* in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes” example: `2019-11-15 12:57:46 +00:00` */
        datetime?: string | undefined
        
        /** *types of items found on the product specification page* possible item types: `product_info_element` */
        item_types?: string[] | undefined
        
        /** *the number of results returned in the **`items`** array* */
        items_count?: number | undefined
        
        /** *items on the product page* contains all product attributes and related data listed on the product page */
        items?: ProductInfoElement[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleProductInfoTaskGetAdvancedResultInfo  implements IMerchantGoogleProductInfoTaskGetAdvancedResultInfo {

    
    /** *product ID in a POST array* learn more about the parameter in [this help center guide](https://dataforseo.com/help-center/product-id-google-shopping) */

    product_id?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** *search engine domain in a POST array* */

    se_domain?: string | undefined;

    
    /** *location code in a POST array* */

    location_code?: number | undefined;

    
    /** *language code in a POST array* */

    language_code?: string | undefined;

    
    /** *direct URL to search engine results* you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** *date and time when the result was received* in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes” example: `2019-11-15 12:57:46 +00:00` */

    datetime?: string | undefined;

    
    /** *types of items found on the product specification page* possible item types: `product_info_element` */

    item_types?: string[] | undefined;

    
    /** *the number of results returned in the **`items`** array* */

    items_count?: number | undefined;

    
    /** *items on the product page* contains all product attributes and related data listed on the product page */

    items?: ProductInfoElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductInfoTaskGetAdvancedResultInfo) {

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
            this.product_id = data["product_id"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ProductInfoElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleProductInfoTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductInfoTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["product_id"] = this.product_id;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
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