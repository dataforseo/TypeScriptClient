export interface ICrawlStatusInfo   {
        
        /** maximum number of pages to crawl
 indicates the max_crawl_pages limit you specified when setting a task */
        max_crawl_pages?: number | undefined
        
        /** number of pages that are currently in the crawling queue */
        pages_in_queue?: number | undefined
        
        /** number of crawled pages */
        pages_crawled?: number | undefined

    [key: string]: any;

    }

export class CrawlStatusInfo  implements ICrawlStatusInfo {

    
    /** maximum number of pages to crawl
 indicates the max_crawl_pages limit you specified when setting a task */

    max_crawl_pages?: number | undefined;

    
    /** number of pages that are currently in the crawling queue */

    pages_in_queue?: number | undefined;

    
    /** number of crawled pages */

    pages_crawled?: number | undefined;

    [key: string]: any;


    constructor(data?: ICrawlStatusInfo) {

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
            this.max_crawl_pages = data["max_crawl_pages"];
            this.pages_in_queue = data["pages_in_queue"];
            this.pages_crawled = data["pages_crawled"];
        }
    }

    static fromJS(data: any): CrawlStatusInfo {
        data = typeof data === 'object' ? data : {};


        let result = new CrawlStatusInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["max_crawl_pages"] = this.max_crawl_pages;
        data["pages_in_queue"] = this.pages_in_queue;
        data["pages_crawled"] = this.pages_crawled;
        return data;
    }
}