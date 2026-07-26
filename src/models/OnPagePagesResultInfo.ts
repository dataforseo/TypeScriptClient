import { CrawlStatusInfo, ICrawlStatusInfo } from "./CrawlStatusInfo";
import { BaseOnPageResourceItem, IBaseOnPageResourceItem } from "./BaseOnPageResourceItem";


export interface IOnPagePagesResultInfo   {
        
        /** status of the crawling session possible values: in_progress, finished */
        crawl_progress?: string | undefined
        
        /** details of the crawling session */
        crawl_status?: CrawlStatusInfo | undefined
        
        search_after_token?: string | undefined
        
        current_offset?: number | undefined
        
        /** total number of relevant items in the database */
        total_items_count?: number | undefined
        
        /** number of items in the results array */
        items_count?: number | undefined
        
        /** items array */
        items?: BaseOnPageResourceItem[] | undefined

    [key: string]: any;

    }

export class OnPagePagesResultInfo  implements IOnPagePagesResultInfo {

    
    /** status of the crawling session possible values: in_progress, finished */

    crawl_progress?: string | undefined;

    
    /** details of the crawling session */

    crawl_status?: CrawlStatusInfo | undefined;

    search_after_token?: string | undefined;

    current_offset?: number | undefined;

    
    /** total number of relevant items in the database */

    total_items_count?: number | undefined;

    
    /** number of items in the results array */

    items_count?: number | undefined;

    
    /** items array */

    items?: BaseOnPageResourceItem[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPagePagesResultInfo) {

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
            this.crawl_progress = data["crawl_progress"];
            this.crawl_status = data["crawl_status"] ? CrawlStatusInfo.fromJS(data["crawl_status"]) : <any>undefined;
            this.search_after_token = data["search_after_token"];
            this.current_offset = data["current_offset"];
            this.total_items_count = data["total_items_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseOnPageResourceItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPagePagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPagePagesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["crawl_status"] = this.crawl_status ? CrawlStatusInfo.fromJS(this.crawl_status)?.toJSON() : <any>undefined;
        data["search_after_token"] = this.search_after_token;
        data["current_offset"] = this.current_offset;
        data["total_items_count"] = this.total_items_count;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}