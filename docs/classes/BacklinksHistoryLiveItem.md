[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksHistoryLiveItem

# Class: BacklinksHistoryLiveItem

Defined in: main.ts:150842

## Implements

- [`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksHistoryLiveItem()

> **new BacklinksHistoryLiveItem**(`data`?): [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

Defined in: main.ts:150935

#### Parameters

##### data?

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md)

#### Returns

[`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:150854

number of backlinks

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#backlinks)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:150887

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:150890

number of broken pages
number of pages that receive backlinks but respond with 4xx or 5xx status codes

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`broken_pages`](../interfaces/IBacklinksHistoryLiveItem.md#broken_pages)

***

### crawled\_pages?

> `optional` **crawled\_pages**: `number`

Defined in: main.ts:150876

number of crawled pages for the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`crawled_pages`](../interfaces/IBacklinksHistoryLiveItem.md#crawled_pages)

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:150849

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`date`](../interfaces/IBacklinksHistoryLiveItem.md#date)

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:150884

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`external_links_count`](../interfaces/IBacklinksHistoryLiveItem.md#external_links_count)

***

### info?

> `optional` **info**: [`TargetInfo`](TargetInfo.md)

Defined in: main.ts:150878

information about the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`info`](../interfaces/IBacklinksHistoryLiveItem.md#info)

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:150881

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`internal_links_count`](../interfaces/IBacklinksHistoryLiveItem.md#internal_links_count)

***

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

Defined in: main.ts:150864

number of lost backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#lost_backlinks)

***

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

Defined in: main.ts:150874

number of lost referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksHistoryLiveItem.md#lost_referring_domains)

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

Defined in: main.ts:150859

number of new backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#new_backlinks)

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

Defined in: main.ts:150869

number of new referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksHistoryLiveItem.md#new_referring_domains)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:150852

domain rank on the given date
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`rank`](../interfaces/IBacklinksHistoryLiveItem.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:150893

number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksHistoryLiveItem.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:150895

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksHistoryLiveItem.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:150902

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksHistoryLiveItem.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:150919

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:150931

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:150922

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:150928

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:150911

top-level domains of the referring links
contains top-level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:150916

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:150897

number of referring main domains

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksHistoryLiveItem.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:150899

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksHistoryLiveItem.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:150906

number of pages pointing to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksHistoryLiveItem.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:150908

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksHistoryLiveItem.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:150904

number of referring subnetworks

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksHistoryLiveItem.md#referring_subnets)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:150844

type of element

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`type`](../interfaces/IBacklinksHistoryLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:150944

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:151024

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

Defined in: main.ts:151017

#### Parameters

##### data

`any`

#### Returns

[`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)
