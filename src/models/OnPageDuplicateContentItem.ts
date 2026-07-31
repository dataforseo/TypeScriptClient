import { DuplicatePageInfo, IDuplicatePageInfo } from "./DuplicatePageInfo";


export interface IOnPageDuplicateContentItem   {
        
        /** *URL of the specified page* */
        url?: string | undefined
        
        /** *total count of duplicate pages* */
        total_count?: number | undefined
        
        /** *pages with duplicate content* */
        pages?: DuplicatePageInfo[] | undefined

    [key: string]: any;

    }

export class OnPageDuplicateContentItem  implements IOnPageDuplicateContentItem {

    
    /** *URL of the specified page* */

    url?: string | undefined;

    
    /** *total count of duplicate pages* */

    total_count?: number | undefined;

    
    /** *pages with duplicate content* */

    pages?: DuplicatePageInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageDuplicateContentItem) {

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
            this.total_count = data["total_count"];
            if (Array.isArray(data["pages"])) {
                this.pages = [];
                for (let item of data["pages"]) {
                    this.pages.push(DuplicatePageInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageDuplicateContentItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageDuplicateContentItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
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