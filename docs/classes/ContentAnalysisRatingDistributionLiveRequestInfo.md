[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisRatingDistributionLiveRequestInfo

# Class: ContentAnalysisRatingDistributionLiveRequestInfo

## Implements

- [`IContentAnalysisRatingDistributionLiveRequestInfo`](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisRatingDistributionLiveRequestInfo.md#constructor)

### Properties

- [initial\_dataset\_filters](ContentAnalysisRatingDistributionLiveRequestInfo.md#initial_dataset_filters)
- [internal\_list\_limit](ContentAnalysisRatingDistributionLiveRequestInfo.md#internal_list_limit)
- [keyword](ContentAnalysisRatingDistributionLiveRequestInfo.md#keyword)
- [keyword\_fields](ContentAnalysisRatingDistributionLiveRequestInfo.md#keyword_fields)
- [page\_type](ContentAnalysisRatingDistributionLiveRequestInfo.md#page_type)
- [positive\_connotation\_threshold](ContentAnalysisRatingDistributionLiveRequestInfo.md#positive_connotation_threshold)
- [search\_mode](ContentAnalysisRatingDistributionLiveRequestInfo.md#search_mode)
- [sentiments\_connotation\_threshold](ContentAnalysisRatingDistributionLiveRequestInfo.md#sentiments_connotation_threshold)
- [tag](ContentAnalysisRatingDistributionLiveRequestInfo.md#tag)

### Methods

- [init](ContentAnalysisRatingDistributionLiveRequestInfo.md#init)
- [toJSON](ContentAnalysisRatingDistributionLiveRequestInfo.md#tojson)
- [fromJS](ContentAnalysisRatingDistributionLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisRatingDistributionLiveRequestInfo**(`data?`): [`ContentAnalysisRatingDistributionLiveRequestInfo`](ContentAnalysisRatingDistributionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisRatingDistributionLiveRequestInfo`](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md) |

#### Returns

[`ContentAnalysisRatingDistributionLiveRequestInfo`](ContentAnalysisRatingDistributionLiveRequestInfo.md)

#### Defined in

[main.ts:158237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158237)

## Properties

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

#### Implementation of

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[initial_dataset_filters](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#initial_dataset_filters)

#### Defined in

[main.ts:158227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158227)

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

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[internal_list_limit](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#internal_list_limit)

#### Defined in

[main.ts:158189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158189)

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

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[keyword](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#keyword)

#### Defined in

[main.ts:158160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158160)

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

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[keyword_fields](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#keyword_fields)

#### Defined in

[main.ts:158172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158172)

___

### page\_type

• `Optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[page_type](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#page_type)

#### Defined in

[main.ts:158178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158178)

___

### positive\_connotation\_threshold

• `Optional` **positive\_connotation\_threshold**: `number`

positive connotation threshold
optional field
specified as the probability index threshold for positive sentiment related to the citation content
if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Implementation of

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[positive_connotation_threshold](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#positive_connotation_threshold)

#### Defined in

[main.ts:158203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158203)

___

### search\_mode

• `Optional` **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns all citations for the target keyword
one_per_domain – returns one citation of the keyword per domain
default value: as_is

#### Implementation of

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[search_mode](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#search_mode)

#### Defined in

[main.ts:158196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158196)

___

### sentiments\_connotation\_threshold

• `Optional` **sentiments\_connotation\_threshold**: `number`

sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Implementation of

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[sentiments_connotation_threshold](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#sentiments_connotation_threshold)

#### Defined in

[main.ts:158210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158210)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentAnalysisRatingDistributionLiveRequestInfo](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md).[tag](../interfaces/IContentAnalysisRatingDistributionLiveRequestInfo.md#tag)

#### Defined in

[main.ts:158233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158233)

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

[main.ts:158246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158246)

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

[main.ts:158285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158285)

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisRatingDistributionLiveRequestInfo`](ContentAnalysisRatingDistributionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisRatingDistributionLiveRequestInfo`](ContentAnalysisRatingDistributionLiveRequestInfo.md)

#### Defined in

[main.ts:158278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158278)
