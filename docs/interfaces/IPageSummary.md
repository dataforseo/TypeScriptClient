[**Documentation**](../README.md)

***

[Documentation](../README.md) / IPageSummary

# Interface: IPageSummary

Defined in: main.ts:154212

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:154230

indicates the number of backlinks

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:154233

average spam score of the backlinks pointing to the page
learn more about how the metric is calculated on this help center page

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:154236

number of broken backlinks
number of broken backlinks pointing to the page

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:154239

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:154217

date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:154223

date and time when the last backlink for this page was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:154228

page rank
rank of the page
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:154241

indicates the number of referring domains

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:154243

number of domains pointing at least one nofollow link to the page

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:154250

number of referring IP addresses
number of IP addresses pointing to this page

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:154267

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:154279

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:154270

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:154276

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

Defined in: main.ts:154259

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:154264

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:154245

indicates the number of referring main domains

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:154247

number of main domains pointing at least one nofollow link to the page

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:154254

indicates the number of pages pointing to the page

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:154256

number of referring pages pointing at least one nofollow link to the page

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:154252

number of referring subnetworks
