[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#constructor)

### Properties

- [content\_language\_code](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#content_language_code)
- [country\_iso\_code](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#country_iso_code)
- [description](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#description)
- [domain](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain)
- [domain\_rank](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain_rank)
- [emails](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#emails)
- [language\_code](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#language_code)
- [last\_visited](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#last_visited)
- [meta\_keywords](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#meta_keywords)
- [phone\_numbers](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#phone_numbers)
- [social\_graph\_urls](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#social_graph_urls)
- [technologies](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#technologies)
- [title](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#title)
- [type](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#type)

### Methods

- [init](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:77535

## Properties

### content\_language\_code

• `Optional` **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written in

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[content_language_code](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#content_language_code)

#### Defined in

main.ts:77518

___

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that the target domain is determined to belong to

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[country_iso_code](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#country_iso_code)

#### Defined in

main.ts:77512

___

### description

• `Optional` **description**: `string`

domain meta description

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[description](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#description)

#### Defined in

main.ts:77499

___

### domain

• `Optional` **domain**: `string`

specified domain name

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[domain](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain)

#### Defined in

main.ts:77495

___

### domain\_rank

• `Optional` **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[domain_rank](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain_rank)

#### Defined in

main.ts:77504

___

### emails

• `Optional` **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[emails](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#emails)

#### Defined in

main.ts:77524

___

### language\_code

• `Optional` **language\_code**: `string`

domain language
code of the language that the target domain is determined to be associated with

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[language_code](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#language_code)

#### Defined in

main.ts:77515

___

### last\_visited

• `Optional` **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[last_visited](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#last_visited)

#### Defined in

main.ts:77509

___

### meta\_keywords

• `Optional` **meta\_keywords**: `string`[]

domain meta keywords

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[meta_keywords](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#meta_keywords)

#### Defined in

main.ts:77501

___

### phone\_numbers

• `Optional` **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[phone_numbers](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#phone_numbers)

#### Defined in

main.ts:77521

___

### social\_graph\_urls

• `Optional` **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[social_graph_urls](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#social_graph_urls)

#### Defined in

main.ts:77527

___

### technologies

• `Optional` **technologies**: [`TechnologiesInfo`](TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website
see the full list of available technologies structured by groups and categories

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[technologies](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#technologies)

#### Defined in

main.ts:77531

___

### title

• `Optional` **title**: `string`

domain meta title

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[title](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#title)

#### Defined in

main.ts:77497

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[type](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#type)

#### Defined in

main.ts:77493

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

main.ts:77544

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

main.ts:77590

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:77583
