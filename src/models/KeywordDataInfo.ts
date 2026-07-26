import { KeywordInfo, IKeywordInfo } from "./KeywordInfo";
import { KeywordInfoNormalizedWithInfo, IKeywordInfoNormalizedWithInfo } from "./KeywordInfoNormalizedWithInfo";
import { ClickstreamKeywordInfo, IClickstreamKeywordInfo } from "./ClickstreamKeywordInfo";
import { KeywordProperties, IKeywordProperties } from "./KeywordProperties";
import { SerpInfo, ISerpInfo } from "./SerpInfo";
import { AvgBacklinksInfo, IAvgBacklinksInfo } from "./AvgBacklinksInfo";
import { SearchIntentInfo, ISearchIntentInfo } from "./SearchIntentInfo";


export interface IKeywordDataInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** returned keyword idea */
        keyword?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** keyword data for the returned keyword idea */
        keyword_info?: KeywordInfo | undefined
        
        /** contains keyword search volume normalized with Bing search volume */
        keyword_info_normalized_with_bing?: KeywordInfoNormalizedWithInfo | undefined
        
        /** contains keyword search volume normalized with clickstream data */
        keyword_info_normalized_with_clickstream?: KeywordInfoNormalizedWithInfo | undefined
        
        /** clickstream data for the returned keyword to retrieve results for this field, the parameter include_clickstream_data must be set to true */
        clickstream_keyword_info?: ClickstreamKeywordInfo | undefined
        
        /** additional information about the keyword */
        keyword_properties?: KeywordProperties | undefined
        
        /** SERP data the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database */
        serp_info?: SerpInfo | undefined
        
        /** backlink data for the returned keyword this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 webpages ranking organically for the keyword */
        avg_backlinks_info?: AvgBacklinksInfo | undefined
        
        /** search intent info for the returned keyword learn about search intent in this help center article */
        search_intent_info?: SearchIntentInfo | undefined

    [key: string]: any;

    }

export class KeywordDataInfo  implements IKeywordDataInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** returned keyword idea */

    keyword?: string | undefined;

    
    /** location code in a POST array */

    location_code?: number | undefined;

    
    /** language code in a POST array */

    language_code?: string | undefined;

    
    /** keyword data for the returned keyword idea */

    keyword_info?: KeywordInfo | undefined;

    
    /** contains keyword search volume normalized with Bing search volume */

    keyword_info_normalized_with_bing?: KeywordInfoNormalizedWithInfo | undefined;

    
    /** contains keyword search volume normalized with clickstream data */

    keyword_info_normalized_with_clickstream?: KeywordInfoNormalizedWithInfo | undefined;

    
    /** clickstream data for the returned keyword to retrieve results for this field, the parameter include_clickstream_data must be set to true */

    clickstream_keyword_info?: ClickstreamKeywordInfo | undefined;

    
    /** additional information about the keyword */

    keyword_properties?: KeywordProperties | undefined;

    
    /** SERP data the value will be null if you didn’t set the field include_serp_info to true in the POST array or if there is no SERP data for this keyword in our database */

    serp_info?: SerpInfo | undefined;

    
    /** backlink data for the returned keyword this object provides the average number of backlinks, referring pages and domains, as well as the average rank values among the top-10 webpages ranking organically for the keyword */

    avg_backlinks_info?: AvgBacklinksInfo | undefined;

    
    /** search intent info for the returned keyword learn about search intent in this help center article */

    search_intent_info?: SearchIntentInfo | undefined;

    [key: string]: any;


    constructor(data?: IKeywordDataInfo) {

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
            this.se_type = data["se_type"];
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.keyword_info = data["keyword_info"] ? KeywordInfo.fromJS(data["keyword_info"]) : <any>undefined;
            this.keyword_info_normalized_with_bing = data["keyword_info_normalized_with_bing"] ? KeywordInfoNormalizedWithInfo.fromJS(data["keyword_info_normalized_with_bing"]) : <any>undefined;
            this.keyword_info_normalized_with_clickstream = data["keyword_info_normalized_with_clickstream"] ? KeywordInfoNormalizedWithInfo.fromJS(data["keyword_info_normalized_with_clickstream"]) : <any>undefined;
            this.clickstream_keyword_info = data["clickstream_keyword_info"] ? ClickstreamKeywordInfo.fromJS(data["clickstream_keyword_info"]) : <any>undefined;
            this.keyword_properties = data["keyword_properties"] ? KeywordProperties.fromJS(data["keyword_properties"]) : <any>undefined;
            this.serp_info = data["serp_info"] ? SerpInfo.fromJS(data["serp_info"]) : <any>undefined;
            this.avg_backlinks_info = data["avg_backlinks_info"] ? AvgBacklinksInfo.fromJS(data["avg_backlinks_info"]) : <any>undefined;
            this.search_intent_info = data["search_intent_info"] ? SearchIntentInfo.fromJS(data["search_intent_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KeywordDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["keyword_info"] = this.keyword_info ? KeywordInfo.fromJS(this.keyword_info)?.toJSON() : <any>undefined;
        data["keyword_info_normalized_with_bing"] = this.keyword_info_normalized_with_bing ? KeywordInfoNormalizedWithInfo.fromJS(this.keyword_info_normalized_with_bing)?.toJSON() : <any>undefined;
        data["keyword_info_normalized_with_clickstream"] = this.keyword_info_normalized_with_clickstream ? KeywordInfoNormalizedWithInfo.fromJS(this.keyword_info_normalized_with_clickstream)?.toJSON() : <any>undefined;
        data["clickstream_keyword_info"] = this.clickstream_keyword_info ? ClickstreamKeywordInfo.fromJS(this.clickstream_keyword_info)?.toJSON() : <any>undefined;
        data["keyword_properties"] = this.keyword_properties ? KeywordProperties.fromJS(this.keyword_properties)?.toJSON() : <any>undefined;
        data["serp_info"] = this.serp_info ? SerpInfo.fromJS(this.serp_info)?.toJSON() : <any>undefined;
        data["avg_backlinks_info"] = this.avg_backlinks_info ? AvgBacklinksInfo.fromJS(this.avg_backlinks_info)?.toJSON() : <any>undefined;
        data["search_intent_info"] = this.search_intent_info ? SearchIntentInfo.fromJS(this.search_intent_info)?.toJSON() : <any>undefined;
        return data;
    }
}