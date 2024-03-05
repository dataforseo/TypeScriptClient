[dataforseo-client](../README.md) / [Exports](../modules.md) / PageSummary

# Class: PageSummary

## Implements

- [`IPageSummary`](../interfaces/IPageSummary.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PageSummary.md#constructor)

### Properties

- [backlinks](PageSummary.md#backlinks)
- [backlinks\_spam\_score](PageSummary.md#backlinks_spam_score)
- [broken\_backlinks](PageSummary.md#broken_backlinks)
- [broken\_pages](PageSummary.md#broken_pages)
- [first\_seen](PageSummary.md#first_seen)
- [lost\_date](PageSummary.md#lost_date)
- [rank](PageSummary.md#rank)
- [referring\_domains](PageSummary.md#referring_domains)
- [referring\_domains\_nofollow](PageSummary.md#referring_domains_nofollow)
- [referring\_ips](PageSummary.md#referring_ips)
- [referring\_links\_attributes](PageSummary.md#referring_links_attributes)
- [referring\_links\_countries](PageSummary.md#referring_links_countries)
- [referring\_links\_platform\_types](PageSummary.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](PageSummary.md#referring_links_semantic_locations)
- [referring\_links\_tld](PageSummary.md#referring_links_tld)
- [referring\_links\_types](PageSummary.md#referring_links_types)
- [referring\_main\_domains](PageSummary.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](PageSummary.md#referring_main_domains_nofollow)
- [referring\_pages](PageSummary.md#referring_pages)
- [referring\_subnets](PageSummary.md#referring_subnets)

### Methods

- [init](PageSummary.md#init)
- [toJSON](PageSummary.md#tojson)
- [fromJS](PageSummary.md#fromjs)

## Constructors

### constructor

• **new PageSummary**(`data?`): [`PageSummary`](PageSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPageSummary`](../interfaces/IPageSummary.md) |

#### Returns

[`PageSummary`](PageSummary.md)

#### Defined in

[main.ts:133020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133020)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[backlinks](../interfaces/IPageSummary.md#backlinks)

#### Defined in

[main.ts:132969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132969)

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[backlinks_spam_score](../interfaces/IPageSummary.md#backlinks_spam_score)

#### Defined in

[main.ts:132972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132972)

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[broken_backlinks](../interfaces/IPageSummary.md#broken_backlinks)

#### Defined in

[main.ts:132975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132975)

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[broken_pages](../interfaces/IPageSummary.md#broken_pages)

#### Defined in

[main.ts:132978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132978)

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[first_seen](../interfaces/IPageSummary.md#first_seen)

#### Defined in

[main.ts:132956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132956)

___

### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the last backlink for this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[lost_date](../interfaces/IPageSummary.md#lost_date)

#### Defined in

[main.ts:132962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132962)

___

### rank

• `Optional` **rank**: `number`

page rank
rank of the page on the target website
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[rank](../interfaces/IPageSummary.md#rank)

#### Defined in

[main.ts:132967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132967)

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_domains](../interfaces/IPageSummary.md#referring_domains)

#### Defined in

[main.ts:132980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132980)

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_domains_nofollow](../interfaces/IPageSummary.md#referring_domains_nofollow)

#### Defined in

[main.ts:132982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132982)

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_ips](../interfaces/IPageSummary.md#referring_ips)

#### Defined in

[main.ts:132989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132989)

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_links_attributes](../interfaces/IPageSummary.md#referring_links_attributes)

#### Defined in

[main.ts:133004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133004)

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_links_countries](../interfaces/IPageSummary.md#referring_links_countries)

#### Defined in

[main.ts:133016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133016)

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_links_platform_types](../interfaces/IPageSummary.md#referring_links_platform_types)

#### Defined in

[main.ts:133007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133007)

___

### referring\_links\_semantic\_locations

• `Optional` **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_links_semantic_locations](../interfaces/IPageSummary.md#referring_links_semantic_locations)

#### Defined in

[main.ts:133013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133013)

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_links_tld](../interfaces/IPageSummary.md#referring_links_tld)

#### Defined in

[main.ts:132996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132996)

___

### referring\_links\_types

• `Optional` **referring\_links\_types**: `Object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_links_types](../interfaces/IPageSummary.md#referring_links_types)

#### Defined in

[main.ts:133001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133001)

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_main_domains](../interfaces/IPageSummary.md#referring_main_domains)

#### Defined in

[main.ts:132984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132984)

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_main_domains_nofollow](../interfaces/IPageSummary.md#referring_main_domains_nofollow)

#### Defined in

[main.ts:132986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132986)

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_pages](../interfaces/IPageSummary.md#referring_pages)

#### Defined in

[main.ts:132993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132993)

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IPageSummary](../interfaces/IPageSummary.md).[referring_subnets](../interfaces/IPageSummary.md#referring_subnets)

#### Defined in

[main.ts:132991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132991)

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

[main.ts:133029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133029)

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

[main.ts:133101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133101)

___

### fromJS

▸ **fromJS**(`data`): [`PageSummary`](PageSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PageSummary`](PageSummary.md)

#### Defined in

[main.ts:133094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133094)
