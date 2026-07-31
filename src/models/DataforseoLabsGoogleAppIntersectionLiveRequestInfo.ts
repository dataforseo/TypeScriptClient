export interface IDataforseoLabsGoogleAppIntersectionLiveRequestInfo   {
        
        /** *ids of the target apps* **required field** IDs of the target mobile applications on Google Play; you can find the ID in the URL of every app listed on Google Play; example: in the URL `https://play.google.com/store/apps/details?id=org.telegram.messenger` the id is `org.telegram.messenger`;; the ids should be specified the following way: `'app_ids': {'1': 'org.telegram.messenger','2': 'com.zhiliaoapp.musically'}` if you specify a single ID here, the API will return results only for one application; the maximum number of app IDs you can specify in this object is `20` */
        app_ids?: { [key: string]: string; } | undefined
        
        /** *full name of the location* **required field if you don't specify** `location_code` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_name` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `United States` */
        location_name?: string | undefined
        
        /** *location code* **required field if you don't specify** `location_name` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_code` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `2840` */
        location_code?: number | undefined
        
        /** *full name of the language* **required field if you don't specify** `language_code` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only; example: `English` */
        language_name?: string | undefined
        
        /** *language code* **required field if you don't specify** `language_name` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only example: `en` */
        language_code?: string | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: ``, `>=`, `=`, `<>`, `in`, `not_in` example: `['keyword_data.keyword_info.search_volume','>',500]` `[['keyword_data.keyword_info.search_volume','<>',500],'and',[intersection_result.382617920.rank_group','>=','10']]` for more information about filters, please refer to [Dataforseo Labs - Filters](/v3/dataforseo_labs/filters) or this [help center guide](https://dataforseo.com/help-center/how-to-use-filters-in-dataforseo-labs-api) */
        filters?: any[] | undefined
        
        /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results; possible sorting types: `asc` - results will be sorted in the ascending order; `desc` - results will be sorted in the descending order; you should use a comma to specify a sorting type; example: `['intersection_result.382617920.rank_absolute,asc']` **Note:** you can set no more than three sorting rules in a single request; you should use a comma to separate several sorting rules; example: `['intersection_result.382617920.rank_absolute,desc','keyword_data.keyword_info.search_volume,asc']` default rule: `['keyword_data.keyword_info.search_volume,desc']` **Note:** if the `item_types` array contains item types that are different from `organic`, the results will be ordered by the first item type in the array */
        order_by?: string[] | undefined
        
        /** *the maximum number of returned keywords* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *offset in the results array of returned keywords* optional field default value: `0` if you specify the `10` value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */
        offset?: number | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleAppIntersectionLiveRequestInfo  implements IDataforseoLabsGoogleAppIntersectionLiveRequestInfo {

    
    /** *ids of the target apps* **required field** IDs of the target mobile applications on Google Play; you can find the ID in the URL of every app listed on Google Play; example: in the URL `https://play.google.com/store/apps/details?id=org.telegram.messenger` the id is `org.telegram.messenger`;; the ids should be specified the following way: `'app_ids': {'1': 'org.telegram.messenger','2': 'com.zhiliaoapp.musically'}` if you specify a single ID here, the API will return results only for one application; the maximum number of app IDs you can specify in this object is `20` */

    app_ids?: { [key: string]: string; } | undefined;

    
    /** *full name of the location* **required field if you don't specify** `location_code` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_name` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `United States` */

    location_name?: string | undefined;

    
    /** *location code* **required field if you don't specify** `location_name` **Note:** it is required to specify either `location_name` or `location_code` you can receive the list of available locations with their `location_code` by making a separate request to  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the US location only; example: `2840` */

    location_code?: number | undefined;

    
    /** *full name of the language* **required field if you don't specify** `language_code` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_name` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only; example: `English` */

    language_name?: string | undefined;

    
    /** *language code* **required field if you don't specify** `language_name` **Note:** it is required to specify either `language_name` or `language_code` you can receive the list of available languages with their `language_code` by making a separate request to the  `https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages`; **Note:** this endpoint currently supports the English language only example: `en` */

    language_code?: string | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: ``, `>=`, `=`, `<>`, `in`, `not_in` example: `['keyword_data.keyword_info.search_volume','>',500]` `[['keyword_data.keyword_info.search_volume','<>',500],'and',[intersection_result.382617920.rank_group','>=','10']]` for more information about filters, please refer to [Dataforseo Labs - Filters](/v3/dataforseo_labs/filters) or this [help center guide](https://dataforseo.com/help-center/how-to-use-filters-in-dataforseo-labs-api) */

    filters?: any[] | undefined;

    
    /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results; possible sorting types: `asc` - results will be sorted in the ascending order; `desc` - results will be sorted in the descending order; you should use a comma to specify a sorting type; example: `['intersection_result.382617920.rank_absolute,asc']` **Note:** you can set no more than three sorting rules in a single request; you should use a comma to separate several sorting rules; example: `['intersection_result.382617920.rank_absolute,desc','keyword_data.keyword_info.search_volume,asc']` default rule: `['keyword_data.keyword_info.search_volume,desc']` **Note:** if the `item_types` array contains item types that are different from `organic`, the results will be ordered by the first item type in the array */

    order_by?: string[] | undefined;

    
    /** *the maximum number of returned keywords* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *offset in the results array of returned keywords* optional field default value: `0` if you specify the `10` value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */

    offset?: number | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleAppIntersectionLiveRequestInfo) {

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
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleAppIntersectionLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleAppIntersectionLiveRequestInfo();
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
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["tag"] = this.tag;
        return data;
    }
}