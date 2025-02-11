[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveItem

# Class: BacklinksBulkPagesSummaryLiveItem

Defined in: main.ts:162664

## Implements

- [`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveItem()

> **new BacklinksBulkPagesSummaryLiveItem**(`data`?): [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

Defined in: main.ts:162743

#### Parameters

##### data?

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:162679

number of backlinks

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#backlinks)

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:162693

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#backlinks_spam_score)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:162696

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:162699

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`broken_pages`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#broken_pages)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:162684

date and time when our crawler found a backlink to this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`first_seen`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#first_seen)

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:162690

date and time when the last backlink to this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`lost_date`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#lost_date)

***

### main\_domain\_rank?

> `optional` **main\_domain\_rank**: `number`

Defined in: main.ts:162677

rank of the main domain
rank of the main domain is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`main_domain_rank`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#main_domain_rank)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:162673

page rank
rank of the page on the target website
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:162701

indicates the number domains referring to the page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:162703

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:162710

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:162727

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:162739

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:162730

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:162736

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, footer

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:162719

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:162724

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:162705

indicates the number of referring main domains

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:162707

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:162714

indicates the number of pages pointing to the relevant url

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:162716

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:162712

number of referring subnetworks

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_subnets)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:162666

type of element

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:162668

page URL

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`url`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:162752

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:162828

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

Defined in: main.ts:162821

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)
