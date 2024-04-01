[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#constructor)

### Properties

- [date\_from](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#date_from)
- [date\_to](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#date_to)
- [items](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#items)
- [items\_count](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#items_count)
- [technology](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#technology)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Defined in

main.ts:76113

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[date_from](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#date_from)

#### Defined in

main.ts:76103

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[date_to](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#date_to)

#### Defined in

main.ts:76105

___

### items

• `Optional` **items**: [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)[]

items array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[items](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#items)

#### Defined in

main.ts:76109

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[items_count](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#items_count)

#### Defined in

main.ts:76107

___

### technology

• `Optional` **technology**: `string`

target technology

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md).[technology](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md#technology)

#### Defined in

main.ts:76101

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

main.ts:76122

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

main.ts:76147

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResultInfo.md)

#### Defined in

main.ts:76140
