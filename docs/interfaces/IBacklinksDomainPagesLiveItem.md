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

main.ts:138805

___

### domain

• `Optional` **domain**: `string`

domain
domain where the page was found

#### Defined in

main.ts:138769

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Defined in

main.ts:138803

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:138793

___

### first\_visited

• `Optional` **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:138783

___

### ip

• `Optional` **ip**: `string`

Internet Protocol address

#### Defined in

main.ts:138777

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Defined in

main.ts:138798

___

### main\_domain

• `Optional` **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Defined in

main.ts:138766

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a page

#### Defined in

main.ts:138807

___

### meta

• `Optional` **meta**: [`BacklinksPageMeta`](../classes/BacklinksPageMeta.md)

page meta data

#### Defined in

main.ts:138811

___

### page

• `Optional` **page**: `string`

page URL
relevant page URL

#### Defined in

main.ts:138775

___

### page\_summary

• `Optional` **page\_summary**: [`PageSummary`](../classes/PageSummary.md)

contains backlink data for this page

#### Defined in

main.ts:138813

___

### prev\_visited

• `Optional` **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Defined in

main.ts:138788

___

### server

• `Optional` **server**: `string`

server version

#### Defined in

main.ts:138809

___

### size

• `Optional` **size**: `number`

indicates the page size, in bytes

#### Defined in

main.ts:138800

___

### status\_code

• `Optional` **status\_code**: `number`

HTTP status code of the page

#### Defined in

main.ts:138795

___

### tld

• `Optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Defined in

main.ts:138772

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:138763
