[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#constructor)

### Properties

- [date\_from](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_from)
- [date\_to](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_to)
- [tag](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#tag)
- [technology](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#technology)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Defined in

[main.ts:73521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73521)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
minimum value 2022-10-31
if you don’t specify this field, the minimum value will be used by default
date format: "yyyy-mm-dd"
example:
"2023-06-01"

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[date_from](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_from)

#### Defined in

[main.ts:73504](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73504)

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2023-01-15"

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[date_to](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#date_to)

#### Defined in

[main.ts:73511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73511)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[tag](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#tag)

#### Defined in

[main.ts:73517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73517)

___

### technology

• `Optional` **technology**: `string`

target technology
required field
you can find the full list of technologies you can specify here on this page
example:
"Salesforce"

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md).[technology](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md#technology)

#### Defined in

[main.ts:73496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73496)

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

[main.ts:73530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73530)

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

[main.ts:73550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73550)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)

#### Defined in

[main.ts:73543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73543)
