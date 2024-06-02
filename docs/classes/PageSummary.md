**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PageSummary

# Class: PageSummary

## Implements

- [`IPageSummary`](../interfaces/IPageSummary.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageSummary(data)

> **new PageSummary**(`data`?): [`PageSummary`](PageSummary.md)

#### Parameters

• **data?**: [`IPageSummary`](../interfaces/IPageSummary.md)

#### Returns

[`PageSummary`](PageSummary.md)

#### Source

main.ts:139670

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`backlinks`](../interfaces/IPageSummary.md#backlinks)

#### Source

main.ts:139617

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`backlinks_spam_score`](../interfaces/IPageSummary.md#backlinks_spam_score)

#### Source

main.ts:139620

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`broken_backlinks`](../interfaces/IPageSummary.md#broken_backlinks)

#### Source

main.ts:139623

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`broken_pages`](../interfaces/IPageSummary.md#broken_pages)

#### Source

main.ts:139626

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`first_seen`](../interfaces/IPageSummary.md#first_seen)

#### Source

main.ts:139604

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the last backlink for this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`lost_date`](../interfaces/IPageSummary.md#lost_date)

#### Source

main.ts:139610

***

### rank?

> **`optional`** **rank**: `number`

page rank
rank of the page
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`rank`](../interfaces/IPageSummary.md#rank)

#### Source

main.ts:139615

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number of referring domains

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_domains`](../interfaces/IPageSummary.md#referring_domains)

#### Source

main.ts:139628

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_domains_nofollow`](../interfaces/IPageSummary.md#referring_domains_nofollow)

#### Source

main.ts:139630

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_ips`](../interfaces/IPageSummary.md#referring_ips)

#### Source

main.ts:139637

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_attributes`](../interfaces/IPageSummary.md#referring_links_attributes)

#### Source

main.ts:139654

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_countries`](../interfaces/IPageSummary.md#referring_links_countries)

#### Source

main.ts:139666

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_platform_types`](../interfaces/IPageSummary.md#referring_links_platform_types)

#### Source

main.ts:139657

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_semantic_locations`](../interfaces/IPageSummary.md#referring_links_semantic_locations)

#### Source

main.ts:139663

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_tld`](../interfaces/IPageSummary.md#referring_links_tld)

#### Source

main.ts:139646

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

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_types`](../interfaces/IPageSummary.md#referring_links_types)

#### Source

main.ts:139651

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_main_domains`](../interfaces/IPageSummary.md#referring_main_domains)

#### Source

main.ts:139632

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_main_domains_nofollow`](../interfaces/IPageSummary.md#referring_main_domains_nofollow)

#### Source

main.ts:139634

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_pages`](../interfaces/IPageSummary.md#referring_pages)

#### Source

main.ts:139641

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_pages_nofollow`](../interfaces/IPageSummary.md#referring_pages_nofollow)

#### Source

main.ts:139643

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_subnets`](../interfaces/IPageSummary.md#referring_subnets)

#### Source

main.ts:139639

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:139679

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:139752

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PageSummary`](PageSummary.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageSummary`](PageSummary.md)

#### Source

main.ts:139745
