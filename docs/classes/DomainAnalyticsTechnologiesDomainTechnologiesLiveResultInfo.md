[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

## Implements

- [`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo()

> **new DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:78946

## Properties

### content\_language\_code?

> `optional` **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written in

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`content_language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#content_language_code)

#### Defined in

main.ts:78929

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that the target domain is determined to belong to

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`country_iso_code`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#country_iso_code)

#### Defined in

main.ts:78923

***

### description?

> `optional` **description**: `string`

domain meta description

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`description`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#description)

#### Defined in

main.ts:78910

***

### domain?

> `optional` **domain**: `string`

specified domain name

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`domain`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain)

#### Defined in

main.ts:78906

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`domain_rank`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain_rank)

#### Defined in

main.ts:78915

***

### emails?

> `optional` **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`emails`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#emails)

#### Defined in

main.ts:78935

***

### language\_code?

> `optional` **language\_code**: `string`

domain language
code of the language that the target domain is determined to be associated with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#language_code)

#### Defined in

main.ts:78926

***

### last\_visited?

> `optional` **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`last_visited`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#last_visited)

#### Defined in

main.ts:78920

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

domain meta keywords

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`meta_keywords`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#meta_keywords)

#### Defined in

main.ts:78912

***

### phone\_numbers?

> `optional` **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`phone_numbers`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#phone_numbers)

#### Defined in

main.ts:78932

***

### social\_graph\_urls?

> `optional` **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`social_graph_urls`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#social_graph_urls)

#### Defined in

main.ts:78938

***

### technologies?

> `optional` **technologies**: [`TechnologiesInfo`](TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website
see the full list of available technologies structured by groups and categories

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`technologies`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#technologies)

#### Defined in

main.ts:78942

***

### title?

> `optional` **title**: `string`

domain meta title

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`title`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#title)

#### Defined in

main.ts:78908

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`type`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#type)

#### Defined in

main.ts:78904

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:78955

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:79001

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Defined in

main.ts:78994
