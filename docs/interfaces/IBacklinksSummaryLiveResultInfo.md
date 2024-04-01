[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksSummaryLiveResultInfo

# Interface: IBacklinksSummaryLiveResultInfo

## Implemented by

- [`BacklinksSummaryLiveResultInfo`](../classes/BacklinksSummaryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks](IBacklinksSummaryLiveResultInfo.md#backlinks)
- [backlinks\_nofollow](IBacklinksSummaryLiveResultInfo.md#backlinks_nofollow)
- [backlinks\_spam\_score](IBacklinksSummaryLiveResultInfo.md#backlinks_spam_score)
- [broken\_backlinks](IBacklinksSummaryLiveResultInfo.md#broken_backlinks)
- [broken\_pages](IBacklinksSummaryLiveResultInfo.md#broken_pages)
- [crawled\_pages](IBacklinksSummaryLiveResultInfo.md#crawled_pages)
- [external\_links\_count](IBacklinksSummaryLiveResultInfo.md#external_links_count)
- [first\_seen](IBacklinksSummaryLiveResultInfo.md#first_seen)
- [info](IBacklinksSummaryLiveResultInfo.md#info)
- [internal\_links\_count](IBacklinksSummaryLiveResultInfo.md#internal_links_count)
- [lost\_date](IBacklinksSummaryLiveResultInfo.md#lost_date)
- [rank](IBacklinksSummaryLiveResultInfo.md#rank)
- [referring\_domains](IBacklinksSummaryLiveResultInfo.md#referring_domains)
- [referring\_domains\_nofollow](IBacklinksSummaryLiveResultInfo.md#referring_domains_nofollow)
- [referring\_ips](IBacklinksSummaryLiveResultInfo.md#referring_ips)
- [referring\_links\_attributes](IBacklinksSummaryLiveResultInfo.md#referring_links_attributes)
- [referring\_links\_countries](IBacklinksSummaryLiveResultInfo.md#referring_links_countries)
- [referring\_links\_platform\_types](IBacklinksSummaryLiveResultInfo.md#referring_links_platform_types)
- [referring\_links\_semantic\_locations](IBacklinksSummaryLiveResultInfo.md#referring_links_semantic_locations)
- [referring\_links\_tld](IBacklinksSummaryLiveResultInfo.md#referring_links_tld)
- [referring\_links\_types](IBacklinksSummaryLiveResultInfo.md#referring_links_types)
- [referring\_main\_domains](IBacklinksSummaryLiveResultInfo.md#referring_main_domains)
- [referring\_main\_domains\_nofollow](IBacklinksSummaryLiveResultInfo.md#referring_main_domains_nofollow)
- [referring\_pages](IBacklinksSummaryLiveResultInfo.md#referring_pages)
- [referring\_pages\_nofollow](IBacklinksSummaryLiveResultInfo.md#referring_pages_nofollow)
- [referring\_subnets](IBacklinksSummaryLiveResultInfo.md#referring_subnets)
- [target](IBacklinksSummaryLiveResultInfo.md#target)

## Properties

### backlinks

• `Optional` **backlinks**: `number`

indicates the number of backlinks

#### Defined in

main.ts:135099

___

### backlinks\_nofollow

• `Optional` **backlinks\_nofollow**: `number`

number of nofollow backlinks pointing to the target

#### Defined in

main.ts:135167

___

### backlinks\_spam\_score

• `Optional` **backlinks\_spam\_score**: `number`

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

#### Defined in

main.ts:135103

___

### broken\_backlinks

• `Optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Defined in

main.ts:135116

___

### broken\_pages

• `Optional` **broken\_pages**: `number`

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

#### Defined in

main.ts:135120

___

### crawled\_pages

• `Optional` **crawled\_pages**: `number`

number of crawled pages for the target

#### Defined in

main.ts:135105

___

### external\_links\_count

• `Optional` **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Defined in

main.ts:135113

___

### first\_seen

• `Optional` **first\_seen**: `string`

date and time when our crawler found the backlink for the target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:135088

___

### info

• `Optional` **info**: [`TargetInfo`](../classes/TargetInfo.md)

information about the target

#### Defined in

main.ts:135107

___

### internal\_links\_count

• `Optional` **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Defined in

main.ts:135110

___

### lost\_date

• `Optional` **lost\_date**: `string`

date and time when the backlink was lost
indicates the date and time when our crawler visited the target and it responded with a 4xx or 5xx status code or when its last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:135094

___

### rank

• `Optional` **rank**: `number`

target rank
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:135097

___

### referring\_domains

• `Optional` **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Defined in

main.ts:135123

___

### referring\_domains\_nofollow

• `Optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

main.ts:135125

___

### referring\_ips

• `Optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Defined in

main.ts:135132

___

### referring\_links\_attributes

• `Optional` **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute
example values:
nofollow, noopener, noreferrer, external, ugc, sponsored

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:135149

___

### referring\_links\_countries

• `Optional` **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:135163

___

### referring\_links\_platform\_types

• `Optional` **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform
example values:
cms, blogs, unknown, ecommerce, message-boards

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:135154

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

#### Defined in

main.ts:135160

___

### referring\_links\_tld

• `Optional` **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:135139

___

### referring\_links\_types

• `Optional` **referring\_links\_types**: `Object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:135144

___

### referring\_main\_domains

• `Optional` **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Defined in

main.ts:135127

___

### referring\_main\_domains\_nofollow

• `Optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

main.ts:135129

___

### referring\_pages

• `Optional` **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Defined in

main.ts:135136

___

### referring\_pages\_nofollow

• `Optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Defined in

main.ts:135165

___

### referring\_subnets

• `Optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Defined in

main.ts:135134

___

### target

• `Optional` **target**: `string`

target in a POST array

#### Defined in

main.ts:135083
