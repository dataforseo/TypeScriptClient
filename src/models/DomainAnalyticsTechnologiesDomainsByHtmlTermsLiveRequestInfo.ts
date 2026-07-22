export interface IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo   {
        
        /** target search terms
required field
specify target HTML elements, tags, attributes, their content or all of the above
if you specify more than one search term, you will receive only the domains containing all of the specified terms in the HTML code of their homepage
maximum number of search terms you can specify: 10
example:
['data-attrid'] */
        search_terms?: string[] | undefined
        
        /** target keywords in the domain’s title, description or meta keywords
optional field
UTF-8 encoding
maximum number of keywords you can specify: 10
example:
['seo','software']
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[] | undefined
        
        /** search mode
optional field
possible search mode types:
strict_entry – search for results exactly matching the order, intervals and separators in the specified search terms
entry – search for results ignoring the order, intervals and separators in the specified search terms
default value: entry */
        mode?: string | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['domain','like','%seo%']
[['country_iso_code','=','US'],
'and',
['domain_rank','>',100]]
[['domain_rank','>',100],
'and',
[['country_iso_code','=','US'],'or',['country_iso_code','=','CA']]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
available fields:
domain_rank, domain, last_visited, country_iso_code, language_code, content_language_code
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['last_visited,desc']
default rule:
['domain_rank,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['last_visited,desc','domain_rank,desc'] */
        order_by?: string[] | undefined
        
        /** the maximum number of returned domains
optional field
default value: 100
maximum value: 10000 */
        limit?: number | undefined
        
        /** offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains;
Note: the maximum value is 9999, the sum of limit and offset must not exceed 10000;
use the offset_token if you would like to offset more results */
        offset?: number | undefined
        
        /** token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request
learn more about this parameter on our Help Center */
        offset_token?: string | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo  implements IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo {

    
    /** target search terms
required field
specify target HTML elements, tags, attributes, their content or all of the above
if you specify more than one search term, you will receive only the domains containing all of the specified terms in the HTML code of their homepage
maximum number of search terms you can specify: 10
example:
['data-attrid'] */

    search_terms?: string[] | undefined;

    
    /** target keywords in the domain’s title, description or meta keywords
optional field
UTF-8 encoding
maximum number of keywords you can specify: 10
example:
['seo','software']
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[] | undefined;

    
    /** search mode
optional field
possible search mode types:
strict_entry – search for results exactly matching the order, intervals and separators in the specified search terms
entry – search for results ignoring the order, intervals and separators in the specified search terms
default value: entry */

    mode?: string | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['domain','like','%seo%']
[['country_iso_code','=','US'],
'and',
['domain_rank','>',100]]
[['domain_rank','>',100],
'and',
[['country_iso_code','=','US'],'or',['country_iso_code','=','CA']]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters */

    filters?: any[] | undefined;

    
    /** results sorting rules
optional field
available fields:
domain_rank, domain, last_visited, country_iso_code, language_code, content_language_code
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['last_visited,desc']
default rule:
['domain_rank,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['last_visited,desc','domain_rank,desc'] */

    order_by?: string[] | undefined;

    
    /** the maximum number of returned domains
optional field
default value: 100
maximum value: 10000 */

    limit?: number | undefined;

    
    /** offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains;
Note: the maximum value is 9999, the sum of limit and offset must not exceed 10000;
use the offset_token if you would like to offset more results */

    offset?: number | undefined;

    
    /** token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request
learn more about this parameter on our Help Center */

    offset_token?: string | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo) {

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
            this.search_terms = data["search_terms"];
            this.keywords = data["keywords"];
            this.mode = data["mode"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search_terms"] = this.search_terms;
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