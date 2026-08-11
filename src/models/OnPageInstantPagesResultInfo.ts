import { BaseOnPageResourceItem, IBaseOnPageResourceItem } from "./BaseOnPageResourceItem";


export interface IOnPageInstantPagesResultInfo   {
        
        /** *status of the crawling session* possible values: `in_progress`, `finished` */
        crawl_progress?: string | undefined
        
        /** *details of the crawling session* in this case the value will be `null` */
        crawl_status?: any | undefined
        
        /** *crawler ip address* displays the IP address used by the crawler to initiate the current crawling session you can find the full list of IPs used by our crawler in the [Overview section](/v3/on_page/overview) */
        crawl_gateway_address?: string | undefined
        
        /** *number of items in the results array* */
        items_count?: number | undefined
        
        /** *items array* */
        items?: BaseOnPageResourceItem[] | undefined

    [key: string]: any;

    }

export class OnPageInstantPagesResultInfo  implements IOnPageInstantPagesResultInfo {

    
    /** *status of the crawling session* possible values: `in_progress`, `finished` */

    crawl_progress?: string | undefined;

    
    /** *details of the crawling session* in this case the value will be `null` */

    crawl_status?: any | undefined;

    
    /** *crawler ip address* displays the IP address used by the crawler to initiate the current crawling session you can find the full list of IPs used by our crawler in the [Overview section](/v3/on_page/overview) */

    crawl_gateway_address?: string | undefined;

    
    /** *number of items in the results array* */

    items_count?: number | undefined;

    
    /** *items array* */

    items?: BaseOnPageResourceItem[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageInstantPagesResultInfo) {

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
            this.crawl_status = data["crawl_status"];
            this.crawl_gateway_address = data["crawl_gateway_address"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseOnPageResourceItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageInstantPagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageInstantPagesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["crawl_status"] = this.crawl_status;
        data["crawl_gateway_address"] = this.crawl_gateway_address;
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