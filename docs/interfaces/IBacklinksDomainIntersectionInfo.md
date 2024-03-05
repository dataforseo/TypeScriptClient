[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksDomainIntersectionInfo

# Interface: IBacklinksDomainIntersectionInfo

## Implemented by

- [`BacklinksDomainIntersectionInfo`](../classes/BacklinksDomainIntersectionInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksDomainIntersectionInfo.md#backlinks)
- [backlinks\_spam\_score](IBacklinksDomainIntersectionInfo.md#backlinks_spam_score)
- [broken\_backlinks](IBacklinksDomainIntersectionInfo.md#broken_backlinks)
- [broken\_pages](IBacklinksDomainIntersectionInfo.md#broken_pages)
- [first\_seen](IBacklinksDomainIntersectionInfo.md#first_seen)
- [lost\_date](IBacklinksDomainIntersectionInfo.md#lost_date)
- [rank](IBacklinksDomainIntersectionInfo.md#rank)
- [referring\_domains](IBacklinksDomainIntersectionInfo.md#referring_domains)
- [referring\_domains\_nofollow](IBacklinksDomainIntersectionInfo.md#referring_domains_nofollow)
- [referring\_ips](IBacklinksDomainIntersectionInfo.md#referring_ips)
- [referring\_links\_attributes](IBacklinksDomainIntersectionInfo.md#referring_links_attributes)
- [referring\_links\_countries](IBacklinksDomainIntersectionInfo.md#referring_links_countries)
- [referring\_links\_platform\_types](IBacklinksDomainIntersectionInfo.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](IBacklinksDomainIntersectionInfo.md#referring_links_semantic_locations)
- [referring\_links\_tld](IBacklinksDomainIntersectionInfo.md#referring_links_tld)
- [referring\_links\_types](IBacklinksDomainIntersectionInfo.md#referring_links_types)
- [referring\_main\_domains](IBacklinksDomainIntersectionInfo.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IBacklinksDomainIntersectionInfo.md#referring_main_domains_nofollow)
- [referring\_pages](IBacklinksDomainIntersectionInfo.md#referring_pages)
- [referring\_subnets](IBacklinksDomainIntersectionInfo.md#referring_subnets)
- [target](IBacklinksDomainIntersectionInfo.md#target)
- [type](IBacklinksDomainIntersectionInfo.md#type)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Defined in

[main.ts:136957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136957)

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:136971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136971)

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks

#### Defined in

[main.ts:136973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136973)

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages

#### Defined in

[main.ts:136975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136975)

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:136962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136962)

___

### lost\_date

• `Optional` **lost\_date**: `number`

date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:136968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136968)

___

### rank

• `Optional` **rank**: `number`

rank of the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:136955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136955)

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

number of referring domains

#### Defined in

[main.ts:136977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136977)

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the corresponding target

#### Defined in

[main.ts:136979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136979)

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses

#### Defined in

[main.ts:136985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136985)

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:137000](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137000)

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:137010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137010)

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:137003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137003)

___

### referring\_links\_semantic\_locations

• `Optional` **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:137007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137007)

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top level domains of the referring links
contains top-level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:136992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136992)

___

### referring\_links\_types

• `Optional` **referring\_links\_types**: `Object`

types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:136997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136997)

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Defined in

[main.ts:136981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136981)

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:136983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136983)

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Defined in

[main.ts:136989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136989)

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Defined in

[main.ts:136987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136987)

___

### target

• `Optional` **target**: `string`

domain that links to the corresponding target from the POST array

#### Defined in

[main.ts:136951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136951)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:136949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136949)
