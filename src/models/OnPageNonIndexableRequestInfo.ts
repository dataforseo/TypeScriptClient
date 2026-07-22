export interface IOnPageNonIndexableRequestInfo   {
        
        /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */
        id?: string | undefined
        
        /** the maximum number of returned pages
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned pages
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */
        offset?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['reason','=','robots_txt'][['reason','<>','robots_txt'],
'and',
['url','not_like','%/wp-admin/%']]
[['url','not_like','%/wp-admin/%'],
'and',
[['reason','<>','meta_tag'],'or',['reason','<>','http_header']]]
The full list of possible filters is available by this link. */
        filters?: any[] | undefined

    [key: string]: any;

    }

export class OnPageNonIndexableRequestInfo  implements IOnPageNonIndexableRequestInfo {

    
    /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */

    id?: string | undefined;

    
    /** the maximum number of returned pages
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned pages
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */

    offset?: number | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['reason','=','robots_txt'][['reason','<>','robots_txt'],
'and',
['url','not_like','%/wp-admin/%']]
[['url','not_like','%/wp-admin/%'],
'and',
[['reason','<>','meta_tag'],'or',['reason','<>','http_header']]]
The full list of possible filters is available by this link. */

    filters?: any[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageNonIndexableRequestInfo) {

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
            this.filters = data["filters"];
        }
    }

    static fromJS(data: any): OnPageNonIndexableRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageNonIndexableRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["filters"] = this.filters;
        return data;
    }
}