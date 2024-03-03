[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesSummaryLiveItem

# Class: BacklinksDomainPagesSummaryLiveItem

## Implements

- [`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesSummaryLiveItem.md#constructor)

### Properties

- [backlinks](BacklinksDomainPagesSummaryLiveItem.md#backlinks)
- [backlinks\_spam\_score](BacklinksDomainPagesSummaryLiveItem.md#backlinks_spam_score)
- [broken\_backlinks](BacklinksDomainPagesSummaryLiveItem.md#broken_backlinks)
- [broken\_pages](BacklinksDomainPagesSummaryLiveItem.md#broken_pages)
- [first\_seen](BacklinksDomainPagesSummaryLiveItem.md#first_seen)
- [lost\_date](BacklinksDomainPagesSummaryLiveItem.md#lost_date)
- [rank](BacklinksDomainPagesSummaryLiveItem.md#rank)
- [referring\_domains](BacklinksDomainPagesSummaryLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksDomainPagesSummaryLiveItem.md#referring_domains_nofollow)
- [referring\_ips](BacklinksDomainPagesSummaryLiveItem.md#referring_ips)
- [referring\_links\_attributes](BacklinksDomainPagesSummaryLiveItem.md#referring_links_attributes)
- [referring\_links\_countries](BacklinksDomainPagesSummaryLiveItem.md#referring_links_countries)
- [referring\_links\_platform\_types](BacklinksDomainPagesSummaryLiveItem.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](BacklinksDomainPagesSummaryLiveItem.md#referring_links_semantic_locations)
- [referring\_links\_tld](BacklinksDomainPagesSummaryLiveItem.md#referring_links_tld)
- [referring\_links\_types](BacklinksDomainPagesSummaryLiveItem.md#referring_links_types)
- [referring\_main\_domains](BacklinksDomainPagesSummaryLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksDomainPagesSummaryLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](BacklinksDomainPagesSummaryLiveItem.md#referring_pages)
- [referring\_subnets](BacklinksDomainPagesSummaryLiveItem.md#referring_subnets)
- [type](BacklinksDomainPagesSummaryLiveItem.md#type)
- [url](BacklinksDomainPagesSummaryLiveItem.md#url)

### Methods

- [init](BacklinksDomainPagesSummaryLiveItem.md#init)
- [toJSON](BacklinksDomainPagesSummaryLiveItem.md#tojson)
- [fromJS](BacklinksDomainPagesSummaryLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesSummaryLiveItem**(`data?`): [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md) |

#### Returns

[`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Defined in

main.ts:134108

## Properties

### backlinks

• `Optional` **backlinks**: `number`

number of backlinks

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[backlinks](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#backlinks)

#### Defined in

main.ts:134046

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[backlinks_spam_score](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#backlinks_spam_score)

#### Defined in

main.ts:134060

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[broken_backlinks](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#broken_backlinks)

#### Defined in

main.ts:134063

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[broken_pages](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#broken_pages)

#### Defined in

main.ts:134066

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found a backlink to this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[first_seen](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#first_seen)

#### Defined in

main.ts:134051

___

### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the last backlink to this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[lost_date](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#lost_date)

#### Defined in

main.ts:134057

___

### rank

• `Optional` **rank**: `number`

page rank
rank of the page on the target website
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[rank](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#rank)

#### Defined in

main.ts:134044

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number domains referring to the page

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_domains](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_domains)

#### Defined in

main.ts:134068

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_domains_nofollow](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:134070

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_ips](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_ips)

#### Defined in

main.ts:134077

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_links_attributes](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_attributes)

#### Defined in

main.ts:134092

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_links_countries](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_countries)

#### Defined in

main.ts:134104

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_links_platform_types](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_platform_types)

#### Defined in

main.ts:134095

___

### referring\_links\_semantic\_locations

• `Optional` **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, footer

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_links_semantic_locations](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_semantic_locations)

#### Defined in

main.ts:134101

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_links_tld](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_tld)

#### Defined in

main.ts:134084

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

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_links_types](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_types)

#### Defined in

main.ts:134089

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_main_domains](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_main_domains)

#### Defined in

main.ts:134072

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_main_domains_nofollow](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:134074

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the relevant url

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_pages](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_pages)

#### Defined in

main.ts:134081

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[referring_subnets](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_subnets)

#### Defined in

main.ts:134079

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[type](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#type)

#### Defined in

main.ts:134037

___

### url

• `Optional` **url**: `string`

page URL

#### Implementation of

[IBacklinksDomainPagesSummaryLiveItem](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[url](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#url)

#### Defined in

main.ts:134039

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

main.ts:134117

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

main.ts:134191

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Defined in

main.ts:134184
