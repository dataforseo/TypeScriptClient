[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksDomainPagesLiveItem

# Interface: IBacklinksDomainPagesLiveItem

Defined in: main.ts:154411

## Indexable

\[`key`: `string`\]: `any`

## Properties

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:154455

type of encoding

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:154419

domain
domain where the page was found

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:154453

page size after encoding
indicates the size of the encoded page, in bytes

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:154443

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### first\_visited?

> `optional` **first\_visited**: `string`

Defined in: main.ts:154433

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### ip?

> `optional` **ip**: `string`

Defined in: main.ts:154427

Internet Protocol address

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:154448

location header
indicates the URL to redirect a page to if exists

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:154416

main website domain
main website domain does not include subdomains

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:154457

types of media used to display a page

***

### meta?

> `optional` **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

Defined in: main.ts:154461

page meta data

***

### page?

> `optional` **page**: `string`

Defined in: main.ts:154425

page URL
relevant page URL

***

### page\_summary?

> `optional` **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

Defined in: main.ts:154463

contains backlink data for this page

***

### prev\_visited?

> `optional` **prev\_visited**: `string`

Defined in: main.ts:154438

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:154459

server version

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:154450

indicates the page size, in bytes

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:154445

HTTP status code of the page

***

### tld?

> `optional` **tld**: `string`

Defined in: main.ts:154422

top-level domain
top-level domain in the DNS root zone

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:154413

type of element
