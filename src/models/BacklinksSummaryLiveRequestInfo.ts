export interface IBacklinksSummaryLiveRequestInfo   {
        
        /** domain, subdomain or webpage to get data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://) */
        target?: string | undefined
        
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
        
        /** filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
'backlinks_filters': ['dofollow', '=', true] */
        backlinks_filters?: any[] | undefined
        
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

export class BacklinksSummaryLiveRequestInfo  implements IBacklinksSummaryLiveRequestInfo {

    
    /** domain, subdomain or webpage to get data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://) */

    target?: string | undefined;

    
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

    
    /** filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
'backlinks_filters': ['dofollow', '=', true] */

    backlinks_filters?: any[] | undefined;

    
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


    constructor(data?: IBacklinksSummaryLiveRequestInfo) {

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
            this.include_subdomains = data["include_subdomains"];
            this.include_indirect_links = data["include_indirect_links"];
            this.exclude_internal_backlinks = data["exclude_internal_backlinks"];
            this.internal_list_limit = data["internal_list_limit"];
            this.backlinks_status_type = data["backlinks_status_type"];
            this.backlinks_filters = data["backlinks_filters"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksSummaryLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksSummaryLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["include_subdomains"] = this.include_subdomains;
        data["include_indirect_links"] = this.include_indirect_links;
        data["exclude_internal_backlinks"] = this.exclude_internal_backlinks;
        data["internal_list_limit"] = this.internal_list_limit;
        data["backlinks_status_type"] = this.backlinks_status_type;
        data["backlinks_filters"] = this.backlinks_filters;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}