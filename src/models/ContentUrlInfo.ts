export interface IContentUrlInfo   {
        
        /** contains other URLs and anchors found in the content element */
        url?: string | undefined
        
        /** text of the URL’s anchor */
        anchor_text?: string | undefined

    [key: string]: any;

    }

export class ContentUrlInfo  implements IContentUrlInfo {

    
    /** contains other URLs and anchors found in the content element */

    url?: string | undefined;

    
    /** text of the URL’s anchor */

    anchor_text?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentUrlInfo) {

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
            this.anchor_text = data["anchor_text"];
        }
    }

    static fromJS(data: any): ContentUrlInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentUrlInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["anchor_text"] = this.anchor_text;
        return data;
    }
}