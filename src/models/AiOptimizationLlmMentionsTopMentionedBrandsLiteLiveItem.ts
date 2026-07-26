import { AggregatedMetricsInfoTotalInfo, IAggregatedMetricsInfoTotalInfo } from "./AggregatedMetricsInfoTotalInfo";


export interface IAiOptimizationLlmMentionsTopMentionedBrandsLiteLiveItem   {
        
        /** *brand name* brand identifier of aggregated metrics */
        brand?: string | undefined
        
        /** *location identifier* location of aggregated metrics */
        location?: number | undefined
        
        /** *language identifier* language of aggregated metrics */
        language?: string | undefined
        
        /** *LLM platform identifiers* LLM platform of aggregated metrics */
        platform?: string | undefined
        
        /** *LLM metrics* metrics aggregated by specific parameters and respective identifiers */
        metrics?: AggregatedMetricsInfoTotalInfo | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveItem  implements IAiOptimizationLlmMentionsTopMentionedBrandsLiteLiveItem {

    
    /** *brand name* brand identifier of aggregated metrics */

    brand?: string | undefined;

    
    /** *location identifier* location of aggregated metrics */

    location?: number | undefined;

    
    /** *language identifier* language of aggregated metrics */

    language?: string | undefined;

    
    /** *LLM platform identifiers* LLM platform of aggregated metrics */

    platform?: string | undefined;

    
    /** *LLM metrics* metrics aggregated by specific parameters and respective identifiers */

    metrics?: AggregatedMetricsInfoTotalInfo | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopMentionedBrandsLiteLiveItem) {

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
            this.brand = data["brand"];
            this.location = data["location"];
            this.language = data["language"];
            this.platform = data["platform"];
            this.metrics = data["metrics"] ? AggregatedMetricsInfoTotalInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopMentionedBrandsLiteLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["brand"] = this.brand;
        data["location"] = this.location;
        data["language"] = this.language;
        data["platform"] = this.platform;
        data["metrics"] = this.metrics ? AggregatedMetricsInfoTotalInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}