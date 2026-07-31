import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { AppUserProfileInfo, IAppUserProfileInfo } from "./AppUserProfileInfo";


export interface IAppStoreReviewsSearch   {
        
        /** type of element */
        type?: string | undefined
        
        /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from `rank_group` */
        rank_group?: number | undefined
        
        /** *absolute rank among all the listed reviews* absolute position among all reviews on the list */
        rank_absolute?: number | undefined
        
        /** *the alignment of the review in SERP* can take the following values: `left` */
        position?: string | undefined
        
        /** *version of the app* version of the app for which the review is submitted */
        version?: string | undefined
        
        /** *the rating score submitted by the reviewer* */
        rating?: RatingInfo | undefined
        
        /** *date and time when the review was published* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”; example: `2019-11-15 12:57:46 +00:00` */
        timestamp?: string | undefined
        
        /** *id of the review* */
        id?: string | undefined
        
        /** *title of the review* */
        title?: string | undefined
        
        /** *content of the review* */
        review_text?: string | undefined
        
        /** *user profile of the reviewer* */
        user_profile?: AppUserProfileInfo | undefined

    [key: string]: any;

    }

export class AppStoreReviewsSearch  implements IAppStoreReviewsSearch {

    
    /** type of element */

    type?: string | undefined;

    
    /** *position within a group of elements with identical `type` values* positions of elements with different `type` values are omitted from `rank_group` */

    rank_group?: number | undefined;

    
    /** *absolute rank among all the listed reviews* absolute position among all reviews on the list */

    rank_absolute?: number | undefined;

    
    /** *the alignment of the review in SERP* can take the following values: `left` */

    position?: string | undefined;

    
    /** *version of the app* version of the app for which the review is submitted */

    version?: string | undefined;

    
    /** *the rating score submitted by the reviewer* */

    rating?: RatingInfo | undefined;

    
    /** *date and time when the review was published* in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”; example: `2019-11-15 12:57:46 +00:00` */

    timestamp?: string | undefined;

    
    /** *id of the review* */

    id?: string | undefined;

    
    /** *title of the review* */

    title?: string | undefined;

    
    /** *content of the review* */

    review_text?: string | undefined;

    
    /** *user profile of the reviewer* */

    user_profile?: AppUserProfileInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppStoreReviewsSearch) {

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
            this.position = data["position"];
            this.version = data["version"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.timestamp = data["timestamp"];
            this.id = data["id"];
            this.title = data["title"];
            this.review_text = data["review_text"];
            this.user_profile = data["user_profile"] ? AppUserProfileInfo.fromJS(data["user_profile"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppStoreReviewsSearch {
        data = typeof data === 'object' ? data : {};


        let result = new AppStoreReviewsSearch();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["version"] = this.version;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["timestamp"] = this.timestamp;
        data["id"] = this.id;
        data["title"] = this.title;
        data["review_text"] = this.review_text;
        data["user_profile"] = this.user_profile ? AppUserProfileInfo.fromJS(this.user_profile)?.toJSON() : <any>undefined;
        return data;
    }
}