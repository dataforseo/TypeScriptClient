[Documentation](../README.md) / [Exports](../modules.md) / ContentAnalysisCategoryTrendsLiveRequestInfo

# Class: ContentAnalysisCategoryTrendsLiveRequestInfo

## Implements

- [`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisCategoryTrendsLiveRequestInfo.md#constructor)

### Properties

- [category\_code](ContentAnalysisCategoryTrendsLiveRequestInfo.md#category_code)
- [date\_from](ContentAnalysisCategoryTrendsLiveRequestInfo.md#date_from)
- [date\_group](ContentAnalysisCategoryTrendsLiveRequestInfo.md#date_group)
- [date\_to](ContentAnalysisCategoryTrendsLiveRequestInfo.md#date_to)
- [initial\_dataset\_filters](ContentAnalysisCategoryTrendsLiveRequestInfo.md#initial_dataset_filters)
- [internal\_list\_limit](ContentAnalysisCategoryTrendsLiveRequestInfo.md#internal_list_limit)
- [page\_type](ContentAnalysisCategoryTrendsLiveRequestInfo.md#page_type)
- [search\_mode](ContentAnalysisCategoryTrendsLiveRequestInfo.md#search_mode)
- [tag](ContentAnalysisCategoryTrendsLiveRequestInfo.md#tag)

### Methods

- [init](ContentAnalysisCategoryTrendsLiveRequestInfo.md#init)
- [toJSON](ContentAnalysisCategoryTrendsLiveRequestInfo.md#tojson)
- [fromJS](ContentAnalysisCategoryTrendsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisCategoryTrendsLiveRequestInfo**(`data?`): [`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisCategoryTrendsLiveRequestInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md) |

#### Returns

[`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)

#### Defined in

main.ts:164687

## Properties

### category\_code

• `Optional` **category\_code**: `string`

target category code
required field
to obtain a full list of available categories, refer to the Categories endpoint

#### Implementation of

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[category_code](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#category_code)

#### Defined in

main.ts:164618

___

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
required field
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[date_from](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_from)

#### Defined in

main.ts:164648

___

### date\_group

• `Optional` **date\_group**: `string`

time range which will be used to group the results
optional field
default value: month
possible values: day, week, month

#### Implementation of

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[date_group](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_group)

#### Defined in

main.ts:164660

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

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[date_to](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#date_to)

#### Defined in

main.ts:164655

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

#### Implementation of

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[initial_dataset_filters](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#initial_dataset_filters)

#### Defined in

main.ts:164677

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

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[internal_list_limit](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:164642

___

### page\_type

• `Optional` **page\_type**: `string`[]

target page types
optional field
use this parameter to filter the dataset by page types
possible values:
"ecommerce", "news", "blogs", "message-boards", "organization"

#### Implementation of

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[page_type](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#page_type)

#### Defined in

main.ts:164624

___

### search\_mode

• `Optional` **search\_mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns data on all citations for the target category_code
one_per_domain – returns data on one citation of the category_code per domain
default value: as_is

#### Implementation of

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[search_mode](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#search_mode)

#### Defined in

main.ts:164631

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IContentAnalysisCategoryTrendsLiveRequestInfo](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md).[tag](../interfaces/IContentAnalysisCategoryTrendsLiveRequestInfo.md#tag)

#### Defined in

main.ts:164683

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

main.ts:164696

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

main.ts:164729

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisCategoryTrendsLiveRequestInfo`](ContentAnalysisCategoryTrendsLiveRequestInfo.md)

#### Defined in

main.ts:164722
