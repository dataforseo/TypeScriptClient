import { BacklinksReferringDomainsLiveItem, IBacklinksReferringDomainsLiveItem } from "./BacklinksReferringDomainsLiveItem";


export interface IBacklinksReferringDomainsLiveResultInfo   {
        
        /** target in a POST array */
        target?: string | undefined
        
        /** total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain */
        total_count?: number | undefined
        
        /** number of items in the items array */
        items_count?: number | undefined
        
        /** items array */
        items?: BacklinksReferringDomainsLiveItem[] | undefined

    [key: string]: any;

    }

export class BacklinksReferringDomainsLiveResultInfo  implements IBacklinksReferringDomainsLiveResultInfo {

    
    /** target in a POST array */

    target?: string | undefined;

    
    /** total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain */

    total_count?: number | undefined;

    
    /** number of items in the items array */

    items_count?: number | undefined;

    
    /** items array */

    items?: BacklinksReferringDomainsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksReferringDomainsLiveResultInfo) {

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
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BacklinksReferringDomainsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksReferringDomainsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksReferringDomainsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["total_count"] = this.total_count;
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