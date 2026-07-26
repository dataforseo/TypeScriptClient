import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IRecipesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** source URL */
        url?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** link description */
        description?: string | undefined
        
        /** the total time it takes to prepare the cook the dish */
        time?: string | undefined
        
        /** the item’s rating  the popularity rate based on reviews and displayed in SERP; if there is none, equals null */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class RecipesElement  implements IRecipesElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** title of a given link element */

    title?: string | undefined;

    
    /** source URL */

    url?: string | undefined;

    
    /** domain where a link points */

    domain?: string | undefined;

    
    /** reference source name or title */

    source?: string | undefined;

    
    /** link description */

    description?: string | undefined;

    
    /** the total time it takes to prepare the cook the dish */

    time?: string | undefined;

    
    /** the item’s rating  the popularity rate based on reviews and displayed in SERP; if there is none, equals null */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IRecipesElement) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.source = data["source"];
            this.description = data["description"];
            this.time = data["time"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): RecipesElement {
        data = typeof data === 'object' ? data : {};


        let result = new RecipesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["source"] = this.source;
        data["description"] = this.description;
        data["time"] = this.time;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}