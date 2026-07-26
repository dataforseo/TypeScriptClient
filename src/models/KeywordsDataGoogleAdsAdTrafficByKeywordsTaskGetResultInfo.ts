export interface IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo   {
        
        /** keyword in a POST array metrics are provided for all the keywords specified in the POST array */
        keyword?: string | undefined
        
        /** location code in a POST array if there is no data, then the value is null */
        location_code?: number | undefined
        
        /** language code in a POST array if there is no data, then the value is null */
        language_code?: string | undefined
        
        /** forecasting date interval in a POST array */
        date_interval?: string | undefined
        
        /** include Google search partners the value is always false */
        search_partners?: boolean | undefined
        
        /** the maximum custom bid the bid you have specified when setting the task represents the price you are willing to pay for an ad the higher value you have specified, the higher metrics and cost you receive in response learn more in this help center article */
        bid?: number | undefined
        
        /** keywords match-type can take the following values: exact, broad, phrase */
        match?: string | undefined
        
        /** projected number of ad impressions number of impressions an ad is projected to get within the specified time period Note: parameter deprecated, the value is always null */
        impressions?: number | undefined
        
        /** projected clickthrough rate (CTR) of the advertisement number of clicks an ad is projected to receive divided by the number of ad impressions; Note: parameter deprecated, the value is always null */
        ctr?: number | undefined
        
        /** the average cost-per-click value represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data; if there is no data, then the value is null */
        average_cpc?: number | undefined
        
        /** charge for an ad amount that will be charged for running an ad within the specified time period if there is no data, then the value is null */
        cost?: number | undefined
        
        /** number of clicks on an ad number of clicks an ad is projected to get within the specified time period if there is no data, then the value is null */
        clicks?: number | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo  implements IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo {

    
    /** keyword in a POST array metrics are provided for all the keywords specified in the POST array */

    keyword?: string | undefined;

    
    /** location code in a POST array if there is no data, then the value is null */

    location_code?: number | undefined;

    
    /** language code in a POST array if there is no data, then the value is null */

    language_code?: string | undefined;

    
    /** forecasting date interval in a POST array */

    date_interval?: string | undefined;

    
    /** include Google search partners the value is always false */

    search_partners?: boolean | undefined;

    
    /** the maximum custom bid the bid you have specified when setting the task represents the price you are willing to pay for an ad the higher value you have specified, the higher metrics and cost you receive in response learn more in this help center article */

    bid?: number | undefined;

    
    /** keywords match-type can take the following values: exact, broad, phrase */

    match?: string | undefined;

    
    /** projected number of ad impressions number of impressions an ad is projected to get within the specified time period Note: parameter deprecated, the value is always null */

    impressions?: number | undefined;

    
    /** projected clickthrough rate (CTR) of the advertisement number of clicks an ad is projected to receive divided by the number of ad impressions; Note: parameter deprecated, the value is always null */

    ctr?: number | undefined;

    
    /** the average cost-per-click value represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data; if there is no data, then the value is null */

    average_cpc?: number | undefined;

    
    /** charge for an ad amount that will be charged for running an ad within the specified time period if there is no data, then the value is null */

    cost?: number | undefined;

    
    /** number of clicks on an ad number of clicks an ad is projected to get within the specified time period if there is no data, then the value is null */

    clicks?: number | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo) {

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
            this.date_interval = data["date_interval"];
            this.search_partners = data["search_partners"];
            this.bid = data["bid"];
            this.match = data["match"];
            this.impressions = data["impressions"];
            this.ctr = data["ctr"];
            this.average_cpc = data["average_cpc"];
            this.cost = data["cost"];
            this.clicks = data["clicks"];
        }
    }

    static fromJS(data: any): KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["date_interval"] = this.date_interval;
        data["search_partners"] = this.search_partners;
        data["bid"] = this.bid;
        data["match"] = this.match;
        data["impressions"] = this.impressions;
        data["ctr"] = this.ctr;
        data["average_cpc"] = this.average_cpc;
        data["cost"] = this.cost;
        data["clicks"] = this.clicks;
        return data;
    }
}