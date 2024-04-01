[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisSummaryLiveRequestInfo

# Class: ContentAnalysisSummaryLiveRequestInfo

## Implements

- [`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisSummaryLiveRequestInfo.md#constructor)

### Properties

- [initial\_dataset\_filters](ContentAnalysisSummaryLiveRequestInfo.md#initial_dataset_filters)
- [internal\_list\_limit](ContentAnalysisSummaryLiveRequestInfo.md#internal_list_limit)
- [keyword](ContentAnalysisSummaryLiveRequestInfo.md#keyword)
- [keyword\_fields](ContentAnalysisSummaryLiveRequestInfo.md#keyword_fields)
- [page\_type](ContentAnalysisSummaryLiveRequestInfo.md#page_type)
- [positive\_connotation\_threshold](ContentAnalysisSummaryLiveRequestInfo.md#positive_connotation_threshold)
- [sentiments\_connotation\_threshold](ContentAnalysisSummaryLiveRequestInfo.md#sentiments_connotation_threshold)
- [tag](ContentAnalysisSummaryLiveRequestInfo.md#tag)

### Methods

- [init](ContentAnalysisSummaryLiveRequestInfo.md#init)
- [toJSON](ContentAnalysisSummaryLiveRequestInfo.md#tojson)
- [fromJS](ContentAnalysisSummaryLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisSummaryLiveRequestInfo**(`data?`): [`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisSummaryLiveRequestInfo`](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md) |

#### Returns

[`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)

#### Defined in

main.ts:162542

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

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[initial_dataset_filters](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#initial_dataset_filters)

#### Defined in

main.ts:162532

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

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[internal_list_limit](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:162500

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

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[keyword](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#keyword)

#### Defined in

main.ts:162471

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

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[keyword_fields](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#keyword_fields)

#### Defined in

main.ts:162483

___

### page\_type

• `Optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[page_type](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#page_type)

#### Defined in

main.ts:162489

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

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[positive_connotation_threshold](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#positive_connotation_threshold)

#### Defined in

main.ts:162507

___

### sentiments\_connotation\_threshold

• `Optional` **sentiments\_connotation\_threshold**: `number`

sentiment connotation threshold
optional field
specified as the probability index threshold for sentiment connotations related to the citation content
if you specify this field, sentiment_connotations object in the response will only contain data on citations where the
probability per each sentiment is more than or equal to the specified value
possible values: from 0 to 1
default value: 0.4

#### Implementation of

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[sentiments_connotation_threshold](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#sentiments_connotation_threshold)

#### Defined in

main.ts:162515

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentAnalysisSummaryLiveRequestInfo](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md).[tag](../interfaces/IContentAnalysisSummaryLiveRequestInfo.md#tag)

#### Defined in

main.ts:162538

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

main.ts:162551

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

main.ts:162589

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisSummaryLiveRequestInfo`](ContentAnalysisSummaryLiveRequestInfo.md)

#### Defined in

main.ts:162582
