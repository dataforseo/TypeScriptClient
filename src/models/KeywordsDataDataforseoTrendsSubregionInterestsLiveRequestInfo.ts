export interface IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo   {
        
        /** keywords required field the maximum number of keywords you can specify: 5 avoid symbols and special characters (e.g., UTF symbols, emojis); specifying non-Latin characters, you’ll get data for the countries where they are used learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of search engine location optional field if you don’t use this field, you will recieve global results if you use this field, you don’t need to specify location_code you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations note that the data will be provided for the country the specified location_name belongs to; example: United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code optional field if you don’t use this field, you will recieve global results if you use this field, you don’t need to specify location_name you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations note that the data will be provided for the country the specified location_code belongs to; example: 2840 */
        location_code?: number | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** starting date of the time range optional field if you don’t specify this field, the current day and month of the preceding year will be used by default minimal value for the web type: 2004-01-01 minimal value for other types: 2008-01-01 date format: 'yyyy-mm-dd' example: '2019-01-15' */
        date_from?: string | undefined
        
        /** ending date of the time range optional field if you don’t specify this field, the today’s date will be used by default date format: 'yyyy-mm-dd' example: '2019-01-15' */
        date_to?: string | undefined
        
        /** preset time ranges optional field if you specify date_from or date_to parameters, this field will be ignored when setting a task possible values for all type parameters: past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years */
        time_range?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo  implements IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo {

    
    /** keywords required field the maximum number of keywords you can specify: 5 avoid symbols and special characters (e.g., UTF symbols, emojis); specifying non-Latin characters, you’ll get data for the countries where they are used learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** full name of search engine location optional field if you don’t use this field, you will recieve global results if you use this field, you don’t need to specify location_code you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations note that the data will be provided for the country the specified location_name belongs to; example: United Kingdom */

    location_name?: string | undefined;

    
    /** search engine location code optional field if you don’t use this field, you will recieve global results if you use this field, you don’t need to specify location_name you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations note that the data will be provided for the country the specified location_code belongs to; example: 2840 */

    location_code?: number | undefined;

    
    /** type of element */

    type?: string | undefined;

    
    /** starting date of the time range optional field if you don’t specify this field, the current day and month of the preceding year will be used by default minimal value for the web type: 2004-01-01 minimal value for other types: 2008-01-01 date format: 'yyyy-mm-dd' example: '2019-01-15' */

    date_from?: string | undefined;

    
    /** ending date of the time range optional field if you don’t specify this field, the today’s date will be used by default date format: 'yyyy-mm-dd' example: '2019-01-15' */

    date_to?: string | undefined;

    
    /** preset time ranges optional field if you specify date_from or date_to parameters, this field will be ignored when setting a task possible values for all type parameters: past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years */

    time_range?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo) {

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
            this.keywords = data["keywords"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.type = data["type"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.time_range = data["time_range"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataDataforseoTrendsSubregionInterestsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["type"] = this.type;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["time_range"] = this.time_range;
        data["tag"] = this.tag;
        return data;
    }
}