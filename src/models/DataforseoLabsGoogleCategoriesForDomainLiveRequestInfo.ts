export interface IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo   {
        
        /** domain or subdomain
required field
the domain or subdomain name of the target website
the domain or subdomain should be specified without https:// and www. */
        target?: string | undefined
        
        /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom */
        location_name?: string | undefined
        
        /** location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */
        language_name?: string | undefined
        
        /** language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */
        language_code?: string | undefined
        
        /** indicates if the subcategories will be included in the search
optional field
if set to false, the subcategories will be ignored
default value: false
learn more about the parameter in this help center article */
        include_subcategories?: boolean | undefined
        
        /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */
        include_clickstream_data?: boolean | undefined
        
        /** data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live */
        historical_serp_mode?: string | undefined
        
        /** display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */
        item_types?: string[] | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in
example:
['metrics.organic.pos_1,'>',0]
[[['metrics.organic.count','>=',100],'and',['metrics.organic.pos_1','>',0]],
'or',
['metrics.organic.etv','in',[10,100]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
['metrics.paid.etv,asc']
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['metrics.organic.etv,desc','metrics.paid.count,asc']
default rule:
['metrics.organic.count,desc']
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array */
        order_by?: string[] | undefined
        
        /** the maximum number of returned categories
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned categories 
optional field
default value: 0
if you specify the 10 value, the first ten categories in the results array will be omitted and the data will be provided for the successive categories */
        offset?: number | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo  implements IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo {
    
    /** domain or subdomain
required field
the domain or subdomain name of the target website
the domain or subdomain should be specified without https:// and www. */

    target?: string | undefined;
    
    /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom */

    location_name?: string | undefined;
    
    /** location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840 */

    location_code?: number | undefined;
    
    /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */

    language_name?: string | undefined;
    
    /** language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */

    language_code?: string | undefined;
    
    /** indicates if the subcategories will be included in the search
optional field
if set to false, the subcategories will be ignored
default value: false
learn more about the parameter in this help center article */

    include_subcategories?: boolean | undefined;
    
    /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */

    include_clickstream_data?: boolean | undefined;
    
    /** data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live */

    historical_serp_mode?: string | undefined;
    
    /** display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */

    item_types?: string[] | undefined;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in
example:
['metrics.organic.pos_1,'>',0]
[[['metrics.organic.count','>=',100],'and',['metrics.organic.pos_1','>',0]],
'or',
['metrics.organic.etv','in',[10,100]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;
    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
['metrics.paid.etv,asc']
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['metrics.organic.etv,desc','metrics.paid.count,asc']
default rule:
['metrics.organic.count,desc']
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array */

    order_by?: string[] | undefined;
    
    /** the maximum number of returned categories
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the results array of returned categories 
optional field
default value: 0
if you specify the 10 value, the first ten categories in the results array will be omitted and the data will be provided for the successive categories */

    offset?: number | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleCategoriesForDomainLiveRequestInfo) {

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
            this.include_subcategories = data["include_subcategories"];
            this.include_clickstream_data = data["include_clickstream_data"];
            this.historical_serp_mode = data["historical_serp_mode"];
            this.item_types = data["item_types"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleCategoriesForDomainLiveRequestInfo();
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
        data["include_subcategories"] = this.include_subcategories;
        data["include_clickstream_data"] = this.include_clickstream_data;
        data["historical_serp_mode"] = this.historical_serp_mode;
        data["item_types"] = this.item_types;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["tag"] = this.tag;
        return data;
    }
}