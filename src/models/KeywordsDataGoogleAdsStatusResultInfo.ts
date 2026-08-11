export interface IKeywordsDataGoogleAdsStatusResultInfo   {
        
        /** *indicates whether Google updated keyword data for the previous month* generally, Google updates keyword data in the middle of the month if the value is `true`, Google currently provides up-to-date data for the previous month if the value is `false`, we are not able to provide data for the previous month */
        actual_data?: boolean | undefined
        
        /** *date of the latest update of Google Ads data* indicates the latest date when Google updated search volume, CPC, and other keyword metrics example: `2020-05-15` */
        date_update?: string | undefined
        
        /** *the latest year for which search volume data is available* */
        last_year_in_monthly_searches?: number | undefined
        
        /** *the latest month for which search volume data is available* */
        last_month_in_monthly_searches?: number | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleAdsStatusResultInfo  implements IKeywordsDataGoogleAdsStatusResultInfo {

    
    /** *indicates whether Google updated keyword data for the previous month* generally, Google updates keyword data in the middle of the month if the value is `true`, Google currently provides up-to-date data for the previous month if the value is `false`, we are not able to provide data for the previous month */

    actual_data?: boolean | undefined;

    
    /** *date of the latest update of Google Ads data* indicates the latest date when Google updated search volume, CPC, and other keyword metrics example: `2020-05-15` */

    date_update?: string | undefined;

    
    /** *the latest year for which search volume data is available* */

    last_year_in_monthly_searches?: number | undefined;

    
    /** *the latest month for which search volume data is available* */

    last_month_in_monthly_searches?: number | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleAdsStatusResultInfo) {

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
            this.actual_data = data["actual_data"];
            this.date_update = data["date_update"];
            this.last_year_in_monthly_searches = data["last_year_in_monthly_searches"];
            this.last_month_in_monthly_searches = data["last_month_in_monthly_searches"];
        }
    }

    static fromJS(data: any): KeywordsDataGoogleAdsStatusResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleAdsStatusResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["actual_data"] = this.actual_data;
        data["date_update"] = this.date_update;
        data["last_year_in_monthly_searches"] = this.last_year_in_monthly_searches;
        data["last_month_in_monthly_searches"] = this.last_month_in_monthly_searches;
        return data;
    }
}