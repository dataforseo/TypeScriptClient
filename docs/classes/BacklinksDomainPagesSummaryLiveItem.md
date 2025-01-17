[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainPagesSummaryLiveItem

# Class: BacklinksDomainPagesSummaryLiveItem

Defined in: main.ts:154774

## Implements

- [`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesSummaryLiveItem()

> **new BacklinksDomainPagesSummaryLiveItem**(`data`?): [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

Defined in: main.ts:154849

#### Parameters

##### data?

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md)

#### Returns

[`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:154785

number of backlinks

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#backlinks)

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:154799

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#backlinks_spam_score)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:154802

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:154805

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`broken_pages`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#broken_pages)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:154790

date and time when our crawler found a backlink to this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`first_seen`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#first_seen)

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:154796

date and time when the last backlink to this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`lost_date`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#lost_date)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:154783

page rank
rank of the page
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:154807

indicates the number domains referring to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:154809

number of domains pointing at least one nofollow link to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:154816

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:154831

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:154843

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:154834

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:154840

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, footer

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:154823

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:154828

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:154811

indicates the number of referring main domains

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:154813

number of main domains pointing at least one nofollow link to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:154820

indicates the number of pages pointing to the relevant url

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:154845

number of referring pages pointing at least one nofollow link to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:154818

number of referring subnetworks

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_subnets)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:154776

type of element

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:154778

page URL

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`url`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:154858

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:154933

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

Defined in: main.ts:154926

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)
