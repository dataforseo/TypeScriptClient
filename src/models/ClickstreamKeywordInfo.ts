import { MonthlySearchesInfo, IMonthlySearchesInfo } from "./MonthlySearchesInfo";


export interface IClickstreamKeywordInfo   {
        
        /** average monthly search volume rate represents the (approximate) number of searches for the given keyword idea on google.com */
        search_volume?: number | undefined
        
        /** date and time when keyword data was updated in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */
        last_updated_time?: string | undefined
        
        /** distribution of estimated clickstream-based metrics by gender learn more about how the metric is calculated in this help center article */
        gender_distribution?: { [key: string]: number; } | undefined
        
        /** distribution of clickstream-based metrics by age learn more about how the metric is calculated in this help center article */
        age_distribution?: { [key: string]: number; } | undefined
        
        /** monthly searches represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations */
        monthly_searches?: MonthlySearchesInfo[] | undefined

    [key: string]: any;

    }

export class ClickstreamKeywordInfo  implements IClickstreamKeywordInfo {

    
    /** average monthly search volume rate represents the (approximate) number of searches for the given keyword idea on google.com */

    search_volume?: number | undefined;

    
    /** date and time when keyword data was updated in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00” example: 2019-11-15 12:57:46 +00:00 */

    last_updated_time?: string | undefined;

    
    /** distribution of estimated clickstream-based metrics by gender learn more about how the metric is calculated in this help center article */

    gender_distribution?: { [key: string]: number; } | undefined;

    
    /** distribution of clickstream-based metrics by age learn more about how the metric is calculated in this help center article */

    age_distribution?: { [key: string]: number; } | undefined;

    
    /** monthly searches represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations */

    monthly_searches?: MonthlySearchesInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IClickstreamKeywordInfo) {

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
            this.search_volume = data["search_volume"];
            this.last_updated_time = data["last_updated_time"];
            this.gender_distribution = data["gender_distribution"];
            this.age_distribution = data["age_distribution"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearchesInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ClickstreamKeywordInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ClickstreamKeywordInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search_volume"] = this.search_volume;
        data["last_updated_time"] = this.last_updated_time;
        data["gender_distribution"] = this.gender_distribution;
        data["age_distribution"] = this.age_distribution;
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