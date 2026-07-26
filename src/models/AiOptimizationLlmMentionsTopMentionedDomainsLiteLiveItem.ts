import { AggregatedMetricsInfoTotalInfo, IAggregatedMetricsInfoTotalInfo } from "./AggregatedMetricsInfoTotalInfo";


export interface IAiOptimizationLlmMentionsTopMentionedDomainsLiteLiveItem   {
        
        /** *domain name* domain of aggregated metrics */
        domain?: string | undefined
        
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

export class AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveItem  implements IAiOptimizationLlmMentionsTopMentionedDomainsLiteLiveItem {

    
    /** *domain name* domain of aggregated metrics */

    domain?: string | undefined;

    
    /** *location identifier* location of aggregated metrics */

    location?: number | undefined;

    
    /** *language identifier* language of aggregated metrics */

    language?: string | undefined;

    
    /** *LLM platform identifiers* LLM platform of aggregated metrics */

    platform?: string | undefined;

    
    /** *LLM metrics* metrics aggregated by specific parameters and respective identifiers */

    metrics?: AggregatedMetricsInfoTotalInfo | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopMentionedDomainsLiteLiveItem) {

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
            this.domain = data["domain"];
            this.location = data["location"];
            this.language = data["language"];
            this.platform = data["platform"];
            this.metrics = data["metrics"] ? AggregatedMetricsInfoTotalInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopMentionedDomainsLiteLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["domain"] = this.domain;
        data["location"] = this.location;
        data["language"] = this.language;
        data["platform"] = this.platform;
        data["metrics"] = this.metrics ? AggregatedMetricsInfoTotalInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}