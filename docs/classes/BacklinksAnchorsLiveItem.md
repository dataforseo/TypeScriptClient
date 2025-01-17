[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksAnchorsLiveItem

# Class: BacklinksAnchorsLiveItem

Defined in: main.ts:152826

## Implements

- [`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksAnchorsLiveItem()

> **new BacklinksAnchorsLiveItem**(`data`?): [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

Defined in: main.ts:152901

#### Parameters

##### data?

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md)

#### Returns

[`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

## Properties

### anchor?

> `optional` **anchor**: `string`

Defined in: main.ts:152830

anchor of the backlink

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`anchor`](../interfaces/IBacklinksAnchorsLiveItem.md#anchor)

***

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:152837

indicates the number of backlinks

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`backlinks`](../interfaces/IBacklinksAnchorsLiveItem.md#backlinks)

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:152851

average spam score of all backlinks with this anchor
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`backlinks_spam_score`](../interfaces/IBacklinksAnchorsLiveItem.md#backlinks_spam_score)

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:152854

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`broken_backlinks`](../interfaces/IBacklinksAnchorsLiveItem.md#broken_backlinks)

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:152857

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`broken_pages`](../interfaces/IBacklinksAnchorsLiveItem.md#broken_pages)

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:152842

date and time when our crawler found the backlink with this anchor for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`first_seen`](../interfaces/IBacklinksAnchorsLiveItem.md#first_seen)

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:152848

date and time when the last backlink with this anchor was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`lost_date`](../interfaces/IBacklinksAnchorsLiveItem.md#lost_date)

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:152835

rank of the anchor links
rank volume that referring websites pass to the target through links with a particular anchor
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`rank`](../interfaces/IBacklinksAnchorsLiveItem.md#rank)

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:152859

indicates the number of referring domains

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_domains`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_domains)

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:152861

number of domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_domains_nofollow`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_domains_nofollow)

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:152868

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_ips`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_ips)

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:152885

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_attributes`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_attributes)

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:152897

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_countries`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_countries)

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:152888

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_platform_types`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_platform_types)

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:152894

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_semantic_locations)

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:152877

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_tld`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_tld)

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:152882

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_links_types`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_links_types)

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:152863

indicates the number of referring main domains

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_main_domains`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_main_domains)

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:152865

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_main_domains_nofollow)

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:152872

indicates the number of pages pointing to target with this anchor

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_pages`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_pages)

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:152874

number of referring pages pointing at least one nofollow link to the target with this anchor

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_pages_nofollow`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_pages_nofollow)

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:152870

number of referring subnetworks

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`referring_subnets`](../interfaces/IBacklinksAnchorsLiveItem.md#referring_subnets)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:152828

type of element

#### Implementation of

[`IBacklinksAnchorsLiveItem`](../interfaces/IBacklinksAnchorsLiveItem.md).[`type`](../interfaces/IBacklinksAnchorsLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:152910

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:152985

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)

Defined in: main.ts:152978

#### Parameters

##### data

`any`

#### Returns

[`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)
