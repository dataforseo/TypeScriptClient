import { Total, ITotal } from "./Total";
import { AiOptimizationLlmMentionssLiveItem, IAiOptimizationLlmMentionssLiveItem } from "./AiOptimizationLlmMentionssLiveItem";


export interface IAiOptimizationLlmMentionsCrossAggregatedMetricsLiveResultInfo   {
        
        /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensions */
        total?: Total | undefined
        
        /** contains relevant mentions data */
        items?: AiOptimizationLlmMentionssLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsCrossAggregatedMetricsLiveResultInfo  implements IAiOptimizationLlmMentionsCrossAggregatedMetricsLiveResultInfo {
    
    /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensions */

    total?: Total | undefined;
    
    /** contains relevant mentions data */

    items?: AiOptimizationLlmMentionssLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsCrossAggregatedMetricsLiveResultInfo) {

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
            this.total = data["total"] ? Total.fromJS(data["total"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOptimizationLlmMentionssLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsCrossAggregatedMetricsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsCrossAggregatedMetricsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total"] = this.total ? Total.fromJS(this.total)?.toJSON() : <any>undefined;
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