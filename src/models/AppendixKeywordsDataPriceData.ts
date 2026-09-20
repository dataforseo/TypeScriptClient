import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixAKeywordsDataPriceDataInfo, IAppendixAKeywordsDataPriceDataInfo } from "./AppendixAKeywordsDataPriceDataInfo";
import { AppendixBingKeywordsDataPriceData, IAppendixBingKeywordsDataPriceData } from "./AppendixBingKeywordsDataPriceData";
import { AppendixClickstreamDataKeywordsDataPriceData, IAppendixClickstreamDataKeywordsDataPriceData } from "./AppendixClickstreamDataKeywordsDataPriceData";
import { AppendixGoogleAdsKeywordsDataPriceData, IAppendixGoogleAdsKeywordsDataPriceData } from "./AppendixGoogleAdsKeywordsDataPriceData";
import { AppendixDataforseoTrendsKeywordsDataPriceData, IAppendixDataforseoTrendsKeywordsDataPriceData } from "./AppendixDataforseoTrendsKeywordsDataPriceData";
import { AppendixExploreKeywordsDataPriceData, IAppendixExploreKeywordsDataPriceData } from "./AppendixExploreKeywordsDataPriceData";


export interface IAppendixKeywordsDataPriceData   {
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        ad_traffic_by_keywords?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        audience_estimation?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        bing?: AppendixBingKeywordsDataPriceData | undefined
        
        categories?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        clickstream_data?: AppendixClickstreamDataKeywordsDataPriceData | undefined
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        google_ads?: AppendixGoogleAdsKeywordsDataPriceData | undefined
        
        id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        keyword_performance?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        keywords_for_keywords?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        keywords_for_site?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        keyword_suggestions_for_url?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        search_volume?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        dataforseo_trends?: AppendixDataforseoTrendsKeywordsDataPriceData | undefined
        
        explore?: AppendixExploreKeywordsDataPriceData | undefined

    [key: string]: any;

    }

export class AppendixKeywordsDataPriceData  implements IAppendixKeywordsDataPriceData {

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    ad_traffic_by_keywords?: AppendixAKeywordsDataPriceDataInfo | undefined;

    audience_estimation?: AppendixAKeywordsDataPriceDataInfo | undefined;

    bing?: AppendixBingKeywordsDataPriceData | undefined;

    categories?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    clickstream_data?: AppendixClickstreamDataKeywordsDataPriceData | undefined;

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    google_ads?: AppendixGoogleAdsKeywordsDataPriceData | undefined;

    id_list?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    keyword_performance?: AppendixAKeywordsDataPriceDataInfo | undefined;

    keywords_for_keywords?: AppendixAKeywordsDataPriceDataInfo | undefined;

    keywords_for_site?: AppendixAKeywordsDataPriceDataInfo | undefined;

    keyword_suggestions_for_url?: AppendixAKeywordsDataPriceDataInfo | undefined;

    languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    search_volume?: AppendixAKeywordsDataPriceDataInfo | undefined;

    dataforseo_trends?: AppendixDataforseoTrendsKeywordsDataPriceData | undefined;

    explore?: AppendixExploreKeywordsDataPriceData | undefined;

    [key: string]: any;


    constructor(data?: IAppendixKeywordsDataPriceData) {

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
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
            this.ad_traffic_by_keywords = data["ad_traffic_by_keywords"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["ad_traffic_by_keywords"]) : <any>undefined;
            this.audience_estimation = data["audience_estimation"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["audience_estimation"]) : <any>undefined;
            this.bing = data["bing"] ? AppendixBingKeywordsDataPriceData.fromJS(data["bing"]) : <any>undefined;
            this.categories = data["categories"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["categories"]) : <any>undefined;
            this.clickstream_data = data["clickstream_data"] ? AppendixClickstreamDataKeywordsDataPriceData.fromJS(data["clickstream_data"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.google_ads = data["google_ads"] ? AppendixGoogleAdsKeywordsDataPriceData.fromJS(data["google_ads"]) : <any>undefined;
            this.id_list = data["id_list"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["id_list"]) : <any>undefined;
            this.keyword_performance = data["keyword_performance"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["keyword_performance"]) : <any>undefined;
            this.keywords_for_keywords = data["keywords_for_keywords"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["keywords_for_keywords"]) : <any>undefined;
            this.keywords_for_site = data["keywords_for_site"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["keywords_for_site"]) : <any>undefined;
            this.keyword_suggestions_for_url = data["keyword_suggestions_for_url"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["keyword_suggestions_for_url"]) : <any>undefined;
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations_and_languages"]) : <any>undefined;
            this.search_volume = data["search_volume"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["search_volume"]) : <any>undefined;
            this.dataforseo_trends = data["dataforseo_trends"] ? AppendixDataforseoTrendsKeywordsDataPriceData.fromJS(data["dataforseo_trends"]) : <any>undefined;
            this.explore = data["explore"] ? AppendixExploreKeywordsDataPriceData.fromJS(data["explore"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixKeywordsDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixKeywordsDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        data["ad_traffic_by_keywords"] = this.ad_traffic_by_keywords ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.ad_traffic_by_keywords)?.toJSON() : <any>undefined;
        data["audience_estimation"] = this.audience_estimation ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.audience_estimation)?.toJSON() : <any>undefined;
        data["bing"] = this.bing ? AppendixBingKeywordsDataPriceData.fromJS(this.bing)?.toJSON() : <any>undefined;
        data["categories"] = this.categories ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.categories)?.toJSON() : <any>undefined;
        data["clickstream_data"] = this.clickstream_data ? AppendixClickstreamDataKeywordsDataPriceData.fromJS(this.clickstream_data)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["google_ads"] = this.google_ads ? AppendixGoogleAdsKeywordsDataPriceData.fromJS(this.google_ads)?.toJSON() : <any>undefined;
        data["id_list"] = this.id_list ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.id_list)?.toJSON() : <any>undefined;
        data["keyword_performance"] = this.keyword_performance ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.keyword_performance)?.toJSON() : <any>undefined;
        data["keywords_for_keywords"] = this.keywords_for_keywords ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.keywords_for_keywords)?.toJSON() : <any>undefined;
        data["keywords_for_site"] = this.keywords_for_site ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.keywords_for_site)?.toJSON() : <any>undefined;
        data["keyword_suggestions_for_url"] = this.keyword_suggestions_for_url ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.keyword_suggestions_for_url)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations_and_languages)?.toJSON() : <any>undefined;
        data["search_volume"] = this.search_volume ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.search_volume)?.toJSON() : <any>undefined;
        data["dataforseo_trends"] = this.dataforseo_trends ? AppendixDataforseoTrendsKeywordsDataPriceData.fromJS(this.dataforseo_trends)?.toJSON() : <any>undefined;
        data["explore"] = this.explore ? AppendixExploreKeywordsDataPriceData.fromJS(this.explore)?.toJSON() : <any>undefined;
        return data;
    }
}