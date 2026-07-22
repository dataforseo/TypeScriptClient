import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IPeopleAlsoSearch   {
        
        /** google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article */
        cid?: string | undefined
        
        /** the unique identifier of the element in SERP
learn more about the identifier in this help center article */
        feature_id?: string | undefined
        
        /** title of the element in SERP
the name of the business entity for which the results are collected */
        title?: string | undefined
        
        /** the element's rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class PeopleAlsoSearch  implements IPeopleAlsoSearch {

    
    /** google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article */

    cid?: string | undefined;

    
    /** the unique identifier of the element in SERP
learn more about the identifier in this help center article */

    feature_id?: string | undefined;

    
    /** title of the element in SERP
the name of the business entity for which the results are collected */

    title?: string | undefined;

    
    /** the element's rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IPeopleAlsoSearch) {

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
            this.cid = data["cid"];
            this.feature_id = data["feature_id"];
            this.title = data["title"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PeopleAlsoSearch {
        data = typeof data === 'object' ? data : {};


        let result = new PeopleAlsoSearch();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["cid"] = this.cid;
        data["feature_id"] = this.feature_id;
        data["title"] = this.title;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}