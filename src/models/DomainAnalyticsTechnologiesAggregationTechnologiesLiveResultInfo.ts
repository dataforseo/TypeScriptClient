import { DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem, IDomainAnalyticsTechnologiesAggregationTechnologiesLiveItem } from "./DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem";


export interface IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo   {
        
        /** *total amount of results in our database relevant to your request* */
        total_count?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** offset in the results array of returned domains */
        offset?: number | undefined
        
        items?: DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem[] | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo  implements IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo {

    
    /** *total amount of results in our database relevant to your request* */

    total_count?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** offset in the results array of returned domains */

    offset?: number | undefined;

    items?: DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo) {

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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DomainAnalyticsTechnologiesAggregationTechnologiesLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
        data["offset"] = this.offset;
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