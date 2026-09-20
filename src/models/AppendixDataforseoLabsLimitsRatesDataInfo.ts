import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixDataforseoLabsLimitsRatesDataInfo   {
        
        related_keywords?: AppendixInfo | undefined
        
        locations_and_languages?: number | undefined
        
        categories?: number | undefined
        
        errors?: number | undefined
        
        available_filters?: number | undefined
        
        product_competitors?: AppendixInfo | undefined
        
        product_keyword_intersections?: AppendixInfo | undefined
        
        product_rank_overview?: AppendixInfo | undefined
        
        ranked_keywords?: AppendixInfo | undefined
        
        serp_competitors?: AppendixInfo | undefined
        
        subdomains?: AppendixInfo | undefined
        
        relevant_pages?: AppendixInfo | undefined
        
        competitors_domain?: AppendixInfo | undefined
        
        domain_rank_overview?: AppendixInfo | undefined
        
        domain_intersection?: AppendixInfo | undefined
        
        page_intersection?: AppendixInfo | undefined
        
        bulk_traffic_estimation?: AppendixInfo | undefined
        
        bulk_keyword_difficulty?: AppendixInfo | undefined
        
        bulk_search_volume?: AppendixInfo | undefined
        
        keywords_for_site?: AppendixInfo | undefined
        
        keyword_suggestions?: AppendixInfo | undefined
        
        keyword_ideas?: AppendixInfo | undefined
        
        categories_for_domain?: AppendixInfo | undefined
        
        domain_metrics_by_categories?: AppendixInfo | undefined
        
        top_searches?: AppendixInfo | undefined
        
        domain_whois_overview?: AppendixInfo | undefined
        
        historical_rank_overview?: AppendixInfo | undefined
        
        keywords_for_categories?: AppendixInfo | undefined
        
        historical_serps?: AppendixInfo | undefined
        
        app_competitors?: AppendixInfo | undefined
        
        keywords_for_app?: AppendixInfo | undefined
        
        app_intersection?: AppendixInfo | undefined
        
        bulk_app_metrics?: AppendixInfo | undefined
        
        id_list?: number | undefined
        
        search_intent?: AppendixInfo | undefined
        
        historical_bulk_traffic_estimation?: AppendixInfo | undefined
        
        categories_for_keywords?: AppendixInfo | undefined
        
        keyword_overview?: AppendixInfo | undefined
        
        historical_keyword_data?: AppendixInfo | undefined

    [key: string]: any;

    }

export class AppendixDataforseoLabsLimitsRatesDataInfo  implements IAppendixDataforseoLabsLimitsRatesDataInfo {

    related_keywords?: AppendixInfo | undefined;

    locations_and_languages?: number | undefined;

    categories?: number | undefined;

    errors?: number | undefined;

    available_filters?: number | undefined;

    product_competitors?: AppendixInfo | undefined;

    product_keyword_intersections?: AppendixInfo | undefined;

    product_rank_overview?: AppendixInfo | undefined;

    ranked_keywords?: AppendixInfo | undefined;

    serp_competitors?: AppendixInfo | undefined;

    subdomains?: AppendixInfo | undefined;

    relevant_pages?: AppendixInfo | undefined;

    competitors_domain?: AppendixInfo | undefined;

    domain_rank_overview?: AppendixInfo | undefined;

    domain_intersection?: AppendixInfo | undefined;

    page_intersection?: AppendixInfo | undefined;

    bulk_traffic_estimation?: AppendixInfo | undefined;

    bulk_keyword_difficulty?: AppendixInfo | undefined;

    bulk_search_volume?: AppendixInfo | undefined;

    keywords_for_site?: AppendixInfo | undefined;

    keyword_suggestions?: AppendixInfo | undefined;

    keyword_ideas?: AppendixInfo | undefined;

    categories_for_domain?: AppendixInfo | undefined;

    domain_metrics_by_categories?: AppendixInfo | undefined;

    top_searches?: AppendixInfo | undefined;

    domain_whois_overview?: AppendixInfo | undefined;

    historical_rank_overview?: AppendixInfo | undefined;

    keywords_for_categories?: AppendixInfo | undefined;

    historical_serps?: AppendixInfo | undefined;

    app_competitors?: AppendixInfo | undefined;

    keywords_for_app?: AppendixInfo | undefined;

    app_intersection?: AppendixInfo | undefined;

    bulk_app_metrics?: AppendixInfo | undefined;

    id_list?: number | undefined;

    search_intent?: AppendixInfo | undefined;

    historical_bulk_traffic_estimation?: AppendixInfo | undefined;

    categories_for_keywords?: AppendixInfo | undefined;

    keyword_overview?: AppendixInfo | undefined;

    historical_keyword_data?: AppendixInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixDataforseoLabsLimitsRatesDataInfo) {

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
            this.related_keywords = data["related_keywords"] ? AppendixInfo.fromJS(data["related_keywords"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"];
            this.categories = data["categories"];
            this.errors = data["errors"];
            this.available_filters = data["available_filters"];
            this.product_competitors = data["product_competitors"] ? AppendixInfo.fromJS(data["product_competitors"]) : <any>undefined;
            this.product_keyword_intersections = data["product_keyword_intersections"] ? AppendixInfo.fromJS(data["product_keyword_intersections"]) : <any>undefined;
            this.product_rank_overview = data["product_rank_overview"] ? AppendixInfo.fromJS(data["product_rank_overview"]) : <any>undefined;
            this.ranked_keywords = data["ranked_keywords"] ? AppendixInfo.fromJS(data["ranked_keywords"]) : <any>undefined;
            this.serp_competitors = data["serp_competitors"] ? AppendixInfo.fromJS(data["serp_competitors"]) : <any>undefined;
            this.subdomains = data["subdomains"] ? AppendixInfo.fromJS(data["subdomains"]) : <any>undefined;
            this.relevant_pages = data["relevant_pages"] ? AppendixInfo.fromJS(data["relevant_pages"]) : <any>undefined;
            this.competitors_domain = data["competitors_domain"] ? AppendixInfo.fromJS(data["competitors_domain"]) : <any>undefined;
            this.domain_rank_overview = data["domain_rank_overview"] ? AppendixInfo.fromJS(data["domain_rank_overview"]) : <any>undefined;
            this.domain_intersection = data["domain_intersection"] ? AppendixInfo.fromJS(data["domain_intersection"]) : <any>undefined;
            this.page_intersection = data["page_intersection"] ? AppendixInfo.fromJS(data["page_intersection"]) : <any>undefined;
            this.bulk_traffic_estimation = data["bulk_traffic_estimation"] ? AppendixInfo.fromJS(data["bulk_traffic_estimation"]) : <any>undefined;
            this.bulk_keyword_difficulty = data["bulk_keyword_difficulty"] ? AppendixInfo.fromJS(data["bulk_keyword_difficulty"]) : <any>undefined;
            this.bulk_search_volume = data["bulk_search_volume"] ? AppendixInfo.fromJS(data["bulk_search_volume"]) : <any>undefined;
            this.keywords_for_site = data["keywords_for_site"] ? AppendixInfo.fromJS(data["keywords_for_site"]) : <any>undefined;
            this.keyword_suggestions = data["keyword_suggestions"] ? AppendixInfo.fromJS(data["keyword_suggestions"]) : <any>undefined;
            this.keyword_ideas = data["keyword_ideas"] ? AppendixInfo.fromJS(data["keyword_ideas"]) : <any>undefined;
            this.categories_for_domain = data["categories_for_domain"] ? AppendixInfo.fromJS(data["categories_for_domain"]) : <any>undefined;
            this.domain_metrics_by_categories = data["domain_metrics_by_categories"] ? AppendixInfo.fromJS(data["domain_metrics_by_categories"]) : <any>undefined;
            this.top_searches = data["top_searches"] ? AppendixInfo.fromJS(data["top_searches"]) : <any>undefined;
            this.domain_whois_overview = data["domain_whois_overview"] ? AppendixInfo.fromJS(data["domain_whois_overview"]) : <any>undefined;
            this.historical_rank_overview = data["historical_rank_overview"] ? AppendixInfo.fromJS(data["historical_rank_overview"]) : <any>undefined;
            this.keywords_for_categories = data["keywords_for_categories"] ? AppendixInfo.fromJS(data["keywords_for_categories"]) : <any>undefined;
            this.historical_serps = data["historical_serps"] ? AppendixInfo.fromJS(data["historical_serps"]) : <any>undefined;
            this.app_competitors = data["app_competitors"] ? AppendixInfo.fromJS(data["app_competitors"]) : <any>undefined;
            this.keywords_for_app = data["keywords_for_app"] ? AppendixInfo.fromJS(data["keywords_for_app"]) : <any>undefined;
            this.app_intersection = data["app_intersection"] ? AppendixInfo.fromJS(data["app_intersection"]) : <any>undefined;
            this.bulk_app_metrics = data["bulk_app_metrics"] ? AppendixInfo.fromJS(data["bulk_app_metrics"]) : <any>undefined;
            this.id_list = data["id_list"];
            this.search_intent = data["search_intent"] ? AppendixInfo.fromJS(data["search_intent"]) : <any>undefined;
            this.historical_bulk_traffic_estimation = data["historical_bulk_traffic_estimation"] ? AppendixInfo.fromJS(data["historical_bulk_traffic_estimation"]) : <any>undefined;
            this.categories_for_keywords = data["categories_for_keywords"] ? AppendixInfo.fromJS(data["categories_for_keywords"]) : <any>undefined;
            this.keyword_overview = data["keyword_overview"] ? AppendixInfo.fromJS(data["keyword_overview"]) : <any>undefined;
            this.historical_keyword_data = data["historical_keyword_data"] ? AppendixInfo.fromJS(data["historical_keyword_data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixDataforseoLabsLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixDataforseoLabsLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["related_keywords"] = this.related_keywords ? AppendixInfo.fromJS(this.related_keywords)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages;
        data["categories"] = this.categories;
        data["errors"] = this.errors;
        data["available_filters"] = this.available_filters;
        data["product_competitors"] = this.product_competitors ? AppendixInfo.fromJS(this.product_competitors)?.toJSON() : <any>undefined;
        data["product_keyword_intersections"] = this.product_keyword_intersections ? AppendixInfo.fromJS(this.product_keyword_intersections)?.toJSON() : <any>undefined;
        data["product_rank_overview"] = this.product_rank_overview ? AppendixInfo.fromJS(this.product_rank_overview)?.toJSON() : <any>undefined;
        data["ranked_keywords"] = this.ranked_keywords ? AppendixInfo.fromJS(this.ranked_keywords)?.toJSON() : <any>undefined;
        data["serp_competitors"] = this.serp_competitors ? AppendixInfo.fromJS(this.serp_competitors)?.toJSON() : <any>undefined;
        data["subdomains"] = this.subdomains ? AppendixInfo.fromJS(this.subdomains)?.toJSON() : <any>undefined;
        data["relevant_pages"] = this.relevant_pages ? AppendixInfo.fromJS(this.relevant_pages)?.toJSON() : <any>undefined;
        data["competitors_domain"] = this.competitors_domain ? AppendixInfo.fromJS(this.competitors_domain)?.toJSON() : <any>undefined;
        data["domain_rank_overview"] = this.domain_rank_overview ? AppendixInfo.fromJS(this.domain_rank_overview)?.toJSON() : <any>undefined;
        data["domain_intersection"] = this.domain_intersection ? AppendixInfo.fromJS(this.domain_intersection)?.toJSON() : <any>undefined;
        data["page_intersection"] = this.page_intersection ? AppendixInfo.fromJS(this.page_intersection)?.toJSON() : <any>undefined;
        data["bulk_traffic_estimation"] = this.bulk_traffic_estimation ? AppendixInfo.fromJS(this.bulk_traffic_estimation)?.toJSON() : <any>undefined;
        data["bulk_keyword_difficulty"] = this.bulk_keyword_difficulty ? AppendixInfo.fromJS(this.bulk_keyword_difficulty)?.toJSON() : <any>undefined;
        data["bulk_search_volume"] = this.bulk_search_volume ? AppendixInfo.fromJS(this.bulk_search_volume)?.toJSON() : <any>undefined;
        data["keywords_for_site"] = this.keywords_for_site ? AppendixInfo.fromJS(this.keywords_for_site)?.toJSON() : <any>undefined;
        data["keyword_suggestions"] = this.keyword_suggestions ? AppendixInfo.fromJS(this.keyword_suggestions)?.toJSON() : <any>undefined;
        data["keyword_ideas"] = this.keyword_ideas ? AppendixInfo.fromJS(this.keyword_ideas)?.toJSON() : <any>undefined;
        data["categories_for_domain"] = this.categories_for_domain ? AppendixInfo.fromJS(this.categories_for_domain)?.toJSON() : <any>undefined;
        data["domain_metrics_by_categories"] = this.domain_metrics_by_categories ? AppendixInfo.fromJS(this.domain_metrics_by_categories)?.toJSON() : <any>undefined;
        data["top_searches"] = this.top_searches ? AppendixInfo.fromJS(this.top_searches)?.toJSON() : <any>undefined;
        data["domain_whois_overview"] = this.domain_whois_overview ? AppendixInfo.fromJS(this.domain_whois_overview)?.toJSON() : <any>undefined;
        data["historical_rank_overview"] = this.historical_rank_overview ? AppendixInfo.fromJS(this.historical_rank_overview)?.toJSON() : <any>undefined;
        data["keywords_for_categories"] = this.keywords_for_categories ? AppendixInfo.fromJS(this.keywords_for_categories)?.toJSON() : <any>undefined;
        data["historical_serps"] = this.historical_serps ? AppendixInfo.fromJS(this.historical_serps)?.toJSON() : <any>undefined;
        data["app_competitors"] = this.app_competitors ? AppendixInfo.fromJS(this.app_competitors)?.toJSON() : <any>undefined;
        data["keywords_for_app"] = this.keywords_for_app ? AppendixInfo.fromJS(this.keywords_for_app)?.toJSON() : <any>undefined;
        data["app_intersection"] = this.app_intersection ? AppendixInfo.fromJS(this.app_intersection)?.toJSON() : <any>undefined;
        data["bulk_app_metrics"] = this.bulk_app_metrics ? AppendixInfo.fromJS(this.bulk_app_metrics)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list;
        data["search_intent"] = this.search_intent ? AppendixInfo.fromJS(this.search_intent)?.toJSON() : <any>undefined;
        data["historical_bulk_traffic_estimation"] = this.historical_bulk_traffic_estimation ? AppendixInfo.fromJS(this.historical_bulk_traffic_estimation)?.toJSON() : <any>undefined;
        data["categories_for_keywords"] = this.categories_for_keywords ? AppendixInfo.fromJS(this.categories_for_keywords)?.toJSON() : <any>undefined;
        data["keyword_overview"] = this.keyword_overview ? AppendixInfo.fromJS(this.keyword_overview)?.toJSON() : <any>undefined;
        data["historical_keyword_data"] = this.historical_keyword_data ? AppendixInfo.fromJS(this.historical_keyword_data)?.toJSON() : <any>undefined;
        return data;
    }
}