export interface IOnPageLinksRequestInfo   {
        
        /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */
        id?: string | undefined
        
        /** relative page URL
optional field
if you use this field, the API response will contain only links from the specified page
note that in this field you can specify relative URLs only */
        page_from?: string | undefined
        
        /** relative page URL
optional field
if you use this field, the API response will contain only internal links pointing to the specified page
note that in this field you can specify relative URLs only */
        page_to?: string | undefined
        
        /** the maximum number of returned links
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned links
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten links in the results array will be omitted and the data will be provided for the successive links */
        offset?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['direction','=','external']
[['domain_to','<>','example.com'],
'and',
['link_from','not_like','%example.com/blog%']]
[['direction','=','external'],
'and',
[['link_from','like','%example.com/blog%'],'or',['link_from','like','%example.com/help%']]]
The full list of possible filters is available by this link. */
        filters?: any[] | undefined
        
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

export class OnPageLinksRequestInfo  implements IOnPageLinksRequestInfo {
    
    /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */

    id?: string | undefined;
    
    /** relative page URL
optional field
if you use this field, the API response will contain only links from the specified page
note that in this field you can specify relative URLs only */

    page_from?: string | undefined;
    
    /** relative page URL
optional field
if you use this field, the API response will contain only internal links pointing to the specified page
note that in this field you can specify relative URLs only */

    page_to?: string | undefined;
    
    /** the maximum number of returned links
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the results array of returned links
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten links in the results array will be omitted and the data will be provided for the successive links */

    offset?: number | undefined;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['direction','=','external']
[['domain_to','<>','example.com'],
'and',
['link_from','not_like','%example.com/blog%']]
[['direction','=','external'],
'and',
[['link_from','like','%example.com/blog%'],'or',['link_from','like','%example.com/help%']]]
The full list of possible filters is available by this link. */

    filters?: any[] | undefined;
    
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


    constructor(data?: IOnPageLinksRequestInfo) {

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
            this.page_from = data["page_from"];
            this.page_to = data["page_to"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.filters = data["filters"];
            this.search_after_token = data["search_after_token"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageLinksRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageLinksRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["page_from"] = this.page_from;
        data["page_to"] = this.page_to;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["filters"] = this.filters;
        data["search_after_token"] = this.search_after_token;
        data["tag"] = this.tag;
        return data;
    }
}