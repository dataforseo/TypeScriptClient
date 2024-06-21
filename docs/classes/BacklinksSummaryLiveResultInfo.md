**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksSummaryLiveResultInfo

# Class: BacklinksSummaryLiveResultInfo

## Implements

- [`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksSummaryLiveResultInfo(data)

> **new BacklinksSummaryLiveResultInfo**(`data`?): [`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md)

#### Returns

[`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Source

main.ts:137347

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`backlinks`](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks)

#### Source

main.ts:137277

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`backlinks_spam_score`](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks_spam_score)

#### Source

main.ts:137281

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`broken_backlinks`](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_backlinks)

#### Source

main.ts:137294

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`broken_pages`](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_pages)

#### Source

main.ts:137298

***

### crawled\_pages?

> **`optional`** **crawled\_pages**: `number`

number of crawled pages for the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`crawled_pages`](../interfaces/IBacklinksSummaryLiveResultInfo.md#crawled_pages)

#### Source

main.ts:137283

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`external_links_count`](../interfaces/IBacklinksSummaryLiveResultInfo.md#external_links_count)

#### Source

main.ts:137291

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink for the target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`first_seen`](../interfaces/IBacklinksSummaryLiveResultInfo.md#first_seen)

#### Source

main.ts:137266

***

### info?

> **`optional`** **info**: [`TargetInfo`](TargetInfo.md)

information about the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`info`](../interfaces/IBacklinksSummaryLiveResultInfo.md#info)

#### Source

main.ts:137285

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`internal_links_count`](../interfaces/IBacklinksSummaryLiveResultInfo.md#internal_links_count)

#### Source

main.ts:137288

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the backlink was lost
indicates the date and time when our crawler visited the target and it responded with a 4xx or 5xx status code or when its last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`lost_date`](../interfaces/IBacklinksSummaryLiveResultInfo.md#lost_date)

#### Source

main.ts:137272

***

### rank?

> **`optional`** **rank**: `number`

target rank
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`rank`](../interfaces/IBacklinksSummaryLiveResultInfo.md#rank)

#### Source

main.ts:137275

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_domains`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains)

#### Source

main.ts:137301

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_domains_nofollow`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains_nofollow)

#### Source

main.ts:137303

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_ips`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_ips)

#### Source

main.ts:137310

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute
example values:
nofollow, noopener, noreferrer, external, ugc, sponsored

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_attributes`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_attributes)

#### Source

main.ts:137327

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_countries`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_countries)

#### Source

main.ts:137341

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform
example values:
cms, blogs, unknown, ecommerce, message-boards

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_platform_types`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_platform_types)

#### Source

main.ts:137332

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
example values:
article, section, summary, ""

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_semantic_locations)

#### Source

main.ts:137338

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_tld`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_tld)

#### Source

main.ts:137317

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

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_types`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_types)

#### Source

main.ts:137322

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_main_domains`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains)

#### Source

main.ts:137305

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains_nofollow)

#### Source

main.ts:137307

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_pages`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_pages)

#### Source

main.ts:137314

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_pages_nofollow`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_pages_nofollow)

#### Source

main.ts:137343

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_subnets`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_subnets)

#### Source

main.ts:137312

***

### target?

> **`optional`** **target**: `string`

target in a POST array

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksSummaryLiveResultInfo.md#target)

#### Source

main.ts:137261

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:137356

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:137434

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Source

main.ts:137427
