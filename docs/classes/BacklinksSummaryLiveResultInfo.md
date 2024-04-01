[Documentation](../README.md) / [Exports](../modules.md) / BacklinksSummaryLiveResultInfo

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
- [backlinks\_nofollow](BacklinksSummaryLiveResultInfo.md#backlinks_nofollow)
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
- [referring\_pages\_nofollow](BacklinksSummaryLiveResultInfo.md#referring_pages_nofollow)
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

main.ts:134920

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[backlinks](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks)

#### Defined in

main.ts:134848

___

### backlinks\_nofollow

• `Optional` **backlinks\_nofollow**: `number`

number of nofollow backlinks pointing to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[backlinks_nofollow](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks_nofollow)

#### Defined in

main.ts:134916

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[backlinks_spam_score](../interfaces/IBacklinksSummaryLiveResultInfo.md#backlinks_spam_score)

#### Defined in

main.ts:134852

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[broken_backlinks](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_backlinks)

#### Defined in

main.ts:134865

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[broken_pages](../interfaces/IBacklinksSummaryLiveResultInfo.md#broken_pages)

#### Defined in

main.ts:134869

___

### crawled\_pages

• `Optional` **crawled\_pages**: `number`

number of crawled pages for the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[crawled_pages](../interfaces/IBacklinksSummaryLiveResultInfo.md#crawled_pages)

#### Defined in

main.ts:134854

___

### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[external_links_count](../interfaces/IBacklinksSummaryLiveResultInfo.md#external_links_count)

#### Defined in

main.ts:134862

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

main.ts:134837

___

### info

• `Optional` **info**: [`TargetInfo`](TargetInfo.md)

information about the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[info](../interfaces/IBacklinksSummaryLiveResultInfo.md#info)

#### Defined in

main.ts:134856

___

### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[internal_links_count](../interfaces/IBacklinksSummaryLiveResultInfo.md#internal_links_count)

#### Defined in

main.ts:134859

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

main.ts:134843

___

### rank

• `Optional` **rank**: `number`

target rank
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[rank](../interfaces/IBacklinksSummaryLiveResultInfo.md#rank)

#### Defined in

main.ts:134846

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_domains](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains)

#### Defined in

main.ts:134872

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_domains_nofollow](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_domains_nofollow)

#### Defined in

main.ts:134874

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_ips](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_ips)

#### Defined in

main.ts:134881

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

main.ts:134898

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

main.ts:134912

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

main.ts:134903

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

main.ts:134909

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

main.ts:134888

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

main.ts:134893

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_main_domains](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains)

#### Defined in

main.ts:134876

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_main_domains_nofollow](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_main_domains_nofollow)

#### Defined in

main.ts:134878

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_pages](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_pages)

#### Defined in

main.ts:134885

___

### referring\_pages\_nofollow

• `Optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_pages_nofollow](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_pages_nofollow)

#### Defined in

main.ts:134914

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[referring_subnets](../interfaces/IBacklinksSummaryLiveResultInfo.md#referring_subnets)

#### Defined in

main.ts:134883

___

### target

• `Optional` **target**: `string`

target in a POST array

#### Implementation of

[IBacklinksSummaryLiveResultInfo](../interfaces/IBacklinksSummaryLiveResultInfo.md).[target](../interfaces/IBacklinksSummaryLiveResultInfo.md#target)

#### Defined in

main.ts:134832

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

main.ts:134929

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

main.ts:135008

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

main.ts:135001
