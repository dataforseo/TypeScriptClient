[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksReferringDomainsLiveItem

# Interface: IBacklinksReferringDomainsLiveItem

## Implemented by

- [`BacklinksReferringDomainsLiveItem`](../classes/BacklinksReferringDomainsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksReferringDomainsLiveItem.md#backlinks)
- [backlinks\_spam\_score](IBacklinksReferringDomainsLiveItem.md#backlinks_spam_score)
- [broken\_backlinks](IBacklinksReferringDomainsLiveItem.md#broken_backlinks)
- [broken\_pages](IBacklinksReferringDomainsLiveItem.md#broken_pages)
- [domain](IBacklinksReferringDomainsLiveItem.md#domain)
- [first\_seen](IBacklinksReferringDomainsLiveItem.md#first_seen)
- [lost\_date](IBacklinksReferringDomainsLiveItem.md#lost_date)
- [rank](IBacklinksReferringDomainsLiveItem.md#rank)
- [referring\_domains](IBacklinksReferringDomainsLiveItem.md#referring_domains)
- [referring\_domains\_nofollow](IBacklinksReferringDomainsLiveItem.md#referring_domains_nofollow)
- [referring\_ips](IBacklinksReferringDomainsLiveItem.md#referring_ips)
- [referring\_links\_attributes](IBacklinksReferringDomainsLiveItem.md#referring_links_attributes)
- [referring\_links\_countries](IBacklinksReferringDomainsLiveItem.md#referring_links_countries)
- [referring\_links\_platform\_types](IBacklinksReferringDomainsLiveItem.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](IBacklinksReferringDomainsLiveItem.md#referring_links_semantic_locations)
- [referring\_links\_tld](IBacklinksReferringDomainsLiveItem.md#referring_links_tld)
- [referring\_links\_types](IBacklinksReferringDomainsLiveItem.md#referring_links_types)
- [referring\_main\_domains](IBacklinksReferringDomainsLiveItem.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IBacklinksReferringDomainsLiveItem.md#referring_main_domains_nofollow)
- [referring\_pages](IBacklinksReferringDomainsLiveItem.md#referring_pages)
- [referring\_subnets](IBacklinksReferringDomainsLiveItem.md#referring_subnets)
- [type](IBacklinksReferringDomainsLiveItem.md#type)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks pointing to the target

#### Defined in

[main.ts:134896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134896)

___


### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of all backlinks pointing to the domain
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:134910](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134910)

___


### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the domain

#### Defined in

[main.ts:134913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134913)

___


### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Defined in

[main.ts:134916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134916)

___


### domain

• `Optional` **domain**: `string`

referring domain

#### Defined in

[main.ts:134889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134889)

___


### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:134901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134901)

___


### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

[main.ts:134907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134907)

___


### rank

• `Optional` **rank**: `number`

domain rank
rank volume that a referring website passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:134894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134894)

___


### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Defined in

[main.ts:134919](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134919)

___


### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:134921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134921)

___


### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Defined in

[main.ts:134929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134929)

___


### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:134944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134944)

___


### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:134956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134956)

___


### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:134947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134947)

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

[main.ts:134953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134953)

___


### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:134936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134936)

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

[main.ts:134941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134941)

___


### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains
the number of primary (root) domains referring to your target

#### Defined in

[main.ts:134924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134924)

___


### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:134926](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134926)

___


### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target specified

#### Defined in

[main.ts:134933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134933)

___


### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Defined in

[main.ts:134931](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134931)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:134887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L134887)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")