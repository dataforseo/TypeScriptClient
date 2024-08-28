[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / PageSummary

# Class: PageSummary

## Implements

- [`IPageSummary`](../interfaces/IPageSummary.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PageSummary()

> **new PageSummary**(`data`?): [`PageSummary`](PageSummary.md)

#### Parameters

• **data?**: [`IPageSummary`](../interfaces/IPageSummary.md)

#### Returns

[`PageSummary`](PageSummary.md)

#### Defined in

main.ts:145727

## Properties

### backlinks?

> `optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`backlinks`](../interfaces/IPageSummary.md#backlinks)

#### Defined in

main.ts:145674

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`backlinks_spam_score`](../interfaces/IPageSummary.md#backlinks_spam_score)

#### Defined in

main.ts:145677

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`broken_backlinks`](../interfaces/IPageSummary.md#broken_backlinks)

#### Defined in

main.ts:145680

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`broken_pages`](../interfaces/IPageSummary.md#broken_pages)

#### Defined in

main.ts:145683

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`first_seen`](../interfaces/IPageSummary.md#first_seen)

#### Defined in

main.ts:145661

***

### lost\_date?

> `optional` **lost\_date**: `string`

date and time when the last backlink for this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`lost_date`](../interfaces/IPageSummary.md#lost_date)

#### Defined in

main.ts:145667

***

### rank?

> `optional` **rank**: `number`

page rank
rank of the page
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`rank`](../interfaces/IPageSummary.md#rank)

#### Defined in

main.ts:145672

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

indicates the number of referring domains

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_domains`](../interfaces/IPageSummary.md#referring_domains)

#### Defined in

main.ts:145685

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_domains_nofollow`](../interfaces/IPageSummary.md#referring_domains_nofollow)

#### Defined in

main.ts:145687

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_ips`](../interfaces/IPageSummary.md#referring_ips)

#### Defined in

main.ts:145694

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_attributes`](../interfaces/IPageSummary.md#referring_links_attributes)

#### Defined in

main.ts:145711

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_countries`](../interfaces/IPageSummary.md#referring_links_countries)

#### Defined in

main.ts:145723

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_platform_types`](../interfaces/IPageSummary.md#referring_links_platform_types)

#### Defined in

main.ts:145714

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_semantic_locations`](../interfaces/IPageSummary.md#referring_links_semantic_locations)

#### Defined in

main.ts:145720

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_tld`](../interfaces/IPageSummary.md#referring_links_tld)

#### Defined in

main.ts:145703

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

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_links_types`](../interfaces/IPageSummary.md#referring_links_types)

#### Defined in

main.ts:145708

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_main_domains`](../interfaces/IPageSummary.md#referring_main_domains)

#### Defined in

main.ts:145689

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_main_domains_nofollow`](../interfaces/IPageSummary.md#referring_main_domains_nofollow)

#### Defined in

main.ts:145691

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

indicates the number of pages pointing to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_pages`](../interfaces/IPageSummary.md#referring_pages)

#### Defined in

main.ts:145698

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the page

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_pages_nofollow`](../interfaces/IPageSummary.md#referring_pages_nofollow)

#### Defined in

main.ts:145700

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IPageSummary`](../interfaces/IPageSummary.md).[`referring_subnets`](../interfaces/IPageSummary.md#referring_subnets)

#### Defined in

main.ts:145696

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:145736

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:145809

***

### fromJS()

> `static` **fromJS**(`data`): [`PageSummary`](PageSummary.md)

#### Parameters

• **data**: `any`

#### Returns

[`PageSummary`](PageSummary.md)

#### Defined in

main.ts:145802
