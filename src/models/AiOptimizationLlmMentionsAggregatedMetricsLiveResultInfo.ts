import { AiOptimizationResultTotalInfo, IAiOptimizationResultTotalInfo } from "./AiOptimizationResultTotalInfo";


export interface IAiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo   {
        
        /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensions */
        total?: AiOptimizationResultTotalInfo | undefined
        
        /** individual pages results
array containing detailed mention metrics for each of the found top pages
in this case, equals null */
        items?: any | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo  implements IAiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo {
    
    /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensions */

    total?: AiOptimizationResultTotalInfo | undefined;
    
    /** individual pages results
array containing detailed mention metrics for each of the found top pages
in this case, equals null */

    items?: any | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo) {

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
            this.total = data["total"] ? AiOptimizationResultTotalInfo.fromJS(data["total"]) : <any>undefined;
            this.items = data["items"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total"] = this.total ? AiOptimizationResultTotalInfo.fromJS(this.total)?.toJSON() : <any>undefined;
        data["items"] = this.items;
        return data;
    }
}