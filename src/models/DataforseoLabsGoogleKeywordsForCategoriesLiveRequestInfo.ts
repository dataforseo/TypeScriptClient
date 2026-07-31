export interface IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo   {
        
        /** product and service categoriesrequired fieldThe maximum number of categories you can specify: 20you can download the full list of possible categories */
        category_codes?: string[] | undefined
        
        /** full name of the locationrequired field if you don't specify location_codeNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_name by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:United Kingdom */
        location_name?: string | undefined
        
        /** unique location identifierrequired field if you don't specify location_nameNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_code by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:2840 */
        location_code?: number | undefined
        
        /** full name of the languagerequired field if you don't specify language_codeNote: it is required to specify either language_name or language_codeyou can receive the list of available languages with their language_name by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:English */
        language_name?: string | undefined
        
        /** unique language identifierrequired field if you don't specify language_nameNote: it is required to specify either language_name or language_codeyou can receive the list of available languages with their language_code by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:en */
        language_code?: string | undefined
        
        /** category intersectionsoptional fieldif set to true, you will get keywords featured in all specified categories;if set to false, you will keywords that are specified in any of the specified categories;default value: true */
        category_intersection?: boolean | undefined
        
        /** include data from SERP for each keywordoptional fieldif set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the responsedefault value: false */
        include_serp_info?: boolean | undefined
        
        /** include or exclude data from clickstream-based metrics in the resultoptional fieldif the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the responsedefault value: falsewith this parameter enabled, you will be charged double the price for the requestlearn more about how clickstream-based metrics are calculated in this help center article */
        include_clickstream_data?: boolean | undefined
        
        /** ignore highly similar keywordsoptional fieldif set to true only core keywords will be returned, all highly similar keywords will be excluded;default value: false */
        ignore_synonyms?: boolean | undefined
        
        /** the maximum number of keywords in the results arrayoptional fielddefault value: 100maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned keywordsoptional fielddefault value: 0if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywordsNote: we recommend using this parameter only when retrieving up to 10,000 resultsfor retrieving over 10,000 results, use the offset_token instead. */
        offset?: number | undefined
        
        /** offset token for subsequent requestsoptional fieldprovided in the identical filed of the response to each request;use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;offset_token values are unique for each subsequent taskNote: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.learn more about this parameter on our Help Center */
        offset_token?: string | undefined
        
        /** array of results filtering parametersoptional fieldyou can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:regex, not_regex, , >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_likeyou can use the % operator with like and not_like,as well as ilike, not_ilike to match any string of zero or more charactersexample:['keyword_info.search_volume','>',0][['keyword_info.search_volume','in',[0,1000]],'and',['keyword_info.competition_level','=','LOW']][['keyword_info.search_volume','>',100],'and',[['keyword_info.cpc','<',0.5],'or',['keyword_info.high_top_of_page_bid','<=',0.5]]]for more information about filters, please refer to Dataforseo Labs - Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rulesoptional fieldyou can use the same values as in the filters array to sort the resultspossible sorting types:asc - results will be sorted in the ascending orderdesc - results will be sorted in the descending orderyou should use a comma to set up a sorting typeexample:['keyword_info.competition,desc']default rule:['keyword_info.search_volume,desc']note that you can set no more than three sorting rules in a single requestyou should use a comma to separate several sorting rulesexample:['keyword_info.search_volume,desc','keyword_info.competition,asc'] */
        order_by?: string[] | undefined
        
        /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo  implements IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo {

    
    /** product and service categoriesrequired fieldThe maximum number of categories you can specify: 20you can download the full list of possible categories */

    category_codes?: string[] | undefined;

    
    /** full name of the locationrequired field if you don't specify location_codeNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_name by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:United Kingdom */

    location_name?: string | undefined;

    
    /** unique location identifierrequired field if you don't specify location_nameNote: it is required to specify either location_name or location_codeyou can receive the list of available locations with their location_code by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:2840 */

    location_code?: number | undefined;

    
    /** full name of the languagerequired field if you don't specify language_codeNote: it is required to specify either language_name or language_codeyou can receive the list of available languages with their language_name by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:English */

    language_name?: string | undefined;

    
    /** unique language identifierrequired field if you don't specify language_nameNote: it is required to specify either language_name or language_codeyou can receive the list of available languages with their language_code by making a separate request to thehttps://api.dataforseo.com/v3/dataforseo_labs/locations_and_languagesexample:en */

    language_code?: string | undefined;

    
    /** category intersectionsoptional fieldif set to true, you will get keywords featured in all specified categories;if set to false, you will keywords that are specified in any of the specified categories;default value: true */

    category_intersection?: boolean | undefined;

    
    /** include data from SERP for each keywordoptional fieldif set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the responsedefault value: false */

    include_serp_info?: boolean | undefined;

    
    /** include or exclude data from clickstream-based metrics in the resultoptional fieldif the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the responsedefault value: falsewith this parameter enabled, you will be charged double the price for the requestlearn more about how clickstream-based metrics are calculated in this help center article */

    include_clickstream_data?: boolean | undefined;

    
    /** ignore highly similar keywordsoptional fieldif set to true only core keywords will be returned, all highly similar keywords will be excluded;default value: false */

    ignore_synonyms?: boolean | undefined;

    
    /** the maximum number of keywords in the results arrayoptional fielddefault value: 100maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned keywordsoptional fielddefault value: 0if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywordsNote: we recommend using this parameter only when retrieving up to 10,000 resultsfor retrieving over 10,000 results, use the offset_token instead. */

    offset?: number | undefined;

    
    /** offset token for subsequent requestsoptional fieldprovided in the identical filed of the response to each request;use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;offset_token values are unique for each subsequent taskNote: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.learn more about this parameter on our Help Center */

    offset_token?: string | undefined;

    
    /** array of results filtering parametersoptional fieldyou can add several filters at once (8 filters maximum)you should set a logical operator and, or between the conditionsthe following operators are supported:regex, not_regex, , >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_likeyou can use the % operator with like and not_like,as well as ilike, not_ilike to match any string of zero or more charactersexample:['keyword_info.search_volume','>',0][['keyword_info.search_volume','in',[0,1000]],'and',['keyword_info.competition_level','=','LOW']][['keyword_info.search_volume','>',100],'and',[['keyword_info.cpc','<',0.5],'or',['keyword_info.high_top_of_page_bid','<=',0.5]]]for more information about filters, please refer to Dataforseo Labs - Filters or this help center guide */

    filters?: any[] | undefined;

    
    /** results sorting rulesoptional fieldyou can use the same values as in the filters array to sort the resultspossible sorting types:asc - results will be sorted in the ascending orderdesc - results will be sorted in the descending orderyou should use a comma to set up a sorting typeexample:['keyword_info.competition,desc']default rule:['keyword_info.search_volume,desc']note that you can set no more than three sorting rules in a single requestyou should use a comma to separate several sorting rulesexample:['keyword_info.search_volume,desc','keyword_info.competition,asc'] */

    order_by?: string[] | undefined;

    
    /** user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo) {

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
            this.category_codes = data["category_codes"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.category_intersection = data["category_intersection"];
            this.include_serp_info = data["include_serp_info"];
            this.include_clickstream_data = data["include_clickstream_data"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category_codes"] = this.category_codes;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["category_intersection"] = this.category_intersection;
        data["include_serp_info"] = this.include_serp_info;
        data["include_clickstream_data"] = this.include_clickstream_data;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}