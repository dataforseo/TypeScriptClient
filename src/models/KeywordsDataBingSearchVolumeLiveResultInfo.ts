import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";


export interface IKeywordsDataBingSearchVolumeLiveResultInfo   {
        
        /** *keyword in a POST array* */
        keyword?: string | undefined
        
        /** *location code in a POST array* if there is no data, then the value is_`null`n */
        location_code?: number | undefined
        
        /** *language code in a POST array* if there is no data, then the value is_`null`n */
        language_code?: string | undefined
        
        /** *indicates whether data from partner networks included in the response* */
        search_partners?: boolean | undefined
        
        /** *device type in a POST array* if there is no data, then the value is_`null`n */
        device?: string | undefined
        
        /** *competition* represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data. Possible values: `0.1`, `0.5`,`0.9``0.1` - low competition, `0.5` - medium competition, `0.9` - high competition; if there is no data the value is `null` */
        competition?: number | undefined
        
        /** *cost-per-click* represents the average cost per click (USD) historically paid for the keyword. if there is no data then the value is_`null`n */
        cpc?: number | undefined
        
        /** *monthly average search volume rate*represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting; search volume is rounded to the nearest tens; if there is no data, the value is_`null`n */
        search_volume?: number | undefined
        
        /** *product and service categories* our API doesn't return categories for this endpoint: the parameter will always equal `null` */
        categories?: string[] | undefined
        
        /** *monthly searches* represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations if there is no data then the value is_`null`n */
        monthly_searches?: MonthlySearchesInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeLiveResultInfo  implements IKeywordsDataBingSearchVolumeLiveResultInfo {

    
    /** *keyword in a POST array* */

    keyword?: string | undefined;

    
    /** *location code in a POST array* if there is no data, then the value is_`null`n */

    location_code?: number | undefined;

    
    /** *language code in a POST array* if there is no data, then the value is_`null`n */

    language_code?: string | undefined;

    
    /** *indicates whether data from partner networks included in the response* */

    search_partners?: boolean | undefined;

    
    /** *device type in a POST array* if there is no data, then the value is_`null`n */

    device?: string | undefined;

    
    /** *competition* represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data. Possible values: `0.1`, `0.5`,`0.9``0.1` - low competition, `0.5` - medium competition, `0.9` - high competition; if there is no data the value is `null` */

    competition?: number | undefined;

    
    /** *cost-per-click* represents the average cost per click (USD) historically paid for the keyword. if there is no data then the value is_`null`n */

    cpc?: number | undefined;

    
    /** *monthly average search volume rate*represents either the (approximate) number of searches for the given keyword idea on bing search engine depending on the user’s targeting; search volume is rounded to the nearest tens; if there is no data, the value is_`null`n */

    search_volume?: number | undefined;

    
    /** *product and service categories* our API doesn't return categories for this endpoint: the parameter will always equal `null` */

    categories?: string[] | undefined;

    
    /** *monthly searches* represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations if there is no data then the value is_`null`n */

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeLiveResultInfo) {

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
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.search_partners = data["search_partners"];
            this.device = data["device"];
            this.competition = data["competition"];
            this.cpc = data["cpc"];
            this.search_volume = data["search_volume"];
            this.categories = data["categories"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearchesInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["search_partners"] = this.search_partners;
        data["device"] = this.device;
        data["competition"] = this.competition;
        data["cpc"] = this.cpc;
        data["search_volume"] = this.search_volume;
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
        return data;
    }
}