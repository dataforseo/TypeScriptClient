export interface IBacklinksDomainPagesLiveRequestInfo   {
        
        /** *domain or subdomain* **required field** a domain or a subdomain should be specified without `https://` and `www.` example: `forbes.com` */
        target?: string | undefined
        
        /** *the maximum number of returned pages* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *offset in the results array of returned pages* optional field default value: `0` if you specify the `10` value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */
        offset?: number | undefined
        
        /** *maximum number of elements within internal arrays* optional field you can use this field to limit the number of elements within the following arrays: `referring_links_tld` `referring_links_types` `referring_links_attributes` `referring_links_platform_types` `referring_links_semantic_locations` default value: `10` maximum value: `1000` */
        internal_list_limit?: number | undefined
        
        /** *set what backlinks to return and count* optional field you can use this field to choose what backlinks will be returned and used for aggregated metrics; possible values:  `all` - all backlinks will be returned and counted; `live` - backlinks found during the last check will be returned and counted; `lost` - lost backlinks will be returned and counted; default value: `live` */
        backlinks_status_type?: string | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['meta.internal_links_count','>','1']` `[['meta.external_links_count','>','2'],'and',['backlinks','>','10']]` `[['first_visited','>','2017-10-23 11:31:45 +00:00'],'and',[['title','like','%seo%'],'or',['referring_domains','>','10']]]` The full list of possible filters is available [here.](/v3/backlinks/filters/?bash) */
        filters?: any[] | undefined
        
        /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['page_summary.backlinks,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['page_summary.backlinks,desc','page_summary.rank,asc']` */
        order_by?: string[] | undefined
        
        /** *filter the backlinks of your `target`* optional field you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your `target` you can filter the backlinks by all fields available in the response of [this endpoint](/v3/backlinks/backlinks/live) using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for example: `'backlinks_filters': ['dofollow', '=', true]` */
        backlinks_filters?: any[] | undefined
        
        /** *indicates if the subdomains of the `target` will be included in the search* optional field if set to `false`, the subdomains will be ignored default value: `true` */
        include_subdomains?: boolean | undefined
        
        /** *indicates if internal backlinks from subdomains to the `target` will be excluded from the results* optional field if set to `true`, the results will not include data on internal backlinks from subdomains of the same domain as `target` if set to `false`, internal links will be included in the results default value: `true` */
        exclude_internal_backlinks?: boolean | undefined
        
        /** *defines the scale used for calculating and displaying the `rank`, `domain_from_rank`, and `page_from_rank` values* optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: `one_hundred` — rank values are displayed on a 0–100 scale `one_thousand` — rank values are displayed on a 0–1000 scale default value: `one_thousand` learn more about how this parameter works and how ranking metrics are calculated in [this Help Center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api#rank_scale) */
        rank_scale?: string | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class BacklinksDomainPagesLiveRequestInfo  implements IBacklinksDomainPagesLiveRequestInfo {

    
    /** *domain or subdomain* **required field** a domain or a subdomain should be specified without `https://` and `www.` example: `forbes.com` */

    target?: string | undefined;

    
    /** *the maximum number of returned pages* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *offset in the results array of returned pages* optional field default value: `0` if you specify the `10` value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */

    offset?: number | undefined;

    
    /** *maximum number of elements within internal arrays* optional field you can use this field to limit the number of elements within the following arrays: `referring_links_tld` `referring_links_types` `referring_links_attributes` `referring_links_platform_types` `referring_links_semantic_locations` default value: `10` maximum value: `1000` */

    internal_list_limit?: number | undefined;

    
    /** *set what backlinks to return and count* optional field you can use this field to choose what backlinks will be returned and used for aggregated metrics; possible values:  `all` - all backlinks will be returned and counted; `live` - backlinks found during the last check will be returned and counted; `lost` - lost backlinks will be returned and counted; default value: `live` */

    backlinks_status_type?: string | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, `=`, `<>`, `in`, `not_in`, `like`, `not_like`, `ilike`, `not_ilike`, `match`, `not_match` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['meta.internal_links_count','>','1']` `[['meta.external_links_count','>','2'],'and',['backlinks','>','10']]` `[['first_visited','>','2017-10-23 11:31:45 +00:00'],'and',[['title','like','%seo%'],'or',['referring_domains','>','10']]]` The full list of possible filters is available [here.](/v3/backlinks/filters/?bash) */

    filters?: any[] | undefined;

    
    /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['page_summary.backlinks,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['page_summary.backlinks,desc','page_summary.rank,asc']` */

    order_by?: string[] | undefined;

    
    /** *filter the backlinks of your `target`* optional field you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your `target` you can filter the backlinks by all fields available in the response of [this endpoint](/v3/backlinks/backlinks/live) using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for example: `'backlinks_filters': ['dofollow', '=', true]` */

    backlinks_filters?: any[] | undefined;

    
    /** *indicates if the subdomains of the `target` will be included in the search* optional field if set to `false`, the subdomains will be ignored default value: `true` */

    include_subdomains?: boolean | undefined;

    
    /** *indicates if internal backlinks from subdomains to the `target` will be excluded from the results* optional field if set to `true`, the results will not include data on internal backlinks from subdomains of the same domain as `target` if set to `false`, internal links will be included in the results default value: `true` */

    exclude_internal_backlinks?: boolean | undefined;

    
    /** *defines the scale used for calculating and displaying the `rank`, `domain_from_rank`, and `page_from_rank` values* optional field you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale possible values: `one_hundred` — rank values are displayed on a 0–100 scale `one_thousand` — rank values are displayed on a 0–1000 scale default value: `one_thousand` learn more about how this parameter works and how ranking metrics are calculated in [this Help Center article](https://dataforseo.com/help-center/what_is_rank_in_backlinks_api#rank_scale) */

    rank_scale?: string | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksDomainPagesLiveRequestInfo) {

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
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.internal_list_limit = data["internal_list_limit"];
            this.backlinks_status_type = data["backlinks_status_type"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.backlinks_filters = data["backlinks_filters"];
            this.include_subdomains = data["include_subdomains"];
            this.exclude_internal_backlinks = data["exclude_internal_backlinks"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): BacklinksDomainPagesLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksDomainPagesLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["internal_list_limit"] = this.internal_list_limit;
        data["backlinks_status_type"] = this.backlinks_status_type;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["backlinks_filters"] = this.backlinks_filters;
        data["include_subdomains"] = this.include_subdomains;
        data["exclude_internal_backlinks"] = this.exclude_internal_backlinks;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}