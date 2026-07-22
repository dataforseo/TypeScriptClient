import { BacklinksBulkBacklinksLiveItem, IBacklinksBulkBacklinksLiveItem } from "./BacklinksBulkBacklinksLiveItem";


export interface IBacklinksBulkBacklinksLiveResultInfo   {
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains relevant backlink data */
        items?: BacklinksBulkBacklinksLiveItem[] | undefined

    [key: string]: any;

    }

export class BacklinksBulkBacklinksLiveResultInfo  implements IBacklinksBulkBacklinksLiveResultInfo {

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** contains relevant backlink data */

    items?: BacklinksBulkBacklinksLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBulkBacklinksLiveResultInfo) {

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
                    this.items.push(BacklinksBulkBacklinksLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksBulkBacklinksLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkBacklinksLiveResultInfo();
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