import { LlmMentionsAggregatedMetricsInfo, ILlmMentionsAggregatedMetricsInfo } from "./LlmMentionsAggregatedMetricsInfo";
import { AiOptimizationLlmMentionsTopMentionedDomainsLiveItem, IAiOptimizationLlmMentionsTopMentionedDomainsLiveItem } from "./AiOptimizationLlmMentionsTopMentionedDomainsLiveItem";


export interface IAiOptimizationLlmMentionsTopMentionedDomainsLiveResultInfo   {
        
        /** *total amount of results relevant the request* */
        total_count?: number | undefined
        
        /** *the number of mentions objects that are omitted in the `items` array* */
        offset?: number | undefined
        
        /** *the number of results returned in the `items` array* */
        items_count?: number | undefined
        
        /** *aggregated mentions metrics* contains aggregated LLM mention metrics across all found domains, grouped by various dimensions */
        aggregated_metrics?: LlmMentionsAggregatedMetricsInfo | undefined
        
        /** *individual domain results* array containing detailed mention metrics for each of the found top domains */
        items?: AiOptimizationLlmMentionsTopMentionedDomainsLiveItem[] | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTopMentionedDomainsLiveResultInfo  implements IAiOptimizationLlmMentionsTopMentionedDomainsLiveResultInfo {

    
    /** *total amount of results relevant the request* */

    total_count?: number | undefined;

    
    /** *the number of mentions objects that are omitted in the `items` array* */

    offset?: number | undefined;

    
    /** *the number of results returned in the `items` array* */

    items_count?: number | undefined;

    
    /** *aggregated mentions metrics* contains aggregated LLM mention metrics across all found domains, grouped by various dimensions */

    aggregated_metrics?: LlmMentionsAggregatedMetricsInfo | undefined;

    
    /** *individual domain results* array containing detailed mention metrics for each of the found top domains */

    items?: AiOptimizationLlmMentionsTopMentionedDomainsLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopMentionedDomainsLiveResultInfo) {

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
                    this.items.push(AiOptimizationLlmMentionsTopMentionedDomainsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopMentionedDomainsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopMentionedDomainsLiveResultInfo();
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