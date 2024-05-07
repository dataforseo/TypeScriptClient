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

main.ts:139951

***

### domain?

> **`optional`** **domain**: `string`

domain
domain where the page was found

#### Source

main.ts:139915

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Source

main.ts:139949

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:139939

***

### first\_visited?

> **`optional`** **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:139929

***

### ip?

> **`optional`** **ip**: `string`

Internet Protocol address

#### Source

main.ts:139923

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Source

main.ts:139944

***

### main\_domain?

> **`optional`** **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Source

main.ts:139912

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a page

#### Source

main.ts:139953

***

### meta?

> **`optional`** **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

page meta data

#### Source

main.ts:139957

***

### page?

> **`optional`** **page**: `string`

page URL
relevant page URL

#### Source

main.ts:139921

***

### page\_summary?

> **`optional`** **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

contains backlink data for this page

#### Source

main.ts:139959

***

### prev\_visited?

> **`optional`** **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Source

main.ts:139934

***

### server?

> **`optional`** **server**: `string`

server version

#### Source

main.ts:139955

***

### size?

> **`optional`** **size**: `number`

indicates the page size, in bytes

#### Source

main.ts:139946

***

### status\_code?

> **`optional`** **status\_code**: `number`

HTTP status code of the page

#### Source

main.ts:139941

***

### tld?

> **`optional`** **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Source

main.ts:139918

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:139909
