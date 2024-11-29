[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionInfo

# Class: BacklinksDomainIntersectionInfo

## Implements

- [`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionInfo()

> **new BacklinksDomainIntersectionInfo**(`data`?): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Parameters

##### data?

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md)

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Defined in

main.ts:157646

## Properties

### backlinks?

> `optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`backlinks`](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks)

#### Defined in

main.ts:157587

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`backlinks_spam_score`](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks_spam_score)

#### Defined in

main.ts:157601

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

number of broken backlinks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`broken_backlinks`](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_backlinks)

#### Defined in

main.ts:157603

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

number of broken pages

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`broken_pages`](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_pages)

#### Defined in

main.ts:157605

***

### first\_seen?

> `optional` **first\_seen**: `string`

date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`first_seen`](../interfaces/IBacklinksDomainIntersectionInfo.md#first_seen)

#### Defined in

main.ts:157592

***

### lost\_date?

> `optional` **lost\_date**: `number`

date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`lost_date`](../interfaces/IBacklinksDomainIntersectionInfo.md#lost_date)

#### Defined in

main.ts:157598

***

### rank?

> `optional` **rank**: `number`

rank referred to the target from the POST array
indicates the rank that the referring domain (target above) refers to your target from the POST array;
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`rank`](../interfaces/IBacklinksDomainIntersectionInfo.md#rank)

#### Defined in

main.ts:157585

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

number of referring domains

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_domains`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains)

#### Defined in

main.ts:157607

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the corresponding target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_domains_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains_nofollow)

#### Defined in

main.ts:157609

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_ips`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_ips)

#### Defined in

main.ts:157615

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_attributes`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_attributes)

#### Defined in

main.ts:157632

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_countries`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_countries)

#### Defined in

main.ts:157642

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_platform_types`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_platform_types)

#### Defined in

main.ts:157635

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_semantic_locations)

#### Defined in

main.ts:157639

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

top level domains of the referring links
contains top-level domains and referring link count per each

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_tld`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_tld)

#### Defined in

main.ts:157624

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_types`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_types)

#### Defined in

main.ts:157629

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_main_domains`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains)

#### Defined in

main.ts:157611

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains_nofollow)

#### Defined in

main.ts:157613

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_pages`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_pages)

#### Defined in

main.ts:157619

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_pages_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_pages_nofollow)

#### Defined in

main.ts:157621

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_subnets`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_subnets)

#### Defined in

main.ts:157617

***

### target?

> `optional` **target**: `string`

domain that links to the corresponding target from the POST array

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`target`](../interfaces/IBacklinksDomainIntersectionInfo.md#target)

#### Defined in

main.ts:157580

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`type`](../interfaces/IBacklinksDomainIntersectionInfo.md#type)

#### Defined in

main.ts:157578

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:157655

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:157730

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Defined in

main.ts:157723
