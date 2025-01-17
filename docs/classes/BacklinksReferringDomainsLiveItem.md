[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveItem

# Class: BacklinksReferringDomainsLiveItem

Defined in: main.ts:155548

## Implements

- [`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveItem()

> **new BacklinksReferringDomainsLiveItem**(`data`?): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

Defined in: main.ts:155625

#### Parameters

##### data?

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md)

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:155559

indicates the number of backlinks pointing to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`backlinks`](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks)

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:155573

average spam score of all backlinks pointing to the domain
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks_spam_score)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:155576

number of broken backlinks
number of broken backlinks pointing to the domain

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:155579

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`broken_pages`](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_pages)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:155552

referring domain

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`domain`](../interfaces/IBacklinksReferringDomainsLiveItem.md#domain)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:155564

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`first_seen`](../interfaces/IBacklinksReferringDomainsLiveItem.md#first_seen)

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:155570

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`lost_date`](../interfaces/IBacklinksReferringDomainsLiveItem.md#lost_date)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:155557

domain rank
rank volume that a referring website passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`rank`](../interfaces/IBacklinksReferringDomainsLiveItem.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:155582

indicates the number of referring domains
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_domains`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:155584

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:155592

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_ips`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:155609

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:155621

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:155612

types of referring platforms
indicates referring platform types and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:155618

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:155601

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:155606

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:155587

indicates the number of referring main domains
the number of primary (root) domains referring to your target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:155589

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:155596

indicates the number of pages pointing to the target specified

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_pages`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:155598

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:155594

number of referring subnetworks

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_subnets)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:155550

type of element

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`type`](../interfaces/IBacklinksReferringDomainsLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:155634

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:155709

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

Defined in: main.ts:155702

#### Parameters

##### data

`any`

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)
