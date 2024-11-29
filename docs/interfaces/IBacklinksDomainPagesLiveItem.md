[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksDomainPagesLiveItem

# Interface: IBacklinksDomainPagesLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Defined in

main.ts:154223

***

### domain?

> `optional` **domain**: `string`

domain
domain where the page was found

#### Defined in

main.ts:154187

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Defined in

main.ts:154221

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:154211

***

### first\_visited?

> `optional` **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:154201

***

### ip?

> `optional` **ip**: `string`

Internet Protocol address

#### Defined in

main.ts:154195

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Defined in

main.ts:154216

***

### main\_domain?

> `optional` **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Defined in

main.ts:154184

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Defined in

main.ts:154225

***

### meta?

> `optional` **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

page meta data

#### Defined in

main.ts:154229

***

### page?

> `optional` **page**: `string`

page URL
relevant page URL

#### Defined in

main.ts:154193

***

### page\_summary?

> `optional` **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

contains backlink data for this page

#### Defined in

main.ts:154231

***

### prev\_visited?

> `optional` **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:154206

***

### server?

> `optional` **server**: `string`

server version

#### Defined in

main.ts:154227

***

### size?

> `optional` **size**: `number`

indicates the page size, in bytes

#### Defined in

main.ts:154218

***

### status\_code?

> `optional` **status\_code**: `number`

HTTP status code of the page

#### Defined in

main.ts:154213

***

### tld?

> `optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Defined in

main.ts:154190

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:154181
