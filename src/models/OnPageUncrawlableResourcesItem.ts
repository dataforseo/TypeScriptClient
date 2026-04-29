import { UncrawlableResourcesMeta, IUncrawlableResourcesMeta } from "./UncrawlableResourcesMeta";


export interface IOnPageUncrawlableResourcesItem   {
        
        /** URL of the uncrawlable resource */
        url?: string | undefined
        
        /** reason the resource is uncrawlablecan take the following values: content_type_inconsistency */
        reason?: string | undefined
        
        /** HTTP response code returned by the uncrawlable resourcepossible values: 200 */
        status_code?: number | undefined
        
        /** date and time when the resource was fetchedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2026-03-09 18:20:32 +00:00 */
        fetch_time?: string | undefined
        
        /** metadata of the uncrawlable resource */
        meta?: UncrawlableResourcesMeta | undefined

    [key: string]: any;

    }

export class OnPageUncrawlableResourcesItem  implements IOnPageUncrawlableResourcesItem {
    
    /** URL of the uncrawlable resource */

    url?: string | undefined;
    
    /** reason the resource is uncrawlablecan take the following values: content_type_inconsistency */

    reason?: string | undefined;
    
    /** HTTP response code returned by the uncrawlable resourcepossible values: 200 */

    status_code?: number | undefined;
    
    /** date and time when the resource was fetchedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2026-03-09 18:20:32 +00:00 */

    fetch_time?: string | undefined;
    
    /** metadata of the uncrawlable resource */

    meta?: UncrawlableResourcesMeta | undefined;

    [key: string]: any;


    constructor(data?: IOnPageUncrawlableResourcesItem) {

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
            this.reason = data["reason"];
            this.status_code = data["status_code"];
            this.fetch_time = data["fetch_time"];
            this.meta = data["meta"] ? UncrawlableResourcesMeta.fromJS(data["meta"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OnPageUncrawlableResourcesItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageUncrawlableResourcesItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["reason"] = this.reason;
        data["status_code"] = this.status_code;
        data["fetch_time"] = this.fetch_time;
        data["meta"] = this.meta ? UncrawlableResourcesMeta.fromJS(this.meta)?.toJSON() : <any>undefined;
        return data;
    }
}