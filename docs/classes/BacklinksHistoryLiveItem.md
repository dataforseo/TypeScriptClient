**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksHistoryLiveItem

# Class: BacklinksHistoryLiveItem

## Implements

- [`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksHistoryLiveItem(data)

> **new BacklinksHistoryLiveItem**(`data`?): [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md)

#### Returns

[`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Source

main.ts:136623

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

number of backlinks

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#backlinks)

#### Source

main.ts:136542

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#broken_backlinks)

#### Source

main.ts:136575

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages that receive backlinks but respond with 4xx or 5xx status codes

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`broken_pages`](../interfaces/IBacklinksHistoryLiveItem.md#broken_pages)

#### Source

main.ts:136578

***

### crawled\_pages?

> **`optional`** **crawled\_pages**: `number`

number of crawled pages for the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`crawled_pages`](../interfaces/IBacklinksHistoryLiveItem.md#crawled_pages)

#### Source

main.ts:136564

***

### date?

> **`optional`** **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`date`](../interfaces/IBacklinksHistoryLiveItem.md#date)

#### Source

main.ts:136537

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`external_links_count`](../interfaces/IBacklinksHistoryLiveItem.md#external_links_count)

#### Source

main.ts:136572

***

### info?

> **`optional`** **info**: [`TargetInfo`](TargetInfo.md)

information about the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`info`](../interfaces/IBacklinksHistoryLiveItem.md#info)

#### Source

main.ts:136566

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`internal_links_count`](../interfaces/IBacklinksHistoryLiveItem.md#internal_links_count)

#### Source

main.ts:136569

***

### lost\_backlinks?

> **`optional`** **lost\_backlinks**: `number`

number of lost backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`lost_backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#lost_backlinks)

#### Source

main.ts:136552

***

### lost\_referring\_domains?

> **`optional`** **lost\_referring\_domains**: `number`

number of lost referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`lost_referring_domains`](../interfaces/IBacklinksHistoryLiveItem.md#lost_referring_domains)

#### Source

main.ts:136562

***

### new\_backlinks?

> **`optional`** **new\_backlinks**: `number`

number of new backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`new_backlinks`](../interfaces/IBacklinksHistoryLiveItem.md#new_backlinks)

#### Source

main.ts:136547

***

### new\_referring\_domains?

> **`optional`** **new\_referring\_domains**: `number`

number of new referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`new_referring_domains`](../interfaces/IBacklinksHistoryLiveItem.md#new_referring_domains)

#### Source

main.ts:136557

***

### rank?

> **`optional`** **rank**: `number`

domain rank on the given date
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`rank`](../interfaces/IBacklinksHistoryLiveItem.md#rank)

#### Source

main.ts:136540

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksHistoryLiveItem.md#referring_domains)

#### Source

main.ts:136581

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksHistoryLiveItem.md#referring_domains_nofollow)

#### Source

main.ts:136583

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksHistoryLiveItem.md#referring_ips)

#### Source

main.ts:136590

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_attributes)

#### Source

main.ts:136607

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_countries)

#### Source

main.ts:136619

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_platform_types)

#### Source

main.ts:136610

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

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_semantic_locations)

#### Source

main.ts:136616

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top-level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_tld)

#### Source

main.ts:136599

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

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksHistoryLiveItem.md#referring_links_types)

#### Source

main.ts:136604

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksHistoryLiveItem.md#referring_main_domains)

#### Source

main.ts:136585

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksHistoryLiveItem.md#referring_main_domains_nofollow)

#### Source

main.ts:136587

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

number of pages pointing to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksHistoryLiveItem.md#referring_pages)

#### Source

main.ts:136594

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksHistoryLiveItem.md#referring_pages_nofollow)

#### Source

main.ts:136596

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksHistoryLiveItem.md#referring_subnets)

#### Source

main.ts:136592

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksHistoryLiveItem`](../interfaces/IBacklinksHistoryLiveItem.md).[`type`](../interfaces/IBacklinksHistoryLiveItem.md#type)

#### Source

main.ts:136532

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:136632

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:136712

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)

#### Source

main.ts:136705
