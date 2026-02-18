export interface IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo   {
        
        /** keyword
required field
UTF-8 encoding
the keywords will be converted to lowercase format;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom */
        location_name?: string | undefined
        
        /** location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English
Note: if omitted, results default to the language with the most keyword records in the specified location;
refer to the available_languages.keywords field of the Locations and Languages endpoint to determine the default language */
        language_name?: string | undefined
        
        /** language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en
Note: if omitted, results default to the language with the most keyword records in the specified location;
refer to the available_languages.keywords field of the Locations and Languages endpoint to determine the default language */
        language_code?: string | undefined
        
        /** include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false */
        include_seed_keyword?: boolean | undefined
        
        /** include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false */
        include_serp_info?: boolean | undefined
        
        /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */
        include_clickstream_data?: boolean | undefined
        
        /** search for the exact phrase
optional field
if set to true, the returned keywords will include the exact keyword phrase you specified, with potentially other words before or after that phrase
default value: false */
        exact_match?: boolean | undefined
        
        /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */
        ignore_synonyms?: boolean | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['keyword_info.search_volume','>',0]
[['keyword_info.search_volume','in',[0,1000]],
'and',
['keyword_info.competition_level','=','LOW']][['keyword_info.search_volume','>',100],
'and',
[['keyword_info.cpc','<',0.5],
'or',
['keyword_info.high_top_of_page_bid','<=',0.5]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
a comma is used as a separator
example:
['keyword_info.competition,desc']
default rule:
['keyword_info.search_volume,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_info.search_volume,desc','keyword_info.cpc,desc'] */
        order_by?: string[] | undefined
        
        /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords
Note: we recommend using this parameter only when retrieving up to 10,000 results
for retrieving over 10,000 results, use the offset_token instead. */
        offset?: number | undefined
        
        /** offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.
learn more about this parameter on our Help Center */
        offset_token?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo  implements IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo {
    
    /** keyword
required field
UTF-8 encoding
the keywords will be converted to lowercase format;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom */

    location_name?: string | undefined;
    
    /** location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840 */

    location_code?: number | undefined;
    
    /** full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English
Note: if omitted, results default to the language with the most keyword records in the specified location;
refer to the available_languages.keywords field of the Locations and Languages endpoint to determine the default language */

    language_name?: string | undefined;
    
    /** language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en
Note: if omitted, results default to the language with the most keyword records in the specified location;
refer to the available_languages.keywords field of the Locations and Languages endpoint to determine the default language */

    language_code?: string | undefined;
    
    /** include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false */

    include_seed_keyword?: boolean | undefined;
    
    /** include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false */

    include_serp_info?: boolean | undefined;
    
    /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */

    include_clickstream_data?: boolean | undefined;
    
    /** search for the exact phrase
optional field
if set to true, the returned keywords will include the exact keyword phrase you specified, with potentially other words before or after that phrase
default value: false */

    exact_match?: boolean | undefined;
    
    /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */

    ignore_synonyms?: boolean | undefined;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['keyword_info.search_volume','>',0]
[['keyword_info.search_volume','in',[0,1000]],
'and',
['keyword_info.competition_level','=','LOW']][['keyword_info.search_volume','>',100],
'and',
[['keyword_info.cpc','<',0.5],
'or',
['keyword_info.high_top_of_page_bid','<=',0.5]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;
    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
a comma is used as a separator
example:
['keyword_info.competition,desc']
default rule:
['keyword_info.search_volume,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_info.search_volume,desc','keyword_info.cpc,desc'] */

    order_by?: string[] | undefined;
    
    /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords
Note: we recommend using this parameter only when retrieving up to 10,000 results
for retrieving over 10,000 results, use the offset_token instead. */

    offset?: number | undefined;
    
    /** offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.
learn more about this parameter on our Help Center */

    offset_token?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo) {

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
            this.keyword = data["keyword"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.include_seed_keyword = data["include_seed_keyword"];
            this.include_serp_info = data["include_serp_info"];
            this.include_clickstream_data = data["include_clickstream_data"];
            this.exact_match = data["exact_match"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["include_seed_keyword"] = this.include_seed_keyword;
        data["include_serp_info"] = this.include_serp_info;
        data["include_clickstream_data"] = this.include_clickstream_data;
        data["exact_match"] = this.exact_match;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
        data["tag"] = this.tag;
        return data;
    }
}