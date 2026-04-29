import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";


export interface IAiModeAiOverviewShoppingElementInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** unique product identifier on Google Shoppinglearn more about the parameter in this help center guide */
        product_id?: string | undefined
        
        /** unique identifier of the SERP data element */
        data_docid?: string | undefined
        
        /** global product identifier on Google Shoppinglearn more about the parameter in this help center guide */
        gid?: string | undefined
        
        /** reference page title */
        title?: string | undefined
        
        /** URL in link */
        url?: string | undefined
        
        /** domain in link */
        domain?: string | undefined
        
        /** product rating the popularity rate based on reviews if there is none, the value will be null */
        rating?: RatingInfo | undefined
        
        /** product priceproduct price details on the seller's website; if there is none, the value will be null */
        price?: PriceInfo | undefined
        
        /** product sellername of the product's seller as displayed in search results */
        seller?: string | undefined
        
        /** additional information about the result */
        snippet?: string | undefined
        
        /** merchant account providere-commerce site that hosts products or websites of individual sellers under the same merchant accountexample:by Google */
        marketplace?: string | undefined
        
        /** URL to the merchant account providere-commerce site that hosts products or websites of individual sellers under the same merchant account */
        marketplace_url?: string | undefined
        
        /** URL of the imagethe URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined

    [key: string]: any;

    }

export class AiModeAiOverviewShoppingElementInfo  implements IAiModeAiOverviewShoppingElementInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** unique product identifier on Google Shoppinglearn more about the parameter in this help center guide */

    product_id?: string | undefined;
    
    /** unique identifier of the SERP data element */

    data_docid?: string | undefined;
    
    /** global product identifier on Google Shoppinglearn more about the parameter in this help center guide */

    gid?: string | undefined;
    
    /** reference page title */

    title?: string | undefined;
    
    /** URL in link */

    url?: string | undefined;
    
    /** domain in link */

    domain?: string | undefined;
    
    /** product rating the popularity rate based on reviews if there is none, the value will be null */

    rating?: RatingInfo | undefined;
    
    /** product priceproduct price details on the seller's website; if there is none, the value will be null */

    price?: PriceInfo | undefined;
    
    /** product sellername of the product's seller as displayed in search results */

    seller?: string | undefined;
    
    /** additional information about the result */

    snippet?: string | undefined;
    
    /** merchant account providere-commerce site that hosts products or websites of individual sellers under the same merchant accountexample:by Google */

    marketplace?: string | undefined;
    
    /** URL to the merchant account providere-commerce site that hosts products or websites of individual sellers under the same merchant account */

    marketplace_url?: string | undefined;
    
    /** URL of the imagethe URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiModeAiOverviewShoppingElementInfo) {

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
            this.product_id = data["product_id"];
            this.data_docid = data["data_docid"];
            this.gid = data["gid"];
            this.title = data["title"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.seller = data["seller"];
            this.snippet = data["snippet"];
            this.marketplace = data["marketplace"];
            this.marketplace_url = data["marketplace_url"];
            this.image_url = data["image_url"];
        }
    }

    static fromJS(data: any): AiModeAiOverviewShoppingElementInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeAiOverviewShoppingElementInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["product_id"] = this.product_id;
        data["data_docid"] = this.data_docid;
        data["gid"] = this.gid;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["seller"] = this.seller;
        data["snippet"] = this.snippet;
        data["marketplace"] = this.marketplace;
        data["marketplace_url"] = this.marketplace_url;
        data["image_url"] = this.image_url;
        return data;
    }
}