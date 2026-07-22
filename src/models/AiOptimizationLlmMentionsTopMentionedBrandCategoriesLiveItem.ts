import { AggregatedMetricsItemInfo, IAggregatedMetricsItemInfo } from "./AggregatedMetricsItemInfo";
import { AggregatedMetricsInfoTotalInfo, IAggregatedMetricsInfoTotalInfo } from "./AggregatedMetricsInfoTotalInfo";


export interface IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveItem   {
        
        /** brand category
brand category found in LLM mentions for the specified target */
        brand_category?: string | undefined
        
        /** location-based grouping
array of objects containing mention metrics segmented by geographical location */
        location?: AggregatedMetricsItemInfo[] | undefined
        
        /** language-based grouping
array of objects containing mention metrics segmented by content language */
        language?: AggregatedMetricsItemInfo[] | undefined
        
        /** platform-based grouping
array of group elements containing mention metrics segmented by AI platform */
        platform?: AggregatedMetricsItemInfo[] | undefined
        
        /** found top source domains relevant to the target
array of objects containing data on top domains that are cited as sources in LLM responses
learn more about the sources and how to retrieve LLM citation data at our Help Center */
        sources_domain?: AggregatedMetricsItemInfo[] | undefined
        
        /** found top search results domains relevant to the target
array of objects containing data on top domains that appear in search results related to LLM queries */
        search_results_domain?: AggregatedMetricsItemInfo[] | undefined
        
        /** data on brand entities relevant to the target
array of objects containing data on brand entity titles that appear in search results related to LLM queries */
        brand_entities_title?: AggregatedMetricsItemInfo[] | undefined
        
        /** data on brand entities relevant to the target
array of objects containing data on brand entity categories that appear in search results related to LLM queries */
        brand_entities_category?: AggregatedMetricsItemInfo[] | undefined
        
        /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all dimensions */
        total?: AggregatedMetricsInfoTotalInfo | undefined

    [key: string]: any;

    }

export class AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveItem  implements IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveItem {

    
    /** brand category
brand category found in LLM mentions for the specified target */

    brand_category?: string | undefined;

    
    /** location-based grouping
array of objects containing mention metrics segmented by geographical location */

    location?: AggregatedMetricsItemInfo[] | undefined;

    
    /** language-based grouping
array of objects containing mention metrics segmented by content language */

    language?: AggregatedMetricsItemInfo[] | undefined;

    
    /** platform-based grouping
array of group elements containing mention metrics segmented by AI platform */

    platform?: AggregatedMetricsItemInfo[] | undefined;

    
    /** found top source domains relevant to the target
array of objects containing data on top domains that are cited as sources in LLM responses
learn more about the sources and how to retrieve LLM citation data at our Help Center */

    sources_domain?: AggregatedMetricsItemInfo[] | undefined;

    
    /** found top search results domains relevant to the target
array of objects containing data on top domains that appear in search results related to LLM queries */

    search_results_domain?: AggregatedMetricsItemInfo[] | undefined;

    
    /** data on brand entities relevant to the target
array of objects containing data on brand entity titles that appear in search results related to LLM queries */

    brand_entities_title?: AggregatedMetricsItemInfo[] | undefined;

    
    /** data on brand entities relevant to the target
array of objects containing data on brand entity categories that appear in search results related to LLM queries */

    brand_entities_category?: AggregatedMetricsItemInfo[] | undefined;

    
    /** aggregated mentions metrics summary
contains overall aggregated LLM mention metrics across all dimensions */

    total?: AggregatedMetricsInfoTotalInfo | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveItem) {

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
            this.brand_category = data["brand_category"];
            if (Array.isArray(data["location"])) {
                this.location = [];
                for (let item of data["location"]) {
                    this.location.push(AggregatedMetricsItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["language"])) {
                this.language = [];
                for (let item of data["language"]) {
                    this.language.push(AggregatedMetricsItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["platform"])) {
                this.platform = [];
                for (let item of data["platform"]) {
                    this.platform.push(AggregatedMetricsItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["sources_domain"])) {
                this.sources_domain = [];
                for (let item of data["sources_domain"]) {
                    this.sources_domain.push(AggregatedMetricsItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["search_results_domain"])) {
                this.search_results_domain = [];
                for (let item of data["search_results_domain"]) {
                    this.search_results_domain.push(AggregatedMetricsItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["brand_entities_title"])) {
                this.brand_entities_title = [];
                for (let item of data["brand_entities_title"]) {
                    this.brand_entities_title.push(AggregatedMetricsItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["brand_entities_category"])) {
                this.brand_entities_category = [];
                for (let item of data["brand_entities_category"]) {
                    this.brand_entities_category.push(AggregatedMetricsItemInfo.fromJS(item));
                }
            }
            this.total = data["total"] ? AggregatedMetricsInfoTotalInfo.fromJS(data["total"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationLlmMentionsTopMentionedBrandCategoriesLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["brand_category"] = this.brand_category;
        data["location"] = null;
        if (Array.isArray(this.location)) {
            data["location"] = [];
            for (let item of this.location) {
                if (item && typeof item.toJSON === "function") {
                    data["location"].push(item?.toJSON());
                }
            }
        }
        data["language"] = null;
        if (Array.isArray(this.language)) {
            data["language"] = [];
            for (let item of this.language) {
                if (item && typeof item.toJSON === "function") {
                    data["language"].push(item?.toJSON());
                }
            }
        }
        data["platform"] = null;
        if (Array.isArray(this.platform)) {
            data["platform"] = [];
            for (let item of this.platform) {
                if (item && typeof item.toJSON === "function") {
                    data["platform"].push(item?.toJSON());
                }
            }
        }
        data["sources_domain"] = null;
        if (Array.isArray(this.sources_domain)) {
            data["sources_domain"] = [];
            for (let item of this.sources_domain) {
                if (item && typeof item.toJSON === "function") {
                    data["sources_domain"].push(item?.toJSON());
                }
            }
        }
        data["search_results_domain"] = null;
        if (Array.isArray(this.search_results_domain)) {
            data["search_results_domain"] = [];
            for (let item of this.search_results_domain) {
                if (item && typeof item.toJSON === "function") {
                    data["search_results_domain"].push(item?.toJSON());
                }
            }
        }
        data["brand_entities_title"] = null;
        if (Array.isArray(this.brand_entities_title)) {
            data["brand_entities_title"] = [];
            for (let item of this.brand_entities_title) {
                if (item && typeof item.toJSON === "function") {
                    data["brand_entities_title"].push(item?.toJSON());
                }
            }
        }
        data["brand_entities_category"] = null;
        if (Array.isArray(this.brand_entities_category)) {
            data["brand_entities_category"] = [];
            for (let item of this.brand_entities_category) {
                if (item && typeof item.toJSON === "function") {
                    data["brand_entities_category"].push(item?.toJSON());
                }
            }
        }
        data["total"] = this.total ? AggregatedMetricsInfoTotalInfo.fromJS(this.total)?.toJSON() : <any>undefined;
        return data;
    }
}