import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { BaseMerchantGoogleShoppingSellersElementItem, IBaseMerchantGoogleShoppingSellersElementItem } from "./BaseMerchantGoogleShoppingSellersElementItem";


export interface IMerchantGoogleSellersTaskGetAdvancedResultInfo   {
        
        /** product_id received in a POST array
learn more about the parameter in this help center guide */
        product_id?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to Google Shopping results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** title of the product */
        title?: string | undefined
        
        /** URL to the product page */
        url?: string | undefined
        
        /** URL to the product image */
        image_url?: string | undefined
        
        /** product rating
the product popularity rate based on product reviews */
        rating?: RatingInfo | undefined
        
        /** types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google */
        item_types?: string[] | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** items in SERP */
        items?: BaseMerchantGoogleShoppingSellersElementItem[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleSellersTaskGetAdvancedResultInfo  implements IMerchantGoogleSellersTaskGetAdvancedResultInfo {
    
    /** product_id received in a POST array
learn more about the parameter in this help center guide */

    product_id?: string | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** direct URL to Google Shopping results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** title of the product */

    title?: string | undefined;
    
    /** URL to the product page */

    url?: string | undefined;
    
    /** URL to the product image */

    image_url?: string | undefined;
    
    /** product rating
the product popularity rate based on product reviews */

    rating?: RatingInfo | undefined;
    
    /** types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
shops_list, buy_on_google */

    item_types?: string[] | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** items in SERP */

    items?: BaseMerchantGoogleShoppingSellersElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleSellersTaskGetAdvancedResultInfo) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseMerchantGoogleShoppingSellersElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleSellersTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleSellersTaskGetAdvancedResultInfo();
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
        data["title"] = this.title;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
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