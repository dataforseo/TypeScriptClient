[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveItem

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

[main.ts:73617](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73617)

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

[main.ts:73606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73606)

___


### date

• `Optional` **date**: `string`

date for which the data is provided

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[date](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#date)

#### Defined in

[main.ts:73601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73601)

___


### domains\_count

• `Optional` **domains\_count**: `number`

number of domains that use the specified technology

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[domains_count](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#domains_count)

#### Defined in

[main.ts:73603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73603)

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

[main.ts:73613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73613)

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

[main.ts:73609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73609)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveItem](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md).[type](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveItem.md#type)

#### Defined in

[main.ts:73599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73599)

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

[main.ts:73626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73626)

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

[main.ts:73666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73666)

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

[main.ts:73659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73659)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")