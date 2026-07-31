export interface IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo   {
        
        /** *domain* **required field** the domain name of the target website the domain should be specified without `https://` and `www.` */
        target?: string | undefined
        
        /** *full name of the location* optional field if you use this field, you don't need to specify `location_code` you can receive the list of available locations with their `location_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `United Kingdom` */
        location_name?: string | undefined
        
        /** *location code* optional field if you use this field, you don't need to specify `location_name` you can receive the list of available locations with their `location_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `2840` */
        location_code?: number | undefined
        
        /** *full name of the language* optional field if you use this field, you don't need to specify `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `English` */
        language_name?: string | undefined
        
        /** *language code* optional field if you use this field, you don't need to specify `language_name` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `en` */
        language_code?: string | undefined
        
        /** *ignore highly similar keywords* optional field if set to_`true`, all highly similar keywords will be excluded from the ranking and traffic calculations, the results will be based on data for main keywords from groups of synonyms default value: `false`n */
        ignore_synonyms?: boolean | undefined
        
        /** *the maximum number of returned results for domain* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *offset in the results array of returned items* optional field default value: `0` if you specify the `10` value, the first ten `items` in the results array will be omitted and the data will be provided for the successive items */
        offset?: number | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo  implements IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo {

    
    /** *domain* **required field** the domain name of the target website the domain should be specified without `https://` and `www.` */

    target?: string | undefined;

    
    /** *full name of the location* optional field if you use this field, you don't need to specify `location_code` you can receive the list of available locations with their `location_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `United Kingdom` */

    location_name?: string | undefined;

    
    /** *location code* optional field if you use this field, you don't need to specify `location_name` you can receive the list of available locations with their `location_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `2840` */

    location_code?: number | undefined;

    
    /** *full name of the language* optional field if you use this field, you don't need to specify `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `English` */

    language_name?: string | undefined;

    
    /** *language code* optional field if you use this field, you don't need to specify `language_name` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `en` */

    language_code?: string | undefined;

    
    /** *ignore highly similar keywords* optional field if set to_`true`, all highly similar keywords will be excluded from the ranking and traffic calculations, the results will be based on data for main keywords from groups of synonyms default value: `false`n */

    ignore_synonyms?: boolean | undefined;

    
    /** *the maximum number of returned results for domain* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *offset in the results array of returned items* optional field default value: `0` if you specify the `10` value, the first ten `items` in the results array will be omitted and the data will be provided for the successive items */

    offset?: number | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainRankOverviewLiveRequestInfo) {

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
            this.target = data["target"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainRankOverviewLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["tag"] = this.tag;
        return data;
    }
}