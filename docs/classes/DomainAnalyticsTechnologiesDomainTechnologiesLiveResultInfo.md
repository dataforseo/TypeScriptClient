[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo

Defined in: main.ts:88650

## Implements

- [`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo()

> **new DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo**(`data`?): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

Defined in: main.ts:88694

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

## Properties

### content\_language\_code?

> `optional` **content\_language\_code**: `string`

Defined in: main.ts:88677

content language
code of the language that content on the target domain is written in

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`content_language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#content_language_code)

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:88671

domain ISO code
ISO code of the country that the target domain is determined to belong to

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`country_iso_code`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#country_iso_code)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:88658

domain meta description

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`description`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:88654

specified domain name

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`domain`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain)

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

Defined in: main.ts:88663

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`domain_rank`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#domain_rank)

***

### emails?

> `optional` **emails**: `string`[]

Defined in: main.ts:88683

emails of the target
emails indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`emails`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#emails)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:88674

domain language
code of the language that the target domain is determined to be associated with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#language_code)

***

### last\_visited?

> `optional` **last\_visited**: `string`

Defined in: main.ts:88668

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`last_visited`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#last_visited)

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

Defined in: main.ts:88660

domain meta keywords

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`meta_keywords`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#meta_keywords)

***

### phone\_numbers?

> `optional` **phone\_numbers**: `string`[]

Defined in: main.ts:88680

phone numbers of the target
contact phone numbers indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`phone_numbers`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#phone_numbers)

***

### social\_graph\_urls?

> `optional` **social\_graph\_urls**: `string`[]

Defined in: main.ts:88686

social media links and handles
social media URLs detected in the social graphs of the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`social_graph_urls`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#social_graph_urls)

***

### technologies?

> `optional` **technologies**: [`TechnologiesInfo`](TechnologiesInfo.md)

Defined in: main.ts:88690

technologies used by target domain
contains objects with the names of technologies used on the website
see the full list of available technologies structured by groups and categories

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`technologies`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#technologies)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:88656

domain meta title

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`title`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:88652

type of element

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md).[`type`](../interfaces/IDomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:88703

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:88749

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)

Defined in: main.ts:88742

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResultInfo.md)
