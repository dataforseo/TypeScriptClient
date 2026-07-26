import { SpellInfo, ISpellInfo } from "./SpellInfo";
import { BaseMerchantAmazonElementItem, IBaseMerchantAmazonElementItem } from "./BaseMerchantAmazonElementItem";


export interface IMerchantAmazonProductsTaskGetAdvancedResultInfo   {
        
        /** keyword received in a POST array keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to Amazon results you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** autocorrection of the search engine if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection */
        spell?: SpellInfo | undefined
        
        /** types of search results found in Amazon SERP contains types of all search results (items) found in the returned SERP possible item types: amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches */
        item_types?: string[] | undefined
        
        /** search engine results count */
        se_results_count?: number | undefined
        
        /** amazon product departments and subcategories */
        categories?: string[] | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** Amazon product items within the editorial_recommendations element */
        items?: BaseMerchantAmazonElementItem[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonProductsTaskGetAdvancedResultInfo  implements IMerchantAmazonProductsTaskGetAdvancedResultInfo {

    
    /** keyword received in a POST array keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** direct URL to Amazon results you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;

    
    /** date and time when the result was received in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;

    
    /** autocorrection of the search engine if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection */

    spell?: SpellInfo | undefined;

    
    /** types of search results found in Amazon SERP contains types of all search results (items) found in the returned SERP possible item types: amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches */

    item_types?: string[] | undefined;

    
    /** search engine results count */

    se_results_count?: number | undefined;

    
    /** amazon product departments and subcategories */

    categories?: string[] | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** Amazon product items within the editorial_recommendations element */

    items?: BaseMerchantAmazonElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonProductsTaskGetAdvancedResultInfo) {

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
            this.keyword = data["keyword"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.spell = data["spell"] ? SpellInfo.fromJS(data["spell"]) : <any>undefined;
            this.item_types = data["item_types"];
            this.se_results_count = data["se_results_count"];
            this.categories = data["categories"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseMerchantAmazonElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonProductsTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonProductsTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["spell"] = this.spell ? SpellInfo.fromJS(this.spell)?.toJSON() : <any>undefined;
        data["item_types"] = this.item_types;
        data["se_results_count"] = this.se_results_count;
        data["categories"] = this.categories;
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