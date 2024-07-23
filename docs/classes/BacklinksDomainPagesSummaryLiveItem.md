**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksDomainPagesSummaryLiveItem

# Class: BacklinksDomainPagesSummaryLiveItem

## Implements

- [`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesSummaryLiveItem(data)

> **new BacklinksDomainPagesSummaryLiveItem**(`data`?): [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md)

#### Returns

[`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Source

main.ts:144851

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

number of backlinks

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`backlinks`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#backlinks)

#### Source

main.ts:144787

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#backlinks_spam_score)

#### Source

main.ts:144801

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#broken_backlinks)

#### Source

main.ts:144804

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`broken_pages`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#broken_pages)

#### Source

main.ts:144807

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found a backlink to this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`first_seen`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#first_seen)

#### Source

main.ts:144792

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the last backlink to this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`lost_date`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#lost_date)

#### Source

main.ts:144798

***

### rank?

> **`optional`** **rank**: `number`

page rank
rank of the page
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`rank`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#rank)

#### Source

main.ts:144785

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number domains referring to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_domains`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_domains)

#### Source

main.ts:144809

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_domains_nofollow)

#### Source

main.ts:144811

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_ips`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_ips)

#### Source

main.ts:144818

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_attributes)

#### Source

main.ts:144833

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_countries)

#### Source

main.ts:144845

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_platform_types)

#### Source

main.ts:144836

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, footer

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_semantic_locations)

#### Source

main.ts:144842

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_tld)

#### Source

main.ts:144825

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

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_links_types)

#### Source

main.ts:144830

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_main_domains)

#### Source

main.ts:144813

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_main_domains_nofollow)

#### Source

main.ts:144815

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the relevant url

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_pages`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_pages)

#### Source

main.ts:144822

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the page

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_pages_nofollow)

#### Source

main.ts:144847

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#referring_subnets)

#### Source

main.ts:144820

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`type`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#type)

#### Source

main.ts:144778

***

### url?

> **`optional`** **url**: `string`

page URL

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveItem`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md).[`url`](../interfaces/IBacklinksDomainPagesSummaryLiveItem.md#url)

#### Source

main.ts:144780

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:144860

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:144935

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)

#### Source

main.ts:144928
