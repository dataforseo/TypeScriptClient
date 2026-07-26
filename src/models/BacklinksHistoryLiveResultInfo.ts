import { BacklinksHistoryLiveItem, IBacklinksHistoryLiveItem } from "./BacklinksHistoryLiveItem";


export interface IBacklinksHistoryLiveResultInfo   {
        
        /** *`target` from the POST array* */
        target?: string | undefined
        
        /** *starting date of the time range* in the UTC format: “yyyy-mm-dd” example: `2019-01-01` */
        date_from?: string | undefined
        
        /** *ending date of the time range* in the UTC format: `'yyyy-mm-dd'` example: `'2019-01-15'` */
        date_to?: string | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *contains historical backlink data for the specified domain* the data is provided month-by-month; the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month */
        items?: BacklinksHistoryLiveItem[] | undefined

    [key: string]: any;

    }

export class BacklinksHistoryLiveResultInfo  implements IBacklinksHistoryLiveResultInfo {

    
    /** *`target` from the POST array* */

    target?: string | undefined;

    
    /** *starting date of the time range* in the UTC format: “yyyy-mm-dd” example: `2019-01-01` */

    date_from?: string | undefined;

    
    /** *ending date of the time range* in the UTC format: `'yyyy-mm-dd'` example: `'2019-01-15'` */

    date_to?: string | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *contains historical backlink data for the specified domain* the data is provided month-by-month; the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month */

    items?: BacklinksHistoryLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksHistoryLiveResultInfo) {

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
            this.target = data["target"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BacklinksHistoryLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksHistoryLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksHistoryLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
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