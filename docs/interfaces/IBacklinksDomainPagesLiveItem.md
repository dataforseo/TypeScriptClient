[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksDomainPagesLiveItem

# Interface: IBacklinksDomainPagesLiveItem

## Implemented by

- [`BacklinksDomainPagesLiveItem`](../classes/BacklinksDomainPagesLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [content\_encoding](IBacklinksDomainPagesLiveItem.md#content_encoding)
- [domain](IBacklinksDomainPagesLiveItem.md#domain)
- [encoded\_size](IBacklinksDomainPagesLiveItem.md#encoded_size)
- [fetch\_time](IBacklinksDomainPagesLiveItem.md#fetch_time)
- [first\_visited](IBacklinksDomainPagesLiveItem.md#first_visited)
- [ip](IBacklinksDomainPagesLiveItem.md#ip)
- [location](IBacklinksDomainPagesLiveItem.md#location)
- [main\_domain](IBacklinksDomainPagesLiveItem.md#main_domain)
- [media\_type](IBacklinksDomainPagesLiveItem.md#media_type)
- [meta](IBacklinksDomainPagesLiveItem.md#meta)
- [page](IBacklinksDomainPagesLiveItem.md#page)
- [page\_summary](IBacklinksDomainPagesLiveItem.md#page_summary)
- [prev\_visited](IBacklinksDomainPagesLiveItem.md#prev_visited)
- [server](IBacklinksDomainPagesLiveItem.md#server)
- [size](IBacklinksDomainPagesLiveItem.md#size)
- [status\_code](IBacklinksDomainPagesLiveItem.md#status_code)
- [tld](IBacklinksDomainPagesLiveItem.md#tld)
- [type](IBacklinksDomainPagesLiveItem.md#type)

## Properties

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Defined in

main.ts:133552

___

### domain

• `Optional` **domain**: `string`

domain
domain where the page was found

#### Defined in

main.ts:133516

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Defined in

main.ts:133550

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:133540

___

### first\_visited

• `Optional` **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:133530

___

### ip

• `Optional` **ip**: `string`

Internet Protocol address

#### Defined in

main.ts:133524

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Defined in

main.ts:133545

___

### main\_domain

• `Optional` **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Defined in

main.ts:133513

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a page

#### Defined in

main.ts:133554

___

### meta

• `Optional` **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

page meta data

#### Defined in

main.ts:133558

___

### page

• `Optional` **page**: `string`

page URL
relevant page URL

#### Defined in

main.ts:133522

___

### page\_summary

• `Optional` **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

contains backlink data for this page

#### Defined in

main.ts:133560

___

### prev\_visited

• `Optional` **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:133535

___

### server

• `Optional` **server**: `string`

server version

#### Defined in

main.ts:133556

___

### size

• `Optional` **size**: `number`

indicates the page size, in bytes

#### Defined in

main.ts:133547

___

### status\_code

• `Optional` **status\_code**: `number`

HTTP status code of the page

#### Defined in

main.ts:133542

___

### tld

• `Optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Defined in

main.ts:133519

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:133510
