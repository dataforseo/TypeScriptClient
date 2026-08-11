export interface IOnPageKeywordDensityRequestInfo   {
        
        /** *ID of the task* **required field** you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint example: '07131248-1535-0216-1000-17384017ad04' */
        id?: string | undefined
        
        /** *number of words for a keyword* **required field** possible values: `1`, `2`, `3`, `4`, `5` */
        keyword_length?: number | undefined
        
        /** *page URL* optional field **if you do not specify a page here, the results will be provided for the whole website** if you use this field, the API response will contain only keywords from the specified page a page should be specified with absolute URL (including `http://` or `https://`) */
        url?: string | undefined
        
        /** *the maximum number of returned keywords* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, `=`, `<>`, `in`, `not_in`, `like`, `not_like` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['keyword','=','%seo%']` `[['keyword','=','%seo%'],'and',['frequency','','6'],'or',['density','>','0.02']]]` The full list of possible filters is available [by this link.](/v3/on_page/filters_and_thresholds/?bash) */
        filters?: any[] | undefined
        
        /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['frequency,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['keyword,asc','frequency,desc']` */
        order_by?: string[] | undefined
        
        /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class OnPageKeywordDensityRequestInfo  implements IOnPageKeywordDensityRequestInfo {

    
    /** *ID of the task* **required field** you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint example: '07131248-1535-0216-1000-17384017ad04' */

    id?: string | undefined;

    
    /** *number of words for a keyword* **required field** possible values: `1`, `2`, `3`, `4`, `5` */

    keyword_length?: number | undefined;

    
    /** *page URL* optional field **if you do not specify a page here, the results will be provided for the whole website** if you use this field, the API response will contain only keywords from the specified page a page should be specified with absolute URL (including `http://` or `https://`) */

    url?: string | undefined;

    
    /** *the maximum number of returned keywords* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, `=`, `<>`, `in`, `not_in`, `like`, `not_like` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `['keyword','=','%seo%']` `[['keyword','=','%seo%'],'and',['frequency','','6'],'or',['density','>','0.02']]]` The full list of possible filters is available [by this link.](/v3/on_page/filters_and_thresholds/?bash) */

    filters?: any[] | undefined;

    
    /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['frequency,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['keyword,asc','frequency,desc']` */

    order_by?: string[] | undefined;

    
    /** *user-defined task identifier* optional field *the character limit is 255* you can use this parameter to identify the task and match it with the result you will find the specified `tag` value in the `data` object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageKeywordDensityRequestInfo) {

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
            this.id = data["id"];
            this.keyword_length = data["keyword_length"];
            this.url = data["url"];
            this.limit = data["limit"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageKeywordDensityRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageKeywordDensityRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["keyword_length"] = this.keyword_length;
        data["url"] = this.url;
        data["limit"] = this.limit;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}