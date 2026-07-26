export interface IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo   {
        
        /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; each keyword should be at least 3 characters long; the keywords will be converted to lowercase format; Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed to learn more about which symbols and characters can be used, please refer to this article learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of the location required field if you don’t specify location_code Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: United Kingdom */
        location_name?: string | undefined
        
        /** location code required field if you don’t specify location_name Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: 2840 */
        location_code?: number | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo  implements IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo {

    
    /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; each keyword should be at least 3 characters long; the keywords will be converted to lowercase format; Note: certain symbols and characters (e.g., UTF symbols, emojis) are not allowed to learn more about which symbols and characters can be used, please refer to this article learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** full name of the location required field if you don’t specify location_code Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: United Kingdom */

    location_name?: string | undefined;

    
    /** location code required field if you don’t specify location_name Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/clickstream_data/locations_and_languages example: 2840 */

    location_code?: number | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo) {

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
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataClickstreamDataBulkSearchVolumeLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["tag"] = this.tag;
        return data;
    }
}