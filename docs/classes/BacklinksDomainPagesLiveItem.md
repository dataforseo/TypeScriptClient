[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesLiveItem

# Class: BacklinksDomainPagesLiveItem

## Implements

- [`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesLiveItem.md#constructor)

### Properties

- [content\_encoding](BacklinksDomainPagesLiveItem.md#content_encoding)
- [domain](BacklinksDomainPagesLiveItem.md#domain)
- [encoded\_size](BacklinksDomainPagesLiveItem.md#encoded_size)
- [fetch\_time](BacklinksDomainPagesLiveItem.md#fetch_time)
- [first\_visited](BacklinksDomainPagesLiveItem.md#first_visited)
- [ip](BacklinksDomainPagesLiveItem.md#ip)
- [location](BacklinksDomainPagesLiveItem.md#location)
- [main\_domain](BacklinksDomainPagesLiveItem.md#main_domain)
- [media\_type](BacklinksDomainPagesLiveItem.md#media_type)
- [meta](BacklinksDomainPagesLiveItem.md#meta)
- [page](BacklinksDomainPagesLiveItem.md#page)
- [page\_summary](BacklinksDomainPagesLiveItem.md#page_summary)
- [prev\_visited](BacklinksDomainPagesLiveItem.md#prev_visited)
- [server](BacklinksDomainPagesLiveItem.md#server)
- [size](BacklinksDomainPagesLiveItem.md#size)
- [status\_code](BacklinksDomainPagesLiveItem.md#status_code)
- [tld](BacklinksDomainPagesLiveItem.md#tld)
- [type](BacklinksDomainPagesLiveItem.md#type)

### Methods

- [init](BacklinksDomainPagesLiveItem.md#init)
- [toJSON](BacklinksDomainPagesLiveItem.md#tojson)
- [fromJS](BacklinksDomainPagesLiveItem.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesLiveItem**(`data?`): [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md) |

#### Returns

[`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Defined in

main.ts:133437

## Properties

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[content_encoding](../interfaces/IBacklinksDomainPagesLiveItem.md#content_encoding)

#### Defined in

main.ts:133425

___

### domain

• `Optional` **domain**: `string`

domain
domain where the page was found

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[domain](../interfaces/IBacklinksDomainPagesLiveItem.md#domain)

#### Defined in

main.ts:133389

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[encoded_size](../interfaces/IBacklinksDomainPagesLiveItem.md#encoded_size)

#### Defined in

main.ts:133423

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[fetch_time](../interfaces/IBacklinksDomainPagesLiveItem.md#fetch_time)

#### Defined in

main.ts:133413

___

### first\_visited

• `Optional` **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[first_visited](../interfaces/IBacklinksDomainPagesLiveItem.md#first_visited)

#### Defined in

main.ts:133403

___

### ip

• `Optional` **ip**: `string`

Internet Protocol address

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[ip](../interfaces/IBacklinksDomainPagesLiveItem.md#ip)

#### Defined in

main.ts:133397

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[location](../interfaces/IBacklinksDomainPagesLiveItem.md#location)

#### Defined in

main.ts:133418

___

### main\_domain

• `Optional` **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[main_domain](../interfaces/IBacklinksDomainPagesLiveItem.md#main_domain)

#### Defined in

main.ts:133386

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a page

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[media_type](../interfaces/IBacklinksDomainPagesLiveItem.md#media_type)

#### Defined in

main.ts:133427

___

### meta

• `Optional` **meta**: [`BacklinksPageMeta`](BacklinksPageMeta.md)

page meta data

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[meta](../interfaces/IBacklinksDomainPagesLiveItem.md#meta)

#### Defined in

main.ts:133431

___

### page

• `Optional` **page**: `string`

page URL
relevant page URL

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[page](../interfaces/IBacklinksDomainPagesLiveItem.md#page)

#### Defined in

main.ts:133395

___

### page\_summary

• `Optional` **page\_summary**: [`PageSummary`](PageSummary.md)

contains backlink data for this page

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[page_summary](../interfaces/IBacklinksDomainPagesLiveItem.md#page_summary)

#### Defined in

main.ts:133433

___

### prev\_visited

• `Optional` **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[prev_visited](../interfaces/IBacklinksDomainPagesLiveItem.md#prev_visited)

#### Defined in

main.ts:133408

___

### server

• `Optional` **server**: `string`

server version

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[server](../interfaces/IBacklinksDomainPagesLiveItem.md#server)

#### Defined in

main.ts:133429

___

### size

• `Optional` **size**: `number`

indicates the page size, in bytes

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[size](../interfaces/IBacklinksDomainPagesLiveItem.md#size)

#### Defined in

main.ts:133420

___

### status\_code

• `Optional` **status\_code**: `number`

HTTP status code of the page

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[status_code](../interfaces/IBacklinksDomainPagesLiveItem.md#status_code)

#### Defined in

main.ts:133415

___

### tld

• `Optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[tld](../interfaces/IBacklinksDomainPagesLiveItem.md#tld)

#### Defined in

main.ts:133392

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IBacklinksDomainPagesLiveItem](../interfaces/IBacklinksDomainPagesLiveItem.md).[type](../interfaces/IBacklinksDomainPagesLiveItem.md#type)

#### Defined in

main.ts:133383

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:133446

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:133480

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Defined in

main.ts:133473
