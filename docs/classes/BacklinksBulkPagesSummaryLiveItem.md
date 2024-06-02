**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveItem

# Class: BacklinksBulkPagesSummaryLiveItem

## Implements

- [`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveItem(data)

> **new BacklinksBulkPagesSummaryLiveItem**(`data`?): [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Source

main.ts:148316

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

number of backlinks

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#backlinks)

#### Source

main.ts:148252

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#backlinks_spam_score)

#### Source

main.ts:148266

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#broken_backlinks)

#### Source

main.ts:148269

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`broken_pages`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#broken_pages)

#### Source

main.ts:148272

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found a backlink to this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`first_seen`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#first_seen)

#### Source

main.ts:148257

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the last backlink to this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`lost_date`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#lost_date)

#### Source

main.ts:148263

***

### main\_domain\_rank?

> **`optional`** **main\_domain\_rank**: `number`

rank of the main domain
rank of the main domain is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`main_domain_rank`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#main_domain_rank)

#### Source

main.ts:148250

***

### rank?

> **`optional`** **rank**: `number`

page rank
rank of the page on the target website
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#rank)

#### Source

main.ts:148246

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number domains referring to the page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_domains)

#### Source

main.ts:148274

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_domains_nofollow)

#### Source

main.ts:148276

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_ips)

#### Source

main.ts:148283

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_attributes)

#### Source

main.ts:148300

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_countries)

#### Source

main.ts:148312

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_platform_types)

#### Source

main.ts:148303

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, footer

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_semantic_locations)

#### Source

main.ts:148309

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_tld)

#### Source

main.ts:148292

***

### referring\_links\_types?

> **`optional`** **referring\_links\_types**: `Object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_links_types)

#### Source

main.ts:148297

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_main_domains)

#### Source

main.ts:148278

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_main_domains_nofollow)

#### Source

main.ts:148280

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the relevant url

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_pages)

#### Source

main.ts:148287

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_pages_nofollow)

#### Source

main.ts:148289

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#referring_subnets)

#### Source

main.ts:148285

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#type)

#### Source

main.ts:148239

***

### url?

> **`optional`** **url**: `string`

page URL

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveItem`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md).[`url`](../interfaces/IBacklinksBulkPagesSummaryLiveItem.md#url)

#### Source

main.ts:148241

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:148325

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:148401

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)

#### Source

main.ts:148394
