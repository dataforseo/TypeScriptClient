export interface IRelatedImageSearchesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given shopping element */
        title?: string | undefined
        
        /** alt tag of the image */
        alt?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined

    [key: string]: any;

    }

export class RelatedImageSearchesElement  implements IRelatedImageSearchesElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given shopping element */

    title?: string | undefined;
    
    /** alt tag of the image */

    alt?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IRelatedImageSearchesElement) {

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
            this.alt = data["alt"];
            this.url = data["url"];
            this.image_url = data["image_url"];
        }
    }

    static fromJS(data: any): RelatedImageSearchesElement {
        data = typeof data === 'object' ? data : {};


        let result = new RelatedImageSearchesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["alt"] = this.alt;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        return data;
    }
}