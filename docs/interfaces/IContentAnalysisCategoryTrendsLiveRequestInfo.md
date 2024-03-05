[dataforseo-client](../README.md) / [Exports](../modules.md) / IContentAnalysisCategoryTrendsLiveRequestInfo

# Interface: IContentAnalysisCategoryTrendsLiveRequestInfo

## Implemented by

- [`ContentAnalysisCategoryTrendsLiveRequestInfo`](../classes/ContentAnalysisCategoryTrendsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category\_code](IContentAnalysisCategoryTrendsLiveRequestInfo.md#category_code)
- [date\_from](IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_from)
- [date\_group](IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_group)
- [date\_to](IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_to)
- [initial\_dataset\_filters](IContentAnalysisCategoryTrendsLiveRequestInfo.md#initial_dataset_filters)
- [internal\_list\_limit](IContentAnalysisCategoryTrendsLiveRequestInfo.md#internal_list_limit)
- [page\_type](IContentAnalysisCategoryTrendsLiveRequestInfo.md#page_type)
- [search\_mode](IContentAnalysisCategoryTrendsLiveRequestInfo.md#search_mode)
- [tag](IContentAnalysisCategoryTrendsLiveRequestInfo.md#tag)

## Properties

### category\_code

• `Optional` **category\_code**: `string`

target category code
required field
to obtain a full list of available categories, refer to the Categories endpoint

#### Defined in

[main.ts:159333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159333)

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

[main.ts:159363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159363)

___

### date\_group

• `Optional` **date\_group**: `string`

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Defined in

[main.ts:159375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159375)

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

[main.ts:159370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159370)

___

### initial\_dataset\_filters

• `Optional` **initial\_dataset\_filters**: `any`[]

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

[main.ts:159392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159392)

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

[main.ts:159357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159357)

___

### page\_type

• `Optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Defined in

[main.ts:159339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159339)

___

### search\_mode

• `Optional` **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target category_code
one_per_domain – returns data on one citation of the category_code per domain
default value: as_is

#### Defined in

[main.ts:159346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159346)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:159398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159398)
