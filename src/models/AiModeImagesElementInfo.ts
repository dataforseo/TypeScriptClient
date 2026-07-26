export interface IAiModeImagesElementInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** alt tag of the image */
        alt?: string | undefined
        
        /** relevant URL */
        url?: string | undefined
        
        /** URL of the image the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined

    [key: string]: any;

    }

export class AiModeImagesElementInfo  implements IAiModeImagesElementInfo {

    
    /** type of element */

    type?: string | undefined;

    
    /** alt tag of the image */

    alt?: string | undefined;

    
    /** relevant URL */

    url?: string | undefined;

    
    /** URL of the image the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiModeImagesElementInfo) {

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
            this.alt = data["alt"];
            this.url = data["url"];
            this.image_url = data["image_url"];
        }
    }

    static fromJS(data: any): AiModeImagesElementInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeImagesElementInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["alt"] = this.alt;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        return data;
    }
}