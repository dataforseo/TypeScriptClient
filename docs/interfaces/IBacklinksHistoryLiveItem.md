[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksHistoryLiveItem

# Interface: IBacklinksHistoryLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

number of backlinks

#### Defined in

main.ts:142938

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Defined in

main.ts:142971

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

number of broken pages
number of pages that receive backlinks but respond with 4xx or 5xx status codes

#### Defined in

main.ts:142974

***

### crawled\_pages?

> `optional` **crawled\_pages**: `number`

number of crawled pages for the target

#### Defined in

main.ts:142960

***

### date?

> `optional` **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:142933

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Defined in

main.ts:142968

***

### info?

> `optional` **info**: [`TargetInfo`](../classes/TargetInfo.md)

information about the target

#### Defined in

main.ts:142962

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Defined in

main.ts:142965

***

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

number of lost backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Defined in

main.ts:142948

***

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

number of lost referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Defined in

main.ts:142958

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

number of new backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Defined in

main.ts:142943

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

number of new referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

#### Defined in

main.ts:142953

***

### rank?

> `optional` **rank**: `number`

domain rank on the given date
learn more about the metric and how it is calculated in this help center article

#### Defined in

main.ts:142936

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Defined in

main.ts:142977

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

main.ts:142979

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Defined in

main.ts:142986

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:143003

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:143015

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:143006

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:143012

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

top-level domains of the referring links
contains top-level domains and referring link count per each

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:142995

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:143000

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

number of referring main domains

#### Defined in

main.ts:142981

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

main.ts:142983

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

number of pages pointing to the target

#### Defined in

main.ts:142990

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Defined in

main.ts:142992

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

number of referring subnetworks

#### Defined in

main.ts:142988

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:142928
