[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksDomainIntersectionInfo

# Interface: IBacklinksDomainIntersectionInfo

Defined in: main.ts:158031

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:158042

indicates the number of backlinks

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:158056

average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:158058

number of broken backlinks

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:158060

number of broken pages

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:158047

date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### lost\_date?

> `optional` **lost\_date**: `number`

Defined in: main.ts:158053

date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:158040

rank referred to the target from the POST array
indicates the rank that the referring domain (target above) refers to your target from the POST array;
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:158062

number of referring domains

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:158064

number of domains pointing at least one nofollow link to the corresponding target

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:158070

number of referring IP addresses

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:158087

link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:158097

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:158090

types of referring platforms
indicates referring platform types and link count per each platform

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:158094

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:158079

top level domains of the referring links
contains top-level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:158084

types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:158066

number of referring main domains

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:158068

number of main domains pointing at least one nofollow link to the target

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:158074

indicates the number of pages pointing to the target

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:158076

number of referring pages pointing at least one nofollow link to the target

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:158072

number of referring subnetworks

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:158035

domain that links to the corresponding target from the POST array

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:158033

type of element
