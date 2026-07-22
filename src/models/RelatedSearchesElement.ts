export interface IRelatedSearchesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** product title */
        title?: string | undefined
        
        /** the URL of the product page */
        url?: string | undefined
        
        /** the alt tag of the product image featured in the results */
        image_alt?: string | undefined
        
        /** URL of the product image featured in the results */
        image_url?: string | undefined

    [key: string]: any;

    }

export class RelatedSearchesElement  implements IRelatedSearchesElement {

    
    /** type of element */

    type?: string | undefined;

    
    /** product title */

    title?: string | undefined;

    
    /** the URL of the product page */

    url?: string | undefined;

    
    /** the alt tag of the product image featured in the results */

    image_alt?: string | undefined;

    
    /** URL of the product image featured in the results */

    image_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IRelatedSearchesElement) {

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
            this.image_alt = data["image_alt"];
            this.image_url = data["image_url"];
        }
    }

    static fromJS(data: any): RelatedSearchesElement {
        data = typeof data === 'object' ? data : {};


        let result = new RelatedSearchesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["image_alt"] = this.image_alt;
        data["image_url"] = this.image_url;
        return data;
    }
}