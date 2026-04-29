export interface IContentAnalysisRatingDistributionLiveRequestInfo   {
        
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
        
        /** results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is */
        search_mode?: string | undefined
        
        /** positive connotation threshold
optional field
specified as the probability index threshold for positive sentiment related to the citation content
if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4 */
        positive_connotation_threshold?: number | undefined
        
        /** sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4 */
        sentiments_connotation_threshold?: number | undefined
        
        /** initial dataset filtering parameters
optional field
initial filtering parameters that apply to fields in the Search endpoint
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

export class ContentAnalysisRatingDistributionLiveRequestInfo  implements IContentAnalysisRatingDistributionLiveRequestInfo {
    
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
    
    /** results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is */

    search_mode?: string | undefined;
    
    /** positive connotation threshold
optional field
specified as the probability index threshold for positive sentiment related to the citation content
if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4 */

    positive_connotation_threshold?: number | undefined;
    
    /** sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4 */

    sentiments_connotation_threshold?: number | undefined;
    
    /** initial dataset filtering parameters
optional field
initial filtering parameters that apply to fields in the Search endpoint
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


    constructor(data?: IContentAnalysisRatingDistributionLiveRequestInfo) {

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
            this.internal_list_limit = data["internal_list_limit"];
            this.search_mode = data["search_mode"];
            this.positive_connotation_threshold = data["positive_connotation_threshold"];
            this.sentiments_connotation_threshold = data["sentiments_connotation_threshold"];
            this.initial_dataset_filters = data["initial_dataset_filters"];
            this.rank_scale = data["rank_scale"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentAnalysisRatingDistributionLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisRatingDistributionLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["keyword_fields"] = this.keyword_fields;
        data["page_type"] = this.page_type;
        data["internal_list_limit"] = this.internal_list_limit;
        data["search_mode"] = this.search_mode;
        data["positive_connotation_threshold"] = this.positive_connotation_threshold;
        data["sentiments_connotation_threshold"] = this.sentiments_connotation_threshold;
        data["initial_dataset_filters"] = this.initial_dataset_filters;
        data["rank_scale"] = this.rank_scale;
        data["tag"] = this.tag;
        return data;
    }
}