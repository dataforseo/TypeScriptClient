**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksDomainIntersectionInfo

# Interface: IBacklinksDomainIntersectionInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks

#### Source

main.ts:147880

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page

#### Source

main.ts:147894

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks

#### Source

main.ts:147896

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages

#### Source

main.ts:147898

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:147885

***

### lost\_date?

> **`optional`** **lost\_date**: `number`

date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:147891

***

### rank?

> **`optional`** **rank**: `number`

rank referred to the target from the POST array
indicates the rank that the referring domain (target above) refers to your target from the POST array;
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:147878

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains

#### Source

main.ts:147900

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the corresponding target

#### Source

main.ts:147902

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses

#### Source

main.ts:147908

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:147925

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:147935

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:147928

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:147932

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top level domains of the referring links
contains top-level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:147917

***

### referring\_links\_types?

> **`optional`** **referring\_links\_types**: `Object`

types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:147922

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains

#### Source

main.ts:147904

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Source

main.ts:147906

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Source

main.ts:147912

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Source

main.ts:147914

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Source

main.ts:147910

***

### target?

> **`optional`** **target**: `string`

domain that links to the corresponding target from the POST array

#### Source

main.ts:147873

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:147871
