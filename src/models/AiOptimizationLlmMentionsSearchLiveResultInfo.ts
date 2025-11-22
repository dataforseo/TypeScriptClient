import { AiOptimizationLlmMentionsSearchLiveItem, IAiOptimizationLlmMentionsSearchLiveItem } from "./AiOptimizationLlmMentionsSearchLiveItem";


export interface IAiOptimizationLlmMentionsSearchLiveResultInfo   {
        
        /** total amount of results relevant the request */
        total_count?: number | undefined
        
        /** the number of mentions objects that are omitted in the items array */
        current_offset?: number | undefined
        
        /** token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task */
        search_after_token?: string | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains relevant mentions data */
        items?: AiOptimizationLlmMentionsSearchLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsSearchLiveResultInfo  implements IAiOptimizationLlmMentionsSearchLiveResultInfo {
    
    /** total amount of results relevant the request */

    total_count?: number | undefined;
    
    /** the number of mentions objects that are omitted in the items array */

    current_offset?: number | undefined;
    
    /** token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task */

    search_after_token?: string | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** contains relevant mentions data */

    items?: AiOptimizationLlmMentionsSearchLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsSearchLiveResultInfo) {

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
            this.current_offset = data["current_offset"];
            this.search_after_token = data["search_after_token"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOptimizationLlmMentionsSearchLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsSearchLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsSearchLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["current_offset"] = this.current_offset;
        data["search_after_token"] = this.search_after_token;
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