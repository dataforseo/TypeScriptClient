export interface IPreviewImage   {
        
        /** *search URL with refinement parameters* */
        url?: string | undefined
        
        /** *height of the preview image* */
        height?: number | undefined
        
        /** *width of the preview image* */
        width?: number | undefined

    [key: string]: any;

    }

export class PreviewImage  implements IPreviewImage {

    
    /** *search URL with refinement parameters* */

    url?: string | undefined;

    
    /** *height of the preview image* */

    height?: number | undefined;

    
    /** *width of the preview image* */

    width?: number | undefined;

    [key: string]: any;


    constructor(data?: IPreviewImage) {

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
            this.url = data["url"];
            this.height = data["height"];
            this.width = data["width"];
        }
    }

    static fromJS(data: any): PreviewImage {
        data = typeof data === 'object' ? data : {};


        let result = new PreviewImage();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["height"] = this.height;
        data["width"] = this.width;
        return data;
    }
}