import { AiOptimizationLlmMentionsHistoricalLiveItem, IAiOptimizationLlmMentionsHistoricalLiveItem } from "./AiOptimizationLlmMentionsHistoricalLiveItem";


export interface IAiOptimizationLlmMentionsHistoricalLiveResultInfo   {
        
        /** the number of resuts returned in the items array */
        items_count?: number | undefined
        
        /** array of historical mention metrics
contains objects with historical mention metrics for the specified target
each object contains aggregated mentions metrics for one calendar month */
        items?: AiOptimizationLlmMentionsHistoricalLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsHistoricalLiveResultInfo  implements IAiOptimizationLlmMentionsHistoricalLiveResultInfo {

    
    /** the number of resuts returned in the items array */

    items_count?: number | undefined;

    
    /** array of historical mention metrics
contains objects with historical mention metrics for the specified target
each object contains aggregated mentions metrics for one calendar month */

    items?: AiOptimizationLlmMentionsHistoricalLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsHistoricalLiveResultInfo) {

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
                    this.items.push(AiOptimizationLlmMentionsHistoricalLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsHistoricalLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsHistoricalLiveResultInfo();
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