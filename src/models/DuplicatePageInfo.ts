import { OnPageHtmlResourceItem, IOnPageHtmlResourceItem } from "./BaseOnPageResourceItem";


export interface IDuplicatePageInfo   {
        
        similarity?: number | undefined
        
        /** *information about the page with duplicate content* */
        page?: OnPageHtmlResourceItem[] | undefined

    [key: string]: any;

    }

export class DuplicatePageInfo  implements IDuplicatePageInfo {

    similarity?: number | undefined;

    
    /** *information about the page with duplicate content* */

    page?: OnPageHtmlResourceItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDuplicatePageInfo) {

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
            this.similarity = data["similarity"];
            if (Array.isArray(data["page"])) {
                this.page = [];
                for (let item of data["page"]) {
                    this.page.push(OnPageHtmlResourceItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DuplicatePageInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DuplicatePageInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["similarity"] = this.similarity;
        data["page"] = null;
        if (Array.isArray(this.page)) {
            data["page"] = [];
            for (let item of this.page) {
                if (item && typeof item.toJSON === "function") {
                    data["page"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}