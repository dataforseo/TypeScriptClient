import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface IChatGptLocalBusinessesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** description of the local businesses */
        description?: string | undefined
        
        /** address of the local businesses */
        address?: string | undefined
        
        /** phone of the local businesses */
        phone?: string | undefined
        
        /** total number of reviews submitted for the local businesses */
        reviews_count?: number | undefined
        
        /** URL */
        url?: string | undefined
        
        /** domain */
        domain?: string | undefined
        
        /** rating of the corresponding local businesses
popularity rate based on reviews as displayed in the results */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class ChatGptLocalBusinessesElement  implements IChatGptLocalBusinessesElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** description of the local businesses */

    description?: string | undefined;
    
    /** address of the local businesses */

    address?: string | undefined;
    
    /** phone of the local businesses */

    phone?: string | undefined;
    
    /** total number of reviews submitted for the local businesses */

    reviews_count?: number | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** domain */

    domain?: string | undefined;
    
    /** rating of the corresponding local businesses
popularity rate based on reviews as displayed in the results */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IChatGptLocalBusinessesElement) {

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
            this.description = data["description"];
            this.address = data["address"];
            this.phone = data["phone"];
            this.reviews_count = data["reviews_count"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ChatGptLocalBusinessesElement {
        data = typeof data === 'object' ? data : {};


        let result = new ChatGptLocalBusinessesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["address"] = this.address;
        data["phone"] = this.phone;
        data["reviews_count"] = this.reviews_count;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}