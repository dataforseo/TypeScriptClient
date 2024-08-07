**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksAnchorsLiveItem

# Interface: IBacklinksAnchorsLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### anchor?

> **`optional`** **anchor**: `string`

anchor of the backlink

#### Source

main.ts:143060

***

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks

#### Source

main.ts:143067

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

average spam score of all backlinks with this anchor
learn more about how the metric is calculated on this help center page

#### Source

main.ts:143081

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Source

main.ts:143084

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages that respond with 4xx or 5xx status codes where backlinks are pointing to

#### Source

main.ts:143087

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink with this anchor for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:143072

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the last backlink with this anchor was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:143078

***

### rank?

> **`optional`** **rank**: `number`

rank of the anchor links
rank volume that referring websites pass to the target through links with a particular anchor
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:143065

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number of referring domains

#### Source

main.ts:143089

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Source

main.ts:143091

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Source

main.ts:143098

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:143115

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:143127

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:143118

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
examples:
article, section, summary

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:143124

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:143107

***

### referring\_links\_types?

> **`optional`** **referring\_links\_types**: `Object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:143112

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Source

main.ts:143093

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Source

main.ts:143095

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to target with this anchor

#### Source

main.ts:143102

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target with this anchor

#### Source

main.ts:143104

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Source

main.ts:143100

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:143058
