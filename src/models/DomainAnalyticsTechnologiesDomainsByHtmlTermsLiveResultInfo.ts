import { DomainAnalyticsTechnologiesDomainsByLiveItem, IDomainAnalyticsTechnologiesDomainsByLiveItem } from "./DomainAnalyticsTechnologiesDomainsByLiveItem";


export interface IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo   {
        
        /** *total number of relevant items in the database* */
        total_count?: number | undefined
        
        /** *number of items in the results array* */
        items_count?: number | undefined
        
        /** *specified offset value* */
        offset?: number | undefined
        
        /** *token for subsequent requests* by specifying the unique `offset_token` when setting a new task, you will get the subsequent results of the initial task; `offset_token` values are unique for each subsequent task */
        offset_token?: string | undefined
        
        /** *items array* */
        items?: DomainAnalyticsTechnologiesDomainsByLiveItem[] | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo  implements IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo {

    
    /** *total number of relevant items in the database* */

    total_count?: number | undefined;

    
    /** *number of items in the results array* */

    items_count?: number | undefined;

    
    /** *specified offset value* */

    offset?: number | undefined;

    
    /** *token for subsequent requests* by specifying the unique `offset_token` when setting a new task, you will get the subsequent results of the initial task; `offset_token` values are unique for each subsequent task */

    offset_token?: string | undefined;

    
    /** *items array* */

    items?: DomainAnalyticsTechnologiesDomainsByLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo) {

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
                    this.items.push(DomainAnalyticsTechnologiesDomainsByLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo();
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