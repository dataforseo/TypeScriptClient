[Documentation](../README.md) / [Exports](../modules.md) / BacklinksHistoryLiveItem

# Class: BacklinksHistoryLiveItem

## Implements

- [`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksHistoryLiveItem.md#constructor)

### Properties

- [backlinks](BacklinksHistoryLiveItem.md#backlinks)
- [broken\_backlinks](BacklinksHistoryLiveItem.md#broken_backlinks)
- [broken\_pages](BacklinksHistoryLiveItem.md#broken_pages)
- [crawled\_pages](BacklinksHistoryLiveItem.md#crawled_pages)
- [date](BacklinksHistoryLiveItem.md#date)
- [external\_links\_count](BacklinksHistoryLiveItem.md#external_links_count)
- [info](BacklinksHistoryLiveItem.md#info)
- [internal\_links\_count](BacklinksHistoryLiveItem.md#internal_links_count)
- [lost\_backlinks](BacklinksHistoryLiveItem.md#lost_backlinks)
- [lost\_referring\_domains](BacklinksHistoryLiveItem.md#lost_referring_domains)
- [new\_backlinks](BacklinksHistoryLiveItem.md#new_backlinks)
- [new\_referring\_domains](BacklinksHistoryLiveItem.md#new_referring_domains)
- [rank](BacklinksHistoryLiveItem.md#rank)
- [referring\_domains](BacklinksHistoryLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksHistoryLiveItem.md#referring_domains_nofollow)
- [referring\_ips](BacklinksHistoryLiveItem.md#referring_ips)
- [referring\_links\_attributes](BacklinksHistoryLiveItem.md#referring_links_attributes)
- [referring\_links\_countries](BacklinksHistoryLiveItem.md#referring_links_countries)
- [referring\_links\_platform\_types](BacklinksHistoryLiveItem.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](BacklinksHistoryLiveItem.md#referring_links_semantic_locations)
- [referring\_links\_tld](BacklinksHistoryLiveItem.md#referring_links_tld)
- [referring\_links\_types](BacklinksHistoryLiveItem.md#referring_links_types)
- [referring\_main\_domains](BacklinksHistoryLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksHistoryLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](BacklinksHistoryLiveItem.md#referring_pages)
- [referring\_subnets](BacklinksHistoryLiveItem.md#referring_subnets)
- [type](BacklinksHistoryLiveItem.md#type)

### Methods

- [init](BacklinksHistoryLiveItem.md#init)
- [toJSON](BacklinksHistoryLiveItem.md#tojson)
- [fromJS](BacklinksHistoryLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksHistoryLiveItem**(`data?`): [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md) |

#### Returns

[`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Defined in

main.ts:130240

## Properties

### backlinks

• `Optional` **backlinks**: `number`

number of backlinks

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[backlinks](../interfaces/IBacklinksHistoryLiveItem.md#backlinks)

#### Defined in

main.ts:130161

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[broken_backlinks](../interfaces/IBacklinksHistoryLiveItem.md#broken_backlinks)

#### Defined in

main.ts:130194

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that receive backlinks but respond with 4xx or 5xx status codes

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[broken_pages](../interfaces/IBacklinksHistoryLiveItem.md#broken_pages)

#### Defined in

main.ts:130197

___

### crawled\_pages

• `Optional` **crawled\_pages**: `number`

number of crawled pages for the target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[crawled_pages](../interfaces/IBacklinksHistoryLiveItem.md#crawled_pages)

#### Defined in

main.ts:130183

___

### date

• `Optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[date](../interfaces/IBacklinksHistoryLiveItem.md#date)

#### Defined in

main.ts:130156

___

### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[external_links_count](../interfaces/IBacklinksHistoryLiveItem.md#external_links_count)

#### Defined in

main.ts:130191

___

### info

• `Optional` **info**: [`TargetInfo`](TargetInfo.md)

information about the target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[info](../interfaces/IBacklinksHistoryLiveItem.md#info)

#### Defined in

main.ts:130185

___

### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[internal_links_count](../interfaces/IBacklinksHistoryLiveItem.md#internal_links_count)

#### Defined in

main.ts:130188

___

### lost\_backlinks

• `Optional` **lost\_backlinks**: `number`

number of lost backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request preceds May 2021, the field will equal 0

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[lost_backlinks](../interfaces/IBacklinksHistoryLiveItem.md#lost_backlinks)

#### Defined in

main.ts:130171

___

### lost\_referring\_domains

• `Optional` **lost\_referring\_domains**: `number`

number of lost referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request preceds May 2021, the field will equal 0

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[lost_referring_domains](../interfaces/IBacklinksHistoryLiveItem.md#lost_referring_domains)

#### Defined in

main.ts:130181

___

### new\_backlinks

• `Optional` **new\_backlinks**: `number`

number of new backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request preceds May 2021, the field will equal 0

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[new_backlinks](../interfaces/IBacklinksHistoryLiveItem.md#new_backlinks)

#### Defined in

main.ts:130166

___

### new\_referring\_domains

• `Optional` **new\_referring\_domains**: `number`

number of new referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request preceds May 2021, the field will equal 0

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[new_referring_domains](../interfaces/IBacklinksHistoryLiveItem.md#new_referring_domains)

#### Defined in

main.ts:130176

___

### rank

• `Optional` **rank**: `number`

domain rank on the given date
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[rank](../interfaces/IBacklinksHistoryLiveItem.md#rank)

#### Defined in

main.ts:130159

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_domains](../interfaces/IBacklinksHistoryLiveItem.md#referring_domains)

#### Defined in

main.ts:130200

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_domains_nofollow](../interfaces/IBacklinksHistoryLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:130202

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_ips](../interfaces/IBacklinksHistoryLiveItem.md#referring_ips)

#### Defined in

main.ts:130209

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_links_attributes](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_attributes)

#### Defined in

main.ts:130224

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_links_countries](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_countries)

#### Defined in

main.ts:130236

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_links_platform_types](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_platform_types)

#### Defined in

main.ts:130227

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

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_links_semantic_locations](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_semantic_locations)

#### Defined in

main.ts:130233

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top-level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_links_tld](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_tld)

#### Defined in

main.ts:130216

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

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_links_types](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_types)

#### Defined in

main.ts:130221

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_main_domains](../interfaces/IBacklinksHistoryLiveItem.md#referring_main_domains)

#### Defined in

main.ts:130204

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_main_domains_nofollow](../interfaces/IBacklinksHistoryLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:130206

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

number of pages pointing to the target

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_pages](../interfaces/IBacklinksHistoryLiveItem.md#referring_pages)

#### Defined in

main.ts:130213

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[referring_subnets](../interfaces/IBacklinksHistoryLiveItem.md#referring_subnets)

#### Defined in

main.ts:130211

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksHistoryLiveItem](../interfaces/IBacklinksHistoryLiveItem.md).[type](../interfaces/IBacklinksHistoryLiveItem.md#type)

#### Defined in

main.ts:130151

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

main.ts:130249

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

main.ts:130328

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Defined in

main.ts:130321
