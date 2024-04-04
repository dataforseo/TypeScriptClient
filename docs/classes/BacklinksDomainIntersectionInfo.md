**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionInfo

# Class: BacklinksDomainIntersectionInfo

## Implements

- [`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionInfo(data)

> **new BacklinksDomainIntersectionInfo**(`data`?): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Parameters

• **data?**: [`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md)

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Source

main.ts:142221

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`backlinks`](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks)

#### Source

main.ts:142162

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`backlinks_spam_score`](../interfaces/IBacklinksDomainIntersectionInfo.md#backlinks_spam_score)

#### Source

main.ts:142176

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`broken_backlinks`](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_backlinks)

#### Source

main.ts:142178

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`broken_pages`](../interfaces/IBacklinksDomainIntersectionInfo.md#broken_pages)

#### Source

main.ts:142180

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`first_seen`](../interfaces/IBacklinksDomainIntersectionInfo.md#first_seen)

#### Source

main.ts:142167

***

### lost\_date?

> **`optional`** **lost\_date**: `number`

date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`lost_date`](../interfaces/IBacklinksDomainIntersectionInfo.md#lost_date)

#### Source

main.ts:142173

***

### rank?

> **`optional`** **rank**: `number`

rank of the target
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`rank`](../interfaces/IBacklinksDomainIntersectionInfo.md#rank)

#### Source

main.ts:142160

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_domains`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains)

#### Source

main.ts:142182

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the corresponding target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_domains_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_domains_nofollow)

#### Source

main.ts:142184

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_ips`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_ips)

#### Source

main.ts:142190

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_attributes`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_attributes)

#### Source

main.ts:142207

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_countries`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_countries)

#### Source

main.ts:142217

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_platform_types`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_platform_types)

#### Source

main.ts:142210

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_semantic_locations`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_semantic_locations)

#### Source

main.ts:142214

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top level domains of the referring links
contains top-level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_tld`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_tld)

#### Source

main.ts:142199

***

### referring\_links\_types?

> **`optional`** **referring\_links\_types**: `Object`

types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

 \[`key`: `string`\]: `number`

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_links_types`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_links_types)

#### Source

main.ts:142204

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_main_domains`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains)

#### Source

main.ts:142186

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_main_domains_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_main_domains_nofollow)

#### Source

main.ts:142188

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_pages`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_pages)

#### Source

main.ts:142194

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_pages_nofollow`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_pages_nofollow)

#### Source

main.ts:142196

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`referring_subnets`](../interfaces/IBacklinksDomainIntersectionInfo.md#referring_subnets)

#### Source

main.ts:142192

***

### target?

> **`optional`** **target**: `string`

domain that links to the corresponding target from the POST array

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`target`](../interfaces/IBacklinksDomainIntersectionInfo.md#target)

#### Source

main.ts:142156

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBacklinksDomainIntersectionInfo`](../interfaces/IBacklinksDomainIntersectionInfo.md).[`type`](../interfaces/IBacklinksDomainIntersectionInfo.md#type)

#### Source

main.ts:142154

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:142230

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:142305

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Source

main.ts:142298
