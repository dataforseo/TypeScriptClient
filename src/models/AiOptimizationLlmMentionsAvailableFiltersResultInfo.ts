export interface IAiOptimizationLlmMentionsAvailableFiltersResultInfo   {
        
        search?: { [key: string]: string; } | undefined
        
        search_mentions?: { [key: string]: string; } | undefined
        
        target_metrics?: { [key: string]: string; } | undefined
        
        multi_target_metrics?: { [key: string]: string; } | undefined
        
        top_mentioned_domains?: { [key: string]: string; } | undefined
        
        top_mentioned_pages?: { [key: string]: string; } | undefined
        
        top_mentioned_brands?: { [key: string]: string; } | undefined
        
        top_mentioned_brand_categories?: { [key: string]: string; } | undefined
        
        target_metrics_lite?: { [key: string]: string; } | undefined
        
        top_mentioned_domains_lite?: { [key: string]: string; } | undefined
        
        top_mentioned_pages_lite?: { [key: string]: string; } | undefined
        
        top_mentioned_brands_lite?: { [key: string]: string; } | undefined
        
        top_mentioned_brand_categories_lite?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsAvailableFiltersResultInfo  implements IAiOptimizationLlmMentionsAvailableFiltersResultInfo {

    search?: { [key: string]: string; } | undefined;

    search_mentions?: { [key: string]: string; } | undefined;

    target_metrics?: { [key: string]: string; } | undefined;

    multi_target_metrics?: { [key: string]: string; } | undefined;

    top_mentioned_domains?: { [key: string]: string; } | undefined;

    top_mentioned_pages?: { [key: string]: string; } | undefined;

    top_mentioned_brands?: { [key: string]: string; } | undefined;

    top_mentioned_brand_categories?: { [key: string]: string; } | undefined;

    target_metrics_lite?: { [key: string]: string; } | undefined;

    top_mentioned_domains_lite?: { [key: string]: string; } | undefined;

    top_mentioned_pages_lite?: { [key: string]: string; } | undefined;

    top_mentioned_brands_lite?: { [key: string]: string; } | undefined;

    top_mentioned_brand_categories_lite?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsAvailableFiltersResultInfo) {

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
            this.search = data["search"];
            this.search_mentions = data["search_mentions"];
            this.target_metrics = data["target_metrics"];
            this.multi_target_metrics = data["multi_target_metrics"];
            this.top_mentioned_domains = data["top_mentioned_domains"];
            this.top_mentioned_pages = data["top_mentioned_pages"];
            this.top_mentioned_brands = data["top_mentioned_brands"];
            this.top_mentioned_brand_categories = data["top_mentioned_brand_categories"];
            this.target_metrics_lite = data["target_metrics_lite"];
            this.top_mentioned_domains_lite = data["top_mentioned_domains_lite"];
            this.top_mentioned_pages_lite = data["top_mentioned_pages_lite"];
            this.top_mentioned_brands_lite = data["top_mentioned_brands_lite"];
            this.top_mentioned_brand_categories_lite = data["top_mentioned_brand_categories_lite"];
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search"] = this.search;
        data["search_mentions"] = this.search_mentions;
        data["target_metrics"] = this.target_metrics;
        data["multi_target_metrics"] = this.multi_target_metrics;
        data["top_mentioned_domains"] = this.top_mentioned_domains;
        data["top_mentioned_pages"] = this.top_mentioned_pages;
        data["top_mentioned_brands"] = this.top_mentioned_brands;
        data["top_mentioned_brand_categories"] = this.top_mentioned_brand_categories;
        data["target_metrics_lite"] = this.target_metrics_lite;
        data["top_mentioned_domains_lite"] = this.top_mentioned_domains_lite;
        data["top_mentioned_pages_lite"] = this.top_mentioned_pages_lite;
        data["top_mentioned_brands_lite"] = this.top_mentioned_brands_lite;
        data["top_mentioned_brand_categories_lite"] = this.top_mentioned_brand_categories_lite;
        return data;
    }
}