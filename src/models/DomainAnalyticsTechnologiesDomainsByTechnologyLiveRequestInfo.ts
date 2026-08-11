export interface IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo   {
        
        /** *target technology paths* **required field if you don't specify `groups`, `technologies`, `keywords` or `categories`** at least one field (`technology_paths`, `groups`, `technologies`, `keywords` or `categories`) must be set; each technology path should be specified as a separate object containing 'path' and 'name', where 'path' is specified as '$group_id.$category_id' and 'name' - as the name of the target technology;  each object with a technology path should be separated with a comma you can find the full list of technology group ids, category ids and technology names [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technology paths in this array example: `[{'path': 'content.cms','name': 'wordpress'}, {'path': 'marketing.crm','name': 'salesforce'}]` */
        technology_paths?: string[] | undefined
        
        /** *ids of the target technology groups* **required field if you don't specify `technologies`, `technology_paths`, `keywords` or `categories`** you can find the full list of technology group ids [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technology groups in this array example: `['sales', 'marketing']` */
        groups?: string[] | undefined
        
        /** *ids of the target technology categories* **required field if you don't specify `groups`, `technology_paths`, `keywords` or `technologies`** you can find the full list of technology category ids [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technology categories in this array example: `['payment_processors','crm']` */
        categories?: string[] | undefined
        
        /** *target technologies* **required field if you don't specify `groups`, `technology_paths`, `keywords` or `categories`** you can find the full list of technologies you can specify here [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technologies in this array example: `['Google Pay','Salesforce']` */
        technologies?: string[] | undefined
        
        /** *target keywords in the domain's title, description or meta keywords* **required field if you don't specify `groups`, `technology_paths`, `technologies` or `categories`** optional field you can specify the maximum of 10 keywords; UTF-8 encoding; example: `['seo','software']` learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */
        keywords?: string[] | undefined
        
        /** *search mode* optional field possible search mode types: `as_is` - search for results exactly matching the specified group ids, category ids, or technology names `entry` - search for results matching a part of the specified group ids, category ids, or technology names default value: `as_is` */
        mode?: string | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: ``, `>=`, `=`, `<>`, `in`, `not_in`, `like`, `not_like` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['country_iso_code','=','US']` `[['country_iso_code','=','US'],'and',['domain_rank','>',100]]` `[['domain_rank','>',100],'and',[['country_iso_code','=','US'],'or',['country_iso_code','=','CA']]]` for more information about filters, please refer to [Domain Analytics Technologies API - Filters](/v3/domain_analytics/technologies/filters) */
        filters?: any[] | undefined
        
        /** *results sorting rules* optional field available fields:  `domain_rank`, `domain`, `last_visited`, `country_iso_code`, `language_code`, `content_language_code` possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['last_visited,desc']` default rule: `['domain_rank,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['last_visited,desc','domain_rank,desc']` */
        order_by?: string[] | undefined
        
        /** *the maximum number of returned domains* optional field default value: `100` maximum value: `10000` */
        limit?: number | undefined
        
        /** *offset in the results array of returned domains* optional field default value: `0` if you specify the `10` value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains; **Note:** the maximum value is `9999`, the sum of `limit` and `offset` must not exceed `10000`; use the `offset_token` if you would like to offset more results */
        offset?: number | undefined
        
        /** *token for subsequent requests* optional field provided in the identical filed of the response to each request; use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request; by specifying the unique `offset_token` value from the response array, you will get the subsequent results of the initial task; `offset_token` values are unique for each subsequent task  **Note:** if the `offset_token` is specified in the request, all other parameters should be identical to the previous request learn more about this parameter on our [Help Center](https://dataforseo.com/help-center/what-is-the-difference-between-the-offset-and-offset_token-parameters#offset_token) */
        offset_token?: string | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo  implements IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo {

    
    /** *target technology paths* **required field if you don't specify `groups`, `technologies`, `keywords` or `categories`** at least one field (`technology_paths`, `groups`, `technologies`, `keywords` or `categories`) must be set; each technology path should be specified as a separate object containing 'path' and 'name', where 'path' is specified as '$group_id.$category_id' and 'name' - as the name of the target technology;  each object with a technology path should be separated with a comma you can find the full list of technology group ids, category ids and technology names [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technology paths in this array example: `[{'path': 'content.cms','name': 'wordpress'}, {'path': 'marketing.crm','name': 'salesforce'}]` */

    technology_paths?: string[] | undefined;

    
    /** *ids of the target technology groups* **required field if you don't specify `technologies`, `technology_paths`, `keywords` or `categories`** you can find the full list of technology group ids [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technology groups in this array example: `['sales', 'marketing']` */

    groups?: string[] | undefined;

    
    /** *ids of the target technology categories* **required field if you don't specify `groups`, `technology_paths`, `keywords` or `technologies`** you can find the full list of technology category ids [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technology categories in this array example: `['payment_processors','crm']` */

    categories?: string[] | undefined;

    
    /** *target technologies* **required field if you don't specify `groups`, `technology_paths`, `keywords` or `categories`** you can find the full list of technologies you can specify here [on this page](/v3/domain_analytics/technologies/technologies) **note:** you can specify up to 10 technologies in this array example: `['Google Pay','Salesforce']` */

    technologies?: string[] | undefined;

    
    /** *target keywords in the domain's title, description or meta keywords* **required field if you don't specify `groups`, `technology_paths`, `technologies` or `categories`** optional field you can specify the maximum of 10 keywords; UTF-8 encoding; example: `['seo','software']` learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) */

    keywords?: string[] | undefined;

    
    /** *search mode* optional field possible search mode types: `as_is` - search for results exactly matching the specified group ids, category ids, or technology names `entry` - search for results matching a part of the specified group ids, category ids, or technology names default value: `as_is` */

    mode?: string | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: ``, `>=`, `=`, `<>`, `in`, `not_in`, `like`, `not_like` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['country_iso_code','=','US']` `[['country_iso_code','=','US'],'and',['domain_rank','>',100]]` `[['domain_rank','>',100],'and',[['country_iso_code','=','US'],'or',['country_iso_code','=','CA']]]` for more information about filters, please refer to [Domain Analytics Technologies API - Filters](/v3/domain_analytics/technologies/filters) */

    filters?: any[] | undefined;

    
    /** *results sorting rules* optional field available fields:  `domain_rank`, `domain`, `last_visited`, `country_iso_code`, `language_code`, `content_language_code` possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['last_visited,desc']` default rule: `['domain_rank,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['last_visited,desc','domain_rank,desc']` */

    order_by?: string[] | undefined;

    
    /** *the maximum number of returned domains* optional field default value: `100` maximum value: `10000` */

    limit?: number | undefined;

    
    /** *offset in the results array of returned domains* optional field default value: `0` if you specify the `10` value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains; **Note:** the maximum value is `9999`, the sum of `limit` and `offset` must not exceed `10000`; use the `offset_token` if you would like to offset more results */

    offset?: number | undefined;

    
    /** *token for subsequent requests* optional field provided in the identical filed of the response to each request; use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request; by specifying the unique `offset_token` value from the response array, you will get the subsequent results of the initial task; `offset_token` values are unique for each subsequent task  **Note:** if the `offset_token` is specified in the request, all other parameters should be identical to the previous request learn more about this parameter on our [Help Center](https://dataforseo.com/help-center/what-is-the-difference-between-the-offset-and-offset_token-parameters#offset_token) */

    offset_token?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo) {

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
            this.technology_paths = data["technology_paths"];
            this.groups = data["groups"];
            this.categories = data["categories"];
            this.technologies = data["technologies"];
            this.keywords = data["keywords"];
            this.mode = data["mode"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["technology_paths"] = this.technology_paths;
        data["groups"] = this.groups;
        data["categories"] = this.categories;
        data["technologies"] = this.technologies;
        data["keywords"] = this.keywords;
        data["mode"] = this.mode;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
        return data;
    }
}