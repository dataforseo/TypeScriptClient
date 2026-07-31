export interface IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo   {
        
        /** *target domains, subdomains, and webpages* **required field** you can specify domains, subdomains, and webpages in this field; domains and subdomains should be specified without `https://` and `www.`; pages should be specified with absolute URL, including `https://` and `www.`; you can set up to 1000 domains, subdomains or webpages */
        targets?: string[] | undefined
        
        /** *full name of the location* if you use this field, you don't have to specify `location_code` you can receive the list of available locations with their `location_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `United Kingdom` */
        location_name?: string | undefined
        
        /** *location code* if you use this field, you don't have to specify `location_name` you can receive the list of available locations with their `location_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `2840` */
        location_code?: number | undefined
        
        /** *full name of the language* if you use this field, you don’t need to specify `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `English` */
        language_name?: string | undefined
        
        /** *language code* if you use this field, you don’t need to specify `language_name` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `en` */
        language_code?: string | undefined
        
        /** *display results by item type* optional field indicates the type of search results included in the response **Note:** if the `item_types` array contains item types that are different from `organic`, the results will be ordered by the first item type in the array possible values:  `['organic', 'paid', 'featured_snippet', 'local_pack']` default value:  `['organic', 'paid']` */
        item_types?: string[] | undefined
        
        /** *ignore highly similar keywords* optional field if set to_`true`, only core keywords will be returned, all highly similar keywords will be excluded;   default value: `false` */
        ignore_synonyms?: boolean | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo  implements IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo {

    
    /** *target domains, subdomains, and webpages* **required field** you can specify domains, subdomains, and webpages in this field; domains and subdomains should be specified without `https://` and `www.`; pages should be specified with absolute URL, including `https://` and `www.`; you can set up to 1000 domains, subdomains or webpages */

    targets?: string[] | undefined;

    
    /** *full name of the location* if you use this field, you don't have to specify `location_code` you can receive the list of available locations with their `location_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `United Kingdom` */

    location_name?: string | undefined;

    
    /** *location code* if you use this field, you don't have to specify `location_name` you can receive the list of available locations with their `location_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available locations example: `2840` */

    location_code?: number | undefined;

    
    /** *full name of the language* if you use this field, you don’t need to specify `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `English` */

    language_name?: string | undefined;

    
    /** *language code* if you use this field, you don’t need to specify `language_name` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages` ignore this field to get the results for all available languages example: `en` */

    language_code?: string | undefined;

    
    /** *display results by item type* optional field indicates the type of search results included in the response **Note:** if the `item_types` array contains item types that are different from `organic`, the results will be ordered by the first item type in the array possible values:  `['organic', 'paid', 'featured_snippet', 'local_pack']` default value:  `['organic', 'paid']` */

    item_types?: string[] | undefined;

    
    /** *ignore highly similar keywords* optional field if set to_`true`, only core keywords will be returned, all highly similar keywords will be excluded;   default value: `false` */

    ignore_synonyms?: boolean | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo) {

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
            this.targets = data["targets"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.item_types = data["item_types"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleBulkTrafficEstimationLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["targets"] = this.targets;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["item_types"] = this.item_types;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["tag"] = this.tag;
        return data;
    }
}