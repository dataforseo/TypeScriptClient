import { AmazonProductInfo, IAmazonProductInfo } from "./AmazonProductInfo";


export interface IMerchantAmazonAsinLiveAdvancedResultInfo   {
        
        /** ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide */
        asin?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** Amazon domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to Amazon results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info */
        item_types?: string[] | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** Amazon product info items */
        items?: AmazonProductInfo[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonAsinLiveAdvancedResultInfo  implements IMerchantAmazonAsinLiveAdvancedResultInfo {

    
    /** ASIN received in a POST array
the unique product identifier in Amazon (ASIN) received in a POST array
learn more about the identified in this help center guide */

    asin?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** Amazon domain in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to Amazon results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** types of search results found on Amazon
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_product_info */

    item_types?: string[] | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** Amazon product info items */

    items?: AmazonProductInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonAsinLiveAdvancedResultInfo) {

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
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AmazonProductInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonAsinLiveAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonAsinLiveAdvancedResultInfo();
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