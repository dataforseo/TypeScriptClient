[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksAnchorsLiveItem

# Class: BacklinksAnchorsLiveItem

## Implements

- [`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksAnchorsLiveItem()

> **new BacklinksAnchorsLiveItem**(`data`?): [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Parameters

##### data?

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md)

#### Returns

[`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Defined in

main.ts:152833

## Properties

### anchor?

> `optional` **anchor**: `string`

anchor of the backlink

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`anchor`](../interfaces/IBacklinksAnchorsLiveItem.md#anchor)

#### Defined in

main.ts:152762

***

### backlinks?

> `optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`backlinks`](../interfaces/IBacklinksAnchorsLiveItem.md#backlinks)

#### Defined in

main.ts:152769

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

average spam score of all backlinks with this anchor
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksAnchorsLiveItem.md#backlinks_spam_score)

#### Defined in

main.ts:152783

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksAnchorsLiveItem.md#broken_backlinks)

#### Defined in

main.ts:152786

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`broken_pages`](../interfaces/IBacklinksAnchorsLiveItem.md#broken_pages)

#### Defined in

main.ts:152789

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the backlink with this anchor for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`first_seen`](../interfaces/IBacklinksAnchorsLiveItem.md#first_seen)

#### Defined in

main.ts:152774

***

### lost\_date?

> `optional` **lost\_date**: `string`

date and time when the last backlink with this anchor was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`lost_date`](../interfaces/IBacklinksAnchorsLiveItem.md#lost_date)

#### Defined in

main.ts:152780

***

### rank?

> `optional` **rank**: `number`

rank of the anchor links
rank volume that referring websites pass to the target through links with a particular anchor
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`rank`](../interfaces/IBacklinksAnchorsLiveItem.md#rank)

#### Defined in

main.ts:152767

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

indicates the number of referring domains

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_domains`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_domains)

#### Defined in

main.ts:152791

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:152793

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_ips`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_ips)

#### Defined in

main.ts:152800

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_attributes)

#### Defined in

main.ts:152817

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_countries)

#### Defined in

main.ts:152829

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_platform_types)

#### Defined in

main.ts:152820

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

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_semantic_locations)

#### Defined in

main.ts:152826

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_tld)

#### Defined in

main.ts:152809

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

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_types)

#### Defined in

main.ts:152814

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_main_domains)

#### Defined in

main.ts:152795

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:152797

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

indicates the number of pages pointing to target with this anchor

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_pages`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_pages)

#### Defined in

main.ts:152804

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target with this anchor

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_pages_nofollow)

#### Defined in

main.ts:152806

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_subnets)

#### Defined in

main.ts:152802

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`type`](../interfaces/IBacklinksAnchorsLiveItem.md#type)

#### Defined in

main.ts:152760

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:152842

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:152917

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

#### Defined in

main.ts:152910
