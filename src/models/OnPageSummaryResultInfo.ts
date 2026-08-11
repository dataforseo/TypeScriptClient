import { CrawlStatusInfo, ICrawlStatusInfo } from "./CrawlStatusInfo";
import { DomainInfo, IDomainInfo } from "./DomainInfo";
import { PageMetrics, IPageMetrics } from "./PageMetrics";


export interface IOnPageSummaryResultInfo   {
        
        /** *status of the crawling session* possible values: `in_progress`, `finished` */
        crawl_progress?: string | undefined
        
        /** *details of the crawling session* */
        crawl_status?: CrawlStatusInfo | undefined
        
        /** *crawler ip address* displays the IP address used by the crawler to initiate the current crawling session you can find the full list of IPs used by our crawler in the [Overview section](/v3/on_page/overview) */
        crawl_gateway_address?: string | undefined
        
        /** *reason why the crawling stopped* information about the reason why the crawling process stopped; possible values: `limit_exceeded` - the limit set in the `max_crawl_pages` was exceeded; `empty_queue` - all URLs in the queue were crawled; `force_stopped` - the crawling process was halted using the[On Page API Force Stop](/v3/on_page/force_stop) function; `unexpected_exception` - an internal error was encountered while crawling the `target`, contact support for more info */
        crawl_stop_reason?: string | undefined
        
        /** *domain-wide info* on-page information about the target domain and crawling process */
        domain_info?: DomainInfo | undefined
        
        /** *page-specific info* metrics information on the target website pages */
        page_metrics?: PageMetrics | undefined

    [key: string]: any;

    }

export class OnPageSummaryResultInfo  implements IOnPageSummaryResultInfo {

    
    /** *status of the crawling session* possible values: `in_progress`, `finished` */

    crawl_progress?: string | undefined;

    
    /** *details of the crawling session* */

    crawl_status?: CrawlStatusInfo | undefined;

    
    /** *crawler ip address* displays the IP address used by the crawler to initiate the current crawling session you can find the full list of IPs used by our crawler in the [Overview section](/v3/on_page/overview) */

    crawl_gateway_address?: string | undefined;

    
    /** *reason why the crawling stopped* information about the reason why the crawling process stopped; possible values: `limit_exceeded` - the limit set in the `max_crawl_pages` was exceeded; `empty_queue` - all URLs in the queue were crawled; `force_stopped` - the crawling process was halted using the[On Page API Force Stop](/v3/on_page/force_stop) function; `unexpected_exception` - an internal error was encountered while crawling the `target`, contact support for more info */

    crawl_stop_reason?: string | undefined;

    
    /** *domain-wide info* on-page information about the target domain and crawling process */

    domain_info?: DomainInfo | undefined;

    
    /** *page-specific info* metrics information on the target website pages */

    page_metrics?: PageMetrics | undefined;

    [key: string]: any;


    constructor(data?: IOnPageSummaryResultInfo) {

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
            this.crawl_gateway_address = data["crawl_gateway_address"];
            this.crawl_stop_reason = data["crawl_stop_reason"];
            this.domain_info = data["domain_info"] ? DomainInfo.fromJS(data["domain_info"]) : <any>undefined;
            this.page_metrics = data["page_metrics"] ? PageMetrics.fromJS(data["page_metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OnPageSummaryResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageSummaryResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["crawl_status"] = this.crawl_status ? CrawlStatusInfo.fromJS(this.crawl_status)?.toJSON() : <any>undefined;
        data["crawl_gateway_address"] = this.crawl_gateway_address;
        data["crawl_stop_reason"] = this.crawl_stop_reason;
        data["domain_info"] = this.domain_info ? DomainInfo.fromJS(this.domain_info)?.toJSON() : <any>undefined;
        data["page_metrics"] = this.page_metrics ? PageMetrics.fromJS(this.page_metrics)?.toJSON() : <any>undefined;
        return data;
    }
}