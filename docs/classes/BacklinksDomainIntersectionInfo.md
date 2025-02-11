[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionInfo

# Class: BacklinksDomainIntersectionInfo

Defined in: main.ts:157808

## Implements

- [`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionInfo()

> **new BacklinksDomainIntersectionInfo**(`data`?): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

Defined in: main.ts:157878

#### Parameters

##### data?

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md)

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:157819

indicates the number of backlinks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`backlinks`](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks)

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:157833

average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`backlinks_spam_score`](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks_spam_score)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:157835

number of broken backlinks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`broken_backlinks`](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:157837

number of broken pages

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`broken_pages`](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_pages)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:157824

date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`first_seen`](../interfaces/IBacklinksDomainIntersectionInfo.md#first_seen)

***

### lost\_date?

> `optional` **lost\_date**: `number`

Defined in: main.ts:157830

date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`lost_date`](../interfaces/IBacklinksDomainIntersectionInfo.md#lost_date)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:157817

rank referred to the target from the POST array
indicates the rank that the referring domain (target above) refers to your target from the POST array;
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`rank`](../interfaces/IBacklinksDomainIntersectionInfo.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:157839

number of referring domains

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_domains`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:157841

number of domains pointing at least one nofollow link to the corresponding target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_domains_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:157847

number of referring IP addresses

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_ips`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:157864

link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_attributes`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:157874

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_countries`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:157867

types of referring platforms
indicates referring platform types and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_platform_types`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:157871

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:157856

top level domains of the referring links
contains top-level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_tld`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:157861

types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_types`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:157843

number of referring main domains

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_main_domains`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:157845

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:157851

indicates the number of pages pointing to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_pages`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:157853

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_pages_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:157849

number of referring subnetworks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_subnets`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_subnets)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:157812

domain that links to the corresponding target from the POST array

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`target`](../interfaces/IBacklinksDomainIntersectionInfo.md#target)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:157810

type of element

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`type`](../interfaces/IBacklinksDomainIntersectionInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:157887

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:157962

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

Defined in: main.ts:157955

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)
