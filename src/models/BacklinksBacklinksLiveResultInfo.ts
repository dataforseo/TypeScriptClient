import { BacklinksBacklinksLiveItem, IBacklinksBacklinksLiveItem } from "./BacklinksBacklinksLiveItem";


export interface IBacklinksBacklinksLiveResultInfo   {
        
        /** *target domain in a POST array* */
        target?: string | undefined
        
        /** *mode specified in a POST array* */
        mode?: string | undefined
        
        /** *custom mode specified in a POST array* */
        custom_mode?: { [key: string]: any; } | undefined
        
        /** *total amount of results relevant the request* */
        total_count?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *contains relevant backlinks and referring domains data* */
        items?: BacklinksBacklinksLiveItem[] | undefined
        
        /** *token for subsequent requests* by specifying the unique `search_after_token` when setting a new task, you will get the subsequent results of the initial task; `search_after_token` values are unique for each subsequent task */
        search_after_token?: string | undefined

    [key: string]: any;

    }

export class BacklinksBacklinksLiveResultInfo  implements IBacklinksBacklinksLiveResultInfo {

    
    /** *target domain in a POST array* */

    target?: string | undefined;

    
    /** *mode specified in a POST array* */

    mode?: string | undefined;

    
    /** *custom mode specified in a POST array* */

    custom_mode?: { [key: string]: any; } | undefined;

    
    /** *total amount of results relevant the request* */

    total_count?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *contains relevant backlinks and referring domains data* */

    items?: BacklinksBacklinksLiveItem[] | undefined;

    
    /** *token for subsequent requests* by specifying the unique `search_after_token` when setting a new task, you will get the subsequent results of the initial task; `search_after_token` values are unique for each subsequent task */

    search_after_token?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBacklinksLiveResultInfo) {

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
            this.mode = data["mode"];
            this.custom_mode = data["custom_mode"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BacklinksBacklinksLiveItem.fromJS(item));
                }
            }
            this.search_after_token = data["search_after_token"];
        }
    }

    static fromJS(data: any): BacklinksBacklinksLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBacklinksLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["mode"] = this.mode;
        data["custom_mode"] = this.custom_mode;
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
        data["search_after_token"] = this.search_after_token;
        return data;
    }
}