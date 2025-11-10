import { TrustpilotReviewSearch, ITrustpilotReviewSearch } from "./TrustpilotReviewSearch";


export interface IBusinessDataTrustpilotReviewsTaskGetResultInfo   {
        
        /** domain of the business entity */
        domain?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** direct URL to search engine results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected */
        title?: string | undefined
        
        /** location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected */
        location?: string | undefined
        
        /** the total number of reviews */
        reviews_count?: string | undefined
        
        /** rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP */
        rating?: any | undefined
        
        /** the number of items in the results array
you can get more results by using the depth parameter when setting a task */
        items_count?: number | undefined
        
        /** found reviews
you can get more results by using the depth parameter when setting a task */
        items?: TrustpilotReviewSearch[] | undefined

    [key: string]: any;

    }

export class BusinessDataTrustpilotReviewsTaskGetResultInfo  implements IBusinessDataTrustpilotReviewsTaskGetResultInfo {
    
    /** domain of the business entity */

    domain?: string | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;
    
    /** direct URL to search engine results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** title of the ‘reviews’ element on Trustpilot
the name of the business entity for which the reviews are collected */

    title?: string | undefined;
    
    /** location of the business entity as specified on Trustpilot
address of the business entity for which the reviews are collected */

    location?: string | undefined;
    
    /** the total number of reviews */

    reviews_count?: string | undefined;
    
    /** rating of the corresponding business entity
popularity rate based on reviews and displayed in SERP */

    rating?: any | undefined;
    
    /** the number of items in the results array
you can get more results by using the depth parameter when setting a task */

    items_count?: number | undefined;
    
    /** found reviews
you can get more results by using the depth parameter when setting a task */

    items?: TrustpilotReviewSearch[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTrustpilotReviewsTaskGetResultInfo) {

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
            this.domain = data["domain"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.title = data["title"];
            this.location = data["location"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TrustpilotReviewSearch.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTrustpilotReviewsTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTrustpilotReviewsTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["domain"] = this.domain;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["title"] = this.title;
        data["location"] = this.location;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating;
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