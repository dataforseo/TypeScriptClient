export interface IReviewMentionInfo   {
        
        /** *title of the evaluated criterion* */
        title?: string | undefined
        
        /** *positive score by criterion* */
        positive_score?: number | undefined
        
        /** *count of positive reviews by criterion* */
        positive_count?: number | undefined
        
        /** *count of negative reviews by criterion* */
        negative_count?: number | undefined
        
        /** *count of all reviews by criterion* */
        total_count?: number | undefined
        
        /** *element is visible by default* indicates whether the review element is visible by default */
        visible_by_default?: boolean | undefined

    [key: string]: any;

    }

export class ReviewMentionInfo  implements IReviewMentionInfo {

    
    /** *title of the evaluated criterion* */

    title?: string | undefined;

    
    /** *positive score by criterion* */

    positive_score?: number | undefined;

    
    /** *count of positive reviews by criterion* */

    positive_count?: number | undefined;

    
    /** *count of negative reviews by criterion* */

    negative_count?: number | undefined;

    
    /** *count of all reviews by criterion* */

    total_count?: number | undefined;

    
    /** *element is visible by default* indicates whether the review element is visible by default */

    visible_by_default?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IReviewMentionInfo) {

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
            this.positive_score = data["positive_score"];
            this.positive_count = data["positive_count"];
            this.negative_count = data["negative_count"];
            this.total_count = data["total_count"];
            this.visible_by_default = data["visible_by_default"];
        }
    }

    static fromJS(data: any): ReviewMentionInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ReviewMentionInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["positive_score"] = this.positive_score;
        data["positive_count"] = this.positive_count;
        data["negative_count"] = this.negative_count;
        data["total_count"] = this.total_count;
        data["visible_by_default"] = this.visible_by_default;
        return data;
    }
}