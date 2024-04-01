[Documentation](../README.md) / [Exports](../modules.md) / BacklinksReferringDomainsLiveItem

# Class: BacklinksReferringDomainsLiveItem

## Implements

- [`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksReferringDomainsLiveItem.md#constructor)

### Properties

- [backlinks](BacklinksReferringDomainsLiveItem.md#backlinks)
- [backlinks\_spam\_score](BacklinksReferringDomainsLiveItem.md#backlinks_spam_score)
- [broken\_backlinks](BacklinksReferringDomainsLiveItem.md#broken_backlinks)
- [broken\_pages](BacklinksReferringDomainsLiveItem.md#broken_pages)
- [domain](BacklinksReferringDomainsLiveItem.md#domain)
- [first\_seen](BacklinksReferringDomainsLiveItem.md#first_seen)
- [lost\_date](BacklinksReferringDomainsLiveItem.md#lost_date)
- [rank](BacklinksReferringDomainsLiveItem.md#rank)
- [referring\_domains](BacklinksReferringDomainsLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksReferringDomainsLiveItem.md#referring_domains_nofollow)
- [referring\_ips](BacklinksReferringDomainsLiveItem.md#referring_ips)
- [referring\_links\_attributes](BacklinksReferringDomainsLiveItem.md#referring_links_attributes)
- [referring\_links\_countries](BacklinksReferringDomainsLiveItem.md#referring_links_countries)
- [referring\_links\_platform\_types](BacklinksReferringDomainsLiveItem.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](BacklinksReferringDomainsLiveItem.md#referring_links_semantic_locations)
- [referring\_links\_tld](BacklinksReferringDomainsLiveItem.md#referring_links_tld)
- [referring\_links\_types](BacklinksReferringDomainsLiveItem.md#referring_links_types)
- [referring\_main\_domains](BacklinksReferringDomainsLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksReferringDomainsLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](BacklinksReferringDomainsLiveItem.md#referring_pages)
- [referring\_pages\_nofollow](BacklinksReferringDomainsLiveItem.md#referring_pages_nofollow)
- [referring\_subnets](BacklinksReferringDomainsLiveItem.md#referring_subnets)
- [type](BacklinksReferringDomainsLiveItem.md#type)

### Methods

- [init](BacklinksReferringDomainsLiveItem.md#init)
- [toJSON](BacklinksReferringDomainsLiveItem.md#tojson)
- [fromJS](BacklinksReferringDomainsLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksReferringDomainsLiveItem**(`data?`): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md) |

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Defined in

main.ts:140139

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks pointing to the target

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[backlinks](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks)

#### Defined in

main.ts:140073

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of all backlinks pointing to the domain
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[backlinks_spam_score](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks_spam_score)

#### Defined in

main.ts:140087

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the domain

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[broken_backlinks](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_backlinks)

#### Defined in

main.ts:140090

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[broken_pages](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_pages)

#### Defined in

main.ts:140093

___

### domain

• `Optional` **domain**: `string`

referring domain

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[domain](../interfaces/IBacklinksReferringDomainsLiveItem.md#domain)

#### Defined in

main.ts:140066

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[first_seen](../interfaces/IBacklinksReferringDomainsLiveItem.md#first_seen)

#### Defined in

main.ts:140078

___

### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[lost_date](../interfaces/IBacklinksReferringDomainsLiveItem.md#lost_date)

#### Defined in

main.ts:140084

___

### rank

• `Optional` **rank**: `number`

domain rank
rank volume that a referring website passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[rank](../interfaces/IBacklinksReferringDomainsLiveItem.md#rank)

#### Defined in

main.ts:140071

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_domains](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains)

#### Defined in

main.ts:140096

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_domains_nofollow](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:140098

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_ips](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_ips)

#### Defined in

main.ts:140106

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_links_attributes](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_attributes)

#### Defined in

main.ts:140123

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_links_countries](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_countries)

#### Defined in

main.ts:140135

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_links_platform_types](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_platform_types)

#### Defined in

main.ts:140126

___

### referring\_links\_semantic\_locations

• `Optional` **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_links_semantic_locations](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_semantic_locations)

#### Defined in

main.ts:140132

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_links_tld](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_tld)

#### Defined in

main.ts:140115

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

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_links_types](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_types)

#### Defined in

main.ts:140120

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains
the number of primary (root) domains referring to your target

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_main_domains](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains)

#### Defined in

main.ts:140101

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_main_domains_nofollow](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:140103

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target specified

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_pages](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages)

#### Defined in

main.ts:140110

___

### referring\_pages\_nofollow

• `Optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_pages_nofollow](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages_nofollow)

#### Defined in

main.ts:140112

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[referring_subnets](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_subnets)

#### Defined in

main.ts:140108

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksReferringDomainsLiveItem](../interfaces/IBacklinksReferringDomainsLiveItem.md).[type](../interfaces/IBacklinksReferringDomainsLiveItem.md#type)

#### Defined in

main.ts:140064

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

main.ts:140148

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

main.ts:140223

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Defined in

main.ts:140216
