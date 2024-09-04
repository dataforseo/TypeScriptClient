[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsTechnologiesDomainsByLiveItem

# Class: DomainAnalyticsTechnologiesDomainsByLiveItem

items array

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByLiveItem()

> **new DomainAnalyticsTechnologiesDomainsByLiveItem**(`data`?): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Defined in

main.ts:78036

## Properties

### content\_language\_code?

> `optional` **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`content_language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#content_language_code)

#### Defined in

main.ts:78019

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that target domain is determined to belong to

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`country_iso_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#country_iso_code)

#### Defined in

main.ts:78013

***

### description?

> `optional` **description**: `string`

domain meta description

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`description`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#description)

#### Defined in

main.ts:78000

***

### domain?

> `optional` **domain**: `string`

specified domain name

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`domain`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain)

#### Defined in

main.ts:77996

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`domain_rank`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain_rank)

#### Defined in

main.ts:78005

***

### emails?

> `optional` **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`emails`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#emails)

#### Defined in

main.ts:78025

***

### language\_code?

> `optional` **language\_code**: `string`

domain language
code of the language that target domain is determined to be associated with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#language_code)

#### Defined in

main.ts:78016

***

### last\_visited?

> `optional` **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`last_visited`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#last_visited)

#### Defined in

main.ts:78010

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

domain meta keywords

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`meta_keywords`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#meta_keywords)

#### Defined in

main.ts:78002

***

### phone\_numbers?

> `optional` **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`phone_numbers`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#phone_numbers)

#### Defined in

main.ts:78022

***

### social\_graph\_urls?

> `optional` **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`social_graph_urls`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#social_graph_urls)

#### Defined in

main.ts:78028

***

### technologies?

> `optional` **technologies**: [`TechnologiesInfo`](TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website;
to get a full list of technologies and their structure, refer to the technologies endpoint

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`technologies`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#technologies)

#### Defined in

main.ts:78032

***

### title?

> `optional` **title**: `string`

domain meta title

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`title`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#title)

#### Defined in

main.ts:77998

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`type`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#type)

#### Defined in

main.ts:77994

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:78045

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:78091

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Defined in

main.ts:78084
