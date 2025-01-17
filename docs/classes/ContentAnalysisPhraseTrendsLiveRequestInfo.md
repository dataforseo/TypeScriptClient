[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentAnalysisPhraseTrendsLiveRequestInfo

# Class: ContentAnalysisPhraseTrendsLiveRequestInfo

Defined in: main.ts:179940

## Implements

- [`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisPhraseTrendsLiveRequestInfo()

> **new ContentAnalysisPhraseTrendsLiveRequestInfo**(`data`?): [`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)

Defined in: main.ts:180030

#### Parameters

##### data?

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md)

#### Returns

[`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:179991

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`date_from`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_from)

***

### date\_group?

> `optional` **date\_group**: `string`

Defined in: main.ts:180003

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`date_group`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_group)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:179998

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`date_to`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_to)

***

### initial\_dataset\_filter?

> `optional` **initial\_dataset\_filter**: `string`[]

Defined in: main.ts:180020

initial dataset filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not
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

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`initial_dataset_filter`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#initial_dataset_filter)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:179985

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

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#internal_list_limit)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:179949

target keyword
required field
UTF-8 encoding
the keywords will be converted to a lowercase format;
Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
example:
"keyword": "\"tesla palo alto\""
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`keyword`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword)

***

### keyword\_fields?

> `optional` **keyword\_fields**: `object`

Defined in: main.ts:179961

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

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`keyword_fields`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword_fields)

***

### page\_type?

> `optional` **page\_type**: `string`[]

Defined in: main.ts:179967

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`page_type`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#page_type)

***

### search\_mode?

> `optional` **search\_mode**: `string`

Defined in: main.ts:179974

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target keyword
one_per_domain – returns data on one citation of the keyword per domain
default value: as_is

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`search_mode`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#search_mode)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:180026

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[`tag`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:180039

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:180079

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)

Defined in: main.ts:180072

#### Parameters

##### data

`any`

#### Returns

[`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)
