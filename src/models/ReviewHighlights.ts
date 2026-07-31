export interface IReviewHighlights   {
        
        /** *reviewed feature* */
        feature?: string | undefined
        
        /** *feature assessment* */
        assessment?: string | undefined

    [key: string]: any;

    }

export class ReviewHighlights  implements IReviewHighlights {

    
    /** *reviewed feature* */

    feature?: string | undefined;

    
    /** *feature assessment* */

    assessment?: string | undefined;

    [key: string]: any;


    constructor(data?: IReviewHighlights) {

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
            this.feature = data["feature"];
            this.assessment = data["assessment"];
        }
    }

    static fromJS(data: any): ReviewHighlights {
        data = typeof data === 'object' ? data : {};


        let result = new ReviewHighlights();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["feature"] = this.feature;
        data["assessment"] = this.assessment;
        return data;
    }
}