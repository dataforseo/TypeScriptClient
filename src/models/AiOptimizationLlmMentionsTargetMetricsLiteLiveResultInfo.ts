import { AiOptimizationLlmMentionsTargetMetricsLiteLiveItem, IAiOptimizationLlmMentionsTargetMetricsLiteLiveItem } from "./AiOptimizationLlmMentionsTargetMetricsLiteLiveItem";


export interface IAiOptimizationLlmMentionsTargetMetricsLiteLiveResultInfo   {
        
        /** total amount of results relevant the request */
        total_count?: number | undefined
        
        /** the number of mentions objects that are omitted in the items array */
        offset?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** aggregated mentions metrics
in this case, always returns null */
        aggregated_metrics?: any | undefined
        
        /** array of aggregated mentions metrics
contains objects with aggregated mention metrics for the specified target */
        items?: AiOptimizationLlmMentionsTargetMetricsLiteLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTargetMetricsLiteLiveResultInfo  implements IAiOptimizationLlmMentionsTargetMetricsLiteLiveResultInfo {

    
    /** total amount of results relevant the request */

    total_count?: number | undefined;

    
    /** the number of mentions objects that are omitted in the items array */

    offset?: number | undefined;

    
    /** the number of results returned in the items array */

    items_count?: number | undefined;

    
    /** aggregated mentions metrics
in this case, always returns null */

    aggregated_metrics?: any | undefined;

    
    /** array of aggregated mentions metrics
contains objects with aggregated mention metrics for the specified target */

    items?: AiOptimizationLlmMentionsTargetMetricsLiteLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTargetMetricsLiteLiveResultInfo) {

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
            this.offset = data["offset"];
            this.items_count = data["items_count"];
            this.aggregated_metrics = data["aggregated_metrics"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOptimizationLlmMentionsTargetMetricsLiteLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTargetMetricsLiteLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTargetMetricsLiteLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["offset"] = this.offset;
        data["items_count"] = this.items_count;
        data["aggregated_metrics"] = this.aggregated_metrics;
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