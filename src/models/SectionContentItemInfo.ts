import { ContentUrlInfo, IContentUrlInfo } from "./ContentUrlInfo";


export interface ISectionContentItemInfo   {
        
        /** secondary content on the page you can find more information about content priority calculation in this help center article */
        text?: string | undefined
        
        /** page URL. displayed in case the text is a link anchor */
        url?: string | undefined
        
        /** contains other URLs and anchors found in the content element */
        urls?: ContentUrlInfo[] | undefined

    [key: string]: any;

    }

export class SectionContentItemInfo  implements ISectionContentItemInfo {

    
    /** secondary content on the page you can find more information about content priority calculation in this help center article */

    text?: string | undefined;

    
    /** page URL. displayed in case the text is a link anchor */

    url?: string | undefined;

    
    /** contains other URLs and anchors found in the content element */

    urls?: ContentUrlInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISectionContentItemInfo) {

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
            this.text = data["text"];
            this.url = data["url"];
            if (Array.isArray(data["urls"])) {
                this.urls = [];
                for (let item of data["urls"]) {
                    this.urls.push(ContentUrlInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SectionContentItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SectionContentItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["text"] = this.text;
        data["url"] = this.url;
        data["urls"] = null;
        if (Array.isArray(this.urls)) {
            data["urls"] = [];
            for (let item of this.urls) {
                if (item && typeof item.toJSON === "function") {
                    data["urls"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}