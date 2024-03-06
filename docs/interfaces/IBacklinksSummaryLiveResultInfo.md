[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksSummaryLiveResultInfo

# Interface: IBacklinksSummaryLiveResultInfo

## Implemented by

- [`BacklinksSummaryLiveResultInfo`](../classes/BacklinksSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksSummaryLiveResultInfo.md#backlinks)
- [backlinks\_spam\_score](IBacklinksSummaryLiveResultInfo.md#backlinks_spam_score)
- [broken\_backlinks](IBacklinksSummaryLiveResultInfo.md#broken_backlinks)
- [broken\_pages](IBacklinksSummaryLiveResultInfo.md#broken_pages)
- [crawled\_pages](IBacklinksSummaryLiveResultInfo.md#crawled_pages)
- [external\_links\_count](IBacklinksSummaryLiveResultInfo.md#external_links_count)
- [first\_seen](IBacklinksSummaryLiveResultInfo.md#first_seen)
- [info](IBacklinksSummaryLiveResultInfo.md#info)
- [internal\_links\_count](IBacklinksSummaryLiveResultInfo.md#internal_links_count)
- [lost\_date](IBacklinksSummaryLiveResultInfo.md#lost_date)
- [rank](IBacklinksSummaryLiveResultInfo.md#rank)
- [referring\_domains](IBacklinksSummaryLiveResultInfo.md#referring_domains)
- [referring\_domains\_nofollow](IBacklinksSummaryLiveResultInfo.md#referring_domains_nofollow)
- [referring\_ips](IBacklinksSummaryLiveResultInfo.md#referring_ips)
- [referring\_links\_attributes](IBacklinksSummaryLiveResultInfo.md#referring_links_attributes)
- [referring\_links\_countries](IBacklinksSummaryLiveResultInfo.md#referring_links_countries)
- [referring\_links\_platform\_types](IBacklinksSummaryLiveResultInfo.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](IBacklinksSummaryLiveResultInfo.md#referring_links_semantic_locations)
- [referring\_links\_tld](IBacklinksSummaryLiveResultInfo.md#referring_links_tld)
- [referring\_links\_types](IBacklinksSummaryLiveResultInfo.md#referring_links_types)
- [referring\_main\_domains](IBacklinksSummaryLiveResultInfo.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IBacklinksSummaryLiveResultInfo.md#referring_main_domains_nofollow)
- [referring\_pages](IBacklinksSummaryLiveResultInfo.md#referring_pages)
- [referring\_subnets](IBacklinksSummaryLiveResultInfo.md#referring_subnets)
- [target](IBacklinksSummaryLiveResultInfo.md#target)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Defined in

[main.ts:129724](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129724)

___


### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

#### Defined in

[main.ts:129728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129728)

___


### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Defined in

[main.ts:129741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129741)

___


### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

#### Defined in

[main.ts:129745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129745)

___


### crawled\_pages

• `Optional` **crawled\_pages**: `number`

number of crawled pages for the target

#### Defined in

[main.ts:129730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129730)

___


### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Defined in

[main.ts:129738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129738)

___


### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:129713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129713)

___


### info

• `Optional` **info**: [`TargetInfo`](../classes/TargetInfo.md)

information about the target

#### Defined in

[main.ts:129732](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129732)

___


### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Defined in

[main.ts:129735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129735)

___


### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the backlink was lost
indicates the date and time when our crawler visited the target and it responded with a 4xx or 5xx status code or when its last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:129719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129719)

___


### rank

• `Optional` **rank**: `number`

target rank
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:129722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129722)

___


### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Defined in

[main.ts:129748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129748)

___


### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:129750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129750)

___


### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Defined in

[main.ts:129757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129757)

___


### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute
example values:
nofollow, noopener, noreferrer, external, ugc, sponsored

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:129774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129774)

___


### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:129788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129788)

___


### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform
example values:
cms, blogs, unknown, ecommerce, message-boards

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:129779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129779)

___


### referring\_links\_semantic\_locations

• `Optional` **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
example values:
article, section, summary, ""

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:129785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129785)

___


### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:129764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129764)

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

[main.ts:129769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129769)

___


### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Defined in

[main.ts:129752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129752)

___


### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:129754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129754)

___


### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Defined in

[main.ts:129761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129761)

___


### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Defined in

[main.ts:129759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129759)

___


### target

• `Optional` **target**: `string`

target in a POST array

#### Defined in

[main.ts:129708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129708)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")