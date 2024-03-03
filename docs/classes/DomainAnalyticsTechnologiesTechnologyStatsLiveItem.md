[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveItem

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveItem

items array

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#constructor)

### Properties

- [countries](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#countries)
- [date](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#date)
- [domains\_count](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_count)
- [domains\_rank](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_rank)
- [languages](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#languages)
- [type](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#type)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologyStatsLiveItem**(`data?`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologyStatsLiveItem`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Defined in

main.ts:73761

## Properties

### countries

• `Optional` **countries**: `Object`

distribution of websites by country
contains country codes and number of websites per country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[countries](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#countries)

#### Defined in

main.ts:73750

___

### date

• `Optional` **date**: `string`

date for which the data is provided

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[date](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#date)

#### Defined in

main.ts:73745

___

### domains\_count

• `Optional` **domains\_count**: `number`

number of domains that use the specified technology

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[domains_count](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_count)

#### Defined in

main.ts:73747

___

### domains\_rank

• `Optional` **domains\_rank**: `Object`

distribution of websites by backlink rank
contains domain rank ranges and number of websites per range
learn more about rank and how it is calculated in this help center article

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[domains_rank](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_rank)

#### Defined in

main.ts:73757

___

### languages

• `Optional` **languages**: `Object`

distribution of websites by language
contains language codes and number of websites per language

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[languages](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#languages)

#### Defined in

main.ts:73753

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[type](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#type)

#### Defined in

main.ts:73743

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

main.ts:73770

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

main.ts:73810

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveItem`](DomainAnalyticsTechnologiesTechnologyStatsLiveItem.md)

#### Defined in

main.ts:73803
