[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksReferringNetworksLiveItem

# Class: BacklinksReferringNetworksLiveItem

## Implements

- [`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringNetworksLiveItem()

> **new BacklinksReferringNetworksLiveItem**(`data`?): [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md)

#### Returns

[`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Defined in

main.ts:148243

## Properties

### backlinks?

> `optional` **backlinks**: `number`

indicates the number of backlinks pointing to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`backlinks`](../interfaces/IBacklinksReferringNetworksLiveItem.md#backlinks)

#### Defined in

main.ts:148181

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the domain

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksReferringNetworksLiveItem.md#broken_backlinks)

#### Defined in

main.ts:148195

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`broken_pages`](../interfaces/IBacklinksReferringNetworksLiveItem.md#broken_pages)

#### Defined in

main.ts:148198

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`first_seen`](../interfaces/IBacklinksReferringNetworksLiveItem.md#first_seen)

#### Defined in

main.ts:148186

***

### lost\_date?

> `optional` **lost\_date**: `string`

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`lost_date`](../interfaces/IBacklinksReferringNetworksLiveItem.md#lost_date)

#### Defined in

main.ts:148192

***

### network\_address?

> `optional` **network\_address**: `string`

address of the referring subnetwork or IP

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`network_address`](../interfaces/IBacklinksReferringNetworksLiveItem.md#network_address)

#### Defined in

main.ts:148174

***

### rank?

> `optional` **rank**: `number`

network rank
rank volume that a referring network passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`rank`](../interfaces/IBacklinksReferringNetworksLiveItem.md#rank)

#### Defined in

main.ts:148179

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_domains`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_domains)

#### Defined in

main.ts:148201

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_domains_nofollow)

#### Defined in

main.ts:148203

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_ips`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_ips)

#### Defined in

main.ts:148210

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_attributes)

#### Defined in

main.ts:148227

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_countries)

#### Defined in

main.ts:148239

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_platform_types)

#### Defined in

main.ts:148230

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

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_semantic_locations)

#### Defined in

main.ts:148236

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_tld)

#### Defined in

main.ts:148219

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

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_types)

#### Defined in

main.ts:148224

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_main_domains)

#### Defined in

main.ts:148205

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_main_domains_nofollow)

#### Defined in

main.ts:148207

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target specified

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_pages`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_pages)

#### Defined in

main.ts:148214

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_pages_nofollow)

#### Defined in

main.ts:148216

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_subnets)

#### Defined in

main.ts:148212

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`type`](../interfaces/IBacklinksReferringNetworksLiveItem.md#type)

#### Defined in

main.ts:148172

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:148252

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:148326

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Defined in

main.ts:148319
