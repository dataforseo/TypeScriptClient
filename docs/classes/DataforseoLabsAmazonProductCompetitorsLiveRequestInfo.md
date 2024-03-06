[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductCompetitorsLiveRequestInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#constructor)

### Properties

- [asin](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#asin)
- [filters](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#filters)
- [language\_code](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductCompetitorsLiveRequestInfo**(`data?`): [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:101054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101054)

## Properties

### asin

• `Optional` **asin**: `string`

product ID
required field
unique product identifier (ASIN) on Amazon;
you can receive the asin parameter by making a separate request to the Amazon Products endpoint

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[asin](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#asin)

#### Defined in

[main.ts:100977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100977)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["full_metrics.amazon_serp.pos_1",">", 20]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#filters)

#### Defined in

[main.ts:101023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101023)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if don’t specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:101007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101007)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if don’t specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:101000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101000)

___


### limit

• `Optional` **limit**: `number`

the maximum number of products in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#limit)

#### Defined in

[main.ts:101012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101012)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if don’t specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
2840

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:100993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100993)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if don’t specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US, Egypt, Saudi Arabia, and the United Arab Emirates locations only;
example:
United States

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:100985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100985)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned product competitors
optional field
default value: 0
if you specify the 10 value, the first ten product competitors in the results array will be omitted and the data will be provided for the successive product competitors

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#offset)

#### Defined in

[main.ts:101044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101044)

___


### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["full_metrics.amazon_serp.pos_1,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["full_metrics.amazon_serp.pos_1,desc","avg_position,desc"]
default rule:
["ranked_serp_element.serp_item.rank_group,asc"]

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:101039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101039)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:101050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101050)

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

[main.ts:101063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101063)

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

[main.ts:101097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101097)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveRequestInfo`](DataforseoLabsAmazonProductCompetitorsLiveRequestInfo.md)

#### Defined in

[main.ts:101090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L101090)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")