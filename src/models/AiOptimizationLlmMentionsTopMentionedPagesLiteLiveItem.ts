import { AggregatedMetricsInfoTotalInfo, IAggregatedMetricsInfoTotalInfo } from "./AggregatedMetricsInfoTotalInfo";


export interface IAiOptimizationLlmMentionsTopMentionedPagesLiteLiveItem   {
        
        /** *page URL* page identifier of aggregated metrics */
        page?: string | undefined
        
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

export class AiOptimizationLlmMentionsTopMentionedPagesLiteLiveItem  implements IAiOptimizationLlmMentionsTopMentionedPagesLiteLiveItem {

    
    /** *page URL* page identifier of aggregated metrics */

    page?: string | undefined;

    
    /** *location identifier* location of aggregated metrics */

    location?: number | undefined;

    
    /** *language identifier* language of aggregated metrics */

    language?: string | undefined;

    
    /** *LLM platform identifiers* LLM platform of aggregated metrics */

    platform?: string | undefined;

    
    /** *LLM metrics* metrics aggregated by specific parameters and respective identifiers */

    metrics?: AggregatedMetricsInfoTotalInfo | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopMentionedPagesLiteLiveItem) {

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
            this.page = data["page"];
            this.location = data["location"];
            this.language = data["language"];
            this.platform = data["platform"];
            this.metrics = data["metrics"] ? AggregatedMetricsInfoTotalInfo.fromJS(data["metrics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopMentionedPagesLiteLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopMentionedPagesLiteLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["page"] = this.page;
        data["location"] = this.location;
        data["language"] = this.language;
        data["platform"] = this.platform;
        data["metrics"] = this.metrics ? AggregatedMetricsInfoTotalInfo.fromJS(this.metrics)?.toJSON() : <any>undefined;
        return data;
    }
}