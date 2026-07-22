export interface IBacklinksReferringNetworksLiveRequestInfo   {
        
        /** domain, subdomain or webpage to get referring networks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://) */
        target?: string | undefined
        
        /** indicates the type of network to get data for
optional field
possible values: ip, subnet
default value: ip */
        network_address_type?: string | undefined
        
        /** the maximum number of returned networks
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned networks
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages */
        offset?: number | undefined
        
        /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
referring_links_tld
referring_links_types
referring_links_attributes
referring_links_platform_types
referring_links_semantic_locations
default value: 10
maximum value: 1000 */
        internal_list_limit?: number | undefined
        
        /** set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live */
        backlinks_status_type?: string | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['referring_pages','>','1']
[['referring_pages','>','2'],
'and',
['backlinks','>','10']]
[['first_seen','>','2017-10-23 11:31:45 +00:00'],
'and',
[['network_address','like','194.1.%'],'or',['referring_ips','>','10']]]
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
['backlinks,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['backlinks,desc','rank,asc'] */
        order_by?: string[] | undefined
        
        /** filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
'backlinks_filters': [['dofollow', '=', true]] */
        backlinks_filters?: any[] | undefined
        
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
        
        /** indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be ommited and you won’t receive the same domain in the response;
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

export class BacklinksReferringNetworksLiveRequestInfo  implements IBacklinksReferringNetworksLiveRequestInfo {

    
    /** domain, subdomain or webpage to get referring networks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://) */

    target?: string | undefined;

    
    /** indicates the type of network to get data for
optional field
possible values: ip, subnet
default value: ip */

    network_address_type?: string | undefined;

    
    /** the maximum number of returned networks
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned networks
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages */

    offset?: number | undefined;

    
    /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
referring_links_tld
referring_links_types
referring_links_attributes
referring_links_platform_types
referring_links_semantic_locations
default value: 10
maximum value: 1000 */

    internal_list_limit?: number | undefined;

    
    /** set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live */

    backlinks_status_type?: string | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['referring_pages','>','1']
[['referring_pages','>','2'],
'and',
['backlinks','>','10']]
[['first_seen','>','2017-10-23 11:31:45 +00:00'],
'and',
[['network_address','like','194.1.%'],'or',['referring_ips','>','10']]]
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
['backlinks,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['backlinks,desc','rank,asc'] */

    order_by?: string[] | undefined;

    
    /** filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
'backlinks_filters': [['dofollow', '=', true]] */

    backlinks_filters?: any[] | undefined;

    
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

    
    /** indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be ommited and you won’t receive the same domain in the response;
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


    constructor(data?: IBacklinksReferringNetworksLiveRequestInfo) {

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
            this.network_address_type = data["network_address_type"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.internal_list_limit = data["internal_list_limit"];
            this.backlinks_status_type = data["backlinks_status_type"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.backlinks_filters = data["backlinks_filters"];
            this.include_subdomains = data["include_subdomains"];
            this.include_indirect_links = data["include_indirect_links"];
            this.exclude_internal_backlinks = data["exclude_internal_backlinks"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksReferringNetworksLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksReferringNetworksLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["network_address_type"] = this.network_address_type;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["internal_list_limit"] = this.internal_list_limit;
        data["backlinks_status_type"] = this.backlinks_status_type;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["backlinks_filters"] = this.backlinks_filters;
        data["include_subdomains"] = this.include_subdomains;
        data["include_indirect_links"] = this.include_indirect_links;
        data["exclude_internal_backlinks"] = this.exclude_internal_backlinks;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}