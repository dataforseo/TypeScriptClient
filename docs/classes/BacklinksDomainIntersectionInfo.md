[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainIntersectionInfo

# Class: BacklinksDomainIntersectionInfo

## Implements

- [`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainIntersectionInfo.md#constructor)

### Properties

- [backlinks](BacklinksDomainIntersectionInfo.md#backlinks)
- [backlinks\_spam\_score](BacklinksDomainIntersectionInfo.md#backlinks_spam_score)
- [broken\_backlinks](BacklinksDomainIntersectionInfo.md#broken_backlinks)
- [broken\_pages](BacklinksDomainIntersectionInfo.md#broken_pages)
- [first\_seen](BacklinksDomainIntersectionInfo.md#first_seen)
- [lost\_date](BacklinksDomainIntersectionInfo.md#lost_date)
- [rank](BacklinksDomainIntersectionInfo.md#rank)
- [referring\_domains](BacklinksDomainIntersectionInfo.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksDomainIntersectionInfo.md#referring_domains_nofollow)
- [referring\_ips](BacklinksDomainIntersectionInfo.md#referring_ips)
- [referring\_links\_attributes](BacklinksDomainIntersectionInfo.md#referring_links_attributes)
- [referring\_links\_countries](BacklinksDomainIntersectionInfo.md#referring_links_countries)
- [referring\_links\_platform\_types](BacklinksDomainIntersectionInfo.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](BacklinksDomainIntersectionInfo.md#referring_links_semantic_locations)
- [referring\_links\_tld](BacklinksDomainIntersectionInfo.md#referring_links_tld)
- [referring\_links\_types](BacklinksDomainIntersectionInfo.md#referring_links_types)
- [referring\_main\_domains](BacklinksDomainIntersectionInfo.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksDomainIntersectionInfo.md#referring_main_domains_nofollow)
- [referring\_pages](BacklinksDomainIntersectionInfo.md#referring_pages)
- [referring\_subnets](BacklinksDomainIntersectionInfo.md#referring_subnets)
- [target](BacklinksDomainIntersectionInfo.md#target)
- [type](BacklinksDomainIntersectionInfo.md#type)

### Methods

- [init](BacklinksDomainIntersectionInfo.md#init)
- [toJSON](BacklinksDomainIntersectionInfo.md#tojson)
- [fromJS](BacklinksDomainIntersectionInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainIntersectionInfo**(`data?`): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md) |

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Defined in

main.ts:136940

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[backlinks](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks)

#### Defined in

main.ts:136883

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[backlinks_spam_score](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks_spam_score)

#### Defined in

main.ts:136897

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[broken_backlinks](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_backlinks)

#### Defined in

main.ts:136899

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[broken_pages](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_pages)

#### Defined in

main.ts:136901

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[first_seen](../interfaces/IBacklinksDomainIntersectionInfo.md#first_seen)

#### Defined in

main.ts:136888

___

### lost\_date

• `Optional` **lost\_date**: `number`

date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[lost_date](../interfaces/IBacklinksDomainIntersectionInfo.md#lost_date)

#### Defined in

main.ts:136894

___

### rank

• `Optional` **rank**: `number`

rank of the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[rank](../interfaces/IBacklinksDomainIntersectionInfo.md#rank)

#### Defined in

main.ts:136881

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_domains](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains)

#### Defined in

main.ts:136903

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the corresponding target

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_domains_nofollow](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains_nofollow)

#### Defined in

main.ts:136905

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_ips](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_ips)

#### Defined in

main.ts:136911

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_links_attributes](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_attributes)

#### Defined in

main.ts:136926

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_links_countries](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_countries)

#### Defined in

main.ts:136936

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_links_platform_types](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_platform_types)

#### Defined in

main.ts:136929

___

### referring\_links\_semantic\_locations

• `Optional` **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_links_semantic_locations](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_semantic_locations)

#### Defined in

main.ts:136933

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top level domains of the referring links
contains top-level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_links_tld](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_tld)

#### Defined in

main.ts:136918

___

### referring\_links\_types

• `Optional` **referring\_links\_types**: `Object`

types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_links_types](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_types)

#### Defined in

main.ts:136923

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_main_domains](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains)

#### Defined in

main.ts:136907

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_main_domains_nofollow](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains_nofollow)

#### Defined in

main.ts:136909

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_pages](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_pages)

#### Defined in

main.ts:136915

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[referring_subnets](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_subnets)

#### Defined in

main.ts:136913

___

### target

• `Optional` **target**: `string`

domain that links to the corresponding target from the POST array

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[target](../interfaces/IBacklinksDomainIntersectionInfo.md#target)

#### Defined in

main.ts:136877

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksDomainIntersectionInfo](../interfaces/IBacklinksDomainIntersectionInfo.md).[type](../interfaces/IBacklinksDomainIntersectionInfo.md#type)

#### Defined in

main.ts:136875

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

main.ts:136949

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

main.ts:137023

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Defined in

main.ts:137016
