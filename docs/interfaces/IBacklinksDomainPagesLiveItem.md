**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksDomainPagesLiveItem

# Interface: IBacklinksDomainPagesLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Source

main.ts:141460

***

### domain?

> **`optional`** **domain**: `string`

domain
domain where the page was found

#### Source

main.ts:141424

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Source

main.ts:141458

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:141448

***

### first\_visited?

> **`optional`** **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:141438

***

### ip?

> **`optional`** **ip**: `string`

Internet Protocol address

#### Source

main.ts:141432

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Source

main.ts:141453

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Source

main.ts:141421

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a page

#### Source

main.ts:141462

***

### meta?

> **`optional`** **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

page meta data

#### Source

main.ts:141466

***

### page?

> **`optional`** **page**: `string`

page URL
relevant page URL

#### Source

main.ts:141430

***

### page\_summary?

> **`optional`** **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

contains backlink data for this page

#### Source

main.ts:141468

***

### prev\_visited?

> **`optional`** **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:141443

***

### server?

> **`optional`** **server**: `string`

server version

#### Source

main.ts:141464

***

### size?

> **`optional`** **size**: `number`

indicates the page size, in bytes

#### Source

main.ts:141455

***

### status\_code?

> **`optional`** **status\_code**: `number`

HTTP status code of the page

#### Source

main.ts:141450

***

### tld?

> **`optional`** **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Source

main.ts:141427

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:141418
