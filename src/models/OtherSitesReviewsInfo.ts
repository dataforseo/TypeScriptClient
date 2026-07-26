import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IOtherSitesReviewsInfo   {
        
        /** *review title* contains a name of the third-party site where review initially appeared */
        title?: string | undefined
        
        /** *review url* URL to the a third-party site where review initially appeared */
        url?: string | undefined
        
        /** *review text* text of the review */
        review_text?: string | undefined
        
        /** *rating in the review* information about the rating enclosed in the review on a third-party site */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class OtherSitesReviewsInfo  implements IOtherSitesReviewsInfo {

    
    /** *review title* contains a name of the third-party site where review initially appeared */

    title?: string | undefined;

    
    /** *review url* URL to the a third-party site where review initially appeared */

    url?: string | undefined;

    
    /** *review text* text of the review */

    review_text?: string | undefined;

    
    /** *rating in the review* information about the rating enclosed in the review on a third-party site */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IOtherSitesReviewsInfo) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.review_text = data["review_text"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OtherSitesReviewsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OtherSitesReviewsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["review_text"] = this.review_text;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}