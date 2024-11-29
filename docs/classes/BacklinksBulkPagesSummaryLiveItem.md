[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveItem

# Class: BacklinksBulkPagesSummaryLiveItem

## Implements

- [`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveItem()

> **new BacklinksBulkPagesSummaryLiveItem**(`data`?): [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Parameters

##### data?

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Defined in

main.ts:162511

## Properties

### backlinks?

> `optional` **backlinks**: `number`

number of backlinks

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#backlinks)

#### Defined in

main.ts:162447

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#backlinks_spam_score)

#### Defined in

main.ts:162461

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#broken_backlinks)

#### Defined in

main.ts:162464

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`broken_pages`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#broken_pages)

#### Defined in

main.ts:162467

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found a backlink to this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`first_seen`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#first_seen)

#### Defined in

main.ts:162452

***

### lost\_date?

> `optional` **lost\_date**: `string`

date and time when the last backlink to this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`lost_date`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#lost_date)

#### Defined in

main.ts:162458

***

### main\_domain\_rank?

> `optional` **main\_domain\_rank**: `number`

rank of the main domain
rank of the main domain is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`main_domain_rank`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#main_domain_rank)

#### Defined in

main.ts:162445

***

### rank?

> `optional` **rank**: `number`

page rank
rank of the page on the target website
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#rank)

#### Defined in

main.ts:162441

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

indicates the number domains referring to the page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_domains)

#### Defined in

main.ts:162469

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:162471

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_ips)

#### Defined in

main.ts:162478

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_attributes)

#### Defined in

main.ts:162495

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_countries)

#### Defined in

main.ts:162507

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_platform_types)

#### Defined in

main.ts:162498

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, footer

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_semantic_locations)

#### Defined in

main.ts:162504

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_tld)

#### Defined in

main.ts:162487

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_types)

#### Defined in

main.ts:162492

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_main_domains)

#### Defined in

main.ts:162473

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:162475

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

indicates the number of pages pointing to the relevant url

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_pages)

#### Defined in

main.ts:162482

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_pages_nofollow)

#### Defined in

main.ts:162484

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_subnets)

#### Defined in

main.ts:162480

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#type)

#### Defined in

main.ts:162434

***

### url?

> `optional` **url**: `string`

page URL

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`url`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#url)

#### Defined in

main.ts:162436

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:162520

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:162596

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Defined in

main.ts:162589
