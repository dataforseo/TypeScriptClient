import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";
import { AppendixBingKeywordsDataLimitsRatesDataInfo, IAppendixBingKeywordsDataLimitsRatesDataInfo } from "./AppendixBingKeywordsDataLimitsRatesDataInfo";
import { AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo, IAppendixGoogleAdsKeywordsDataLimitsRatesDataInfo } from "./AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo";
import { AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo, IAppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo } from "./AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo";
import { AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo, IAppendixClickstreamDataKeywordsDataLimitsRatesDataInfo } from "./AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo";
import { AppendixNaverKeywordsDataDataInfo, IAppendixNaverKeywordsDataDataInfo } from "./AppendixNaverKeywordsDataDataInfo";
import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";


export interface IAppendixKeywordsDataDataInfo   {
        
        keywords_for_keywords?: AppendixInfo | undefined
        
        keywords_for_site?: AppendixInfo | undefined
        
        search_volume?: AppendixInfo | undefined
        
        ad_traffic_by_keywords?: AppendixInfo | undefined
        
        languages?: number | undefined
        
        locations?: number | undefined
        
        tasks_ready?: number | undefined
        
        explore?: AppendixInfo | undefined
        
        categories?: number | undefined
        
        errors?: number | undefined
        
        bing?: AppendixBingKeywordsDataLimitsRatesDataInfo | undefined
        
        keyword_performance?: AppendixInfo | undefined
        
        locations_and_languages?: number | undefined
        
        google_ads?: AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo | undefined
        
        id_list?: number | undefined
        
        dataforseo_trends?: AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo | undefined
        
        clickstream_data?: AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo | undefined
        
        audience_estimation?: AppendixInfo | undefined
        
        keyword_suggestions_for_url?: AppendixInfo | undefined
        
        naver?: AppendixNaverKeywordsDataDataInfo | undefined
        
        google?: AppendixBingKeywordsDataLimitsRatesDataInfo | undefined
        
        keyword_ideas_ads_api?: AppendixSerpDaysRatesDataInfo | undefined

    [key: string]: any;

    }

export class AppendixKeywordsDataDataInfo  implements IAppendixKeywordsDataDataInfo {

    keywords_for_keywords?: AppendixInfo | undefined;

    keywords_for_site?: AppendixInfo | undefined;

    search_volume?: AppendixInfo | undefined;

    ad_traffic_by_keywords?: AppendixInfo | undefined;

    languages?: number | undefined;

    locations?: number | undefined;

    tasks_ready?: number | undefined;

    explore?: AppendixInfo | undefined;

    categories?: number | undefined;

    errors?: number | undefined;

    bing?: AppendixBingKeywordsDataLimitsRatesDataInfo | undefined;

    keyword_performance?: AppendixInfo | undefined;

    locations_and_languages?: number | undefined;

    google_ads?: AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo | undefined;

    id_list?: number | undefined;

    dataforseo_trends?: AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo | undefined;

    clickstream_data?: AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo | undefined;

    audience_estimation?: AppendixInfo | undefined;

    keyword_suggestions_for_url?: AppendixInfo | undefined;

    naver?: AppendixNaverKeywordsDataDataInfo | undefined;

    google?: AppendixBingKeywordsDataLimitsRatesDataInfo | undefined;

    keyword_ideas_ads_api?: AppendixSerpDaysRatesDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixKeywordsDataDataInfo) {

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
            this.keywords_for_keywords = data["keywords_for_keywords"] ? AppendixInfo.fromJS(data["keywords_for_keywords"]) : <any>undefined;
            this.keywords_for_site = data["keywords_for_site"] ? AppendixInfo.fromJS(data["keywords_for_site"]) : <any>undefined;
            this.search_volume = data["search_volume"] ? AppendixInfo.fromJS(data["search_volume"]) : <any>undefined;
            this.ad_traffic_by_keywords = data["ad_traffic_by_keywords"] ? AppendixInfo.fromJS(data["ad_traffic_by_keywords"]) : <any>undefined;
            this.languages = data["languages"];
            this.locations = data["locations"];
            this.tasks_ready = data["tasks_ready"];
            this.explore = data["explore"] ? AppendixInfo.fromJS(data["explore"]) : <any>undefined;
            this.categories = data["categories"];
            this.errors = data["errors"];
            this.bing = data["bing"] ? AppendixBingKeywordsDataLimitsRatesDataInfo.fromJS(data["bing"]) : <any>undefined;
            this.keyword_performance = data["keyword_performance"] ? AppendixInfo.fromJS(data["keyword_performance"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"];
            this.google_ads = data["google_ads"] ? AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo.fromJS(data["google_ads"]) : <any>undefined;
            this.id_list = data["id_list"];
            this.dataforseo_trends = data["dataforseo_trends"] ? AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo.fromJS(data["dataforseo_trends"]) : <any>undefined;
            this.clickstream_data = data["clickstream_data"] ? AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo.fromJS(data["clickstream_data"]) : <any>undefined;
            this.audience_estimation = data["audience_estimation"] ? AppendixInfo.fromJS(data["audience_estimation"]) : <any>undefined;
            this.keyword_suggestions_for_url = data["keyword_suggestions_for_url"] ? AppendixInfo.fromJS(data["keyword_suggestions_for_url"]) : <any>undefined;
            this.naver = data["naver"] ? AppendixNaverKeywordsDataDataInfo.fromJS(data["naver"]) : <any>undefined;
            this.google = data["google"] ? AppendixBingKeywordsDataLimitsRatesDataInfo.fromJS(data["google"]) : <any>undefined;
            this.keyword_ideas_ads_api = data["keyword_ideas_ads_api"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["keyword_ideas_ads_api"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixKeywordsDataDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixKeywordsDataDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords_for_keywords"] = this.keywords_for_keywords ? AppendixInfo.fromJS(this.keywords_for_keywords)?.toJSON() : <any>undefined;
        data["keywords_for_site"] = this.keywords_for_site ? AppendixInfo.fromJS(this.keywords_for_site)?.toJSON() : <any>undefined;
        data["search_volume"] = this.search_volume ? AppendixInfo.fromJS(this.search_volume)?.toJSON() : <any>undefined;
        data["ad_traffic_by_keywords"] = this.ad_traffic_by_keywords ? AppendixInfo.fromJS(this.ad_traffic_by_keywords)?.toJSON() : <any>undefined;
        data["languages"] = this.languages;
        data["locations"] = this.locations;
        data["tasks_ready"] = this.tasks_ready;
        data["explore"] = this.explore ? AppendixInfo.fromJS(this.explore)?.toJSON() : <any>undefined;
        data["categories"] = this.categories;
        data["errors"] = this.errors;
        data["bing"] = this.bing ? AppendixBingKeywordsDataLimitsRatesDataInfo.fromJS(this.bing)?.toJSON() : <any>undefined;
        data["keyword_performance"] = this.keyword_performance ? AppendixInfo.fromJS(this.keyword_performance)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages;
        data["google_ads"] = this.google_ads ? AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo.fromJS(this.google_ads)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list;
        data["dataforseo_trends"] = this.dataforseo_trends ? AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo.fromJS(this.dataforseo_trends)?.toJSON() : <any>undefined;
        data["clickstream_data"] = this.clickstream_data ? AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo.fromJS(this.clickstream_data)?.toJSON() : <any>undefined;
        data["audience_estimation"] = this.audience_estimation ? AppendixInfo.fromJS(this.audience_estimation)?.toJSON() : <any>undefined;
        data["keyword_suggestions_for_url"] = this.keyword_suggestions_for_url ? AppendixInfo.fromJS(this.keyword_suggestions_for_url)?.toJSON() : <any>undefined;
        data["naver"] = this.naver ? AppendixNaverKeywordsDataDataInfo.fromJS(this.naver)?.toJSON() : <any>undefined;
        data["google"] = this.google ? AppendixBingKeywordsDataLimitsRatesDataInfo.fromJS(this.google)?.toJSON() : <any>undefined;
        data["keyword_ideas_ads_api"] = this.keyword_ideas_ads_api ? AppendixSerpDaysRatesDataInfo.fromJS(this.keyword_ideas_ads_api)?.toJSON() : <any>undefined;
        return data;
    }
}