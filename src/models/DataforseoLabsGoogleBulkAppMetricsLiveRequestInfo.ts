export interface IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo   {
        
        /** *ids of the app* **required field** IDs of the mobile applications on Google Play; you can find the ID in the URL of every app listed on Google Play; example: in the URL `https://play.google.com/store/apps/details?id=org.telegram.messenger` the id is `org.telegram.messenger`; the maximum number of IDs you can specify in this field is `1000` */
        app_ids?: string[] | undefined
        
        /** *full name of the location* **required field if you don't specify** `location_code` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_name` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `United States` */
        location_name?: string | undefined
        
        /** *location code* **required field if you don't specify** `location_name` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_code` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `2840` */
        location_code?: number | undefined
        
        /** *full name of the language* **required field if you don't specify** `language_code` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only; example: `English` */
        language_name?: string | undefined
        
        /** *language code* **required field if you don't specify** `language_name` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only example: `en` */
        language_code?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo  implements IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo {

    
    /** *ids of the app* **required field** IDs of the mobile applications on Google Play; you can find the ID in the URL of every app listed on Google Play; example: in the URL `https://play.google.com/store/apps/details?id=org.telegram.messenger` the id is `org.telegram.messenger`; the maximum number of IDs you can specify in this field is `1000` */

    app_ids?: string[] | undefined;

    
    /** *full name of the location* **required field if you don't specify** `location_code` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_name` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `United States` */

    location_name?: string | undefined;

    
    /** *location code* **required field if you don't specify** `location_name` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_code` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `2840` */

    location_code?: number | undefined;

    
    /** *full name of the language* **required field if you don't specify** `language_code` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only; example: `English` */

    language_name?: string | undefined;

    
    /** *language code* **required field if you don't specify** `language_name` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only example: `en` */

    language_code?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleBulkAppMetricsLiveRequestInfo) {

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
            this.app_ids = data["app_ids"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleBulkAppMetricsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_ids"] = this.app_ids;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["tag"] = this.tag;
        return data;
    }
}