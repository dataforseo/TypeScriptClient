export interface IDataforseoLabsGooglePageIntersectionLiveRequestInfo   {
        
        /** target URLs of pages
required field
you can set up to 20 pages in this object
the pages should be specified with absolute URLs (including http:// or https://)
example:
'pages': {
'1':'https://www.apple.com/mac/*',
'2':'https://dataforseo.com/*',
'3':'https://support.microsoft.com/'
}if you specify a single page here, we will return results only for this page;
you can also use a wildcard (‘*’) character to specify the search pattern
example:
'example.com'
search for the exact URL
'example.com/eng/*'
search for the example.com page and all its related URLs which start with ‘/eng/’, such as “example.com/eng/index.html” and “example.com/eng/help/”, etc.
note: a wilcard should be placed after the slash (‘/’) character in the end of the URL, it is not possible to place it after the domain in the following way:
https://dataforseo.com*
use https://dataforseo.com/* instead
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million */
        pages?: { [key: string]: string; } | undefined
        
        /** URLs of pages you want to exclude
optional field
you can set up to 10 pages in this array
if you use this array, results will contain the keywords for which URLs from the pages object rank, but URLs from exclude_pages array do not;
note that if you specify this field, the results will be based on the keywords any URL from pages ranks for regardless of intersections between them. However, you can set intersection_mode to intersect and results will contain the keywords all URLs from pages rank for in the same SERP and URLs from exclude_pages do not.
use a wildcard (‘*’) character to specify the search pattern
example:
'exclude_pages': [
'https://www.apple.com/iphone/*',
'https://dataforseo.com/apis/*',
'https://www.microsoft.com/en-us/industry/services/'
] */
        exclude_pages?: string[] | undefined
        
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
        
        /** search results type
indicates type of search results included in the response
optional field
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */
        item_types?: string[] | undefined
        
        /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the items array of returned keywords
optional field
default value: 0
if you specify 10 here, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */
        offset?: number | undefined
        
        /** indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */
        include_subdomains?: boolean | undefined
        
        /** indicates whether to intersect keywords
optional field
use this field to intersect or merge results for the specified URLs
possible values: union, intersect
union – results are based on all keywords any URL from pages rank for;
intersect – results are based on the keywords all URLs from pages rank for in the same SERP:
by default, results are based on the intersect mode if you specify only pages array. If you specify exclude_pages as well, results are based on the union mode */
        intersection_mode?: string | undefined
        
        /** include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false */
        include_serp_info?: boolean | undefined
        
        /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, clickstream_etv, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */
        include_clickstream_data?: boolean | undefined
        
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
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
note that if you want to filter by any field in the intersection_result array you need to specify the number of corresponding page
for instance, if you want to filter results by the ranking of the first specified URL, you should set the following filter:
[intersection_result.1.rank_absolute,'=',1]
if you want to filter results and receive only organic listings for the third specified URL, you should set the following filter:
[intersection_result.3.type,'=','organic'] , etc.example:
['keyword_data.keyword_info.search_volume','in',[100,1000]]
[['intersection_result.1.etv','>',0],'and',['intersection_result.1.description','like','%goat%']][['keyword_data.keyword_info.search_volume','>',100],
'and',
[['intersection_result.2.description','like','%goat%'],
'or',
['intersection_result.2.type','=','organic']]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['keyword_data.keyword_info.search_volume,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['intersection_result.1.rank_group,asc','intersection_result.2.rank_absolute,asc'] */
        order_by?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGooglePageIntersectionLiveRequestInfo  implements IDataforseoLabsGooglePageIntersectionLiveRequestInfo {

    
    /** target URLs of pages
required field
you can set up to 20 pages in this object
the pages should be specified with absolute URLs (including http:// or https://)
example:
'pages': {
'1':'https://www.apple.com/mac/*',
'2':'https://dataforseo.com/*',
'3':'https://support.microsoft.com/'
}if you specify a single page here, we will return results only for this page;
you can also use a wildcard (‘*’) character to specify the search pattern
example:
'example.com'
search for the exact URL
'example.com/eng/*'
search for the example.com page and all its related URLs which start with ‘/eng/’, such as “example.com/eng/index.html” and “example.com/eng/help/”, etc.
note: a wilcard should be placed after the slash (‘/’) character in the end of the URL, it is not possible to place it after the domain in the following way:
https://dataforseo.com*
use https://dataforseo.com/* instead
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million */

    pages?: { [key: string]: string; } | undefined;

    
    /** URLs of pages you want to exclude
optional field
you can set up to 10 pages in this array
if you use this array, results will contain the keywords for which URLs from the pages object rank, but URLs from exclude_pages array do not;
note that if you specify this field, the results will be based on the keywords any URL from pages ranks for regardless of intersections between them. However, you can set intersection_mode to intersect and results will contain the keywords all URLs from pages rank for in the same SERP and URLs from exclude_pages do not.
use a wildcard (‘*’) character to specify the search pattern
example:
'exclude_pages': [
'https://www.apple.com/iphone/*',
'https://dataforseo.com/apis/*',
'https://www.microsoft.com/en-us/industry/services/'
] */

    exclude_pages?: string[] | undefined;

    
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

    
    /** search results type
indicates type of search results included in the response
optional field
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */

    item_types?: string[] | undefined;

    
    /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the items array of returned keywords
optional field
default value: 0
if you specify 10 here, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */

    offset?: number | undefined;

    
    /** indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */

    include_subdomains?: boolean | undefined;

    
    /** indicates whether to intersect keywords
optional field
use this field to intersect or merge results for the specified URLs
possible values: union, intersect
union – results are based on all keywords any URL from pages rank for;
intersect – results are based on the keywords all URLs from pages rank for in the same SERP:
by default, results are based on the intersect mode if you specify only pages array. If you specify exclude_pages as well, results are based on the union mode */

    intersection_mode?: string | undefined;

    
    /** include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false */

    include_serp_info?: boolean | undefined;

    
    /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, clickstream_etv, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */

    include_clickstream_data?: boolean | undefined;

    
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
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
note that if you want to filter by any field in the intersection_result array you need to specify the number of corresponding page
for instance, if you want to filter results by the ranking of the first specified URL, you should set the following filter:
[intersection_result.1.rank_absolute,'=',1]
if you want to filter results and receive only organic listings for the third specified URL, you should set the following filter:
[intersection_result.3.type,'=','organic'] , etc.example:
['keyword_data.keyword_info.search_volume','in',[100,1000]]
[['intersection_result.1.etv','>',0],'and',['intersection_result.1.description','like','%goat%']][['keyword_data.keyword_info.search_volume','>',100],
'and',
[['intersection_result.2.description','like','%goat%'],
'or',
['intersection_result.2.type','=','organic']]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;

    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['keyword_data.keyword_info.search_volume,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['intersection_result.1.rank_group,asc','intersection_result.2.rank_absolute,asc'] */

    order_by?: string[] | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGooglePageIntersectionLiveRequestInfo) {

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
            this.pages = data["pages"];
            this.exclude_pages = data["exclude_pages"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.item_types = data["item_types"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.include_subdomains = data["include_subdomains"];
            this.intersection_mode = data["intersection_mode"];
            this.include_serp_info = data["include_serp_info"];
            this.include_clickstream_data = data["include_clickstream_data"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGooglePageIntersectionLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGooglePageIntersectionLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["pages"] = this.pages;
        data["exclude_pages"] = this.exclude_pages;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["item_types"] = this.item_types;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["include_subdomains"] = this.include_subdomains;
        data["intersection_mode"] = this.intersection_mode;
        data["include_serp_info"] = this.include_serp_info;
        data["include_clickstream_data"] = this.include_clickstream_data;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}