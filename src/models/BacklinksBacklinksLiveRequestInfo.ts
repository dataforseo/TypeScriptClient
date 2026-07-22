export interface IBacklinksBacklinksLiveRequestInfo   {
        
        /** domain, subdomain or webpage to get backlinks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://) */
        target?: string | undefined
        
        /** results grouping type
optional field
possible grouping types:
as_is – returns all backlinks
one_per_domain – returns one backlink per domain
one_per_anchor – returns one backlink per anchor
default value: as_is */
        mode?: string | undefined
        
        /** detailed results grouping type
optional field
use this object to get a specific number of backlinks per field
if you use custom_mode, then mode will be ignored
example:
'custom_mode': {'field': 'domain', 'value': 100} */
        custom_mode?: { [key: string]: any; } | undefined
        
        /** response field
required field if you choose to specify custom_mode
possible values:
anchor
domain_from
domain_from_country
tld_from
page_from_encoding
page_from_language
item_type
page_from_status_code
semantic_location */
        field?: string | undefined
        
        /** number of backlinks to return per field
required field if you choose to specify custom_mode
can be set from 1 to 1000 */
        value?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
=, <>, in, not_in, like, not_like, ilike, not_ilike, regex, not_regex, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['rank','>','80']
[['page_from_rank','>','55'],
'and',
['dofollow','=',true]]
[['first_seen','>','2017-10-23 11:31:45 +00:00'],
'and',
[['anchor','like','%seo%'],'or',['text_pre','like','%seo%']]]
The full list of possible filters is available here. */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['rank,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['domain_from_rank,desc','page_from_rank,asc'] */
        order_by?: string[] | undefined
        
        /** offset in the results array of the returned backlinks
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks;
Note: the maximum value is 20,000, use the search_after_token if you would like to offset more results */
        offset?: number | undefined
        
        /** token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 20,000 results in a single request;
by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task ;
Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request */
        search_after_token?: string | undefined
        
        /** the maximum number of returned backlinks
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live */
        backlinks_status_type?: string | undefined
        
        /** indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */
        include_subdomains?: boolean | undefined
        
        /** indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true */
        include_indirect_links?: boolean | undefined
        
        /** indicates if internal backlinks from subdomains to the target will be excluded from the results
optional field
if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
if set to false, internal links will be included in the results
default value: true */
        exclude_internal_backlinks?: boolean | undefined
        
        /** defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article */
        rank_scale?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BacklinksBacklinksLiveRequestInfo  implements IBacklinksBacklinksLiveRequestInfo {

    
    /** domain, subdomain or webpage to get backlinks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://) */

    target?: string | undefined;

    
    /** results grouping type
optional field
possible grouping types:
as_is – returns all backlinks
one_per_domain – returns one backlink per domain
one_per_anchor – returns one backlink per anchor
default value: as_is */

    mode?: string | undefined;

    
    /** detailed results grouping type
optional field
use this object to get a specific number of backlinks per field
if you use custom_mode, then mode will be ignored
example:
'custom_mode': {'field': 'domain', 'value': 100} */

    custom_mode?: { [key: string]: any; } | undefined;

    
    /** response field
required field if you choose to specify custom_mode
possible values:
anchor
domain_from
domain_from_country
tld_from
page_from_encoding
page_from_language
item_type
page_from_status_code
semantic_location */

    field?: string | undefined;

    
    /** number of backlinks to return per field
required field if you choose to specify custom_mode
can be set from 1 to 1000 */

    value?: number | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
=, <>, in, not_in, like, not_like, ilike, not_ilike, regex, not_regex, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['rank','>','80']
[['page_from_rank','>','55'],
'and',
['dofollow','=',true]]
[['first_seen','>','2017-10-23 11:31:45 +00:00'],
'and',
[['anchor','like','%seo%'],'or',['text_pre','like','%seo%']]]
The full list of possible filters is available here. */

    filters?: any[] | undefined;

    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['rank,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['domain_from_rank,desc','page_from_rank,asc'] */

    order_by?: string[] | undefined;

    
    /** offset in the results array of the returned backlinks
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks;
Note: the maximum value is 20,000, use the search_after_token if you would like to offset more results */

    offset?: number | undefined;

    
    /** token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 20,000 results in a single request;
by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task ;
Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request */

    search_after_token?: string | undefined;

    
    /** the maximum number of returned backlinks
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;

    
    /** set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live */

    backlinks_status_type?: string | undefined;

    
    /** indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true */

    include_subdomains?: boolean | undefined;

    
    /** indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true */

    include_indirect_links?: boolean | undefined;

    
    /** indicates if internal backlinks from subdomains to the target will be excluded from the results
optional field
if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
if set to false, internal links will be included in the results
default value: true */

    exclude_internal_backlinks?: boolean | undefined;

    
    /** defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works and how ranking metrics are calculated in this Help Center article */

    rank_scale?: string | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksBacklinksLiveRequestInfo) {

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
            this.mode = data["mode"];
            this.custom_mode = data["custom_mode"];
            this.field = data["field"];
            this.value = data["value"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.offset = data["offset"];
            this.search_after_token = data["search_after_token"];
            this.limit = data["limit"];
            this.backlinks_status_type = data["backlinks_status_type"];
            this.include_subdomains = data["include_subdomains"];
            this.include_indirect_links = data["include_indirect_links"];
            this.exclude_internal_backlinks = data["exclude_internal_backlinks"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksBacklinksLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBacklinksLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["mode"] = this.mode;
        data["custom_mode"] = this.custom_mode;
        data["field"] = this.field;
        data["value"] = this.value;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["offset"] = this.offset;
        data["search_after_token"] = this.search_after_token;
        data["limit"] = this.limit;
        data["backlinks_status_type"] = this.backlinks_status_type;
        data["include_subdomains"] = this.include_subdomains;
        data["include_indirect_links"] = this.include_indirect_links;
        data["exclude_internal_backlinks"] = this.exclude_internal_backlinks;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}