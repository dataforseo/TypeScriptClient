export interface IContentAnalysisSearchLiveRequestInfo   {
        
        /** target keyword
required field
UTF-8 encoding
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
'keyword': '\'tesla palo alto\''
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** target keyword fields and target keywords
optional field
use this parameter to filter the dataset by keywords that certain fields should contain;
fields you can specify: title, main_title, previous_title, snippet
you can indicate several fields;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
'keyword_fields': {
    'snippet': '\'logitech mouse\'',
    'main_title': 'sale'
} */
        keyword_fields?: { [key: string]: string; } | undefined
        
        /** target page types
optional field
use this parameter to filter the dataset by page types
possible values:
'ecommerce', 'news', 'blogs', 'message-boards', 'organization' */
        page_type?: string[] | undefined
        
        /** results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is */
        search_mode?: string | undefined
        
        /** the maximum number of returned citations
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['country','=', 'US']
[['domain_rank','>',800],'and',['content_info.connotation_types.negative','>',0.9]]
[['domain_rank','>',800],
'and',
[['page_types','has','ecommerce'],
'or',
['content_info.text_category','has',10994]]]
for more information about filters, please refer to Content Analysis API – Filters */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['content_info.sentiment_connotations.anger,desc']
default rule:
['content_info.sentiment_connotations.anger,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['content_info.sentiment_connotations.anger,desc','keyword_data.keyword_info.cpc,desc'] */
        order_by?: string[] | undefined
        
        /** offset in the results array of returned citations
optional field
default value: 0
if you specify the 10 value, the first ten citations in the results array will be omitted and the data will be provided for the successive citations
Note: we recommend using this parameter only when retrieving up to 10,000 results
for retrieving over 10,000 results, use the offset_token instead. */
        offset?: number | undefined
        
        /** offset token for subsequent requests
optional field
provided in the identical field of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task
learn more about this parameter on our Help Center */
        offset_token?: string | undefined
        
        /** defines the scale used for calculating and displaying the domain_rank, and url_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works in this Help Center article */
        rank_scale?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class ContentAnalysisSearchLiveRequestInfo  implements IContentAnalysisSearchLiveRequestInfo {

    
    /** target keyword
required field
UTF-8 encoding
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
'keyword': '\'tesla palo alto\''
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;

    
    /** target keyword fields and target keywords
optional field
use this parameter to filter the dataset by keywords that certain fields should contain;
fields you can specify: title, main_title, previous_title, snippet
you can indicate several fields;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
'keyword_fields': {
    'snippet': '\'logitech mouse\'',
    'main_title': 'sale'
} */

    keyword_fields?: { [key: string]: string; } | undefined;

    
    /** target page types
optional field
use this parameter to filter the dataset by page types
possible values:
'ecommerce', 'news', 'blogs', 'message-boards', 'organization' */

    page_type?: string[] | undefined;

    
    /** results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is */

    search_mode?: string | undefined;

    
    /** the maximum number of returned citations
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;

    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['country','=', 'US']
[['domain_rank','>',800],'and',['content_info.connotation_types.negative','>',0.9]]
[['domain_rank','>',800],
'and',
[['page_types','has','ecommerce'],
'or',
['content_info.text_category','has',10994]]]
for more information about filters, please refer to Content Analysis API – Filters */

    filters?: any[] | undefined;

    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
['content_info.sentiment_connotations.anger,desc']
default rule:
['content_info.sentiment_connotations.anger,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['content_info.sentiment_connotations.anger,desc','keyword_data.keyword_info.cpc,desc'] */

    order_by?: string[] | undefined;

    
    /** offset in the results array of returned citations
optional field
default value: 0
if you specify the 10 value, the first ten citations in the results array will be omitted and the data will be provided for the successive citations
Note: we recommend using this parameter only when retrieving up to 10,000 results
for retrieving over 10,000 results, use the offset_token instead. */

    offset?: number | undefined;

    
    /** offset token for subsequent requests
optional field
provided in the identical field of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task
learn more about this parameter on our Help Center */

    offset_token?: string | undefined;

    
    /** defines the scale used for calculating and displaying the domain_rank, and url_rank values
optional field
you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
possible values:
one_hundred — rank values are displayed on a 0–100 scale
one_thousand — rank values are displayed on a 0–1000 scale
default value: one_thousand
learn more about how this parameter works in this Help Center article */

    rank_scale?: string | undefined;

    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisSearchLiveRequestInfo) {

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
            this.keyword = data["keyword"];
            this.keyword_fields = data["keyword_fields"];
            this.page_type = data["page_type"];
            this.search_mode = data["search_mode"];
            this.limit = data["limit"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentAnalysisSearchLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisSearchLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["keyword_fields"] = this.keyword_fields;
        data["page_type"] = this.page_type;
        data["search_mode"] = this.search_mode;
        data["limit"] = this.limit;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}