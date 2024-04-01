[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#constructor)

### Properties

- [content\_languages](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#content_languages)
- [countries](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#countries)
- [keywords](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#keywords)
- [languages](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#languages)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Defined in

main.ts:75649

## Properties

### content\_languages

• `Optional` **content\_languages**: `Object`

distribution of websites by content language
contains content language codes and number of websites per language

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[content_languages](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#content_languages)

#### Defined in

main.ts:75642

___

### countries

• `Optional` **countries**: `Object`

distribution of websites by country
contains country codes and number of websites per country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[countries](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#countries)

#### Defined in

main.ts:75636

___

### keywords

• `Optional` **keywords**: `Object`

distribution of websites by keywords
contains keywords found in the websites’ titles, descriptions or meta keywords, and number of websites using each keyword

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[keywords](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#keywords)

#### Defined in

main.ts:75645

___

### languages

• `Optional` **languages**: `Object`

distribution of websites by language
contains language codes and number of websites per language

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[languages](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#languages)

#### Defined in

main.ts:75639

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

main.ts:75658

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

main.ts:75702

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Defined in

main.ts:75695
