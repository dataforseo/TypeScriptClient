export interface IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo   {
        
        /** domain required field the domain name of the target website the domain should be specified without https:// and www. you can specify page URL, but the results will be specific to the domain in the specified URL */
        target?: string | undefined
        
        /** full name of the location required field if you don’t specify location_code Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: United Kingdom */
        location_name?: string | undefined
        
        /** location code required field if you don’t specify location_name Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: 2840 */
        location_code?: number | undefined
        
        /** full name of the language required field if you don’t specify language_code Note: it is required to specify either language_name or language_code you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: English */
        language_name?: string | undefined
        
        /** language code required field if you don’t specify language_name Note: it is required to specify either language_name or language_code you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: en */
        language_code?: string | undefined
        
        /** display results by item type optional field indicates the type of search results included in the response Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response; possible values: ['organic', 'paid', 'featured_snippet', 'local_pack'] default value: ['organic', 'paid'] */
        item_types?: string[] | undefined
        
        /** include or exclude data from clickstream-based metrics in the result optional field if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response default value: false with this parameter enabled, you will be charged double the price for the request learn more about how clickstream-based metrics are calculated in this help center article */
        include_clickstream_data?: boolean | undefined
        
        /** array of results filtering parameters optional field you can add several filters at once (8 filters maximum) you should set a logical operator and, or between the conditions the following operators are supported: regex, not_regex, , >=, =, <>, in, not_in example: ['metrics.organic.count','>',50] [[['metrics.organic.count','>=',50],'and',['metrics.organic.pos_1','in',[1,5]]], 'or', ['metrics.organic.etv','>=','100']] for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules optional field you can use the same values as in the filters array to sort the results possible sorting types: asc – results will be sorted in the ascending order desc – results will be sorted in the descending order you should use a comma to specify a sorting type example: ['metrics.paid.etv,asc'] Note: you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules example: ['metrics.organic.etv,desc','metrics.paid.count,asc'] default rule: ['metrics.organic.count,desc'] Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array */
        order_by?: string[] | undefined
        
        /** the maximum number of returned domains optional field default value: 100 maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned domains optional field default value: 0 if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */
        offset?: number | undefined
        
        /** maximum rank up to which competitors will be considered optional field default value: 100 if you specify 10 here, we will extract competitors from the top 10 Google search results only */
        max_rank_group?: number | undefined
        
        /** indicates whether to exclude world’s largest websites optional field default value: false set to true if you want to get highly-relevant competitors excluding the websites listed below: wikipedia.org pinterest.com amazon.com google.com facebook.com wordpress.com medium.com quora.com reddit.com youtube.com ebay.com uol.com.br instagram.com olx.com twitter.com linkedin.com slideshare.net */
        exclude_top_domains?: boolean | undefined
        
        /** exclude domains from the results optional field use this parameter to exclude specific domains from the results Note: you can specify up to 1000 domains in this array example: 'exclude_domains': [ 'reddit.com', 'youtube.com' ] */
        exclude_domains?: string[] | undefined
        
        /** additional domains for improving results accuracy optional field to improve the accuracy of the result, you can specify domains that are known to intersect with the target in SERPs; if you use this array, metrics in the result will be based on SERPs where both target website and intersecting_domains appear; Note: you can specify up to 20 domains in this array */
        intersecting_domains?: string[] | undefined
        
        /** ignore highly similar keywords optional field if set to true, only core keywords will be returned, all highly similar keywords will be excluded; default value: false */
        ignore_synonyms?: boolean | undefined
        
        /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo  implements IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo {

    
    /** domain required field the domain name of the target website the domain should be specified without https:// and www. you can specify page URL, but the results will be specific to the domain in the specified URL */

    target?: string | undefined;

    
    /** full name of the location required field if you don’t specify location_code Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_name by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: United Kingdom */

    location_name?: string | undefined;

    
    /** location code required field if you don’t specify location_name Note: it is required to specify either location_name or location_code you can receive the list of available locations with their location_code by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: 2840 */

    location_code?: number | undefined;

    
    /** full name of the language required field if you don’t specify language_code Note: it is required to specify either language_name or language_code you can receive the list of available languages with their language_name by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: English */

    language_name?: string | undefined;

    
    /** language code required field if you don’t specify language_name Note: it is required to specify either language_name or language_code you can receive the list of available languages with their language_code by making a separate request to the https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages example: en */

    language_code?: string | undefined;

    
    /** display results by item type optional field indicates the type of search results included in the response Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response; possible values: ['organic', 'paid', 'featured_snippet', 'local_pack'] default value: ['organic', 'paid'] */

    item_types?: string[] | undefined;

    
    /** include or exclude data from clickstream-based metrics in the result optional field if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response default value: false with this parameter enabled, you will be charged double the price for the request learn more about how clickstream-based metrics are calculated in this help center article */

    include_clickstream_data?: boolean | undefined;

    
    /** array of results filtering parameters optional field you can add several filters at once (8 filters maximum) you should set a logical operator and, or between the conditions the following operators are supported: regex, not_regex, , >=, =, <>, in, not_in example: ['metrics.organic.count','>',50] [[['metrics.organic.count','>=',50],'and',['metrics.organic.pos_1','in',[1,5]]], 'or', ['metrics.organic.etv','>=','100']] for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;

    
    /** results sorting rules optional field you can use the same values as in the filters array to sort the results possible sorting types: asc – results will be sorted in the ascending order desc – results will be sorted in the descending order you should use a comma to specify a sorting type example: ['metrics.paid.etv,asc'] Note: you can set no more than three sorting rules in a single request you should use a comma to separate several sorting rules example: ['metrics.organic.etv,desc','metrics.paid.count,asc'] default rule: ['metrics.organic.count,desc'] Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array */

    order_by?: string[] | undefined;

    
    /** the maximum number of returned domains optional field default value: 100 maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned domains optional field default value: 0 if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */

    offset?: number | undefined;

    
    /** maximum rank up to which competitors will be considered optional field default value: 100 if you specify 10 here, we will extract competitors from the top 10 Google search results only */

    max_rank_group?: number | undefined;

    
    /** indicates whether to exclude world’s largest websites optional field default value: false set to true if you want to get highly-relevant competitors excluding the websites listed below: wikipedia.org pinterest.com amazon.com google.com facebook.com wordpress.com medium.com quora.com reddit.com youtube.com ebay.com uol.com.br instagram.com olx.com twitter.com linkedin.com slideshare.net */

    exclude_top_domains?: boolean | undefined;

    
    /** exclude domains from the results optional field use this parameter to exclude specific domains from the results Note: you can specify up to 1000 domains in this array example: 'exclude_domains': [ 'reddit.com', 'youtube.com' ] */

    exclude_domains?: string[] | undefined;

    
    /** additional domains for improving results accuracy optional field to improve the accuracy of the result, you can specify domains that are known to intersect with the target in SERPs; if you use this array, metrics in the result will be based on SERPs where both target website and intersecting_domains appear; Note: you can specify up to 20 domains in this array */

    intersecting_domains?: string[] | undefined;

    
    /** ignore highly similar keywords optional field if set to true, only core keywords will be returned, all highly similar keywords will be excluded; default value: false */

    ignore_synonyms?: boolean | undefined;

    
    /** user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo) {

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
            this.item_types = data["item_types"];
            this.include_clickstream_data = data["include_clickstream_data"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.max_rank_group = data["max_rank_group"];
            this.exclude_top_domains = data["exclude_top_domains"];
            this.exclude_domains = data["exclude_domains"];
            this.intersecting_domains = data["intersecting_domains"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo();
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
        data["item_types"] = this.item_types;
        data["include_clickstream_data"] = this.include_clickstream_data;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["max_rank_group"] = this.max_rank_group;
        data["exclude_top_domains"] = this.exclude_top_domains;
        data["exclude_domains"] = this.exclude_domains;
        data["intersecting_domains"] = this.intersecting_domains;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["tag"] = this.tag;
        return data;
    }
}