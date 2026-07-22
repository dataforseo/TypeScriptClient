import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";
import { SearchVolumeTrend, ISearchVolumeTrend } from "./SearchVolumeTrend";


export interface IKeywordInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        last_updated_time?: string | undefined
        
        /** competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive) */
        competition?: number | undefined
        
        /** competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article */
        competition_level?: string | undefined
        
        /** cost-per-click
represents the average cost per click (USD) historically paid for the keyword */
        cpc?: number | undefined
        
        /** average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com */
        search_volume?: number | undefined
        
        /** minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request */
        low_top_of_page_bid?: number | undefined
        
        /** maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request */
        high_top_of_page_bid?: number | undefined
        
        /** product and service categories
you can download the full list of possible categories */
        categories?: number[] | undefined
        
        /** monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations */
        monthly_searches?: MonthlySearchesInfo[] | undefined
        
        /** search volume trend changes
represents search volume change in percent compared to the previous period */
        search_volume_trend?: SearchVolumeTrend | undefined

    [key: string]: any;

    }

export class KeywordInfo  implements IKeywordInfo {

    
    /** search engine type */

    se_type?: string | undefined;

    
    /** date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    last_updated_time?: string | undefined;

    
    /** competition
represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive) */

    competition?: number | undefined;

    
    /** competition level
represents the relative level of competition associated with the given keyword in paid SERP only;
possible values: LOW, MEDIUM, HIGH
if competition level is unknown, the value is null;
learn more about the metric in this help center article */

    competition_level?: string | undefined;

    
    /** cost-per-click
represents the average cost per click (USD) historically paid for the keyword */

    cpc?: number | undefined;

    
    /** average monthly search volume rate
represents the (approximate) number of searches for the given keyword idea on google.com */

    search_volume?: number | undefined;

    
    /** minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request */

    low_top_of_page_bid?: number | undefined;

    
    /** maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers)
the value may differ depending on the location specified in a POST request */

    high_top_of_page_bid?: number | undefined;

    
    /** product and service categories
you can download the full list of possible categories */

    categories?: number[] | undefined;

    
    /** monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations */

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    
    /** search volume trend changes
represents search volume change in percent compared to the previous period */

    search_volume_trend?: SearchVolumeTrend | undefined;

    [key: string]: any;


    constructor(data?: IKeywordInfo) {

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
            this.last_updated_time = data["last_updated_time"];
            this.competition = data["competition"];
            this.competition_level = data["competition_level"];
            this.cpc = data["cpc"];
            this.search_volume = data["search_volume"];
            this.low_top_of_page_bid = data["low_top_of_page_bid"];
            this.high_top_of_page_bid = data["high_top_of_page_bid"];
            this.categories = data["categories"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearchesInfo.fromJS(item));
                }
            }
            this.search_volume_trend = data["search_volume_trend"] ? SearchVolumeTrend.fromJS(data["search_volume_trend"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KeywordInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["last_updated_time"] = this.last_updated_time;
        data["competition"] = this.competition;
        data["competition_level"] = this.competition_level;
        data["cpc"] = this.cpc;
        data["search_volume"] = this.search_volume;
        data["low_top_of_page_bid"] = this.low_top_of_page_bid;
        data["high_top_of_page_bid"] = this.high_top_of_page_bid;
        data["categories"] = this.categories;
        data["monthly_searches"] = null;
        if (Array.isArray(this.monthly_searches)) {
            data["monthly_searches"] = [];
            for (let item of this.monthly_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["monthly_searches"].push(item?.toJSON());
                }
            }
        }
        data["search_volume_trend"] = this.search_volume_trend ? SearchVolumeTrend.fromJS(this.search_volume_trend)?.toJSON() : <any>undefined;
        return data;
    }
}