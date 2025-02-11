[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksSummaryLiveResultInfo

# Class: BacklinksSummaryLiveResultInfo

Defined in: main.ts:150458

## Implements

- [`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksSummaryLiveResultInfo()

> **new BacklinksSummaryLiveResultInfo**(`data`?): [`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

Defined in: main.ts:150546

#### Parameters

##### data?

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md)

#### Returns

[`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:150476

indicates the number of backlinks

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`backlinks`](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks)

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:150480

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`backlinks_spam_score`](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks_spam_score)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:150493

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`broken_backlinks`](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:150497

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`broken_pages`](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_pages)

***

### crawled\_pages?

> `optional` **crawled\_pages**: `number`

Defined in: main.ts:150482

number of crawled pages for the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`crawled_pages`](../interfaces/IBacklinksSummaryLiveResultInfo.md#crawled_pages)

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:150490

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`external_links_count`](../interfaces/IBacklinksSummaryLiveResultInfo.md#external_links_count)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:150465

date and time when our crawler found the backlink for the target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`first_seen`](../interfaces/IBacklinksSummaryLiveResultInfo.md#first_seen)

***

### info?

> `optional` **info**: [`TargetInfo`](TargetInfo.md)

Defined in: main.ts:150484

information about the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`info`](../interfaces/IBacklinksSummaryLiveResultInfo.md#info)

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:150487

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`internal_links_count`](../interfaces/IBacklinksSummaryLiveResultInfo.md#internal_links_count)

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:150471

date and time when the backlink was lost
indicates the date and time when our crawler visited the target and it responded with a 4xx or 5xx status code or when its last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`lost_date`](../interfaces/IBacklinksSummaryLiveResultInfo.md#lost_date)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:150474

target rank
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`rank`](../interfaces/IBacklinksSummaryLiveResultInfo.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:150500

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_domains`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:150502

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_domains_nofollow`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:150509

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_ips`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:150526

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute
example values:
nofollow, noopener, noreferrer, external, ugc, sponsored

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_attributes`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:150540

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_countries`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:150531

types of referring platforms
indicates referring platform types and and link count per each platform
example values:
cms, blogs, unknown, ecommerce, message-boards

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_platform_types`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:150537

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
example values:
article, section, summary, ""

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:150516

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_tld`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:150521

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_links_types`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:150504

indicates the number of referring main domains

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_main_domains`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:150506

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:150513

indicates the number of pages pointing to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_pages`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:150542

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_pages_nofollow`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:150511

number of referring subnetworks

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`referring_subnets`](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_subnets)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:150460

target in a POST array

#### Implementation of

[`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksSummaryLiveResultInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:150555

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:150633

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

Defined in: main.ts:150626

#### Parameters

##### data

`any`

#### Returns

[`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)
