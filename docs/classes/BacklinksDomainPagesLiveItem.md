[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksDomainPagesLiveItem

# Class: BacklinksDomainPagesLiveItem

## Implements

- [`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesLiveItem()

> **new BacklinksDomainPagesLiveItem**(`data`?): [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md)

#### Returns

[`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Defined in

main.ts:142903

## Properties

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`content_encoding`](../interfaces/IBacklinksDomainPagesLiveItem.md#content_encoding)

#### Defined in

main.ts:142891

***

### domain?

> `optional` **domain**: `string`

domain
domain where the page was found

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`domain`](../interfaces/IBacklinksDomainPagesLiveItem.md#domain)

#### Defined in

main.ts:142855

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page, in bytes

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`encoded_size`](../interfaces/IBacklinksDomainPagesLiveItem.md#encoded_size)

#### Defined in

main.ts:142889

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`fetch_time`](../interfaces/IBacklinksDomainPagesLiveItem.md#fetch_time)

#### Defined in

main.ts:142879

***

### first\_visited?

> `optional` **first\_visited**: `string`

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`first_visited`](../interfaces/IBacklinksDomainPagesLiveItem.md#first_visited)

#### Defined in

main.ts:142869

***

### ip?

> `optional` **ip**: `string`

Internet Protocol address

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`ip`](../interfaces/IBacklinksDomainPagesLiveItem.md#ip)

#### Defined in

main.ts:142863

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to if exists

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`location`](../interfaces/IBacklinksDomainPagesLiveItem.md#location)

#### Defined in

main.ts:142884

***

### main\_domain?

> `optional` **main\_domain**: `string`

main website domain
main website domain does not include subdomains

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`main_domain`](../interfaces/IBacklinksDomainPagesLiveItem.md#main_domain)

#### Defined in

main.ts:142852

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`media_type`](../interfaces/IBacklinksDomainPagesLiveItem.md#media_type)

#### Defined in

main.ts:142893

***

### meta?

> `optional` **meta**: [`BacklinksPageMeta`](BacklinksPageMeta.md)

page meta data

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`meta`](../interfaces/IBacklinksDomainPagesLiveItem.md#meta)

#### Defined in

main.ts:142897

***

### page?

> `optional` **page**: `string`

page URL
relevant page URL

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`page`](../interfaces/IBacklinksDomainPagesLiveItem.md#page)

#### Defined in

main.ts:142861

***

### page\_summary?

> `optional` **page\_summary**: [`PageSummary`](PageSummary.md)

contains backlink data for this page

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`page_summary`](../interfaces/IBacklinksDomainPagesLiveItem.md#page_summary)

#### Defined in

main.ts:142899

***

### prev\_visited?

> `optional` **prev\_visited**: `string`

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`prev_visited`](../interfaces/IBacklinksDomainPagesLiveItem.md#prev_visited)

#### Defined in

main.ts:142874

***

### server?

> `optional` **server**: `string`

server version

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`server`](../interfaces/IBacklinksDomainPagesLiveItem.md#server)

#### Defined in

main.ts:142895

***

### size?

> `optional` **size**: `number`

indicates the page size, in bytes

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`size`](../interfaces/IBacklinksDomainPagesLiveItem.md#size)

#### Defined in

main.ts:142886

***

### status\_code?

> `optional` **status\_code**: `number`

HTTP status code of the page

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`status_code`](../interfaces/IBacklinksDomainPagesLiveItem.md#status_code)

#### Defined in

main.ts:142881

***

### tld?

> `optional` **tld**: `string`

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`tld`](../interfaces/IBacklinksDomainPagesLiveItem.md#tld)

#### Defined in

main.ts:142858

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`type`](../interfaces/IBacklinksDomainPagesLiveItem.md#type)

#### Defined in

main.ts:142849

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:142912

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:142946

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

#### Defined in

main.ts:142939
