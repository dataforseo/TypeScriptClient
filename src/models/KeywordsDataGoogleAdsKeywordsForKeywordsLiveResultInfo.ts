import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";


export interface IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo   {
        
        /** *keyword in a POST array* */
        keyword?: string | undefined
        
        spell?: string | undefined
        
        /** *location code in a POST array* if there is no data, the value is_`null`n */
        location_code?: number | undefined
        
        /** *language code in a POST array* if there is no data, the value is_`null`n */
        language_code?: string | undefined
        
        /** *include Google search partners* the value you specified when setting the task if `true`, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search; if `false`, the results are returned for Google search sites only */
        search_partners?: boolean | undefined
        
        /** *competition* represents the relative level of competition associated with the given keyword in paid SERP only possible values: `LOW`, `MEDIUM`, `HIGH` if competition level is unknown, the value is `null`; learn more about the metric in [this help center article](https://dataforseo.com/help-center/what-is-competition) */
        competition?: string | undefined
        
        /** *competition index* the competition index for the query indicating how competitive ad placement is for the keyword can take values from 0 to 100 the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available if not enough data is available, the value is `null`; learn more about the metric in [this help center article](https://dataforseo.com/help-center/what-is-competition) */
        competition_index?: number | undefined
        
        /** *monthly average search volume rate* represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting if there is no data, the value is `null` */
        search_volume?: number | undefined
        
        /** *minimum bid for the ad to be displayed at the top of the first page* indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers) the value may differ depending on the location specified in a POST request */
        low_top_of_page_bid?: number | undefined
        
        /** *maximum bid for the ad to be displayed at the top of the first page* indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers) the value may differ depending on the location specified in a POST request */
        high_top_of_page_bid?: number | undefined
        
        /** *cost per click* indicates the amount paid (USD) for each click on the ad displayed for a given keyword */
        cpc?: number | undefined
        
        /** *monthly searches* represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations if there is no data, the value is `null` */
        monthly_searches?: MonthlySearchesInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo  implements IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo {

    
    /** *keyword in a POST array* */

    keyword?: string | undefined;

    spell?: string | undefined;

    
    /** *location code in a POST array* if there is no data, the value is_`null`n */

    location_code?: number | undefined;

    
    /** *language code in a POST array* if there is no data, the value is_`null`n */

    language_code?: string | undefined;

    
    /** *include Google search partners* the value you specified when setting the task if `true`, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search; if `false`, the results are returned for Google search sites only */

    search_partners?: boolean | undefined;

    
    /** *competition* represents the relative level of competition associated with the given keyword in paid SERP only possible values: `LOW`, `MEDIUM`, `HIGH` if competition level is unknown, the value is `null`; learn more about the metric in [this help center article](https://dataforseo.com/help-center/what-is-competition) */

    competition?: string | undefined;

    
    /** *competition index* the competition index for the query indicating how competitive ad placement is for the keyword can take values from 0 to 100 the level of competition from 0 to 100 is determined by the number of ad slots filled divided by the total number of ad slots available if not enough data is available, the value is `null`; learn more about the metric in [this help center article](https://dataforseo.com/help-center/what-is-competition) */

    competition_index?: number | undefined;

    
    /** *monthly average search volume rate* represents the (approximate) number of searches for the given keyword idea either on google.com or google.com and partners, depending on the user’s targeting if there is no data, the value is `null` */

    search_volume?: number | undefined;

    
    /** *minimum bid for the ad to be displayed at the top of the first page* indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers) the value may differ depending on the location specified in a POST request */

    low_top_of_page_bid?: number | undefined;

    
    /** *maximum bid for the ad to be displayed at the top of the first page* indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers) the value may differ depending on the location specified in a POST request */

    high_top_of_page_bid?: number | undefined;

    
    /** *cost per click* indicates the amount paid (USD) for each click on the ad displayed for a given keyword */

    cpc?: number | undefined;

    
    /** *monthly searches* represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations if there is no data, the value is `null` */

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo) {

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
            this.keyword = data["keyword"];
            this.spell = data["spell"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.search_partners = data["search_partners"];
            this.competition = data["competition"];
            this.competition_index = data["competition_index"];
            this.search_volume = data["search_volume"];
            this.low_top_of_page_bid = data["low_top_of_page_bid"];
            this.high_top_of_page_bid = data["high_top_of_page_bid"];
            this.cpc = data["cpc"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearchesInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["spell"] = this.spell;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["search_partners"] = this.search_partners;
        data["competition"] = this.competition;
        data["competition_index"] = this.competition_index;
        data["search_volume"] = this.search_volume;
        data["low_top_of_page_bid"] = this.low_top_of_page_bid;
        data["high_top_of_page_bid"] = this.high_top_of_page_bid;
        data["cpc"] = this.cpc;
        data["monthly_searches"] = null;
        if (Array.isArray(this.monthly_searches)) {
            data["monthly_searches"] = [];
            for (let item of this.monthly_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["monthly_searches"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}