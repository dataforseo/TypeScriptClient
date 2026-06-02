export interface IOnPageRedirectChainsRequestInfo   {
        
        /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */
        id?: string | undefined
        
        /** page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL */
        url?: string | undefined
        
        /** the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the results array of returned redirect chains
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains */
        offset?: number | undefined
        
        /** array of results filtering parameters
optional field
you can use only one filtering parameter with this endpoint
the following filtering parameter is supported:
is_redirect_loop
the following operators are supported:
regex, not_regex, =, <>
examples:
['is_redirect_loop','=','true']
['is_redirect_loop','<>','false'] */
        filters?: any[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class OnPageRedirectChainsRequestInfo  implements IOnPageRedirectChainsRequestInfo {
    
    /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04” */

    id?: string | undefined;
    
    /** page URL
optional field
absolute URL of the target page
if you use this field, the API response will return only redirect chains which contain the specified URL */

    url?: string | undefined;
    
    /** the maximum number of returned redirect chains
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the results array of returned redirect chains
optional field
default value: 0
maximum value: 2000000
if you specify the 10 value, the first ten redirect chains in the results array will be omitted and the data will be provided for the successive redirect chains */

    offset?: number | undefined;
    
    /** array of results filtering parameters
optional field
you can use only one filtering parameter with this endpoint
the following filtering parameter is supported:
is_redirect_loop
the following operators are supported:
regex, not_regex, =, <>
examples:
['is_redirect_loop','=','true']
['is_redirect_loop','<>','false'] */

    filters?: any[] | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageRedirectChainsRequestInfo) {

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
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): OnPageRedirectChainsRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRedirectChainsRequestInfo();
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
        data["tag"] = this.tag;
        return data;
    }
}