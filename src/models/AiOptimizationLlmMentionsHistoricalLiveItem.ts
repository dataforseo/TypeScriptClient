import { AggregatedMetricsInfoTotalInfo, IAggregatedMetricsInfoTotalInfo } from "./AggregatedMetricsInfoTotalInfo";


export interface IAiOptimizationLlmMentionsHistoricalLiveItem   {
        
        /** year */
        year?: number | undefined
        
        /** month */
        month?: number | undefined
        
        /** aggregated mentions metrics for the given month of a year */
        metrics?: AggregatedMetricsInfoTotalInfo | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsHistoricalLiveItem  implements IAiOptimizationLlmMentionsHistoricalLiveItem {

    
    /** year */

    year?: number | undefined;

    
    /** month */

    month?: number | undefined;

    
    /** aggregated mentions metrics for the given month of a year */

    metrics?: AggregatedMetricsInfoTotalInfo | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsHistoricalLiveItem) {

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
            this.year = data["year"];
            this.month = data["month"];
            this.metrics = data["metrics"] ? AggregatedMetricsInfoTotalInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsHistoricalLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsHistoricalLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["year"] = this.year;
        data["month"] = this.month;
        data["metrics"] = this.metrics ? AggregatedMetricsInfoTotalInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}