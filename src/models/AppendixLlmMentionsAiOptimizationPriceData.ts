import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixLlmMentionsAiOptimizationPriceData   {
        
        aggregated_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        cross_aggregated_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        historical?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        multi_target_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        search?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        search_mentions?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        target_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        target_metrics_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        timeseries_delta?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        timeseries_new_lost?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_brand_categories?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_brand_categories_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_brands?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_brands_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_domains_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_pages?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_mentioned_pages_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        top_pages?: AppendixBingKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixLlmMentionsAiOptimizationPriceData  implements IAppendixLlmMentionsAiOptimizationPriceData {

    aggregated_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    available_filters?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    cross_aggregated_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    historical?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    multi_target_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    search?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    search_mentions?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    target_metrics?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    target_metrics_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    timeseries_delta?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    timeseries_new_lost?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_brand_categories?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_brand_categories_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_brands?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_brands_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_domains?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_domains_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_pages?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_mentioned_pages_lite?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    top_pages?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixLlmMentionsAiOptimizationPriceData) {

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
            this.aggregated_metrics = data["aggregated_metrics"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["aggregated_metrics"]) : <any>undefined;
            this.available_filters = data["available_filters"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["available_filters"]) : <any>undefined;
            this.cross_aggregated_metrics = data["cross_aggregated_metrics"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["cross_aggregated_metrics"]) : <any>undefined;
            this.historical = data["historical"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["historical"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations_and_languages"]) : <any>undefined;
            this.multi_target_metrics = data["multi_target_metrics"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["multi_target_metrics"]) : <any>undefined;
            this.search = data["search"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["search"]) : <any>undefined;
            this.search_mentions = data["search_mentions"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["search_mentions"]) : <any>undefined;
            this.target_metrics = data["target_metrics"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["target_metrics"]) : <any>undefined;
            this.target_metrics_lite = data["target_metrics_lite"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["target_metrics_lite"]) : <any>undefined;
            this.timeseries_delta = data["timeseries_delta"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["timeseries_delta"]) : <any>undefined;
            this.timeseries_new_lost = data["timeseries_new_lost"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["timeseries_new_lost"]) : <any>undefined;
            this.top_domains = data["top_domains"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_domains"]) : <any>undefined;
            this.top_mentioned_brand_categories = data["top_mentioned_brand_categories"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_brand_categories"]) : <any>undefined;
            this.top_mentioned_brand_categories_lite = data["top_mentioned_brand_categories_lite"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_brand_categories_lite"]) : <any>undefined;
            this.top_mentioned_brands = data["top_mentioned_brands"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_brands"]) : <any>undefined;
            this.top_mentioned_brands_lite = data["top_mentioned_brands_lite"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_brands_lite"]) : <any>undefined;
            this.top_mentioned_domains = data["top_mentioned_domains"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_domains"]) : <any>undefined;
            this.top_mentioned_domains_lite = data["top_mentioned_domains_lite"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_domains_lite"]) : <any>undefined;
            this.top_mentioned_pages = data["top_mentioned_pages"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_pages"]) : <any>undefined;
            this.top_mentioned_pages_lite = data["top_mentioned_pages_lite"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_mentioned_pages_lite"]) : <any>undefined;
            this.top_pages = data["top_pages"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["top_pages"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixLlmMentionsAiOptimizationPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixLlmMentionsAiOptimizationPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["aggregated_metrics"] = this.aggregated_metrics ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.aggregated_metrics)?.toJSON() : <any>undefined;
        data["available_filters"] = this.available_filters ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.available_filters)?.toJSON() : <any>undefined;
        data["cross_aggregated_metrics"] = this.cross_aggregated_metrics ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.cross_aggregated_metrics)?.toJSON() : <any>undefined;
        data["historical"] = this.historical ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.historical)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations_and_languages)?.toJSON() : <any>undefined;
        data["multi_target_metrics"] = this.multi_target_metrics ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.multi_target_metrics)?.toJSON() : <any>undefined;
        data["search"] = this.search ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        data["search_mentions"] = this.search_mentions ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.search_mentions)?.toJSON() : <any>undefined;
        data["target_metrics"] = this.target_metrics ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.target_metrics)?.toJSON() : <any>undefined;
        data["target_metrics_lite"] = this.target_metrics_lite ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.target_metrics_lite)?.toJSON() : <any>undefined;
        data["timeseries_delta"] = this.timeseries_delta ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.timeseries_delta)?.toJSON() : <any>undefined;
        data["timeseries_new_lost"] = this.timeseries_new_lost ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.timeseries_new_lost)?.toJSON() : <any>undefined;
        data["top_domains"] = this.top_domains ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_domains)?.toJSON() : <any>undefined;
        data["top_mentioned_brand_categories"] = this.top_mentioned_brand_categories ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_brand_categories)?.toJSON() : <any>undefined;
        data["top_mentioned_brand_categories_lite"] = this.top_mentioned_brand_categories_lite ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_brand_categories_lite)?.toJSON() : <any>undefined;
        data["top_mentioned_brands"] = this.top_mentioned_brands ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_brands)?.toJSON() : <any>undefined;
        data["top_mentioned_brands_lite"] = this.top_mentioned_brands_lite ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_brands_lite)?.toJSON() : <any>undefined;
        data["top_mentioned_domains"] = this.top_mentioned_domains ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_domains)?.toJSON() : <any>undefined;
        data["top_mentioned_domains_lite"] = this.top_mentioned_domains_lite ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_domains_lite)?.toJSON() : <any>undefined;
        data["top_mentioned_pages"] = this.top_mentioned_pages ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_pages)?.toJSON() : <any>undefined;
        data["top_mentioned_pages_lite"] = this.top_mentioned_pages_lite ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_mentioned_pages_lite)?.toJSON() : <any>undefined;
        data["top_pages"] = this.top_pages ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.top_pages)?.toJSON() : <any>undefined;
        return data;
    }
}