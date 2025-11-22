import { Total, ITotal } from "./Total";


export interface IAiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo   {
        
        /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensions */
        total?: Total | undefined
        
        /** contains relevant mentions data
equals null in this endpoint */
        items?: any | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo  implements IAiOptimizationLlmMentionsAggregatedMetricsLiveResultInfo {
    
    /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all found domains, grouped by various dimensions */

    total?: Total | undefined;
    
    /** contains relevant mentions data
equals null in this endpoint */

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
            this.total = data["total"] ? Total.fromJS(data["total"]) : <any>undefined;
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

        
        
        data["total"] = this.total ? Total.fromJS(this.total)?.toJSON() : <any>undefined;
        data["items"] = this.items;
        return data;
    }
}