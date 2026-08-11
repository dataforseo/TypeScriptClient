import { DomainAnalyticsTechnologiesTechnologyStatsLiveItem, IDomainAnalyticsTechnologiesTechnologyStatsLiveItem } from "./DomainAnalyticsTechnologiesTechnologyStatsLiveItem";


export interface IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo   {
        
        /** *target technology* */
        technology?: string | undefined
        
        /** *starting date of the time range* */
        date_from?: string | undefined
        
        /** *ending date of the time range* */
        date_to?: string | undefined
        
        items_count?: number | undefined
        
        items?: DomainAnalyticsTechnologiesTechnologyStatsLiveItem[] | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo  implements IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo {

    
    /** *target technology* */

    technology?: string | undefined;

    
    /** *starting date of the time range* */

    date_from?: string | undefined;

    
    /** *ending date of the time range* */

    date_to?: string | undefined;

    items_count?: number | undefined;

    items?: DomainAnalyticsTechnologiesTechnologyStatsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo) {

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
            this.technology = data["technology"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DomainAnalyticsTechnologiesTechnologyStatsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["technology"] = this.technology;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
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