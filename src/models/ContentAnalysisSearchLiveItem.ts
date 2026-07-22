import { ContentRatingInfo, IContentRatingInfo } from "./ContentRatingInfo";
import { SocialMetricsInfo, ISocialMetricsInfo } from "./SocialMetricsInfo";
import { AnalysisContentInfo, IAnalysisContentInfo } from "./AnalysisContentInfo";


export interface IContentAnalysisSearchLiveItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** URL where the citation was found */
        url?: string | undefined
        
        /** domain name */
        domain?: string | undefined
        
        /** main domain */
        main_domain?: string | undefined
        
        /** rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        url_rank?: number | undefined
        
        /** backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page */
        spam_score?: number | undefined
        
        /** rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        domain_rank?: number | undefined
        
        /** date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00 */
        fetch_time?: string | undefined
        
        /** country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint */
        country?: string | undefined
        
        /** main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint */
        language?: string | undefined
        
        /** citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has */
        score?: number | undefined
        
        /** contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint */
        page_category?: number[] | undefined
        
        /** page types */
        page_types?: string[] | undefined
        
        /** ratings found on the page
all ratings found on the page based on microdata */
        ratings?: ContentRatingInfo[] | undefined
        
        /** social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms */
        social_metrics?: SocialMetricsInfo[] | undefined
        
        /** contains data on citations from the given url */
        content_info?: AnalysisContentInfo | undefined

    [key: string]: any;

    }

export class ContentAnalysisSearchLiveItem  implements IContentAnalysisSearchLiveItem {

    
    /** type of element */

    type?: string | undefined;

    
    /** URL where the citation was found */

    url?: string | undefined;

    
    /** domain name */

    domain?: string | undefined;

    
    /** main domain */

    main_domain?: string | undefined;

    
    /** rank of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
url_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    url_rank?: number | undefined;

    
    /** backlink spam score of the url
this value is based on backlink data for the given URL from DataForSEO Backlink Index;
learn more about how the metric is calculated on this help center page */

    spam_score?: number | undefined;

    
    /** rank of the domain
this value is based on backlink data for the given domain from DataForSEO Backlink Index;
domain_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    domain_rank?: number | undefined;

    
    /** date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00 */

    fetch_time?: string | undefined;

    
    /** country code of the domain registration
to obtain a full list of available countries, refer to the Locations endpoint */

    country?: string | undefined;

    
    /** main language of the domain
to obtain a full list of available languages, refer to the Languages endpoint */

    language?: string | undefined;

    
    /** citation prominence score
this value is based on url_rank, domain_rank, keyword presence in title, main_title, url, snippet
the higher the score, the more value the related citation has */

    score?: number | undefined;

    
    /** contains all relevant page categories
product and service categories relevant for the page
to obtain a full list of available categories, refer to the Categories endpoint */

    page_category?: number[] | undefined;

    
    /** page types */

    page_types?: string[] | undefined;

    
    /** ratings found on the page
all ratings found on the page based on microdata */

    ratings?: ContentRatingInfo[] | undefined;

    
    /** social media engagement metrics
data on social media interactions associated with the content based on website embeds developed and supported by social media platforms */

    social_metrics?: SocialMetricsInfo[] | undefined;

    
    /** contains data on citations from the given url */

    content_info?: AnalysisContentInfo | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisSearchLiveItem) {

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
            this.type = data["type"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.main_domain = data["main_domain"];
            this.url_rank = data["url_rank"];
            this.spam_score = data["spam_score"];
            this.domain_rank = data["domain_rank"];
            this.fetch_time = data["fetch_time"];
            this.country = data["country"];
            this.language = data["language"];
            this.score = data["score"];
            this.page_category = data["page_category"];
            this.page_types = data["page_types"];
            if (Array.isArray(data["ratings"])) {
                this.ratings = [];
                for (let item of data["ratings"]) {
                    this.ratings.push(ContentRatingInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["social_metrics"])) {
                this.social_metrics = [];
                for (let item of data["social_metrics"]) {
                    this.social_metrics.push(SocialMetricsInfo.fromJS(item));
                }
            }
            this.content_info = data["content_info"] ? AnalysisContentInfo.fromJS(data["content_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ContentAnalysisSearchLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisSearchLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["main_domain"] = this.main_domain;
        data["url_rank"] = this.url_rank;
        data["spam_score"] = this.spam_score;
        data["domain_rank"] = this.domain_rank;
        data["fetch_time"] = this.fetch_time;
        data["country"] = this.country;
        data["language"] = this.language;
        data["score"] = this.score;
        data["page_category"] = this.page_category;
        data["page_types"] = this.page_types;
        data["ratings"] = null;
        if (Array.isArray(this.ratings)) {
            data["ratings"] = [];
            for (let item of this.ratings) {
                if (item && typeof item.toJSON === "function") {
                    data["ratings"].push(item?.toJSON());
                }
            }
        }
        data["social_metrics"] = null;
        if (Array.isArray(this.social_metrics)) {
            data["social_metrics"] = [];
            for (let item of this.social_metrics) {
                if (item && typeof item.toJSON === "function") {
                    data["social_metrics"].push(item?.toJSON());
                }
            }
        }
        data["content_info"] = this.content_info ? AnalysisContentInfo.fromJS(this.content_info)?.toJSON() : <any>undefined;
        return data;
    }
}