[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksDomainPagesLiveItem

# Interface: IBacklinksDomainPagesLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Defined in

main.ts:146119

***

### domain?

> `optional` **domain**: `string`

domain
domain where the page was found

#### Defined in

main.ts:146083

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Defined in

main.ts:146117

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:146107

***

### first\_visited?

> `optional` **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:146097

***

### ip?

> `optional` **ip**: `string`

Internet Protocol address

#### Defined in

main.ts:146091

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Defined in

main.ts:146112

***

### main\_domain?

> `optional` **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Defined in

main.ts:146080

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Defined in

main.ts:146121

***

### meta?

> `optional` **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

page meta data

#### Defined in

main.ts:146125

***

### page?

> `optional` **page**: `string`

page URL
relevant page URL

#### Defined in

main.ts:146089

***

### page\_summary?

> `optional` **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

contains backlink data for this page

#### Defined in

main.ts:146127

***

### prev\_visited?

> `optional` **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:146102

***

### server?

> `optional` **server**: `string`

server version

#### Defined in

main.ts:146123

***

### size?

> `optional` **size**: `number`

indicates the page size, in bytes

#### Defined in

main.ts:146114

***

### status\_code?

> `optional` **status\_code**: `number`

HTTP status code of the page

#### Defined in

main.ts:146109

***

### tld?

> `optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Defined in

main.ts:146086

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:146077
