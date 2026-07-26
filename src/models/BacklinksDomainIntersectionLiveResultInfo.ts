import { BacklinksDomainIntersectionLiveItem, IBacklinksDomainIntersectionLiveItem } from "./BacklinksDomainIntersectionLiveItem";


export interface IBacklinksDomainIntersectionLiveResultInfo   {
        
        /** *target domains, subdomains or webpages in a POST array* */
        targets?: { [key: string]: string; } | undefined
        
        /** *total amount of results relevant to your request* */
        total_count?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *contains domain that link to all `targets` from the POST array* */
        items?: BacklinksDomainIntersectionLiveItem[] | undefined

    [key: string]: any;

    }

export class BacklinksDomainIntersectionLiveResultInfo  implements IBacklinksDomainIntersectionLiveResultInfo {

    
    /** *target domains, subdomains or webpages in a POST array* */

    targets?: { [key: string]: string; } | undefined;

    
    /** *total amount of results relevant to your request* */

    total_count?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *contains domain that link to all `targets` from the POST array* */

    items?: BacklinksDomainIntersectionLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksDomainIntersectionLiveResultInfo) {

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
            this.targets = data["targets"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BacklinksDomainIntersectionLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksDomainIntersectionLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksDomainIntersectionLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["targets"] = this.targets;
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