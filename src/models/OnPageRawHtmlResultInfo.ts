import { CrawlStatusInfo, ICrawlStatusInfo } from "./CrawlStatusInfo";
import { OnPageRawHtmlItem, IOnPageRawHtmlItem } from "./OnPageRawHtmlItem";


export interface IOnPageRawHtmlResultInfo   {
        
        /** status of the crawling session possible values: in_progress, finished */
        crawl_progress?: string | undefined
        
        /** details of the crawling session */
        crawl_status?: CrawlStatusInfo | undefined
        
        /** number of items in the results array */
        items_count?: number | undefined
        
        /** items object */
        items?: OnPageRawHtmlItem | undefined

    [key: string]: any;

    }

export class OnPageRawHtmlResultInfo  implements IOnPageRawHtmlResultInfo {

    
    /** status of the crawling session possible values: in_progress, finished */

    crawl_progress?: string | undefined;

    
    /** details of the crawling session */

    crawl_status?: CrawlStatusInfo | undefined;

    
    /** number of items in the results array */

    items_count?: number | undefined;

    
    /** items object */

    items?: OnPageRawHtmlItem | undefined;

    [key: string]: any;


    constructor(data?: IOnPageRawHtmlResultInfo) {

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
            this.items_count = data["items_count"];
            this.items = data["items"] ? OnPageRawHtmlItem.fromJS(data["items"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OnPageRawHtmlResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRawHtmlResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["crawl_status"] = this.crawl_status ? CrawlStatusInfo.fromJS(this.crawl_status)?.toJSON() : <any>undefined;
        data["items_count"] = this.items_count;
        data["items"] = this.items ? OnPageRawHtmlItem.fromJS(this.items)?.toJSON() : <any>undefined;
        return data;
    }
}