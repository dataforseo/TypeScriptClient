export interface IContentRatingInfo   {
        
        /** rating name
here you can find the following elements: Max5, Percents, CustomMax */
        name?: string | undefined
        
        /** the value of the rating */
        rating_value?: string | undefined
        
        /** number of votes */
        rating_count?: string | undefined
        
        /** maximum value for the rating name */
        max_rating_value?: string | undefined
        
        /** relative rating */
        relative_rating?: string | undefined

    [key: string]: any;

    }

export class ContentRatingInfo  implements IContentRatingInfo {

    
    /** rating name
here you can find the following elements: Max5, Percents, CustomMax */

    name?: string | undefined;

    
    /** the value of the rating */

    rating_value?: string | undefined;

    
    /** number of votes */

    rating_count?: string | undefined;

    
    /** maximum value for the rating name */

    max_rating_value?: string | undefined;

    
    /** relative rating */

    relative_rating?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentRatingInfo) {

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
            this.name = data["name"];
            this.rating_value = data["rating_value"];
            this.rating_count = data["rating_count"];
            this.max_rating_value = data["max_rating_value"];
            this.relative_rating = data["relative_rating"];
        }
    }

    static fromJS(data: any): ContentRatingInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentRatingInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["name"] = this.name;
        data["rating_value"] = this.rating_value;
        data["rating_count"] = this.rating_count;
        data["max_rating_value"] = this.max_rating_value;
        data["relative_rating"] = this.relative_rating;
        return data;
    }
}