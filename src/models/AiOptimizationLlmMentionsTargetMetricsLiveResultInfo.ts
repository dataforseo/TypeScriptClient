import { LlmMentionsAggregatedMetricsInfo, ILlmMentionsAggregatedMetricsInfo } from "./LlmMentionsAggregatedMetricsInfo";


export interface IAiOptimizationLlmMentionsTargetMetricsLiveResultInfo   {
        
        /** total amount of results relevant to the request
in this case, always equals 0 */
        total_count?: number | undefined
        
        /** the number of mentions objects that are omitted in the items array
in this case, always equals 0 */
        offset?: number | undefined
        
        /** the number of results returned in the items array
in this case, always equals 0 */
        items_count?: number | undefined
        
        /** aggregated mentions metrics
contains aggregated LLM mention metrics across all found domains, grouped by various dimensions */
        aggregated_metrics?: LlmMentionsAggregatedMetricsInfo | undefined
        
        /** individual target results
in this case, equals null */
        items?: any[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTargetMetricsLiveResultInfo  implements IAiOptimizationLlmMentionsTargetMetricsLiveResultInfo {

    
    /** total amount of results relevant to the request
in this case, always equals 0 */

    total_count?: number | undefined;

    
    /** the number of mentions objects that are omitted in the items array
in this case, always equals 0 */

    offset?: number | undefined;

    
    /** the number of results returned in the items array
in this case, always equals 0 */

    items_count?: number | undefined;

    
    /** aggregated mentions metrics
contains aggregated LLM mention metrics across all found domains, grouped by various dimensions */

    aggregated_metrics?: LlmMentionsAggregatedMetricsInfo | undefined;

    
    /** individual target results
in this case, equals null */

    items?: any[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTargetMetricsLiveResultInfo) {

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
            this.items = data["items"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTargetMetricsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTargetMetricsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["offset"] = this.offset;
        data["items_count"] = this.items_count;
        data["aggregated_metrics"] = this.aggregated_metrics ? LlmMentionsAggregatedMetricsInfo.fromJS(this.aggregated_metrics)?.toJSON() : <any>undefined;
        data["items"] = this.items;
        return data;
    }
}