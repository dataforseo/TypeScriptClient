[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#constructor)

### Properties

- [filters](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#filters)
- [limit](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#limit)
- [offset](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#order_by)
- [tag](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo**(`data?`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Defined in

[main.ts:85529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85529)

## Properties

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
examples:
["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"]
[["expiration_datetime", "<", "2021-02-15 01:00:00 +00:00"],
 "and", 
["domain", "like", "%seo%"]]

for more information about filters, please refer to Dataforseo Labs - Filters or this help center guide

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#filters)

#### Defined in

[main.ts:85503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85503)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#limit)

#### Defined in

[main.ts:85483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85483)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#offset)

#### Defined in

[main.ts:85488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85488)

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc - results will be sorted in the ascending order
desc - results will be sorted in the descending order
the comma is used as a separator
example:
["metrics.organic.pos_1,desc"]
default rule:
["metrics.organic.count,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["expiration_datetime,asc","metrics.organic.etv,desc","metrics.organic.pos_1,desc"]

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:85519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85519)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md#tag)

#### Defined in

[main.ts:85525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85525)

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

[main.ts:85538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85538)

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

[main.ts:85567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85567)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveRequestInfo.md)

#### Defined in

[main.ts:85560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85560)
