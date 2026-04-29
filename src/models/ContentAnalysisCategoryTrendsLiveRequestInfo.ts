export interface IContentAnalysisCategoryTrendsLiveRequestInfo   {
        
        /** target category code
required field
to obtain a full list of available categories, refer to the Categories endpoint */
        category_code?: number | undefined
        
        /** target page types
optional field
use this parameter to filter the dataset by page types
possible values:
'ecommerce', 'news', 'blogs', 'message-boards', 'organization' */
        page_type?: string[] | undefined
        
        /** results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target category_code
one_per_domain – returns data on one citation of the category_code per domain
default value: as_is */
        search_mode?: string | undefined
        
        /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
top_domains
text_categories
page_categories
countries
languages
default value: 1
maximum value: 20 */
        internal_list_limit?: number | undefined
        
        /** starting date of the time range
required field
minimum value: 2022-10-31
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */
        date_from?: string | undefined
        
        /** ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */
        date_to?: string | undefined
        
        /** time range which will be used to group the results
optional field
default value: month
possible values: day, week, month */
        date_group?: string | undefined
        
        /** initial dataset filtering parameters
optional field
initial filtering parameters that apply to fields in the Search endpoint;
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['domain','<>', 'logitech.com']
[['domain','<>','logitech.com'],'and',['content_info.connotation_types.negative','>',1000]]
[['domain','<>','logitech.com']],
'and',
[['content_info.connotation_types.negative','>',1000],
'or',
['content_info.text_category','has',10994]]]
for more information about filters, please refer to Content Analysis API – Filters
learn more about the initial dataset filters in this help center article. */
        initial_dataset_filters?: any[] | undefined
        
        /** defines the scale used for calculating and displaying the rank values
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

export class ContentAnalysisCategoryTrendsLiveRequestInfo  implements IContentAnalysisCategoryTrendsLiveRequestInfo {
    
    /** target category code
required field
to obtain a full list of available categories, refer to the Categories endpoint */

    category_code?: number | undefined;
    
    /** target page types
optional field
use this parameter to filter the dataset by page types
possible values:
'ecommerce', 'news', 'blogs', 'message-boards', 'organization' */

    page_type?: string[] | undefined;
    
    /** results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target category_code
one_per_domain – returns data on one citation of the category_code per domain
default value: as_is */

    search_mode?: string | undefined;
    
    /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
top_domains
text_categories
page_categories
countries
languages
default value: 1
maximum value: 20 */

    internal_list_limit?: number | undefined;
    
    /** starting date of the time range
required field
minimum value: 2022-10-31
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */

    date_from?: string | undefined;
    
    /** ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */

    date_to?: string | undefined;
    
    /** time range which will be used to group the results
optional field
default value: month
possible values: day, week, month */

    date_group?: string | undefined;
    
    /** initial dataset filtering parameters
optional field
initial filtering parameters that apply to fields in the Search endpoint;
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
['domain','<>', 'logitech.com']
[['domain','<>','logitech.com'],'and',['content_info.connotation_types.negative','>',1000]]
[['domain','<>','logitech.com']],
'and',
[['content_info.connotation_types.negative','>',1000],
'or',
['content_info.text_category','has',10994]]]
for more information about filters, please refer to Content Analysis API – Filters
learn more about the initial dataset filters in this help center article. */

    initial_dataset_filters?: any[] | undefined;
    
    /** defines the scale used for calculating and displaying the rank values
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


    constructor(data?: IContentAnalysisCategoryTrendsLiveRequestInfo) {

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
            this.category_code = data["category_code"];
            this.page_type = data["page_type"];
            this.search_mode = data["search_mode"];
            this.internal_list_limit = data["internal_list_limit"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.date_group = data["date_group"];
            this.initial_dataset_filters = data["initial_dataset_filters"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentAnalysisCategoryTrendsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisCategoryTrendsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category_code"] = this.category_code;
        data["page_type"] = this.page_type;
        data["search_mode"] = this.search_mode;
        data["internal_list_limit"] = this.internal_list_limit;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["date_group"] = this.date_group;
        data["initial_dataset_filters"] = this.initial_dataset_filters;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}