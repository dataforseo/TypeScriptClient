[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveItem

# Class: BacklinksReferringDomainsLiveItem

## Implements

- [`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveItem()

> **new BacklinksReferringDomainsLiveItem**(`data`?): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md)

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Defined in

main.ts:147453

## Properties

### backlinks?

> `optional` **backlinks**: `number`

indicates the number of backlinks pointing to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`backlinks`](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks)

#### Defined in

main.ts:147387

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

average spam score of all backlinks pointing to the domain
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks_spam_score)

#### Defined in

main.ts:147401

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the domain

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_backlinks)

#### Defined in

main.ts:147404

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`broken_pages`](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_pages)

#### Defined in

main.ts:147407

***

### domain?

> `optional` **domain**: `string`

referring domain

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`domain`](../interfaces/IBacklinksReferringDomainsLiveItem.md#domain)

#### Defined in

main.ts:147380

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`first_seen`](../interfaces/IBacklinksReferringDomainsLiveItem.md#first_seen)

#### Defined in

main.ts:147392

***

### lost\_date?

> `optional` **lost\_date**: `string`

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`lost_date`](../interfaces/IBacklinksReferringDomainsLiveItem.md#lost_date)

#### Defined in

main.ts:147398

***

### rank?

> `optional` **rank**: `number`

domain rank
rank volume that a referring website passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`rank`](../interfaces/IBacklinksReferringDomainsLiveItem.md#rank)

#### Defined in

main.ts:147385

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

indicates the number of referring domains
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_domains`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains)

#### Defined in

main.ts:147410

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:147412

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_ips`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_ips)

#### Defined in

main.ts:147420

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_attributes)

#### Defined in

main.ts:147437

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_countries)

#### Defined in

main.ts:147449

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_platform_types)

#### Defined in

main.ts:147440

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_semantic_locations)

#### Defined in

main.ts:147446

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_tld)

#### Defined in

main.ts:147429

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

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_types)

#### Defined in

main.ts:147434

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains
the number of primary (root) domains referring to your target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains)

#### Defined in

main.ts:147415

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:147417

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target specified

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_pages`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages)

#### Defined in

main.ts:147424

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages_nofollow)

#### Defined in

main.ts:147426

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_subnets)

#### Defined in

main.ts:147422

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`type`](../interfaces/IBacklinksReferringDomainsLiveItem.md#type)

#### Defined in

main.ts:147378

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:147462

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:147537

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Defined in

main.ts:147530
