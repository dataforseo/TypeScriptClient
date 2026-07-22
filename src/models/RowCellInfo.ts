import { ContentUrlInfo, IContentUrlInfo } from "./ContentUrlInfo";


export interface IRowCellInfo   {
        
        /** content of the row cells of the header */
        text?: string | undefined
        
        /** contains other URLs and anchors found in the content element */
        urls?: ContentUrlInfo[] | undefined
        
        /** content of the row cells of the header */
        is_header?: boolean | undefined

    [key: string]: any;

    }

export class RowCellInfo  implements IRowCellInfo {

    
    /** content of the row cells of the header */

    text?: string | undefined;

    
    /** contains other URLs and anchors found in the content element */

    urls?: ContentUrlInfo[] | undefined;

    
    /** content of the row cells of the header */

    is_header?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IRowCellInfo) {

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
            if (Array.isArray(data["urls"])) {
                this.urls = [];
                for (let item of data["urls"]) {
                    this.urls.push(ContentUrlInfo.fromJS(item));
                }
            }
            this.is_header = data["is_header"];
        }
    }

    static fromJS(data: any): RowCellInfo {
        data = typeof data === 'object' ? data : {};


        let result = new RowCellInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["text"] = this.text;
        data["urls"] = null;
        if (Array.isArray(this.urls)) {
            data["urls"] = [];
            for (let item of this.urls) {
                if (item && typeof item.toJSON === "function") {
                    data["urls"].push(item?.toJSON());
                }
            }
        }
        data["is_header"] = this.is_header;
        return data;
    }
}