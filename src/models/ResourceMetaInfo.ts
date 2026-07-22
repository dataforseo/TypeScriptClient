export interface IResourceMetaInfo   {
        
        /** content of the image alt attribute */
        alternative_text?: string | undefined
        
        /** title */
        title?: string | undefined
        
        /** original image width in px */
        original_width?: number | undefined
        
        /** original image height in px */
        original_height?: number | undefined
        
        /** image width in px */
        width?: number | undefined
        
        /** image height in px */
        height?: number | undefined

    [key: string]: any;

    }

export class ResourceMetaInfo  implements IResourceMetaInfo {

    
    /** content of the image alt attribute */

    alternative_text?: string | undefined;

    
    /** title */

    title?: string | undefined;

    
    /** original image width in px */

    original_width?: number | undefined;

    
    /** original image height in px */

    original_height?: number | undefined;

    
    /** image width in px */

    width?: number | undefined;

    
    /** image height in px */

    height?: number | undefined;

    [key: string]: any;


    constructor(data?: IResourceMetaInfo) {

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
            this.alternative_text = data["alternative_text"];
            this.title = data["title"];
            this.original_width = data["original_width"];
            this.original_height = data["original_height"];
            this.width = data["width"];
            this.height = data["height"];
        }
    }

    static fromJS(data: any): ResourceMetaInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ResourceMetaInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["alternative_text"] = this.alternative_text;
        data["title"] = this.title;
        data["original_width"] = this.original_width;
        data["original_height"] = this.original_height;
        data["width"] = this.width;
        data["height"] = this.height;
        return data;
    }
}