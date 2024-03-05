[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksSummaryLiveResultInfo

# Class: BacklinksSummaryLiveResultInfo

## Implements

- [`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksSummaryLiveResultInfo.md#constructor)

### Properties

- [backlinks](BacklinksSummaryLiveResultInfo.md#backlinks)
- [backlinks\_spam\_score](BacklinksSummaryLiveResultInfo.md#backlinks_spam_score)
- [broken\_backlinks](BacklinksSummaryLiveResultInfo.md#broken_backlinks)
- [broken\_pages](BacklinksSummaryLiveResultInfo.md#broken_pages)
- [crawled\_pages](BacklinksSummaryLiveResultInfo.md#crawled_pages)
- [external\_links\_count](BacklinksSummaryLiveResultInfo.md#external_links_count)
- [first\_seen](BacklinksSummaryLiveResultInfo.md#first_seen)
- [info](BacklinksSummaryLiveResultInfo.md#info)
- [internal\_links\_count](BacklinksSummaryLiveResultInfo.md#internal_links_count)
- [lost\_date](BacklinksSummaryLiveResultInfo.md#lost_date)
- [rank](BacklinksSummaryLiveResultInfo.md#rank)
- [referring\_domains](BacklinksSummaryLiveResultInfo.md#referring_domains)
- [referring\_domains\_nofollow](BacklinksSummaryLiveResultInfo.md#referring_domains_nofollow)
- [referring\_ips](BacklinksSummaryLiveResultInfo.md#referring_ips)
- [referring\_links\_attributes](BacklinksSummaryLiveResultInfo.md#referring_links_attributes)
- [referring\_links\_countries](BacklinksSummaryLiveResultInfo.md#referring_links_countries)
- [referring\_links\_platform\_types](BacklinksSummaryLiveResultInfo.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](BacklinksSummaryLiveResultInfo.md#referring_links_semantic_locations)
- [referring\_links\_tld](BacklinksSummaryLiveResultInfo.md#referring_links_tld)
- [referring\_links\_types](BacklinksSummaryLiveResultInfo.md#referring_links_types)
- [referring\_main\_domains](BacklinksSummaryLiveResultInfo.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](BacklinksSummaryLiveResultInfo.md#referring_main_domains_nofollow)
- [referring\_pages](BacklinksSummaryLiveResultInfo.md#referring_pages)
- [referring\_subnets](BacklinksSummaryLiveResultInfo.md#referring_subnets)
- [target](BacklinksSummaryLiveResultInfo.md#target)

### Methods

- [init](BacklinksSummaryLiveResultInfo.md#init)
- [toJSON](BacklinksSummaryLiveResultInfo.md#tojson)
- [fromJS](BacklinksSummaryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksSummaryLiveResultInfo**(`data?`): [`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksSummaryLiveResultInfo`](../interfaces/IBacklinksSummaryLiveResultInfo.md) |

#### Returns

[`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Defined in

[main.ts:129549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129549)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[backlinks](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks)

#### Defined in

[main.ts:129481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129481)

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[backlinks_spam_score](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks_spam_score)

#### Defined in

[main.ts:129485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129485)

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[broken_backlinks](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_backlinks)

#### Defined in

[main.ts:129498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129498)

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[broken_pages](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_pages)

#### Defined in

[main.ts:129502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129502)

___

### crawled\_pages

• `Optional` **crawled\_pages**: `number`

number of crawled pages for the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[crawled_pages](../interfaces/IBacklinksSummaryLiveResultInfo.md#crawled_pages)

#### Defined in

[main.ts:129487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129487)

___

### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[external_links_count](../interfaces/IBacklinksSummaryLiveResultInfo.md#external_links_count)

#### Defined in

[main.ts:129495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129495)

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[first_seen](../interfaces/IBacklinksSummaryLiveResultInfo.md#first_seen)

#### Defined in

[main.ts:129470](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129470)

___

### info

• `Optional` **info**: [`TargetInfo`](TargetInfo.md)

information about the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[info](../interfaces/IBacklinksSummaryLiveResultInfo.md#info)

#### Defined in

[main.ts:129489](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129489)

___

### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[internal_links_count](../interfaces/IBacklinksSummaryLiveResultInfo.md#internal_links_count)

#### Defined in

[main.ts:129492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129492)

___

### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the backlink was lost
indicates the date and time when our crawler visited the target and it responded with a 4xx or 5xx status code or when its last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[lost_date](../interfaces/IBacklinksSummaryLiveResultInfo.md#lost_date)

#### Defined in

[main.ts:129476](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129476)

___

### rank

• `Optional` **rank**: `number`

target rank
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[rank](../interfaces/IBacklinksSummaryLiveResultInfo.md#rank)

#### Defined in

[main.ts:129479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129479)

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_domains](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains)

#### Defined in

[main.ts:129505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129505)

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_domains_nofollow](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains_nofollow)

#### Defined in

[main.ts:129507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129507)

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_ips](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_ips)

#### Defined in

[main.ts:129514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129514)

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute
example values:
nofollow, noopener, noreferrer, external, ugc, sponsored

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_links_attributes](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_attributes)

#### Defined in

[main.ts:129531](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129531)

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_links_countries](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_countries)

#### Defined in

[main.ts:129545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129545)

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform
example values:
cms, blogs, unknown, ecommerce, message-boards

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_links_platform_types](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_platform_types)

#### Defined in

[main.ts:129536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129536)

___

### referring\_links\_semantic\_locations

• `Optional` **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
example values:
article, section, summary, ""

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_links_semantic_locations](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_semantic_locations)

#### Defined in

[main.ts:129542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129542)

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_links_tld](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_tld)

#### Defined in

[main.ts:129521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129521)

___

### referring\_links\_types

• `Optional` **referring\_links\_types**: `Object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_links_types](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_links_types)

#### Defined in

[main.ts:129526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129526)

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_main_domains](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains)

#### Defined in

[main.ts:129509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129509)

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_main_domains_nofollow](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains_nofollow)

#### Defined in

[main.ts:129511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129511)

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_pages](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_pages)

#### Defined in

[main.ts:129518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129518)

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_subnets](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_subnets)

#### Defined in

[main.ts:129516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129516)

___

### target

• `Optional` **target**: `string`

target in a POST array

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[target](../interfaces/IBacklinksSummaryLiveResultInfo.md#target)

#### Defined in

[main.ts:129465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129465)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:129558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129558)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:129635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129635)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksSummaryLiveResultInfo`](BacklinksSummaryLiveResultInfo.md)

#### Defined in

[main.ts:129628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129628)
