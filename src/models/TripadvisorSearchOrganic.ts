import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface ITripadvisorSearchOrganic   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank among all the listed results
absolute position among all reviews on the list */
        rank_absolute?: number | undefined
        
        /** name of the business entity */
        title?: string | undefined
        
        /** URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews */
        url_path?: string | undefined
        
        /** indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor */
        is_sponsored?: boolean | undefined
        
        /** the total number of reviews */
        reviews_count?: number | undefined
        
        /** place category */
        category?: string | undefined
        
        /** average price rate */
        price_rate?: string | undefined
        
        /** the rating score of the establishment submitted by the reviewers */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class TripadvisorSearchOrganic  implements ITripadvisorSearchOrganic {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank among all the listed results
absolute position among all reviews on the list */

    rank_absolute?: number | undefined;
    
    /** name of the business entity */

    title?: string | undefined;
    
    /** URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews */

    url_path?: string | undefined;
    
    /** indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor */

    is_sponsored?: boolean | undefined;
    
    /** the total number of reviews */

    reviews_count?: number | undefined;
    
    /** place category */

    category?: string | undefined;
    
    /** average price rate */

    price_rate?: string | undefined;
    
    /** the rating score of the establishment submitted by the reviewers */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: ITripadvisorSearchOrganic) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.title = data["title"];
            this.url_path = data["url_path"];
            this.is_sponsored = data["is_sponsored"];
            this.reviews_count = data["reviews_count"];
            this.category = data["category"];
            this.price_rate = data["price_rate"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): TripadvisorSearchOrganic {
        data = typeof data === 'object' ? data : {};


        let result = new TripadvisorSearchOrganic();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["url_path"] = this.url_path;
        data["is_sponsored"] = this.is_sponsored;
        data["reviews_count"] = this.reviews_count;
        data["category"] = this.category;
        data["price_rate"] = this.price_rate;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}