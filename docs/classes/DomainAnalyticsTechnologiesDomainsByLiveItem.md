**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByLiveItem

# Class: DomainAnalyticsTechnologiesDomainsByLiveItem

items array

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByLiveItem(data)

> **new DomainAnalyticsTechnologiesDomainsByLiveItem**(`data`?): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Parameters

• **data?**: [`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Source

main.ts:78245

## Properties

### content\_language\_code?

> **`optional`** **content\_language\_code**: `string`

content language
code of the language that content on the target domain is written with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`content_language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#content_language_code)

#### Source

main.ts:78228

***

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

domain ISO code
ISO code of the country that target domain is determined to belong to

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`country_iso_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#country_iso_code)

#### Source

main.ts:78222

***

### description?

> **`optional`** **description**: `string`

domain meta description

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`description`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#description)

#### Source

main.ts:78209

***

### domain?

> **`optional`** **domain**: `string`

specified domain name

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`domain`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain)

#### Source

main.ts:78205

***

### domain\_rank?

> **`optional`** **domain\_rank**: `string`

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`domain_rank`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain_rank)

#### Source

main.ts:78214

***

### emails?

> **`optional`** **emails**: `string`[]

emails of the target
emails indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`emails`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#emails)

#### Source

main.ts:78234

***

### language\_code?

> **`optional`** **language\_code**: `string`

domain language
code of the language that target domain is determined to be associated with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#language_code)

#### Source

main.ts:78225

***

### last\_visited?

> **`optional`** **last\_visited**: `string`

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`last_visited`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#last_visited)

#### Source

main.ts:78219

***

### meta\_keywords?

> **`optional`** **meta\_keywords**: `string`[]

domain meta keywords

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`meta_keywords`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#meta_keywords)

#### Source

main.ts:78211

***

### phone\_numbers?

> **`optional`** **phone\_numbers**: `string`[]

phone numbers of the target
contact phone numbers indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`phone_numbers`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#phone_numbers)

#### Source

main.ts:78231

***

### social\_graph\_urls?

> **`optional`** **social\_graph\_urls**: `string`[]

social media links and handles
social media URLs detected in the social graphs of the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`social_graph_urls`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#social_graph_urls)

#### Source

main.ts:78237

***

### technologies?

> **`optional`** **technologies**: [`TechnologiesInfo`](TechnologiesInfo.md)

technologies used by target domain
contains objects with the names of technologies used on the website;
to get a full list of technologies and their structure, refer to the technologies endpoint

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`technologies`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#technologies)

#### Source

main.ts:78241

***

### title?

> **`optional`** **title**: `string`

domain meta title

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`title`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#title)

#### Source

main.ts:78207

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`type`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#type)

#### Source

main.ts:78203

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:78254

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:78300

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Source

main.ts:78293
