export interface IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo   {
        
        /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000 the keywords will be converted to lowercase format Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed to learn more about which symbols and characters can be used, please refer to this article learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of search engine location required field if you don’t specify location_code  you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: United Kingdom */
        location_name?: string | undefined
        
        /** search engine location code required field if you don’t specify location_name if you use this field, you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: 2826 */
        location_code?: number | undefined
        
        /** full name of search engine language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: English */
        language_name?: string | undefined
        
        /** search engine language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: en */
        language_code?: string | undefined
        
        /** use clickstream data to provide results optional field if set to true, you will get DataForSEO search volume values based on clickstream data; if set to false, Bing search volume data will be used to calculate DataForSEO search volume; default value: true; Note: Bing search volume is available for locations provided in Bing Search Volume History Locations and Bing Ads Locations endpoints; search volume values for any other location are calculated based on clickstream data even if you set this parameter to false */
        use_clickstream?: boolean | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo  implements IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo {

    
    /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000 the keywords will be converted to lowercase format Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed to learn more about which symbols and characters can be used, please refer to this article learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** full name of search engine location required field if you don’t specify location_code  you can receive the list of available locations with location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: United Kingdom */

    location_name?: string | undefined;

    
    /** search engine location code required field if you don’t specify location_name if you use this field, you can receive the list of available locations with location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: 2826 */

    location_code?: number | undefined;

    
    /** full name of search engine language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: English */

    language_name?: string | undefined;

    
    /** search engine language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: en */

    language_code?: string | undefined;

    
    /** use clickstream data to provide results optional field if set to true, you will get DataForSEO search volume values based on clickstream data; if set to false, Bing search volume data will be used to calculate DataForSEO search volume; default value: true; Note: Bing search volume is available for locations provided in Bing Search Volume History Locations and Bing Ads Locations endpoints; search volume values for any other location are calculated based on clickstream data even if you set this parameter to false */

    use_clickstream?: boolean | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.use_clickstream = data["use_clickstream"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataDataforseoSearchVolumeLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["use_clickstream"] = this.use_clickstream;
        data["tag"] = this.tag;
        return data;
    }
}