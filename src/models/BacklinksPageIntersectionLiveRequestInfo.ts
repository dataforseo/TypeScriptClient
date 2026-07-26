export interface IBacklinksPageIntersectionLiveRequestInfo   {
        
        /** domains, subdomains or webpages to get links for required field you can set up to 20 domains, subdomains or webpages a domain or a subdomain should be specified without https:// and www. a page should be specified with absolute URL (including http:// or https://) example: 'targets': { '1': 'http://planet.postgresql.org/', '2': 'http://gborg.postgresql.org/' } */
        targets?: { [key: string]: string; } | undefined
        
        /** domains, subdomains or webpages you want to exclude optional field you can set up to 10 domains, subdomains or webpages if you use this array, results will contain the referring pages that link to targets but don’t link to exclude_targets example: 'exclude_targets': [ 'bbc.com', 'https://www.apple.com/iphone/*', 'https://dataforseo.com/apis/*'] */
        exclude_targets?: string[] | undefined
        
        /** set what backlinks to return and count optional field you can use this field to choose what backlinks will be returned and used for aggregated metrics for your targets; possible values: all – all backlinks will be returned and counted; live – backlinks found during the last check will be returned and counted; lost – lost backlinks will be returned and counted; default value: live */
        backlinks_status_type?: string | undefined
        
        /** array of results filtering parameters optional field you can add several filters at once (8 filters maximum) you should set a logical operator and, or between the conditions the following operators are supported: regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match you can use the % operator with like and not_like to match any string of zero or more characters example: ['1.rank','>','80'] [['2.page_from_rank','>','55'], 'and', ['1.original','=','true']] [['1.first_seen','>','2017-10-23 11:31:45 +00:00'], 'and', [['1.acnhor','like','%seo%'],'or',['1.text_pre','not_like','%seo%']]] The full list of possible filters is available here. */
        filters?: any[] | undefined
        
        /** results sorting rules optional field you can use the same values as in the filters array to sort the results possible sorting types: asc – results will be sorted in the ascending order desc – results will be sorted in the descending order you should use a comma to set up a sorting type example: ['rank,desc'] note that you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules example: ['domain_from_rank,desc','page_from_rank,asc'] */
        order_by?: string[] | undefined
        
        /** offset in the results array of the returned backlinks optional field default value: 0 if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks */
        offset?: number | undefined
        
        /** the maximum number of returned backlinks optional field default value: 100 maximum value: 1000 */
        limit?: number | undefined
        
        /** maximum number of elements within internal arrays optional field you can use this field to limit the number of elements within the following arrays: attributes domain_from_platform_type default value: 10 maximum value: 1000 */
        internal_list_limit?: number | undefined
        
        /** indicates if the subdomains of the targets will be included in the search optional field if set to false, the subdomains will be ignored default value: true */
        include_subdomains?: boolean | undefined
        
        /** indicates if indirect links to the targets will be included in the results optional field if set to true, the results will include data on indirect links pointing to a page that either redirects to a target, or points to a canonical page if set to false, indirect links will be ignored default value: true */
        include_indirect_links?: boolean | undefined
        
        /** indicates if internal backlinks from subdomains to the target will be excluded from the results optional field if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target if set to false, internal links will be included in the result default value: true */
        exclude_internal_backlinks?: boolean | undefined
        
        /** indicates whether to intersect backlinks optional field use this field to intersect or merge results for the specified URLs possible values: all, partial all – results are based on all backlinks; partial – results are based on the intersecting backlinks only; default value: all */
        intersection_mode?: string | undefined
        
        /** defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: one_hundred — rank values are displayed on a 0–100 scale one_thousand — rank values are displayed on a 0–1000 scale default value: one_thousand learn more about how this parameter works and how ranking metrics are calculated in this Help Center article */
        rank_scale?: string | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BacklinksPageIntersectionLiveRequestInfo  implements IBacklinksPageIntersectionLiveRequestInfo {

    
    /** domains, subdomains or webpages to get links for required field you can set up to 20 domains, subdomains or webpages a domain or a subdomain should be specified without https:// and www. a page should be specified with absolute URL (including http:// or https://) example: 'targets': { '1': 'http://planet.postgresql.org/', '2': 'http://gborg.postgresql.org/' } */

    targets?: { [key: string]: string; } | undefined;

    
    /** domains, subdomains or webpages you want to exclude optional field you can set up to 10 domains, subdomains or webpages if you use this array, results will contain the referring pages that link to targets but don’t link to exclude_targets example: 'exclude_targets': [ 'bbc.com', 'https://www.apple.com/iphone/*', 'https://dataforseo.com/apis/*'] */

    exclude_targets?: string[] | undefined;

    
    /** set what backlinks to return and count optional field you can use this field to choose what backlinks will be returned and used for aggregated metrics for your targets; possible values: all – all backlinks will be returned and counted; live – backlinks found during the last check will be returned and counted; lost – lost backlinks will be returned and counted; default value: live */

    backlinks_status_type?: string | undefined;

    
    /** array of results filtering parameters optional field you can add several filters at once (8 filters maximum) you should set a logical operator and, or between the conditions the following operators are supported: regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match you can use the % operator with like and not_like to match any string of zero or more characters example: ['1.rank','>','80'] [['2.page_from_rank','>','55'], 'and', ['1.original','=','true']] [['1.first_seen','>','2017-10-23 11:31:45 +00:00'], 'and', [['1.acnhor','like','%seo%'],'or',['1.text_pre','not_like','%seo%']]] The full list of possible filters is available here. */

    filters?: any[] | undefined;

    
    /** results sorting rules optional field you can use the same values as in the filters array to sort the results possible sorting types: asc – results will be sorted in the ascending order desc – results will be sorted in the descending order you should use a comma to set up a sorting type example: ['rank,desc'] note that you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules example: ['domain_from_rank,desc','page_from_rank,asc'] */

    order_by?: string[] | undefined;

    
    /** offset in the results array of the returned backlinks optional field default value: 0 if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks */

    offset?: number | undefined;

    
    /** the maximum number of returned backlinks optional field default value: 100 maximum value: 1000 */

    limit?: number | undefined;

    
    /** maximum number of elements within internal arrays optional field you can use this field to limit the number of elements within the following arrays: attributes domain_from_platform_type default value: 10 maximum value: 1000 */

    internal_list_limit?: number | undefined;

    
    /** indicates if the subdomains of the targets will be included in the search optional field if set to false, the subdomains will be ignored default value: true */

    include_subdomains?: boolean | undefined;

    
    /** indicates if indirect links to the targets will be included in the results optional field if set to true, the results will include data on indirect links pointing to a page that either redirects to a target, or points to a canonical page if set to false, indirect links will be ignored default value: true */

    include_indirect_links?: boolean | undefined;

    
    /** indicates if internal backlinks from subdomains to the target will be excluded from the results optional field if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target if set to false, internal links will be included in the result default value: true */

    exclude_internal_backlinks?: boolean | undefined;

    
    /** indicates whether to intersect backlinks optional field use this field to intersect or merge results for the specified URLs possible values: all, partial all – results are based on all backlinks; partial – results are based on the intersecting backlinks only; default value: all */

    intersection_mode?: string | undefined;

    
    /** defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: one_hundred — rank values are displayed on a 0–100 scale one_thousand — rank values are displayed on a 0–1000 scale default value: one_thousand learn more about how this parameter works and how ranking metrics are calculated in this Help Center article */

    rank_scale?: string | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksPageIntersectionLiveRequestInfo) {

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
            this.targets = data["targets"];
            this.exclude_targets = data["exclude_targets"];
            this.backlinks_status_type = data["backlinks_status_type"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.offset = data["offset"];
            this.limit = data["limit"];
            this.internal_list_limit = data["internal_list_limit"];
            this.include_subdomains = data["include_subdomains"];
            this.include_indirect_links = data["include_indirect_links"];
            this.exclude_internal_backlinks = data["exclude_internal_backlinks"];
            this.intersection_mode = data["intersection_mode"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksPageIntersectionLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksPageIntersectionLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["targets"] = this.targets;
        data["exclude_targets"] = this.exclude_targets;
        data["backlinks_status_type"] = this.backlinks_status_type;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["offset"] = this.offset;
        data["limit"] = this.limit;
        data["internal_list_limit"] = this.internal_list_limit;
        data["include_subdomains"] = this.include_subdomains;
        data["include_indirect_links"] = this.include_indirect_links;
        data["exclude_internal_backlinks"] = this.exclude_internal_backlinks;
        data["intersection_mode"] = this.intersection_mode;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}