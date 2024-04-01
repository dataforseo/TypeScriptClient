[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisPhraseTrendsLiveRequestInfo

# Class: ContentAnalysisPhraseTrendsLiveRequestInfo

## Implements

- [`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisPhraseTrendsLiveRequestInfo.md#constructor)

### Properties

- [date\_from](ContentAnalysisPhraseTrendsLiveRequestInfo.md#date_from)
- [date\_group](ContentAnalysisPhraseTrendsLiveRequestInfo.md#date_group)
- [date\_to](ContentAnalysisPhraseTrendsLiveRequestInfo.md#date_to)
- [initial\_dataset\_filter](ContentAnalysisPhraseTrendsLiveRequestInfo.md#initial_dataset_filter)
- [internal\_list\_limit](ContentAnalysisPhraseTrendsLiveRequestInfo.md#internal_list_limit)
- [keyword](ContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword)
- [keyword\_fields](ContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword_fields)
- [page\_type](ContentAnalysisPhraseTrendsLiveRequestInfo.md#page_type)
- [search\_mode](ContentAnalysisPhraseTrendsLiveRequestInfo.md#search_mode)
- [tag](ContentAnalysisPhraseTrendsLiveRequestInfo.md#tag)

### Methods

- [init](ContentAnalysisPhraseTrendsLiveRequestInfo.md#init)
- [toJSON](ContentAnalysisPhraseTrendsLiveRequestInfo.md#tojson)
- [fromJS](ContentAnalysisPhraseTrendsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisPhraseTrendsLiveRequestInfo**(`data?`): [`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisPhraseTrendsLiveRequestInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md) |

#### Returns

[`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)

#### Defined in

main.ts:164100

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[date_from](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_from)

#### Defined in

main.ts:164061

___

### date\_group

• `Optional` **date\_group**: `string`

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[date_group](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_group)

#### Defined in

main.ts:164073

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[date_to](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#date_to)

#### Defined in

main.ts:164068

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

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[initial_dataset_filter](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#initial_dataset_filter)

#### Defined in

main.ts:164090

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

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[internal_list_limit](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:164055

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

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[keyword](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword)

#### Defined in

main.ts:164019

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

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[keyword_fields](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#keyword_fields)

#### Defined in

main.ts:164031

___

### page\_type

• `Optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[page_type](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#page_type)

#### Defined in

main.ts:164037

___

### search\_mode

• `Optional` **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target keyword
one_per_domain – returns data on one citation of the keyword per domain
default value: as_is

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[search_mode](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#search_mode)

#### Defined in

main.ts:164044

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentAnalysisPhraseTrendsLiveRequestInfo](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md).[tag](../interfaces/IContentAnalysisPhraseTrendsLiveRequestInfo.md#tag)

#### Defined in

main.ts:164096

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:164109

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:164149

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisPhraseTrendsLiveRequestInfo`](ContentAnalysisPhraseTrendsLiveRequestInfo.md)

#### Defined in

main.ts:164142
