export interface IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo   {
        
        /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; the keywords will be converted to lowercase format learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of the location required field if don’t specify location_code you can receive the list of available locations with their location_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports the following locations and languages only: Australia – 2036, en Austria – 2040, de Canada – 2124, en Egypt – 2818, ar France – 2250, fr Germany – 2276, de India – 2356, en Italy – 2380, it Mexico – 2484, es Netherlands – 2528, nl Saudi Arabia – 2682, ar Singapore – 2702, en Spain – 2724, es United Arab Emirates – 2784, ar United Kingdom – 2826, en United States – 2840, en example: United States */
        location_name?: string | undefined
        
        /** location code required field if don’t specify location_name you can receive the list of available locations with their location_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports these locations and languages only; example: 2840 */
        location_code?: number | undefined
        
        /** full name of the language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports these locations and languages only; example: English */
        language_name?: string | undefined
        
        /** language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports these locations and languages only; example: en */
        language_code?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo  implements IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo {

    
    /** target keywords required field UTF-8 encoding maximum number of keywords you can specify in this array: 1000; the keywords will be converted to lowercase format learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** full name of the location required field if don’t specify location_code you can receive the list of available locations with their location_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports the following locations and languages only: Australia – 2036, en Austria – 2040, de Canada – 2124, en Egypt – 2818, ar France – 2250, fr Germany – 2276, de India – 2356, en Italy – 2380, it Mexico – 2484, es Netherlands – 2528, nl Saudi Arabia – 2682, ar Singapore – 2702, en Spain – 2724, es United Arab Emirates – 2784, ar United Kingdom – 2826, en United States – 2840, en example: United States */

    location_name?: string | undefined;

    
    /** location code required field if don’t specify location_name you can receive the list of available locations with their location_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports these locations and languages only; example: 2840 */

    location_code?: number | undefined;

    
    /** full name of the language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports these locations and languages only; example: English */

    language_name?: string | undefined;

    
    /** language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages Note: this endpoint currently supports these locations and languages only; example: en */

    language_code?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo) {

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
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonBulkSearchVolumeLiveRequestInfo();
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
        data["tag"] = this.tag;
        return data;
    }
}