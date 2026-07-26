export interface IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo   {
        
        /** keywords required field The maximum number of keywords you can specify: 1000 The maximum number of characters for each keyword: 100 the specified keywords will be converted to lowercase, data will be provided in a separate array learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of search engine location required field if you don’t specify location_code or location_coordinate if you use this field, you don’t need to specify location_code or location_coordinate you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages example: London,England,United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code required field if you don’t specify location_name or location_coordinate if you use this field, you don’t need to specify location_name or location_coordinate you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages example: 2840 */
        location_code?: number | undefined
        
        /** GPS coordinates of a location required field if you don’t specify location_name or location_code if you use this field, you don’t need to specify location_name or location_code location_coordinate parameter should be specified in the “latitude,longitude” format the data will be provided for the country the specified coordinates belong to example: 52.6178549,-155.352142 */
        location_coordinate?: string | undefined
        
        /** full name of search engine language required field if you don’t specify language_code if you use this field, you don’t need to specify language_code you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages */
        language_name?: string | undefined
        
        /** search engine language code required field if you don’t specify language_name if you use this field, you don’t need to specify language_name you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages */
        language_code?: string | undefined
        
        /** device types optional field specify this field if you want to get the data for a particular device types possible values: mobile, desktop, tablet, non_smartphones default value:  ['mobile', 'desktop', 'tablet', 'non_smartphones'] */
        device?: string[] | undefined
        
        /** aggregates the returned data to a certain time period optional field specify this field if you want to get the data in monthly, weekly or daily format possible values: monthly, weekly, daily monthly – returns data up to past 24 months weekly – returns data up to past 15 weeks daily – returns data up to past 45 days default value:  monthly */
        period?: string | undefined
        
        /** starting date of the time range optional field minimum value: two years back from today’s date maximum value: one day from today’s date date format: 'yyyy-mm-dd' example: '2020-01-01' Note: we do not recommend using a custom time range Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months if you specify the period parameter: with value weekly, you will get results for the past 15 weeks with value daily, you will get results for the past 45 days */
        date_from?: string | undefined
        
        /** ending date of the time range optional field minimum value: two years back from today’s date; maximum value: one day from today’s date; date format: 'yyyy-mm-dd' example: '2020-03-15' Note: we do not recommend using a custom time range Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months if you specify the period parameter: with value weekly, you will get results for the past 15 weeks with value daily, you will get results for the past 45 days */
        date_to?: string | undefined
        
        /** URL for sending task results optional field once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/postbackscript?id=$id http://your-server.com/postbackscript?id=$id&tag=$tag Note: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */
        postback_url?: string | undefined
        
        /** notification URL of a completed task optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request example: http://your-server.com/pingscript?id=$id http://your-server.com/pingscript?id=$id&tag=$tag Note: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */
        pingback_url?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo  implements IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo {

    
    /** keywords required field The maximum number of keywords you can specify: 1000 The maximum number of characters for each keyword: 100 the specified keywords will be converted to lowercase, data will be provided in a separate array learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** full name of search engine location required field if you don’t specify location_code or location_coordinate if you use this field, you don’t need to specify location_code or location_coordinate you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages example: London,England,United Kingdom */

    location_name?: string | undefined;

    
    /** search engine location code required field if you don’t specify location_name or location_coordinate if you use this field, you don’t need to specify location_name or location_coordinate you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages example: 2840 */

    location_code?: number | undefined;

    
    /** GPS coordinates of a location required field if you don’t specify location_name or location_code if you use this field, you don’t need to specify location_name or location_code location_coordinate parameter should be specified in the “latitude,longitude” format the data will be provided for the country the specified coordinates belong to example: 52.6178549,-155.352142 */

    location_coordinate?: string | undefined;

    
    /** full name of search engine language required field if you don’t specify language_code if you use this field, you don’t need to specify language_code you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages */

    language_name?: string | undefined;

    
    /** search engine language code required field if you don’t specify language_name if you use this field, you don’t need to specify language_name you can receive the list of available languages of the search engines with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/search_volume_history/locations_and_languages */

    language_code?: string | undefined;

    
    /** device types optional field specify this field if you want to get the data for a particular device types possible values: mobile, desktop, tablet, non_smartphones default value:  ['mobile', 'desktop', 'tablet', 'non_smartphones'] */

    device?: string[] | undefined;

    
    /** aggregates the returned data to a certain time period optional field specify this field if you want to get the data in monthly, weekly or daily format possible values: monthly, weekly, daily monthly – returns data up to past 24 months weekly – returns data up to past 15 weeks daily – returns data up to past 45 days default value:  monthly */

    period?: string | undefined;

    
    /** starting date of the time range optional field minimum value: two years back from today’s date maximum value: one day from today’s date date format: 'yyyy-mm-dd' example: '2020-01-01' Note: we do not recommend using a custom time range Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months if you specify the period parameter: with value weekly, you will get results for the past 15 weeks with value daily, you will get results for the past 45 days */

    date_from?: string | undefined;

    
    /** ending date of the time range optional field minimum value: two years back from today’s date; maximum value: one day from today’s date; date format: 'yyyy-mm-dd' example: '2020-03-15' Note: we do not recommend using a custom time range Note 2: if date_from and date_to parameters are not specified, the data will be returned for the past 24 months if you specify the period parameter: with value weekly, you will get results for the past 15 weeks with value daily, you will get results for the past 45 days */

    date_to?: string | undefined;

    
    /** URL for sending task results optional field once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request. example: http://your-server.com/postbackscript?id=$id http://your-server.com/postbackscript?id=$id&tag=$tag Note: special characters in postback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */

    postback_url?: string | undefined;

    
    /** notification URL of a completed task optional field when a task is completed we will notify you by GET request sent to the URL you have specified you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request example: http://your-server.com/pingscript?id=$id http://your-server.com/pingscript?id=$id&tag=$tag Note: special characters in pingback_url will be urlencoded; i.a., the # character will be encoded into %23 learn more on our Help Center */

    pingback_url?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo) {

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
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.period = data["period"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeHistoryTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["period"] = this.period;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        data["tag"] = this.tag;
        return data;
    }
}