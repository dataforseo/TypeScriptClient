import { BacklinksBulkReferringDomainsLiveItem, IBacklinksBulkReferringDomainsLiveItem } from "./BacklinksBulkReferringDomainsLiveItem";


export interface IBacklinksBulkReferringDomainsLiveResultInfo   {
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains relevant backlinks and referring domains data */
        items?: BacklinksBulkReferringDomainsLiveItem[] | undefined

    [key: string]: any;

    }

export class BacklinksBulkReferringDomainsLiveResultInfo  implements IBacklinksBulkReferringDomainsLiveResultInfo {

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains relevant backlinks and referring domains data */

    items?: BacklinksBulkReferringDomainsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkReferringDomainsLiveResultInfo) {

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
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BacklinksBulkReferringDomainsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksBulkReferringDomainsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkReferringDomainsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
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