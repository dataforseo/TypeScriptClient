[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainsByLiveItem

# Class: DomainAnalyticsTechnologiesDomainsByLiveItem

items array

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainsByLiveItem.md#constructor)

### Properties

- [content\_language\_code](DomainAnalyticsTechnologiesDomainsByLiveItem.md#content_language_code)
- [country\_iso\_code](DomainAnalyticsTechnologiesDomainsByLiveItem.md#country_iso_code)
- [description](DomainAnalyticsTechnologiesDomainsByLiveItem.md#description)
- [domain](DomainAnalyticsTechnologiesDomainsByLiveItem.md#domain)
- [domain\_rank](DomainAnalyticsTechnologiesDomainsByLiveItem.md#domain_rank)
- [emails](DomainAnalyticsTechnologiesDomainsByLiveItem.md#emails)
- [language\_code](DomainAnalyticsTechnologiesDomainsByLiveItem.md#language_code)
- [last\_visited](DomainAnalyticsTechnologiesDomainsByLiveItem.md#last_visited)
- [meta\_keywords](DomainAnalyticsTechnologiesDomainsByLiveItem.md#meta_keywords)
- [phone\_numbers](DomainAnalyticsTechnologiesDomainsByLiveItem.md#phone_numbers)
- [social\_graph\_urls](DomainAnalyticsTechnologiesDomainsByLiveItem.md#social_graph_urls)
- [technologies](DomainAnalyticsTechnologiesDomainsByLiveItem.md#technologies)
- [title](DomainAnalyticsTechnologiesDomainsByLiveItem.md#title)
- [type](DomainAnalyticsTechnologiesDomainsByLiveItem.md#type)

### Methods

- [init](DomainAnalyticsTechnologiesDomainsByLiveItem.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainsByLiveItem.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainsByLiveItem.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainsByLiveItem**(`data?`): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Defined in

main.ts:76656

## Properties

### content\_language\_code

• `Optional` **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written with

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[content_language_code](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#content_language_code)

#### Defined in

main.ts:76639

___

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that target domain is determined to belong to

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[country_iso_code](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#country_iso_code)

#### Defined in

main.ts:76633

___

### description

• `Optional` **description**: `string`

domain meta description

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[description](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#description)

#### Defined in

main.ts:76620

___

### domain

• `Optional` **domain**: `string`

specified domain name

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[domain](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain)

#### Defined in

main.ts:76616

___

### domain\_rank

• `Optional` **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[domain_rank](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain_rank)

#### Defined in

main.ts:76625

___

### emails

• `Optional` **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[emails](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#emails)

#### Defined in

main.ts:76645

___

### language\_code

• `Optional` **language\_code**: `string`

domain language
code of the language that target domain is determined to be associated with

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[language_code](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#language_code)

#### Defined in

main.ts:76636

___

### last\_visited

• `Optional` **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[last_visited](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#last_visited)

#### Defined in

main.ts:76630

___

### meta\_keywords

• `Optional` **meta\_keywords**: `string`[]

domain meta keywords

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[meta_keywords](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#meta_keywords)

#### Defined in

main.ts:76622

___

### phone\_numbers

• `Optional` **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[phone_numbers](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#phone_numbers)

#### Defined in

main.ts:76642

___

### social\_graph\_urls

• `Optional` **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[social_graph_urls](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#social_graph_urls)

#### Defined in

main.ts:76648

___

### technologies

• `Optional` **technologies**: [`TechnologiesInfo`](TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website;
to get a full list of technologies and their structure, refer to the technologies endpoint

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[technologies](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#technologies)

#### Defined in

main.ts:76652

___

### title

• `Optional` **title**: `string`

domain meta title

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[title](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#title)

#### Defined in

main.ts:76618

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByLiveItem](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[type](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#type)

#### Defined in

main.ts:76614

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

main.ts:76665

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

main.ts:76711

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Defined in

main.ts:76704
