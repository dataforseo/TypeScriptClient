[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IContentAnalysisPhraseTrendsLiveRequestInfo

# Interface: IContentAnalysisPhraseTrendsLiveRequestInfo

## Implemented by

- [`ContentAnalysisPhraseTrendsLiveRequestInfo`](../classes/ContentAnalysisPhraseTrendsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_from)
- [date\_group](IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_group)
- [date\_to](IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_to)
- [initial\_dataset\_filter](IContentAnalysisPhraseTrendsLiveRequestInfo.md#initial_dataset_filter)
- [internal\_list\_limit](IContentAnalysisPhraseTrendsLiveRequestInfo.md#internal_list_limit)
- [keyword](IContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword)
- [keyword\_fields](IContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword_fields)
- [page\_type](IContentAnalysisPhraseTrendsLiveRequestInfo.md#page_type)
- [search\_mode](IContentAnalysisPhraseTrendsLiveRequestInfo.md#search_mode)
- [tag](IContentAnalysisPhraseTrendsLiveRequestInfo.md#tag)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

[main.ts:158807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158807)

___


### date\_group

• `Optional` **date\_group**: `string`

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Defined in

[main.ts:158819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158819)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

[main.ts:158814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158814)

___


### initial\_dataset\_filter

• `Optional` **initial\_dataset\_filter**: `string`[]

initial dataset filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["domain","<>", "logitech.com"]
[["domain","<>","logitech.com"],"and",["content_info.connotation_types.negative",">",1000]]
[["domain","<>","logitech.com"]],
"and",
[["content_info.connotation_types.negative",">",1000],
"or",
["content_info.text_category","has",10994]]]
for more information about filters, please refer to Content Analysis API – Filters

#### Defined in

[main.ts:158836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158836)

___


### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
top_domains
text_categories
page_categories
countries
languages
default value: 1
maximum value: 20

#### Defined in

[main.ts:158801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158801)

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

[main.ts:158765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158765)

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

[main.ts:158777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158777)

___


### page\_type

• `Optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Defined in

[main.ts:158783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158783)

___


### search\_mode

• `Optional` **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target keyword
one_per_domain – returns data on one citation of the keyword per domain
default value: as_is

#### Defined in

[main.ts:158790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158790)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:158842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158842)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")