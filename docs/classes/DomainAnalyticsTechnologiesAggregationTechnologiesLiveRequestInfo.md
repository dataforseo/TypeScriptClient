[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo

# Class: DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo

## Implements

- [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#constructor)

### Properties

- [category](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#category)
- [filters](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#filters)
- [group](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#group)
- [internal\_categories\_list\_limit](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_categories_list_limit)
- [internal\_groups\_list\_limit](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_groups_list_limit)
- [internal\_list\_limit](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_list_limit)
- [internal\_technologies\_list\_limit](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_technologies_list_limit)
- [keyword](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#keyword)
- [limit](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#limit)
- [mode](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#mode)
- [offset](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#offset)
- [order\_by](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#order_by)
- [tag](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#tag)
- [technology](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#technology)

### Methods

- [init](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo**(`data?`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)

#### Defined in

main.ts:72679

## Properties

### category

• `Optional` **category**: `string`

id of the target technology category
required field if you don’t specify group or technology
you can find the full list of technology category ids on this page
example:
"crm"

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[category](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#category)

#### Defined in

main.ts:72584

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
you can use the following parameters to filter the results: domain_rank, last_visited, country_iso_code, language_code, content_language_code
example:
[["country_iso_code","=","US"],
"and",
["domain_rank",">",800]]for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[filters](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#filters)

#### Defined in

main.ts:72617

___

### group

• `Optional` **group**: `string`

id of the target technology group
required field if you don’t specify technology or category
you can find the full list of technology group ids on this page
example:
"marketing"

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[group](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#group)

#### Defined in

main.ts:72578

___

### internal\_categories\_list\_limit

• `Optional` **internal\_categories\_list\_limit**: `number`

maximum number of returned technology categories within the same group
optional field
you can use this field to limit the number of items with identical "category" in the results
default value: 5
maximum value: 10000

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[internal_categories_list_limit](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_categories_list_limit)

#### Defined in

main.ts:72645

___

### internal\_groups\_list\_limit

• `Optional` **internal\_groups\_list\_limit**: `number`

maximum number of returned technology groups
optional field
you can use this field to limit the number of items with identical "group" in the results
default value: 5
maximum value: 10000

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[internal_groups_list_limit](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_groups_list_limit)

#### Defined in

main.ts:72639

___

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of items with identical "category", "group", and "technology"
optional field
if you use this field, the values specified in internal_groups_list_limit, internal_categories_list_limit and internal_technologies_list_limit will be ignored;
you can use this field to limit the number of items with identical "category", "group", or "technology"
default value: 10
maximum value: 10000

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[internal_list_limit](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:72658

___

### internal\_technologies\_list\_limit

• `Optional` **internal\_technologies\_list\_limit**: `number`

maximum number of returned technologies within the same category
optional field
you can use this field to limit the number of items with identical "technology" in the results
default value: 10
maximum value: 10000

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[internal_technologies_list_limit](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#internal_technologies_list_limit)

#### Defined in

main.ts:72651

___

### keyword

• `Optional` **keyword**: `string`

target keyword in the domain’s meta keywords
optional field
UTF-8 encoding
each keyword should be at least 3 characters long
example:
"seo"

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[keyword](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#keyword)

#### Defined in

main.ts:72597

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned technologies
optional field
default value: 100
maximum value: 10000

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[limit](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#limit)

#### Defined in

main.ts:72663

___

### mode

• `Optional` **mode**: `string`

search mode
optional field
possible search mode types:
as_is – search for results exactly matching the specified group ids, category ids, or technology names
entry – search for results matching a part of the specified group ids, category ids, or technology names
default value: as_is

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[mode](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#mode)

#### Defined in

main.ts:72604

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
maximum value: 9999
if you specify the 10 value, the first ten technologies in the results array will be omitted and the data will be provided for the successive technologies

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[offset](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#offset)

#### Defined in

main.ts:72669

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the following values to sort the results: groups_count, categories_count, technologies_count
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["groups_count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["groups_count,desc","technologies_count,desc"]
default value:
["groups_count,desc","categories_count,desc","technologies_count,desc"]

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[order_by](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#order_by)

#### Defined in

main.ts:72633

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[tag](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#tag)

#### Defined in

main.ts:72675

___

### technology

• `Optional` **technology**: `string`

target technology
required field if you don’t specify group or category
you can find the full list of technologies on this page
example:
"Salesforce"

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md).[technology](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md#technology)

#### Defined in

main.ts:72590

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

main.ts:72688

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

main.ts:72726

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)

#### Defined in

main.ts:72719
