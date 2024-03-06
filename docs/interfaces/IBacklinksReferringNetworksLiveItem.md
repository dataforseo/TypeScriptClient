[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksReferringNetworksLiveItem

# Interface: IBacklinksReferringNetworksLiveItem

## Implemented by

- [`BacklinksReferringNetworksLiveItem`](../classes/BacklinksReferringNetworksLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksReferringNetworksLiveItem.md#backlinks)
- [broken\_backlinks](IBacklinksReferringNetworksLiveItem.md#broken_backlinks)
- [broken\_pages](IBacklinksReferringNetworksLiveItem.md#broken_pages)
- [first\_seen](IBacklinksReferringNetworksLiveItem.md#first_seen)
- [lost\_date](IBacklinksReferringNetworksLiveItem.md#lost_date)
- [network\_address](IBacklinksReferringNetworksLiveItem.md#network_address)
- [rank](IBacklinksReferringNetworksLiveItem.md#rank)
- [referring\_domains](IBacklinksReferringNetworksLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](IBacklinksReferringNetworksLiveItem.md#referring_domains_nofollow)
- [referring\_ips](IBacklinksReferringNetworksLiveItem.md#referring_ips)
- [referring\_links\_attributes](IBacklinksReferringNetworksLiveItem.md#referring_links_attributes)
- [referring\_links\_countries](IBacklinksReferringNetworksLiveItem.md#referring_links_countries)
- [referring\_links\_platform\_types](IBacklinksReferringNetworksLiveItem.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](IBacklinksReferringNetworksLiveItem.md#referring_links_semantic_locations)
- [referring\_links\_tld](IBacklinksReferringNetworksLiveItem.md#referring_links_tld)
- [referring\_links\_types](IBacklinksReferringNetworksLiveItem.md#referring_links_types)
- [referring\_main\_domains](IBacklinksReferringNetworksLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IBacklinksReferringNetworksLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](IBacklinksReferringNetworksLiveItem.md#referring_pages)
- [referring\_subnets](IBacklinksReferringNetworksLiveItem.md#referring_subnets)
- [type](IBacklinksReferringNetworksLiveItem.md#type)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks pointing to the target

#### Defined in

[main.ts:135678](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135678)

___


### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the domain

#### Defined in

[main.ts:135692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135692)

___


### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Defined in

[main.ts:135695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135695)

___


### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:135683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135683)

___


### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

[main.ts:135689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135689)

___


### network\_address

• `Optional` **network\_address**: `string`

address of the referring subnetwork or IP

#### Defined in

[main.ts:135671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135671)

___


### rank

• `Optional` **rank**: `number`

network rank
rank volume that a referring network passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:135676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135676)

___


### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Defined in

[main.ts:135698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135698)

___


### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:135700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135700)

___


### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Defined in

[main.ts:135707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135707)

___


### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:135722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135722)

___


### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:135734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135734)

___


### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:135725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135725)

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

#### Defined in

[main.ts:135731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135731)

___


### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:135714](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135714)

___


### referring\_links\_types

• `Optional` **referring\_links\_types**: `Object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:135719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135719)

___


### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Defined in

[main.ts:135702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135702)

___


### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:135704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135704)

___


### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target specified

#### Defined in

[main.ts:135711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135711)

___


### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Defined in

[main.ts:135709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135709)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:135669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135669)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")