[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisCategoryTrendsLiveRequestInfo

# Class: ContentAnalysisCategoryTrendsLiveRequestInfo

Defined in: main.ts:180906

## Implements

- [`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisCategoryTrendsLiveRequestInfo()

> **new ContentAnalysisCategoryTrendsLiveRequestInfo**(`data`?): [`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)

Defined in: main.ts:180979

#### Parameters

##### data?

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md)

#### Returns

[`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)

## Properties

### category\_code?

> `optional` **category\_code**: `string`

Defined in: main.ts:180910

target category code
required field
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`category_code`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#category_code)

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:180940

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`date_from`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_from)

***

### date\_group?

> `optional` **date\_group**: `string`

Defined in: main.ts:180952

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`date_group`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_group)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:180947

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`date_to`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_to)

***

### initial\_dataset\_filters?

> `optional` **initial\_dataset\_filters**: `any`[]

Defined in: main.ts:180969

initial dataset filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not, match, not_match
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

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`initial_dataset_filters`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#initial_dataset_filters)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:180934

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

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#internal_list_limit)

***

### page\_type?

> `optional` **page\_type**: `string`[]

Defined in: main.ts:180916

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`page_type`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#page_type)

***

### search\_mode?

> `optional` **search\_mode**: `string`

Defined in: main.ts:180923

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target category_code
one_per_domain – returns data on one citation of the category_code per domain
default value: as_is

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`search_mode`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#search_mode)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:180975

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[`tag`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:180988

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:181021

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)

Defined in: main.ts:181014

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)
