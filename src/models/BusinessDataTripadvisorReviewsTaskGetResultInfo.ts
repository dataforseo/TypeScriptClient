import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { TripadvisorReviewSearch, ITripadvisorReviewSearch } from "./TripadvisorReviewSearch";


export interface IBusinessDataTripadvisorReviewsTaskGetResultInfo   {
        
        /** URL path received in a POST array */
        url_path?: string | undefined
        
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
        
        /** title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected */
        title?: string | undefined
        
        /** location of the local establishment
address of the local establishment for which the reviews are collected */
        location?: string | undefined
        
        /** the total number of reviews */
        reviews_count?: number | undefined
        
        /** rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5 */
        rating_distribution?: { [key: string]: number; } | undefined
        
        /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */
        items_count?: number | undefined
        
        /** found reviews
you can get more results by using the depth parameter when setting a task */
        items?: TripadvisorReviewSearch[] | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorReviewsTaskGetResultInfo  implements IBusinessDataTripadvisorReviewsTaskGetResultInfo {
    
    /** URL path received in a POST array */

    url_path?: string | undefined;
    
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
    
    /** title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected */

    title?: string | undefined;
    
    /** location of the local establishment
address of the local establishment for which the reviews are collected */

    location?: string | undefined;
    
    /** the total number of reviews */

    reviews_count?: number | undefined;
    
    /** rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;
    
    /** rating distribution by votes
the distribution of votes across the rating in the range from 1 to 5 */

    rating_distribution?: { [key: string]: number; } | undefined;
    
    /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */

    items_count?: number | undefined;
    
    /** found reviews
you can get more results by using the depth parameter when setting a task */

    items?: TripadvisorReviewSearch[] | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorReviewsTaskGetResultInfo) {

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
            this.url_path = data["url_path"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.title = data["title"];
            this.location = data["location"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.rating_distribution = data["rating_distribution"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TripadvisorReviewSearch.fromJS(item));
                }
            }
            this.language_code = data["language_code"];
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorReviewsTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorReviewsTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url_path"] = this.url_path;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["title"] = this.title;
        data["location"] = this.location;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["rating_distribution"] = this.rating_distribution;
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
        data["language_code"] = this.language_code;
        return data;
    }
}