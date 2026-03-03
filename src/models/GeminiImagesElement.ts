export interface IGeminiImagesElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** alt tag of the image */
        alt?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** content of the element in markdown format
content of the result formatted in the markdown markup language */
        markdown?: string | undefined

    [key: string]: any;

    }

export class GeminiImagesElement  implements IGeminiImagesElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** alt tag of the image */

    alt?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** content of the element in markdown format
content of the result formatted in the markdown markup language */

    markdown?: string | undefined;

    [key: string]: any;


    constructor(data?: IGeminiImagesElement) {

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
            this.url = data["url"];
            this.alt = data["alt"];
            this.image_url = data["image_url"];
            this.markdown = data["markdown"];
        }
    }

    static fromJS(data: any): GeminiImagesElement {
        data = typeof data === 'object' ? data : {};


        let result = new GeminiImagesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["url"] = this.url;
        data["alt"] = this.alt;
        data["image_url"] = this.image_url;
        data["markdown"] = this.markdown;
        return data;
    }
}