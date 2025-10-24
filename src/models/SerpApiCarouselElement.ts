export interface ISerpApiCarouselElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the row */
        title?: string | undefined
        
        /** subtitle of the element */
        subtitle?: string | undefined
        
        /** URL of the image */
        image_url?: string | undefined

    [key: string]: any;

    }

export class SerpApiCarouselElement  implements ISerpApiCarouselElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the row */

    title?: string | undefined;
    
    /** subtitle of the element */

    subtitle?: string | undefined;
    
    /** URL of the image */

    image_url?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiCarouselElement) {

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
            this.subtitle = data["subtitle"];
            this.image_url = data["image_url"];
        }
    }

    static fromJS(data: any): SerpApiCarouselElement {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiCarouselElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["subtitle"] = this.subtitle;
        data["image_url"] = this.image_url;
        return data;
    }
}