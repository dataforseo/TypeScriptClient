[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRelevantPagesLiveRequestInfo

# Class: DataforseoLabsBingRelevantPagesLiveRequestInfo

## Implements

- [`IDataforseoLabsBingRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#constructor)

### Properties

- [filters](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#filters)
- [historical\_serp\_mode](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#historical_serp_mode)
- [item\_types](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#tag)
- [target](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#target)

### Methods

- [init](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingRelevantPagesLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRelevantPagesLiveRequestInfo**(`data?`): [`DataforseoLabsBingRelevantPagesLiveRequestInfo`](DataforseoLabsBingRelevantPagesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingRelevantPagesLiveRequestInfo`](DataforseoLabsBingRelevantPagesLiveRequestInfo.md)

#### Defined in

main.ts:108723

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in
example:
["metrics.paid.count",">",0]
[["metrics.organic.count",">",50],"and",["metrics.organic.pos_1","<>",0]]
[[""metrics.organic.count",">",50"],
"and",
[["metrics.organic.pos_1","<>",0],"or",["metrics.organic.pos_2_3","<>",0]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#filters)

#### Defined in

main.ts:108696

___

### historical\_serp\_mode

• `Optional` **historical\_serp\_mode**: `string`

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[historical_serp_mode](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#historical_serp_mode)

#### Defined in

main.ts:108682

___

### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#item_types)

#### Defined in

main.ts:108663

___

### language\_code

• `Optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#language_code)

#### Defined in

main.ts:108654

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#language_name)

#### Defined in

main.ts:108645

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#limit)

#### Defined in

main.ts:108668

___

### location\_code

• `Optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#location_code)

#### Defined in

main.ts:108636

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#location_name)

#### Defined in

main.ts:108626

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#offset)

#### Defined in

main.ts:108673

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
["metrics.paid.etv,asc"]
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["metrics.organic.etv,desc","metrics.paid.count,asc"]
default rule:
["metrics.organic.count,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#order_by)

#### Defined in

main.ts:108713

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#tag)

#### Defined in

main.ts:108719

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[IDataforseoLabsBingRelevantPagesLiveRequestInfo](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md).[target](../interfaces/IDataforseoLabsBingRelevantPagesLiveRequestInfo.md#target)

#### Defined in

main.ts:108616

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

main.ts:108732

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

main.ts:108772

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRelevantPagesLiveRequestInfo`](DataforseoLabsBingRelevantPagesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRelevantPagesLiveRequestInfo`](DataforseoLabsBingRelevantPagesLiveRequestInfo.md)

#### Defined in

main.ts:108765
