import { CrawlStatusInfo, ICrawlStatusInfo } from "./CrawlStatusInfo";
import { OnPageRedirectChainsItem, IOnPageRedirectChainsItem } from "./OnPageRedirectChainsItem";


export interface IOnPageRedirectChainsResultInfo   {
        
        /** status of the crawling session
possible values: in_progress, finished */
        crawl_progress?: string | undefined
        
        /** details of the crawling session */
        crawl_status?: CrawlStatusInfo | undefined
        
        /** total number of relevant items in the database */
        total_items_count?: number | undefined
        
        /** number of items in the results array */
        items_count?: number | undefined
        
        /** items array */
        items?: OnPageRedirectChainsItem[] | undefined

    [key: string]: any;

    }

export class OnPageRedirectChainsResultInfo  implements IOnPageRedirectChainsResultInfo {

    
    /** status of the crawling session
possible values: in_progress, finished */

    crawl_progress?: string | undefined;

    
    /** details of the crawling session */

    crawl_status?: CrawlStatusInfo | undefined;

    
    /** total number of relevant items in the database */

    total_items_count?: number | undefined;

    
    /** number of items in the results array */

    items_count?: number | undefined;

    
    /** items array */

    items?: OnPageRedirectChainsItem[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageRedirectChainsResultInfo) {

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
            this.total_items_count = data["total_items_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(OnPageRedirectChainsItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageRedirectChainsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRedirectChainsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["crawl_status"] = this.crawl_status ? CrawlStatusInfo.fromJS(this.crawl_status)?.toJSON() : <any>undefined;
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