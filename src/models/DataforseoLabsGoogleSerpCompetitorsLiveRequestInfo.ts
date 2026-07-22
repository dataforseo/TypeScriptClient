export interface IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo   {
        
        /** keywords array
required field
the results will be based on the keywords you specify in this array
UTF-8 encoding;
the keywords will be converted to lowercase format;
you can specify the maximum of 200 keywords
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom */
        location_name?: string | undefined
        
        /** unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */
        language_name?: string | undefined
        
        /** unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */
        language_code?: string | undefined
        
        /** indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */
        include_subdomains?: boolean | undefined
        
        /** search results type
indicates type of search results included in the response
optional field
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */
        item_types?: string[] | undefined
        
        /** the maximum number of returned domains
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains */
        offset?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['median_position','in',[1,10]]
[['median_position','in',[1,10]],'and',['domain','not_like','%wikipedia.org%']]
[['domain','not_like','%wikipedia.org%'],
'and',
[['relevant_serp_items','>',0],'or',['median_position','in',[1,10]]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
the comma is used as a separator
example:
['avg_position,asc']
default rule:
['rating,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['avg_position,asc','etv,desc'] */
        order_by?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo  implements IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo {

    
    /** keywords array
required field
the results will be based on the keywords you specify in this array
UTF-8 encoding;
the keywords will be converted to lowercase format;
you can specify the maximum of 200 keywords
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom */

    location_name?: string | undefined;

    
    /** unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840 */

    location_code?: number | undefined;

    
    /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */

    language_name?: string | undefined;

    
    /** unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */

    language_code?: string | undefined;

    
    /** indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */

    include_subdomains?: boolean | undefined;

    
    /** search results type
indicates type of search results included in the response
optional field
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */

    item_types?: string[] | undefined;

    
    /** the maximum number of returned domains
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains */

    offset?: number | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['median_position','in',[1,10]]
[['median_position','in',[1,10]],'and',['domain','not_like','%wikipedia.org%']]
[['domain','not_like','%wikipedia.org%'],
'and',
[['relevant_serp_items','>',0],'or',['median_position','in',[1,10]]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;

    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
the comma is used as a separator
example:
['avg_position,asc']
default rule:
['rating,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['avg_position,asc','etv,desc'] */

    order_by?: string[] | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo) {

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
            this.include_subdomains = data["include_subdomains"];
            this.item_types = data["item_types"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo();
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
        data["include_subdomains"] = this.include_subdomains;
        data["item_types"] = this.item_types;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}