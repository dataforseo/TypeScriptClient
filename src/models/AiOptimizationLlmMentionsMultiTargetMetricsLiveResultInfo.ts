import { LlmMentionsAggregatedMetricsInfo, ILlmMentionsAggregatedMetricsInfo } from "./LlmMentionsAggregatedMetricsInfo";
import { AiOptimizationLlmMentionsMultiTargetMetricsLiveItem, IAiOptimizationLlmMentionsMultiTargetMetricsLiveItem } from "./AiOptimizationLlmMentionsMultiTargetMetricsLiveItem";


export interface IAiOptimizationLlmMentionsMultiTargetMetricsLiveResultInfo   {
        
        /** total number of results */
        total_count?: number | undefined
        
        /** offset in the results array of the returned mentions data
offset specified in the request */
        offset?: number | undefined
        
        /** number of items in the results array */
        items_count?: number | undefined
        
        /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all LLM mentions that match at least one target specified in the request */
        aggregated_metrics?: LlmMentionsAggregatedMetricsInfo | undefined
        
        /** contains relevant mentions data */
        items?: AiOptimizationLlmMentionsMultiTargetMetricsLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsMultiTargetMetricsLiveResultInfo  implements IAiOptimizationLlmMentionsMultiTargetMetricsLiveResultInfo {

    
    /** total number of results */

    total_count?: number | undefined;

    
    /** offset in the results array of the returned mentions data
offset specified in the request */

    offset?: number | undefined;

    
    /** number of items in the results array */

    items_count?: number | undefined;

    
    /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all LLM mentions that match at least one target specified in the request */

    aggregated_metrics?: LlmMentionsAggregatedMetricsInfo | undefined;

    
    /** contains relevant mentions data */

    items?: AiOptimizationLlmMentionsMultiTargetMetricsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsMultiTargetMetricsLiveResultInfo) {

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
            this.aggregated_metrics = data["aggregated_metrics"] ? LlmMentionsAggregatedMetricsInfo.fromJS(data["aggregated_metrics"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOptimizationLlmMentionsMultiTargetMetricsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsMultiTargetMetricsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsMultiTargetMetricsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["offset"] = this.offset;
        data["items_count"] = this.items_count;
        data["aggregated_metrics"] = this.aggregated_metrics ? LlmMentionsAggregatedMetricsInfo.fromJS(this.aggregated_metrics)?.toJSON() : <any>undefined;
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