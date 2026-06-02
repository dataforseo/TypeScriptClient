export interface IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo   {
        
        /** domain name or page url
required field
the domain name of the target website, subdomain or URL of the target webpage;
the domain name must be specified without https:// or www.;
the subdomain must be specified without https://;
the webpage URL must be specified with https:// or www.
Note: if you specify the webpage URL without https:// or www., the result will be returned for the entire domain rather than the specific page */
        target?: string | undefined
        
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
ignore this field to get the results for all available languages
example:
English */
        language_name?: string | undefined
        
        /** language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en */
        language_code?: string | undefined
        
        /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */
        ignore_synonyms?: boolean | undefined
        
        /** display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack', 'ai_overview_reference']
default value:
['organic', 'paid'] */
        item_types?: string[] | undefined
        
        /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, clickstream_etv, clickstream_gender_distribution, clickstream_age_distribution, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */
        include_clickstream_data?: boolean | undefined
        
        /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */
        offset?: number | undefined
        
        /** return rankings distribution by rank_absolute
optional field
default value: false
if set to true, we will return the field metrics_absolute containing rankings distribution by the rank_absolute parameter that indicates the result’s position among all SERP elements */
        load_rank_absolute?: boolean | undefined
        
        /** data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return keywords for which the specified target currently has ranking results in SERP;
lost — return keywords for which the specified target had previously had ranking results in SERP, but didn’t have them during the last check;
all — return both types of keywords.
default value: live */
        historical_serp_mode?: string | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['ranked_serp_element.serp_item.rank_group','<=',10]
[['ranked_serp_element.serp_item.rank_group','<=',10],
'and',
['ranked_serp_element.serp_item.type','<>','paid']]
[['keyword_data.keyword_info.search_volume','<>',0],
'and',
[['ranked_serp_element.serp_item.type','<>','paid'],'or',['ranked_serp_element.serp_item.is_malicious','=',false]]]
if you want to get the keywords a particular webpage ranks for, you can use a target field or filter by the ranked_serp_element.serp_item.relative_url parameter
example:
['ranked_serp_element.serp_item.relative_url', '=', '/apis/rank-tracker-api']
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['ranked_serp_element.serp_item.rank_group,asc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_data.keyword_info.search_volume,desc','keyword_data.keyword_info.cpc,desc'] */
        order_by?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleRankedKeywordsLiveRequestInfo  implements IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo {
    
    /** domain name or page url
required field
the domain name of the target website, subdomain or URL of the target webpage;
the domain name must be specified without https:// or www.;
the subdomain must be specified without https://;
the webpage URL must be specified with https:// or www.
Note: if you specify the webpage URL without https:// or www., the result will be returned for the entire domain rather than the specific page */

    target?: string | undefined;
    
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
ignore this field to get the results for all available languages
example:
English */

    language_name?: string | undefined;
    
    /** language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en */

    language_code?: string | undefined;
    
    /** ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */

    ignore_synonyms?: boolean | undefined;
    
    /** display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack', 'ai_overview_reference']
default value:
['organic', 'paid'] */

    item_types?: string[] | undefined;
    
    /** include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, clickstream_etv, clickstream_gender_distribution, clickstream_age_distribution, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article */

    include_clickstream_data?: boolean | undefined;
    
    /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */

    offset?: number | undefined;
    
    /** return rankings distribution by rank_absolute
optional field
default value: false
if set to true, we will return the field metrics_absolute containing rankings distribution by the rank_absolute parameter that indicates the result’s position among all SERP elements */

    load_rank_absolute?: boolean | undefined;
    
    /** data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return keywords for which the specified target currently has ranking results in SERP;
lost — return keywords for which the specified target had previously had ranking results in SERP, but didn’t have them during the last check;
all — return both types of keywords.
default value: live */

    historical_serp_mode?: string | undefined;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['ranked_serp_element.serp_item.rank_group','<=',10]
[['ranked_serp_element.serp_item.rank_group','<=',10],
'and',
['ranked_serp_element.serp_item.type','<>','paid']]
[['keyword_data.keyword_info.search_volume','<>',0],
'and',
[['ranked_serp_element.serp_item.type','<>','paid'],'or',['ranked_serp_element.serp_item.is_malicious','=',false]]]
if you want to get the keywords a particular webpage ranks for, you can use a target field or filter by the ranked_serp_element.serp_item.relative_url parameter
example:
['ranked_serp_element.serp_item.relative_url', '=', '/apis/rank-tracker-api']
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;
    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['ranked_serp_element.serp_item.rank_group,asc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_data.keyword_info.search_volume,desc','keyword_data.keyword_info.cpc,desc'] */

    order_by?: string[] | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo) {

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
            this.item_types = data["item_types"];
            this.include_clickstream_data = data["include_clickstream_data"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.load_rank_absolute = data["load_rank_absolute"];
            this.historical_serp_mode = data["historical_serp_mode"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleRankedKeywordsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleRankedKeywordsLiveRequestInfo();
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
        data["item_types"] = this.item_types;
        data["include_clickstream_data"] = this.include_clickstream_data;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["load_rank_absolute"] = this.load_rank_absolute;
        data["historical_serp_mode"] = this.historical_serp_mode;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}