export interface IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo   {
        
        /** product IDs to compare required field product IDs to receive ranking data for; the maximum number of ASINs you can specify in this array is 1000; you can receive the asin parameter by making a separate request to the Amazon Products endpoint Note: all letters in ASIN code must be specified in uppercase format; example: B01LW2SL7R */
        asins?: string[] | undefined
        
        /** full name of the location required field if don’t specify location_code you can receive the list of available locations with their location_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only; example: United States */
        location_name?: string | undefined
        
        /** location code required field if don’t specify location_name you can receive the list of available locations with their location_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only; example: 2840 */
        location_code?: number | undefined
        
        /** full name of the language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: English */
        language_name?: string | undefined
        
        /** language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: en */
        language_code?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsAmazonProductRankOverviewLiveRequestInfo  implements IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo {

    
    /** product IDs to compare required field product IDs to receive ranking data for; the maximum number of ASINs you can specify in this array is 1000; you can receive the asin parameter by making a separate request to the Amazon Products endpoint Note: all letters in ASIN code must be specified in uppercase format; example: B01LW2SL7R */

    asins?: string[] | undefined;

    
    /** full name of the location required field if don’t specify location_code you can receive the list of available locations with their location_name by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only; example: United States */

    location_name?: string | undefined;

    
    /** location code required field if don’t specify location_name you can receive the list of available locations with their location_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages; Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only; example: 2840 */

    location_code?: number | undefined;

    
    /** full name of the language required field if don’t specify language_code you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: English */

    language_name?: string | undefined;

    
    /** language code required field if don’t specify language_name you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: en */

    language_code?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonProductRankOverviewLiveRequestInfo) {

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
            this.asins = data["asins"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonProductRankOverviewLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonProductRankOverviewLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asins"] = this.asins;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["tag"] = this.tag;
        return data;
    }
}