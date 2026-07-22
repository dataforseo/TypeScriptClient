import { OnPageHtmlResourceItem, IOnPageHtmlResourceItem } from "./BaseOnPageResourceItem";


export interface IOnPageDuplicateTagsItem   {
        
        /** contains the value of duplicated tag */
        accumulator?: string | undefined
        
        /** total count of duplicate pages */
        total_count?: number | undefined
        
        /** pages with duplicate tags */
        pages?: OnPageHtmlResourceItem[] | undefined

    [key: string]: any;

    }

export class OnPageDuplicateTagsItem  implements IOnPageDuplicateTagsItem {

    
    /** contains the value of duplicated tag */

    accumulator?: string | undefined;

    
    /** total count of duplicate pages */

    total_count?: number | undefined;

    
    /** pages with duplicate tags */

    pages?: OnPageHtmlResourceItem[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageDuplicateTagsItem) {

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
            this.accumulator = data["accumulator"];
            this.total_count = data["total_count"];
            if (Array.isArray(data["pages"])) {
                this.pages = [];
                for (let item of data["pages"]) {
                    this.pages.push(OnPageHtmlResourceItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageDuplicateTagsItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageDuplicateTagsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["accumulator"] = this.accumulator;
        data["total_count"] = this.total_count;
        data["pages"] = null;
        if (Array.isArray(this.pages)) {
            data["pages"] = [];
            for (let item of this.pages) {
                if (item && typeof item.toJSON === "function") {
                    data["pages"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}