export interface IOnPageResourcesRequestInfo   {
        
        /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */
        id?: string | undefined
        
        /** page URL
optional field
specify this field if you want to get the resources for a specific page
note that to obtain resource’s meta from a particular URL, you should specify the URL in this field;
if you do not indicate a url when setting a task, resource’s meta in the results will be returned based on the data from the page where our crawler first saw the resource */
        url?: string | undefined
        
        /** the maximum number of returned resources
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned resources
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten resources in the results array will be omitted and the data will be provided for the successive resources */
        offset?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['resource_type','=','stylesheet']
[['resource_type','=','image'],
'and',['checks.is_https','=',false]]
[['fetch_timing.duration_time','>',1],'and',[['total_transfer_size','>',100],'or',['checks.high_loading_time','=',true]]]
The full list of possible filters is available by this link. */
        filters?: any[] | undefined
        
        /** filter the resources by relevant pages
optional field
you can use this field to obtain resources from pages matching to the defined parameters
you can apply the same filters here as available for the pages endpoint
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['checks.no_image_title','=',true] */
        relevant_pages_filters?: string[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['size,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['size,desc','fetch_timing.fetch_end,desc'] */
        order_by?: string[] | undefined
        
        /** token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 20,000 results in a single request;
by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task ;
Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request */
        search_after_token?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class OnPageResourcesRequestInfo  implements IOnPageResourcesRequestInfo {
    
    /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */

    id?: string | undefined;
    
    /** page URL
optional field
specify this field if you want to get the resources for a specific page
note that to obtain resource’s meta from a particular URL, you should specify the URL in this field;
if you do not indicate a url when setting a task, resource’s meta in the results will be returned based on the data from the page where our crawler first saw the resource */

    url?: string | undefined;
    
    /** the maximum number of returned resources
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the results array of returned resources
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten resources in the results array will be omitted and the data will be provided for the successive resources */

    offset?: number | undefined;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['resource_type','=','stylesheet']
[['resource_type','=','image'],
'and',['checks.is_https','=',false]]
[['fetch_timing.duration_time','>',1],'and',[['total_transfer_size','>',100],'or',['checks.high_loading_time','=',true]]]
The full list of possible filters is available by this link. */

    filters?: any[] | undefined;
    
    /** filter the resources by relevant pages
optional field
you can use this field to obtain resources from pages matching to the defined parameters
you can apply the same filters here as available for the pages endpoint
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['checks.no_image_title','=',true] */

    relevant_pages_filters?: string[] | undefined;
    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['size,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['size,desc','fetch_timing.fetch_end,desc'] */

    order_by?: string[] | undefined;
    
    /** token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 20,000 results in a single request;
by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task ;
Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request */

    search_after_token?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageResourcesRequestInfo) {

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
            this.url = data["url"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.filters = data["filters"];
            this.relevant_pages_filters = data["relevant_pages_filters"];
            this.order_by = data["order_by"];
            this.search_after_token = data["search_after_token"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageResourcesRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageResourcesRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["url"] = this.url;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["filters"] = this.filters;
        data["relevant_pages_filters"] = this.relevant_pages_filters;
        data["order_by"] = this.order_by;
        data["search_after_token"] = this.search_after_token;
        data["tag"] = this.tag;
        return data;
    }
}