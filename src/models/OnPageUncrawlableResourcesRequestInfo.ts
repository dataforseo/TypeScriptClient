export interface IOnPageUncrawlableResourcesRequestInfo   {
        
        /** *ID of the task* **required field** you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint example: '07131248-1535-0216-1000-17384017ad04' */
        id?: string | undefined
        
        /** *the maximum number of returned uncrawlable resources* optional field default value: `100` maximum value: `1000` */
        limit?: number | undefined
        
        /** *offset in the results array of returned uncrawlable resources* optional field default value: `0`  maximum value: `2000000` if you specify the `10` value, the first ten invalid resources in the results array will be omitted and the data will be provided for the successive invalid resources */
        offset?: number | undefined
        
        /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['meta.content_type,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['meta.content_type,asc','fetch_time,desc']` */
        order_by?: string[] | undefined
        
        /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, ``, `>=`, `=`, `<>`, `in`, `not_in`, `like`, `not_like` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `[['meta.content_type','=','image/jpeg'],'and',['url','not_like','%/help-center/%']]` The full list of possible filters is available [by this link.](/v3/on_page/filters_and_thresholds/?bash) */
        filters?: any[] | undefined

    [key: string]: any;

    }

export class OnPageUncrawlableResourcesRequestInfo  implements IOnPageUncrawlableResourcesRequestInfo {

    
    /** *ID of the task* **required field** you can get this ID in the response of the [Task POST](/v3/on_page/task_post/) endpoint example: '07131248-1535-0216-1000-17384017ad04' */

    id?: string | undefined;

    
    /** *the maximum number of returned uncrawlable resources* optional field default value: `100` maximum value: `1000` */

    limit?: number | undefined;

    
    /** *offset in the results array of returned uncrawlable resources* optional field default value: `0`  maximum value: `2000000` if you specify the `10` value, the first ten invalid resources in the results array will be omitted and the data will be provided for the successive invalid resources */

    offset?: number | undefined;

    
    /** *results sorting rules* optional field you can use the same values as in the `filters` array to sort the results possible sorting types: `asc` - results will be sorted in the ascending order `desc` - results will be sorted in the descending order you should use a comma to set up a sorting type example: `['meta.content_type,desc']` **note that you can set no more than three sorting rules in a single request** you should use a comma to separate several sorting rules example: `['meta.content_type,asc','fetch_time,desc']` */

    order_by?: string[] | undefined;

    
    /** *array of results filtering parameters* optional field **you can add several filters at once (8 filters maximum)** you should set a logical operator `and`, `or` between the conditions the following operators are supported: `regex`, `not_regex`, ``, `>=`, `=`, `<>`, `in`, `not_in`, `like`, `not_like` you can use the `%` operator with `like` and `not_like` to match any string of zero or more characters example: `[['meta.content_type','=','image/jpeg'],'and',['url','not_like','%/help-center/%']]` The full list of possible filters is available [by this link.](/v3/on_page/filters_and_thresholds/?bash) */

    filters?: any[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageUncrawlableResourcesRequestInfo) {

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
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.order_by = data["order_by"];
            this.filters = data["filters"];
        }
    }

    static fromJS(data: any): OnPageUncrawlableResourcesRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageUncrawlableResourcesRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["order_by"] = this.order_by;
        data["filters"] = this.filters;
        return data;
    }
}