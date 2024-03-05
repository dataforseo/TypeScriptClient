[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksAnchorsLiveItem

# Class: BacklinksAnchorsLiveItem

## Implements

- [`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksAnchorsLiveItem.md#constructor)

### Properties

- [anchor](BacklinksAnchorsLiveItem.md#anchor)
- [backlinks](BacklinksAnchorsLiveItem.md#backlinks)
- [backlinks\_spam\_score](BacklinksAnchorsLiveItem.md#backlinks_spam_score)
- [broken\_backlinks](BacklinksAnchorsLiveItem.md#broken_backlinks)
- [broken\_pages](BacklinksAnchorsLiveItem.md#broken_pages)
- [first\_seen](BacklinksAnchorsLiveItem.md#first_seen)
- [lost\_date](BacklinksAnchorsLiveItem.md#lost_date)
- [rank](BacklinksAnchorsLiveItem.md#rank)
- [referring\_domains](BacklinksAnchorsLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksAnchorsLiveItem.md#referring_domains_nofollow)
- [referring\_ips](BacklinksAnchorsLiveItem.md#referring_ips)
- [referring\_links\_attributes](BacklinksAnchorsLiveItem.md#referring_links_attributes)
- [referring\_links\_countries](BacklinksAnchorsLiveItem.md#referring_links_countries)
- [referring\_links\_platform\_types](BacklinksAnchorsLiveItem.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](BacklinksAnchorsLiveItem.md#referring_links_semantic_locations)
- [referring\_links\_tld](BacklinksAnchorsLiveItem.md#referring_links_tld)
- [referring\_links\_types](BacklinksAnchorsLiveItem.md#referring_links_types)
- [referring\_main\_domains](BacklinksAnchorsLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksAnchorsLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](BacklinksAnchorsLiveItem.md#referring_pages)
- [referring\_subnets](BacklinksAnchorsLiveItem.md#referring_subnets)
- [type](BacklinksAnchorsLiveItem.md#type)

### Methods

- [init](BacklinksAnchorsLiveItem.md#init)
- [toJSON](BacklinksAnchorsLiveItem.md#tojson)
- [fromJS](BacklinksAnchorsLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksAnchorsLiveItem**(`data?`): [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md) |

#### Returns

[`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Defined in

[main.ts:132042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132042)

## Properties

### anchor

• `Optional` **anchor**: `string`

anchor of the backlink

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[anchor](../interfaces/IBacklinksAnchorsLiveItem.md#anchor)

#### Defined in

[main.ts:131973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131973)

___

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[backlinks](../interfaces/IBacklinksAnchorsLiveItem.md#backlinks)

#### Defined in

[main.ts:131980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131980)

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of all backlinks with this anchor
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[backlinks_spam_score](../interfaces/IBacklinksAnchorsLiveItem.md#backlinks_spam_score)

#### Defined in

[main.ts:131994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131994)

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[broken_backlinks](../interfaces/IBacklinksAnchorsLiveItem.md#broken_backlinks)

#### Defined in

[main.ts:131997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131997)

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[broken_pages](../interfaces/IBacklinksAnchorsLiveItem.md#broken_pages)

#### Defined in

[main.ts:132000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132000)

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[first_seen](../interfaces/IBacklinksAnchorsLiveItem.md#first_seen)

#### Defined in

[main.ts:131985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131985)

___

### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the last backlink with this anchor was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[lost_date](../interfaces/IBacklinksAnchorsLiveItem.md#lost_date)

#### Defined in

[main.ts:131991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131991)

___

### rank

• `Optional` **rank**: `number`

rank of the anchor links
rank volume that referring websites pass to the target through links with a particular anchor
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[rank](../interfaces/IBacklinksAnchorsLiveItem.md#rank)

#### Defined in

[main.ts:131978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131978)

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_domains](../interfaces/IBacklinksAnchorsLiveItem.md#referring_domains)

#### Defined in

[main.ts:132002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132002)

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_domains_nofollow](../interfaces/IBacklinksAnchorsLiveItem.md#referring_domains_nofollow)

#### Defined in

[main.ts:132004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132004)

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_ips](../interfaces/IBacklinksAnchorsLiveItem.md#referring_ips)

#### Defined in

[main.ts:132011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132011)

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_links_attributes](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_attributes)

#### Defined in

[main.ts:132026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132026)

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_links_countries](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_countries)

#### Defined in

[main.ts:132038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132038)

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_links_platform_types](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_platform_types)

#### Defined in

[main.ts:132029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132029)

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

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_links_semantic_locations](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_semantic_locations)

#### Defined in

[main.ts:132035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132035)

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_links_tld](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_tld)

#### Defined in

[main.ts:132018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132018)

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

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_links_types](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_types)

#### Defined in

[main.ts:132023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132023)

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_main_domains](../interfaces/IBacklinksAnchorsLiveItem.md#referring_main_domains)

#### Defined in

[main.ts:132006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132006)

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_main_domains_nofollow](../interfaces/IBacklinksAnchorsLiveItem.md#referring_main_domains_nofollow)

#### Defined in

[main.ts:132008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132008)

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to target with this anchor

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_pages](../interfaces/IBacklinksAnchorsLiveItem.md#referring_pages)

#### Defined in

[main.ts:132015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132015)

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[referring_subnets](../interfaces/IBacklinksAnchorsLiveItem.md#referring_subnets)

#### Defined in

[main.ts:132013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132013)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksAnchorsLiveItem](../interfaces/IBacklinksAnchorsLiveItem.md).[type](../interfaces/IBacklinksAnchorsLiveItem.md#type)

#### Defined in

[main.ts:131971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131971)

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

[main.ts:132051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132051)

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

[main.ts:132125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132125)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Defined in

[main.ts:132118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132118)
