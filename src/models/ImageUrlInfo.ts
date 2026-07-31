export interface IImageUrlInfo   {
        
        /** *URL of the image used in the review* */
        url?: string | undefined

    [key: string]: any;

    }

export class ImageUrlInfo  implements IImageUrlInfo {

    
    /** *URL of the image used in the review* */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IImageUrlInfo) {

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
        }
    }

    static fromJS(data: any): ImageUrlInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ImageUrlInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        return data;
    }
}