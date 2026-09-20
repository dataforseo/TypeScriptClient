import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixLlmMentionsAiOptimizationLimitsRatesDataInfo   {
        
        search?: AppendixInfo | undefined
        
        aggregated_metrics?: AppendixInfo | undefined
        
        cross_aggregated_metrics?: AppendixInfo | undefined
        
        top_domains?: AppendixInfo | undefined
        
        top_pages?: AppendixInfo | undefined
        
        locations_and_languages?: number | undefined
        
        available_filters?: number | undefined
        
        search_mentions?: AppendixInfo | undefined
        
        target_metrics?: AppendixInfo | undefined
        
        multi_target_metrics?: AppendixInfo | undefined
        
        top_mentioned_domains?: AppendixInfo | undefined
        
        top_mentioned_pages?: AppendixInfo | undefined
        
        top_mentioned_brands?: AppendixInfo | undefined
        
        top_mentioned_brand_categories?: AppendixInfo | undefined
        
        target_metrics_lite?: AppendixInfo | undefined
        
        top_mentioned_domains_lite?: AppendixInfo | undefined
        
        top_mentioned_pages_lite?: AppendixInfo | undefined
        
        top_mentioned_brands_lite?: AppendixInfo | undefined
        
        top_mentioned_brand_categories_lite?: AppendixInfo | undefined
        
        historical?: AppendixInfo | undefined
        
        timeseries_delta?: AppendixInfo | undefined
        
        timeseries_new_lost?: AppendixInfo | undefined

    [key: string]: any;

    }

export class AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo  implements IAppendixLlmMentionsAiOptimizationLimitsRatesDataInfo {

    search?: AppendixInfo | undefined;

    aggregated_metrics?: AppendixInfo | undefined;

    cross_aggregated_metrics?: AppendixInfo | undefined;

    top_domains?: AppendixInfo | undefined;

    top_pages?: AppendixInfo | undefined;

    locations_and_languages?: number | undefined;

    available_filters?: number | undefined;

    search_mentions?: AppendixInfo | undefined;

    target_metrics?: AppendixInfo | undefined;

    multi_target_metrics?: AppendixInfo | undefined;

    top_mentioned_domains?: AppendixInfo | undefined;

    top_mentioned_pages?: AppendixInfo | undefined;

    top_mentioned_brands?: AppendixInfo | undefined;

    top_mentioned_brand_categories?: AppendixInfo | undefined;

    target_metrics_lite?: AppendixInfo | undefined;

    top_mentioned_domains_lite?: AppendixInfo | undefined;

    top_mentioned_pages_lite?: AppendixInfo | undefined;

    top_mentioned_brands_lite?: AppendixInfo | undefined;

    top_mentioned_brand_categories_lite?: AppendixInfo | undefined;

    historical?: AppendixInfo | undefined;

    timeseries_delta?: AppendixInfo | undefined;

    timeseries_new_lost?: AppendixInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixLlmMentionsAiOptimizationLimitsRatesDataInfo) {

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
            this.search = data["search"] ? AppendixInfo.fromJS(data["search"]) : <any>undefined;
            this.aggregated_metrics = data["aggregated_metrics"] ? AppendixInfo.fromJS(data["aggregated_metrics"]) : <any>undefined;
            this.cross_aggregated_metrics = data["cross_aggregated_metrics"] ? AppendixInfo.fromJS(data["cross_aggregated_metrics"]) : <any>undefined;
            this.top_domains = data["top_domains"] ? AppendixInfo.fromJS(data["top_domains"]) : <any>undefined;
            this.top_pages = data["top_pages"] ? AppendixInfo.fromJS(data["top_pages"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"];
            this.available_filters = data["available_filters"];
            this.search_mentions = data["search_mentions"] ? AppendixInfo.fromJS(data["search_mentions"]) : <any>undefined;
            this.target_metrics = data["target_metrics"] ? AppendixInfo.fromJS(data["target_metrics"]) : <any>undefined;
            this.multi_target_metrics = data["multi_target_metrics"] ? AppendixInfo.fromJS(data["multi_target_metrics"]) : <any>undefined;
            this.top_mentioned_domains = data["top_mentioned_domains"] ? AppendixInfo.fromJS(data["top_mentioned_domains"]) : <any>undefined;
            this.top_mentioned_pages = data["top_mentioned_pages"] ? AppendixInfo.fromJS(data["top_mentioned_pages"]) : <any>undefined;
            this.top_mentioned_brands = data["top_mentioned_brands"] ? AppendixInfo.fromJS(data["top_mentioned_brands"]) : <any>undefined;
            this.top_mentioned_brand_categories = data["top_mentioned_brand_categories"] ? AppendixInfo.fromJS(data["top_mentioned_brand_categories"]) : <any>undefined;
            this.target_metrics_lite = data["target_metrics_lite"] ? AppendixInfo.fromJS(data["target_metrics_lite"]) : <any>undefined;
            this.top_mentioned_domains_lite = data["top_mentioned_domains_lite"] ? AppendixInfo.fromJS(data["top_mentioned_domains_lite"]) : <any>undefined;
            this.top_mentioned_pages_lite = data["top_mentioned_pages_lite"] ? AppendixInfo.fromJS(data["top_mentioned_pages_lite"]) : <any>undefined;
            this.top_mentioned_brands_lite = data["top_mentioned_brands_lite"] ? AppendixInfo.fromJS(data["top_mentioned_brands_lite"]) : <any>undefined;
            this.top_mentioned_brand_categories_lite = data["top_mentioned_brand_categories_lite"] ? AppendixInfo.fromJS(data["top_mentioned_brand_categories_lite"]) : <any>undefined;
            this.historical = data["historical"] ? AppendixInfo.fromJS(data["historical"]) : <any>undefined;
            this.timeseries_delta = data["timeseries_delta"] ? AppendixInfo.fromJS(data["timeseries_delta"]) : <any>undefined;
            this.timeseries_new_lost = data["timeseries_new_lost"] ? AppendixInfo.fromJS(data["timeseries_new_lost"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixLlmMentionsAiOptimizationLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search"] = this.search ? AppendixInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        data["aggregated_metrics"] = this.aggregated_metrics ? AppendixInfo.fromJS(this.aggregated_metrics)?.toJSON() : <any>undefined;
        data["cross_aggregated_metrics"] = this.cross_aggregated_metrics ? AppendixInfo.fromJS(this.cross_aggregated_metrics)?.toJSON() : <any>undefined;
        data["top_domains"] = this.top_domains ? AppendixInfo.fromJS(this.top_domains)?.toJSON() : <any>undefined;
        data["top_pages"] = this.top_pages ? AppendixInfo.fromJS(this.top_pages)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages;
        data["available_filters"] = this.available_filters;
        data["search_mentions"] = this.search_mentions ? AppendixInfo.fromJS(this.search_mentions)?.toJSON() : <any>undefined;
        data["target_metrics"] = this.target_metrics ? AppendixInfo.fromJS(this.target_metrics)?.toJSON() : <any>undefined;
        data["multi_target_metrics"] = this.multi_target_metrics ? AppendixInfo.fromJS(this.multi_target_metrics)?.toJSON() : <any>undefined;
        data["top_mentioned_domains"] = this.top_mentioned_domains ? AppendixInfo.fromJS(this.top_mentioned_domains)?.toJSON() : <any>undefined;
        data["top_mentioned_pages"] = this.top_mentioned_pages ? AppendixInfo.fromJS(this.top_mentioned_pages)?.toJSON() : <any>undefined;
        data["top_mentioned_brands"] = this.top_mentioned_brands ? AppendixInfo.fromJS(this.top_mentioned_brands)?.toJSON() : <any>undefined;
        data["top_mentioned_brand_categories"] = this.top_mentioned_brand_categories ? AppendixInfo.fromJS(this.top_mentioned_brand_categories)?.toJSON() : <any>undefined;
        data["target_metrics_lite"] = this.target_metrics_lite ? AppendixInfo.fromJS(this.target_metrics_lite)?.toJSON() : <any>undefined;
        data["top_mentioned_domains_lite"] = this.top_mentioned_domains_lite ? AppendixInfo.fromJS(this.top_mentioned_domains_lite)?.toJSON() : <any>undefined;
        data["top_mentioned_pages_lite"] = this.top_mentioned_pages_lite ? AppendixInfo.fromJS(this.top_mentioned_pages_lite)?.toJSON() : <any>undefined;
        data["top_mentioned_brands_lite"] = this.top_mentioned_brands_lite ? AppendixInfo.fromJS(this.top_mentioned_brands_lite)?.toJSON() : <any>undefined;
        data["top_mentioned_brand_categories_lite"] = this.top_mentioned_brand_categories_lite ? AppendixInfo.fromJS(this.top_mentioned_brand_categories_lite)?.toJSON() : <any>undefined;
        data["historical"] = this.historical ? AppendixInfo.fromJS(this.historical)?.toJSON() : <any>undefined;
        data["timeseries_delta"] = this.timeseries_delta ? AppendixInfo.fromJS(this.timeseries_delta)?.toJSON() : <any>undefined;
        data["timeseries_new_lost"] = this.timeseries_new_lost ? AppendixInfo.fromJS(this.timeseries_new_lost)?.toJSON() : <any>undefined;
        return data;
    }
}