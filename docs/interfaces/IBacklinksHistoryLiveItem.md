[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksHistoryLiveItem

# Interface: IBacklinksHistoryLiveItem

Defined in: main.ts:151262

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:151274

number of backlinks

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:151307

number of broken backlinks
number of broken backlinks pointing to the target

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:151310

number of broken pages
number of pages that receive backlinks but respond with 4xx or 5xx status codes

***

### crawled\_pages?

> `optional` **crawled\_pages**: `number`

Defined in: main.ts:151296

number of crawled pages for the target

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:151269

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:151304

number of external links on the page
calculated as the sum of external links on the pages of the specified target

***

### info?

> `optional` **info**: [`TargetInfo`](../classes/TargetInfo.md)

Defined in: main.ts:151298

information about the target

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:151301

number of internal links
calculated as the sum of internal links on the pages of the specified target

***

### lost\_backlinks?

> `optional` **lost\_backlinks**: `number`

Defined in: main.ts:151284

number of lost backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

***

### lost\_referring\_domains?

> `optional` **lost\_referring\_domains**: `number`

Defined in: main.ts:151294

number of lost referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

***

### new\_backlinks?

> `optional` **new\_backlinks**: `number`

Defined in: main.ts:151279

number of new backlinks for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

***

### new\_referring\_domains?

> `optional` **new\_referring\_domains**: `number`

Defined in: main.ts:151289

number of new referring domains for the target
data is provided based in a comparison with the previous period
Note: this data is available from May 2021;
if the date range specified in the POST request precedes May 2021, the field will equal 0

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:151272

domain rank on the given date
learn more about the metric and how it is calculated in this help center article

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:151313

number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:151315

number of domains pointing at least one nofollow link to the target

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:151322

number of referring IP addresses
number of IP addresses pointing to this page

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:151339

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:151351

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:151342

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:151348

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:151331

top-level domains of the referring links
contains top-level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:151336

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:151317

number of referring main domains

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:151319

number of main domains pointing at least one nofollow link to the target

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:151326

number of pages pointing to the target

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:151328

number of referring pages pointing at least one nofollow link to the target

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:151324

number of referring subnetworks

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:151264

type of element
