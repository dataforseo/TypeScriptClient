export interface IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo   {
        
        /** product and service categories
required field
The maximum number of categories you can specify: 5
you can download the full list of possible categories */
        category_codes?: string[] | undefined
        
        /** first date of comparison period
required field
first date for which domain metrics will be provided;
date format: 'yyyy-mm-dd';
example: '2021-06-01';
the list available dates is available through the available history endpoint;
Note: first_date cannot be greater than today’s date;
Also note: the dates specified in first_date and second_date cannot point to the same month of the same year;
you can specify the dates in any order: first_date can be greater than second_date and vice versa;
minimum date: '2020-10-01' */
        first_date?: string | undefined
        
        /** second date of comparison period
required field
second date for which domain metrics will be provided;
date format: 'yyyy-mm-dd';
example: '2021-10-01';
the list available dates is available through the available history endpoint;
Note: second_date cannot be greater than today’s date;
Also note: the dates specified in first_date and second_date cannot point to the same month of the same year;
you can specify the dates in any order: second_date can be greater than first_date and vice versa;
minimum date: '2020-10-01' */
        second_date?: string | undefined
        
        /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code;
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
United Kingdom */
        location_name?: string | undefined
        
        /** unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code;
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code;
you can receive the list of available languages with their language_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
English */
        language_name?: string | undefined
        
        /** unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code;
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
en */
        language_code?: string | undefined
        
        /** display results by item type
optional field
indicates the type of search results included in the response;
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack'];
default value:
['organic', 'paid'] */
        item_types?: string[] | undefined
        
        /** number of additional domain categories
optional field
by using this parameter, you can receive domains relevant to additional categories that are not specified in category_codes above;
to learn more about the parameter, please refer to this help center article;
by default, top_categories_count is equal to the number of categories specified in the category_codes array;
Note: top_categories_count cannot be less than the number of categories in the category_codes array;
maximum value: 5 */
        top_categories_count?: number | undefined
        
        /** return subdomains in the API response
optional field
if false, the API response will contain main_domain only;
if true, the API will return main_domain plus its subdomains (if available);
default value: true */
        include_subdomains?: boolean | undefined
        
        /** minimum current organic ETV of the domain
optional field
if specified, the API will return only domains with organic_etv greater than the specified value */
        etv_min?: number | undefined
        
        /** maximum current organic ETV of the domain
optional field
if specified, the API will return only domains with organic_etv lesser than the specified value */
        etv_max?: number | undefined
        
        /** correlate data with previously obtained datasets
optional field
default value: true;
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets;
this parameter is intended to mitigate any inconsistencies that may result from changes to our database;
Note: we do not recommend setting correlate to false */
        correlate?: boolean | undefined
        
        /** the maximum number of domains in the results array
optional field
default value: 100;
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned domains
optional field
default value: 0;
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains */
        offset?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum);
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like;
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters;
example:
['metrics_history.202110.organic.pos_1', '>', 15];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results;
default rule: ['organic_etv,desc'];
possible sorting types:
asc – results will be sorted in ascending order
desc – results will be sorted in descending order;
you should use a comma to set up a sorting type;
example:
['organic_count,desc'];
note that you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
['organic_etv,desc','organic_count,asc'] */
        order_by?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255;
you can use this parameter to identify the task and match it with the result;
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo  implements IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo {

    
    /** product and service categories
required field
The maximum number of categories you can specify: 5
you can download the full list of possible categories */

    category_codes?: string[] | undefined;

    
    /** first date of comparison period
required field
first date for which domain metrics will be provided;
date format: 'yyyy-mm-dd';
example: '2021-06-01';
the list available dates is available through the available history endpoint;
Note: first_date cannot be greater than today’s date;
Also note: the dates specified in first_date and second_date cannot point to the same month of the same year;
you can specify the dates in any order: first_date can be greater than second_date and vice versa;
minimum date: '2020-10-01' */

    first_date?: string | undefined;

    
    /** second date of comparison period
required field
second date for which domain metrics will be provided;
date format: 'yyyy-mm-dd';
example: '2021-10-01';
the list available dates is available through the available history endpoint;
Note: second_date cannot be greater than today’s date;
Also note: the dates specified in first_date and second_date cannot point to the same month of the same year;
you can specify the dates in any order: second_date can be greater than first_date and vice versa;
minimum date: '2020-10-01' */

    second_date?: string | undefined;

    
    /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code;
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
United Kingdom */

    location_name?: string | undefined;

    
    /** unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code;
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
2840 */

    location_code?: number | undefined;

    
    /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code;
you can receive the list of available languages with their language_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
English */

    language_name?: string | undefined;

    
    /** unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code;
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
en */

    language_code?: string | undefined;

    
    /** display results by item type
optional field
indicates the type of search results included in the response;
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack'];
default value:
['organic', 'paid'] */

    item_types?: string[] | undefined;

    
    /** number of additional domain categories
optional field
by using this parameter, you can receive domains relevant to additional categories that are not specified in category_codes above;
to learn more about the parameter, please refer to this help center article;
by default, top_categories_count is equal to the number of categories specified in the category_codes array;
Note: top_categories_count cannot be less than the number of categories in the category_codes array;
maximum value: 5 */

    top_categories_count?: number | undefined;

    
    /** return subdomains in the API response
optional field
if false, the API response will contain main_domain only;
if true, the API will return main_domain plus its subdomains (if available);
default value: true */

    include_subdomains?: boolean | undefined;

    
    /** minimum current organic ETV of the domain
optional field
if specified, the API will return only domains with organic_etv greater than the specified value */

    etv_min?: number | undefined;

    
    /** maximum current organic ETV of the domain
optional field
if specified, the API will return only domains with organic_etv lesser than the specified value */

    etv_max?: number | undefined;

    
    /** correlate data with previously obtained datasets
optional field
default value: true;
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets;
this parameter is intended to mitigate any inconsistencies that may result from changes to our database;
Note: we do not recommend setting correlate to false */

    correlate?: boolean | undefined;

    
    /** the maximum number of domains in the results array
optional field
default value: 100;
maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned domains
optional field
default value: 0;
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains */

    offset?: number | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum);
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like;
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters;
example:
['metrics_history.202110.organic.pos_1', '>', 15];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;

    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results;
default rule: ['organic_etv,desc'];
possible sorting types:
asc – results will be sorted in ascending order
desc – results will be sorted in descending order;
you should use a comma to set up a sorting type;
example:
['organic_count,desc'];
note that you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
['organic_etv,desc','organic_count,asc'] */

    order_by?: string[] | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255;
you can use this parameter to identify the task and match it with the result;
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo) {

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
            this.category_codes = data["category_codes"];
            this.first_date = data["first_date"];
            this.second_date = data["second_date"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.item_types = data["item_types"];
            this.top_categories_count = data["top_categories_count"];
            this.include_subdomains = data["include_subdomains"];
            this.etv_min = data["etv_min"];
            this.etv_max = data["etv_max"];
            this.correlate = data["correlate"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category_codes"] = this.category_codes;
        data["first_date"] = this.first_date;
        data["second_date"] = this.second_date;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["item_types"] = this.item_types;
        data["top_categories_count"] = this.top_categories_count;
        data["include_subdomains"] = this.include_subdomains;
        data["etv_min"] = this.etv_min;
        data["etv_max"] = this.etv_max;
        data["correlate"] = this.correlate;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}