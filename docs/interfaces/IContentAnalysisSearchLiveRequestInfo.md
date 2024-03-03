[Documentation](../README.md) / [Exports](../modules.md) / IContentAnalysisSearchLiveRequestInfo

# Interface: IContentAnalysisSearchLiveRequestInfo

## Implemented by

- [`ContentAnalysisSearchLiveRequestInfo`](../classes/ContentAnalysisSearchLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IContentAnalysisSearchLiveRequestInfo.md#filters)
- [keyword](IContentAnalysisSearchLiveRequestInfo.md#keyword)
- [keyword\_fields](IContentAnalysisSearchLiveRequestInfo.md#keyword_fields)
- [limit](IContentAnalysisSearchLiveRequestInfo.md#limit)
- [offset](IContentAnalysisSearchLiveRequestInfo.md#offset)
- [offset\_token](IContentAnalysisSearchLiveRequestInfo.md#offset_token)
- [order\_by](IContentAnalysisSearchLiveRequestInfo.md#order_by)
- [page\_type](IContentAnalysisSearchLiveRequestInfo.md#page_type)
- [search\_mode](IContentAnalysisSearchLiveRequestInfo.md#search_mode)
- [tag](IContentAnalysisSearchLiveRequestInfo.md#tag)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["country","=", "US"]
[["domain_rank",">",800],"and",["content_info.connotation_types.negative",">",0.9]]
[["domain_rank",">",800],
"and",
[["page_types","has","ecommerce"],
"or",
["content_info.text_category","has",10994]]]
for more information about filters, please refer to Content Analysis API – Filters

#### Defined in

main.ts:156425

___

### keyword

• `Optional` **keyword**: `string`

target keyword
required field
UTF-8 encoding
a keyword should be at least 3 characters long;
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword": "\"tesla palo alto\""

#### Defined in

main.ts:156378

___

### keyword\_fields

• `Optional` **keyword\_fields**: `Object`

target keyword fields and target keywords
optional field
use this parameter to filter the dataset by keywords that certain fields should contain;
fields you can specify: title, main_title, previous_title, snippet
you can indicate several fields;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword_fields": {
    "snippet": "\"logitech mouse\"",
    "main_title": "sale"
}

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

main.ts:156390

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned citations
optional field
default value: 100
maximum value: 20000

#### Defined in

main.ts:156408

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned citations
optional field
default value: 0
if you specify the 10 value, the first ten citations in the results array will be omitted and the data will be provided for the successive citations

#### Defined in

main.ts:156446

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
optional field
provided in the identical field of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task

#### Defined in

main.ts:156454

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["content_info.sentiment_connotations.anger,desc"]
default rule:
["content_info.sentiment_connotations.anger,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["content_info.sentiment_connotations.anger,desc","keyword_data.keyword_info.cpc,desc"]

#### Defined in

main.ts:156441

___

### page\_type

• `Optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Defined in

main.ts:156396

___

### search\_mode

• `Optional` **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is

#### Defined in

main.ts:156403

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:156460
