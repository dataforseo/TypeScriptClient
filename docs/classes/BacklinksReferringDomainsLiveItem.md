**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveItem

# Class: BacklinksReferringDomainsLiveItem

## Implements

- [`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveItem(data)

> **new BacklinksReferringDomainsLiveItem**(`data`?): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md)

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Source

main.ts:140427

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks pointing to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`backlinks`](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks)

#### Source

main.ts:140361

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

average spam score of all backlinks pointing to the domain
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksReferringDomainsLiveItem.md#backlinks_spam_score)

#### Source

main.ts:140375

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the domain

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_backlinks)

#### Source

main.ts:140378

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`broken_pages`](../interfaces/IBacklinksReferringDomainsLiveItem.md#broken_pages)

#### Source

main.ts:140381

***

### domain?

> **`optional`** **domain**: `string`

referring domain

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`domain`](../interfaces/IBacklinksReferringDomainsLiveItem.md#domain)

#### Source

main.ts:140354

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`first_seen`](../interfaces/IBacklinksReferringDomainsLiveItem.md#first_seen)

#### Source

main.ts:140366

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`lost_date`](../interfaces/IBacklinksReferringDomainsLiveItem.md#lost_date)

#### Source

main.ts:140372

***

### rank?

> **`optional`** **rank**: `number`

domain rank
rank volume that a referring website passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`rank`](../interfaces/IBacklinksReferringDomainsLiveItem.md#rank)

#### Source

main.ts:140359

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number of referring domains
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_domains`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains)

#### Source

main.ts:140384

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_domains_nofollow)

#### Source

main.ts:140386

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_ips`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_ips)

#### Source

main.ts:140394

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_attributes)

#### Source

main.ts:140411

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_countries)

#### Source

main.ts:140423

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_platform_types)

#### Source

main.ts:140414

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_semantic_locations)

#### Source

main.ts:140420

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_tld)

#### Source

main.ts:140403

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

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_links_types)

#### Source

main.ts:140408

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains
the number of primary (root) domains referring to your target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains)

#### Source

main.ts:140389

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_main_domains_nofollow)

#### Source

main.ts:140391

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the target specified

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_pages`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages)

#### Source

main.ts:140398

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_pages_nofollow)

#### Source

main.ts:140400

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksReferringDomainsLiveItem.md#referring_subnets)

#### Source

main.ts:140396

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksReferringDomainsLiveItem`](../interfaces/IBacklinksReferringDomainsLiveItem.md).[`type`](../interfaces/IBacklinksReferringDomainsLiveItem.md#type)

#### Source

main.ts:140352

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:140436

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:140511

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)

#### Source

main.ts:140504
