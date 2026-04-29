import { RatingInfo, IRatingInfo } from "./RatingInfo";


export interface ICoursesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** the date when the page source of the element was published */
        date?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP;
if there is none, equals null */
        rating?: RatingInfo | undefined

    [key: string]: any;

    }

export class CoursesElement  implements ICoursesElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** website domain */

    domain?: string | undefined;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** the date when the page source of the element was published */

    date?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP;
if there is none, equals null */

    rating?: RatingInfo | undefined;

    [key: string]: any;


    constructor(data?: ICoursesElement) {

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
            this.date = data["date"];
            this.image_url = data["image_url"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CoursesElement {
        data = typeof data === 'object' ? data : {};


        let result = new CoursesElement();
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
        data["date"] = this.date;
        data["image_url"] = this.image_url;
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}