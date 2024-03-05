[dataforseo-client](../README.md) / [Exports](../modules.md) / IPageSummary

# Interface: IPageSummary

## Implemented by

- [`PageSummary`](../classes/PageSummary.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IPageSummary.md#backlinks)
- [backlinks\_spam\_score](IPageSummary.md#backlinks_spam_score)
- [broken\_backlinks](IPageSummary.md#broken_backlinks)
- [broken\_pages](IPageSummary.md#broken_pages)
- [first\_seen](IPageSummary.md#first_seen)
- [lost\_date](IPageSummary.md#lost_date)
- [rank](IPageSummary.md#rank)
- [referring\_domains](IPageSummary.md#referring_domains)
- [referring\_domains\_nofollow](IPageSummary.md#referring_domains_nofollow)
- [referring\_ips](IPageSummary.md#referring_ips)
- [referring\_links\_attributes](IPageSummary.md#referring_links_attributes)
- [referring\_links\_countries](IPageSummary.md#referring_links_countries)
- [referring\_links\_platform\_types](IPageSummary.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](IPageSummary.md#referring_links_semantic_locations)
- [referring\_links\_tld](IPageSummary.md#referring_links_tld)
- [referring\_links\_types](IPageSummary.md#referring_links_types)
- [referring\_main\_domains](IPageSummary.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IPageSummary.md#referring_main_domains_nofollow)
- [referring\_pages](IPageSummary.md#referring_pages)
- [referring\_subnets](IPageSummary.md#referring_subnets)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Defined in

[main.ts:133185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133185)

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Defined in

[main.ts:133188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133188)

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Defined in

[main.ts:133191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133191)

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Defined in

[main.ts:133194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133194)

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:133172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133172)

___

### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the last backlink for this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

[main.ts:133178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133178)

___

### rank

• `Optional` **rank**: `number`

page rank
rank of the page on the target website
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Defined in

[main.ts:133183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133183)

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains

#### Defined in

[main.ts:133196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133196)

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:133198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133198)

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Defined in

[main.ts:133205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133205)

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:133220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133220)

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:133232](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133232)

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:133223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133223)

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

#### Defined in

[main.ts:133229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133229)

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:133212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133212)

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

[main.ts:133217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133217)

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Defined in

[main.ts:133200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133200)

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

[main.ts:133202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133202)

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Defined in

[main.ts:133209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133209)

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Defined in

[main.ts:133207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133207)
