import { CrawlStatusInfo, ICrawlStatusInfo } from "./CrawlStatusInfo";
import { OnPageUncrawlableResourcesItem, IOnPageUncrawlableResourcesItem } from "./OnPageUncrawlableResourcesItem";


export interface IOnPageUncrawlableResourcesResultInfo   {
        
        /** status of the crawling session
possible values: in_progress, finished */
        crawl_progress?: string | undefined
        
        /** details of the crawling session */
        crawl_status?: CrawlStatusInfo | undefined
        
        current_offset?: number | undefined
        
        /** total number of uncrawlable resources found
 total number of uncrawlable resources found during the crawl of the target domain */
        total_items_count?: number | undefined
        
        /** number of uncrawlable resources in the items array */
        items_count?: number | undefined
        
        /** array of uncrawlable resources */
        items?: OnPageUncrawlableResourcesItem[] | undefined

    [key: string]: any;

    }

export class OnPageUncrawlableResourcesResultInfo  implements IOnPageUncrawlableResourcesResultInfo {

    
    /** status of the crawling session
possible values: in_progress, finished */

    crawl_progress?: string | undefined;

    
    /** details of the crawling session */

    crawl_status?: CrawlStatusInfo | undefined;

    current_offset?: number | undefined;

    
    /** total number of uncrawlable resources found
 total number of uncrawlable resources found during the crawl of the target domain */

    total_items_count?: number | undefined;

    
    /** number of uncrawlable resources in the items array */

    items_count?: number | undefined;

    
    /** array of uncrawlable resources */

    items?: OnPageUncrawlableResourcesItem[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageUncrawlableResourcesResultInfo) {

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
            this.current_offset = data["current_offset"];
            this.total_items_count = data["total_items_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(OnPageUncrawlableResourcesItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageUncrawlableResourcesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageUncrawlableResourcesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["crawl_status"] = this.crawl_status ? CrawlStatusInfo.fromJS(this.crawl_status)?.toJSON() : <any>undefined;
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