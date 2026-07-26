import { DomainAnalyticsWhoisOverviewLiveItem, IDomainAnalyticsWhoisOverviewLiveItem } from "./DomainAnalyticsWhoisOverviewLiveItem";


export interface IDomainAnalyticsWhoisOverviewLiveResultInfo   {
        
        /** *total amount of results in our database relevant to your request* */
        total_count?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *results offset value specified in POST request* */
        offset?: number | undefined
        
        offset_token?: string | undefined
        
        /** *contains ranking and traffic data* */
        items?: DomainAnalyticsWhoisOverviewLiveItem[] | undefined

    [key: string]: any;

    }

export class DomainAnalyticsWhoisOverviewLiveResultInfo  implements IDomainAnalyticsWhoisOverviewLiveResultInfo {

    
    /** *total amount of results in our database relevant to your request* */

    total_count?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *results offset value specified in POST request* */

    offset?: number | undefined;

    offset_token?: string | undefined;

    
    /** *contains ranking and traffic data* */

    items?: DomainAnalyticsWhoisOverviewLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsWhoisOverviewLiveResultInfo) {

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
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DomainAnalyticsWhoisOverviewLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsWhoisOverviewLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsWhoisOverviewLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
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