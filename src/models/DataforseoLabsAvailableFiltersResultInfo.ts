import { RankedKeywordsInfo, IRankedKeywordsInfo } from "./RankedKeywordsInfo";
import { ProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo, IProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo } from "./ProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo";


export interface IDataforseoLabsAvailableFiltersResultInfo   {
        
        related_keywords?: { [key: string]: { [key: string]: string; }; } | undefined
        
        keyword_suggestions?: { [key: string]: { [key: string]: string; }; } | undefined
        
        ranked_keywords?: RankedKeywordsInfo | undefined
        
        keyword_ideas?: { [key: string]: { [key: string]: string; }; } | undefined
        
        serp_competitors?: { [key: string]: { [key: string]: string; }; } | undefined
        
        relevant_pages?: { [key: string]: { [key: string]: string; }; } | undefined
        
        subdomains?: { [key: string]: { [key: string]: string; }; } | undefined
        
        competitors_domain?: { [key: string]: { [key: string]: string; }; } | undefined
        
        categories_for_domain?: { [key: string]: { [key: string]: string; }; } | undefined
        
        keywords_for_categories?: { [key: string]: { [key: string]: string; }; } | undefined
        
        domain_intersection?: { [key: string]: { [key: string]: string; }; } | undefined
        
        page_intersection?: { [key: string]: { [key: string]: string; }; } | undefined
        
        domain_whois_overview?: { [key: string]: { [key: string]: string; }; } | undefined
        
        top_searches?: { [key: string]: { [key: string]: string; }; } | undefined
        
        domain_metrics_by_categories?: { [key: string]: { [key: string]: string; }; } | undefined
        
        keywords_for_site?: { [key: string]: { [key: string]: string; }; } | undefined
        
        product_competitors?: { [key: string]: { [key: string]: string; }; } | undefined
        
        product_keyword_intersections?: { [key: string]: ProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo; } | undefined
        
        app_intersection?: { [key: string]: { [key: string]: string; }; } | undefined
        
        app_competitors?: { [key: string]: { [key: string]: string; }; } | undefined
        
        keywords_for_app?: { [key: string]: { [key: string]: string; }; } | undefined
        
        database_rows_count?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsAvailableFiltersResultInfo  implements IDataforseoLabsAvailableFiltersResultInfo {

    related_keywords?: { [key: string]: { [key: string]: string; }; } | undefined;

    keyword_suggestions?: { [key: string]: { [key: string]: string; }; } | undefined;

    ranked_keywords?: RankedKeywordsInfo | undefined;

    keyword_ideas?: { [key: string]: { [key: string]: string; }; } | undefined;

    serp_competitors?: { [key: string]: { [key: string]: string; }; } | undefined;

    relevant_pages?: { [key: string]: { [key: string]: string; }; } | undefined;

    subdomains?: { [key: string]: { [key: string]: string; }; } | undefined;

    competitors_domain?: { [key: string]: { [key: string]: string; }; } | undefined;

    categories_for_domain?: { [key: string]: { [key: string]: string; }; } | undefined;

    keywords_for_categories?: { [key: string]: { [key: string]: string; }; } | undefined;

    domain_intersection?: { [key: string]: { [key: string]: string; }; } | undefined;

    page_intersection?: { [key: string]: { [key: string]: string; }; } | undefined;

    domain_whois_overview?: { [key: string]: { [key: string]: string; }; } | undefined;

    top_searches?: { [key: string]: { [key: string]: string; }; } | undefined;

    domain_metrics_by_categories?: { [key: string]: { [key: string]: string; }; } | undefined;

    keywords_for_site?: { [key: string]: { [key: string]: string; }; } | undefined;

    product_competitors?: { [key: string]: { [key: string]: string; }; } | undefined;

    product_keyword_intersections?: { [key: string]: ProductKeywordIntersectionsAmazonDataforseoLabsAvailableFiltersAmazonInfo; } | undefined;

    app_intersection?: { [key: string]: { [key: string]: string; }; } | undefined;

    app_competitors?: { [key: string]: { [key: string]: string; }; } | undefined;

    keywords_for_app?: { [key: string]: { [key: string]: string; }; } | undefined;

    database_rows_count?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAvailableFiltersResultInfo) {

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
            this.related_keywords = data["related_keywords"];
            this.keyword_suggestions = data["keyword_suggestions"];
            this.ranked_keywords = data["ranked_keywords"] ? RankedKeywordsInfo.fromJS(data["ranked_keywords"]) : <any>undefined;
            this.keyword_ideas = data["keyword_ideas"];
            this.serp_competitors = data["serp_competitors"];
            this.relevant_pages = data["relevant_pages"];
            this.subdomains = data["subdomains"];
            this.competitors_domain = data["competitors_domain"];
            this.categories_for_domain = data["categories_for_domain"];
            this.keywords_for_categories = data["keywords_for_categories"];
            this.domain_intersection = data["domain_intersection"];
            this.page_intersection = data["page_intersection"];
            this.domain_whois_overview = data["domain_whois_overview"];
            this.top_searches = data["top_searches"];
            this.domain_metrics_by_categories = data["domain_metrics_by_categories"];
            this.keywords_for_site = data["keywords_for_site"];
            this.product_competitors = data["product_competitors"];
            this.product_keyword_intersections = data["product_keyword_intersections"];
            this.app_intersection = data["app_intersection"];
            this.app_competitors = data["app_competitors"];
            this.keywords_for_app = data["keywords_for_app"];
            this.database_rows_count = data["database_rows_count"];
        }
    }

    static fromJS(data: any): DataforseoLabsAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["related_keywords"] = this.related_keywords;
        data["keyword_suggestions"] = this.keyword_suggestions;
        data["ranked_keywords"] = this.ranked_keywords ? RankedKeywordsInfo.fromJS(this.ranked_keywords)?.toJSON() : <any>undefined;
        data["keyword_ideas"] = this.keyword_ideas;
        data["serp_competitors"] = this.serp_competitors;
        data["relevant_pages"] = this.relevant_pages;
        data["subdomains"] = this.subdomains;
        data["competitors_domain"] = this.competitors_domain;
        data["categories_for_domain"] = this.categories_for_domain;
        data["keywords_for_categories"] = this.keywords_for_categories;
        data["domain_intersection"] = this.domain_intersection;
        data["page_intersection"] = this.page_intersection;
        data["domain_whois_overview"] = this.domain_whois_overview;
        data["top_searches"] = this.top_searches;
        data["domain_metrics_by_categories"] = this.domain_metrics_by_categories;
        data["keywords_for_site"] = this.keywords_for_site;
        data["product_competitors"] = this.product_competitors;
        data["product_keyword_intersections"] = this.product_keyword_intersections;
        data["app_intersection"] = this.app_intersection;
        data["app_competitors"] = this.app_competitors;
        data["keywords_for_app"] = this.keywords_for_app;
        data["database_rows_count"] = this.database_rows_count;
        return data;
    }
}