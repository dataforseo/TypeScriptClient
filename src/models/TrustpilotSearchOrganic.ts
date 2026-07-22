import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface ITrustpilotSearchOrganic   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank among all the listed reviews
absolute position among all reviews on the list */
        rank_absolute?: number | undefined
        
        /** title of the establishment */
        title?: string | undefined
        
        /** domain of the establishment */
        domain?: string | undefined
        
        /** URL to the establishment */
        url?: string | undefined
        
        /** the total number of reviews */
        reviews_count?: number | undefined
        
        /** the rating score of the establishment submitted by reviewers */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class TrustpilotSearchOrganic  implements ITrustpilotSearchOrganic {

    
    /** type of element */

    type?: string | undefined;

    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;

    
    /** absolute rank among all the listed reviews
absolute position among all reviews on the list */

    rank_absolute?: number | undefined;

    
    /** title of the establishment */

    title?: string | undefined;

    
    /** domain of the establishment */

    domain?: string | undefined;

    
    /** URL to the establishment */

    url?: string | undefined;

    
    /** the total number of reviews */

    reviews_count?: number | undefined;

    
    /** the rating score of the establishment submitted by reviewers */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: ITrustpilotSearchOrganic) {

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
            this.domain = data["domain"];
            this.url = data["url"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): TrustpilotSearchOrganic {
        data = typeof data === 'object' ? data : {};


        let result = new TrustpilotSearchOrganic();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}