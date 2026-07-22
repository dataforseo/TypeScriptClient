export interface IRatingElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element in Google Shopping SERPpossible values:left, right */
        position?: string | undefined
        
        /** the type of ratinghere you can find the following elements: Max5, Percents, CustomMax */
        rating_type?: string | undefined
        
        /** value of the rating */
        value?: number | undefined
        
        /** the amount of feedback */
        votes_count?: number | undefined
        
        /** the maximum value for a rating_type */
        rating_max?: number | undefined

    [key: string]: any;

    }

export class RatingElement  implements IRatingElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** the alignment of the element in Google Shopping SERPpossible values:left, right */

    position?: string | undefined;

    
    /** the type of ratinghere you can find the following elements: Max5, Percents, CustomMax */

    rating_type?: string | undefined;

    
    /** value of the rating */

    value?: number | undefined;

    
    /** the amount of feedback */

    votes_count?: number | undefined;

    
    /** the maximum value for a rating_type */

    rating_max?: number | undefined;

    [key: string]: any;


    constructor(data?: IRatingElement) {

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
            this.position = data["position"];
            this.rating_type = data["rating_type"];
            this.value = data["value"];
            this.votes_count = data["votes_count"];
            this.rating_max = data["rating_max"];
        }
    }

    static fromJS(data: any): RatingElement {
        data = typeof data === 'object' ? data : {};


        let result = new RatingElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["rating_type"] = this.rating_type;
        data["value"] = this.value;
        data["votes_count"] = this.votes_count;
        data["rating_max"] = this.rating_max;
        return data;
    }
}