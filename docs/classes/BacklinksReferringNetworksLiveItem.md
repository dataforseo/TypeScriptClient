**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksReferringNetworksLiveItem

# Class: BacklinksReferringNetworksLiveItem

## Implements

- [`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringNetworksLiveItem(data)

> **new BacklinksReferringNetworksLiveItem**(`data`?): [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md)

#### Returns

[`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Source

main.ts:141087

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks pointing to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`backlinks`](../interfaces/IBacklinksReferringNetworksLiveItem.md#backlinks)

#### Source

main.ts:141025

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the domain

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksReferringNetworksLiveItem.md#broken_backlinks)

#### Source

main.ts:141039

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`broken_pages`](../interfaces/IBacklinksReferringNetworksLiveItem.md#broken_pages)

#### Source

main.ts:141042

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`first_seen`](../interfaces/IBacklinksReferringNetworksLiveItem.md#first_seen)

#### Source

main.ts:141030

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the last backlink from this domain was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`lost_date`](../interfaces/IBacklinksReferringNetworksLiveItem.md#lost_date)

#### Source

main.ts:141036

***

### network\_address?

> **`optional`** **network\_address**: `string`

address of the referring subnetwork or IP

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`network_address`](../interfaces/IBacklinksReferringNetworksLiveItem.md#network_address)

#### Source

main.ts:141018

***

### rank?

> **`optional`** **rank**: `number`

network rank
rank volume that a referring network passes to the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`rank`](../interfaces/IBacklinksReferringNetworksLiveItem.md#rank)

#### Source

main.ts:141023

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_domains`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_domains)

#### Source

main.ts:141045

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_domains_nofollow)

#### Source

main.ts:141047

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_ips`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_ips)

#### Source

main.ts:141054

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_attributes)

#### Source

main.ts:141071

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_countries)

#### Source

main.ts:141083

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_platform_types)

#### Source

main.ts:141074

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

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_semantic_locations)

#### Source

main.ts:141080

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_tld)

#### Source

main.ts:141063

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

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_links_types)

#### Source

main.ts:141068

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_main_domains)

#### Source

main.ts:141049

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_main_domains_nofollow)

#### Source

main.ts:141051

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the target specified

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_pages`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_pages)

#### Source

main.ts:141058

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_pages_nofollow)

#### Source

main.ts:141060

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksReferringNetworksLiveItem.md#referring_subnets)

#### Source

main.ts:141056

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksReferringNetworksLiveItem`](../interfaces/IBacklinksReferringNetworksLiveItem.md).[`type`](../interfaces/IBacklinksReferringNetworksLiveItem.md#type)

#### Source

main.ts:141016

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:141096

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:141170

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)

#### Source

main.ts:141163
