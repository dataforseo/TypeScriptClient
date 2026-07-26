import { ReviewMentionInfo, IReviewMentionInfo } from "./ReviewMentionInfo";
import { OtherSitesReviewsInfo, IOtherSitesReviewsInfo } from "./OtherSitesReviewsInfo";


export interface IHotelReviewInfo   {
        
        /** *overall hotel rating based on customer votes* */
        value?: number | undefined
        
        /** *number of customer votes* the number of customer votes included in the calculation of the hotel rating */
        votes_count?: number | undefined
        
        /** *hotel mentions* information about hotel reviews by criteria */
        mentions?: ReviewMentionInfo[] | undefined
        
        /** *rating distribution by votes* the distribution of votes across the rating in the range from 1 to 5 */
        rating_distribution?: { [key: string]: number; } | undefined
        
        /** *reviews on third-party sites* reviews from third-party sites */
        other_sites_reviews?: OtherSitesReviewsInfo[] | undefined

    [key: string]: any;

    }

export class HotelReviewInfo  implements IHotelReviewInfo {

    
    /** *overall hotel rating based on customer votes* */

    value?: number | undefined;

    
    /** *number of customer votes* the number of customer votes included in the calculation of the hotel rating */

    votes_count?: number | undefined;

    
    /** *hotel mentions* information about hotel reviews by criteria */

    mentions?: ReviewMentionInfo[] | undefined;

    
    /** *rating distribution by votes* the distribution of votes across the rating in the range from 1 to 5 */

    rating_distribution?: { [key: string]: number; } | undefined;

    
    /** *reviews on third-party sites* reviews from third-party sites */

    other_sites_reviews?: OtherSitesReviewsInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IHotelReviewInfo) {

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
            this.value = data["value"];
            this.votes_count = data["votes_count"];
            if (Array.isArray(data["mentions"])) {
                this.mentions = [];
                for (let item of data["mentions"]) {
                    this.mentions.push(ReviewMentionInfo.fromJS(item));
                }
            }
            this.rating_distribution = data["rating_distribution"];
            if (Array.isArray(data["other_sites_reviews"])) {
                this.other_sites_reviews = [];
                for (let item of data["other_sites_reviews"]) {
                    this.other_sites_reviews.push(OtherSitesReviewsInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelReviewInfo {
        data = typeof data === 'object' ? data : {};


        let result = new HotelReviewInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["value"] = this.value;
        data["votes_count"] = this.votes_count;
        data["mentions"] = null;
        if (Array.isArray(this.mentions)) {
            data["mentions"] = [];
            for (let item of this.mentions) {
                if (item && typeof item.toJSON === "function") {
                    data["mentions"].push(item?.toJSON());
                }
            }
        }
        data["rating_distribution"] = this.rating_distribution;
        data["other_sites_reviews"] = null;
        if (Array.isArray(this.other_sites_reviews)) {
            data["other_sites_reviews"] = [];
            for (let item of this.other_sites_reviews) {
                if (item && typeof item.toJSON === "function") {
                    data["other_sites_reviews"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}