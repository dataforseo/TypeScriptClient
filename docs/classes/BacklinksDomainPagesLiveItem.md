[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainPagesLiveItem

# Class: BacklinksDomainPagesLiveItem

Defined in: main.ts:154120

## Implements

- [`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesLiveItem()

> **new BacklinksDomainPagesLiveItem**(`data`?): [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

Defined in: main.ts:154176

#### Parameters

##### data?

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md)

#### Returns

[`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

## Properties

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:154164

type of encoding

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`content_encoding`](../interfaces/IBacklinksDomainPagesLiveItem.md#content_encoding)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:154128

domain
domain where the page was found

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`domain`](../interfaces/IBacklinksDomainPagesLiveItem.md#domain)

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:154162

page size after encoding
indicates the size of the encoded page, in bytes

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`encoded_size`](../interfaces/IBacklinksDomainPagesLiveItem.md#encoded_size)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:154152

most recent date and time when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`fetch_time`](../interfaces/IBacklinksDomainPagesLiveItem.md#fetch_time)

***

### first\_visited?

> `optional` **first\_visited**: `string`

Defined in: main.ts:154142

date and time of the first page visit
date and time when our crawler visited this page for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`first_visited`](../interfaces/IBacklinksDomainPagesLiveItem.md#first_visited)

***

### ip?

> `optional` **ip**: `string`

Defined in: main.ts:154136

Internet Protocol address

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`ip`](../interfaces/IBacklinksDomainPagesLiveItem.md#ip)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:154157

location header
indicates the URL to redirect a page to if exists

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`location`](../interfaces/IBacklinksDomainPagesLiveItem.md#location)

***

### main\_domain?

> `optional` **main\_domain**: `string`

Defined in: main.ts:154125

main website domain
main website domain does not include subdomains

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`main_domain`](../interfaces/IBacklinksDomainPagesLiveItem.md#main_domain)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:154166

types of media used to display a page

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`media_type`](../interfaces/IBacklinksDomainPagesLiveItem.md#media_type)

***

### meta?

> `optional` **meta**: [`BacklinksPageMeta`](BacklinksPageMeta.md)

Defined in: main.ts:154170

page meta data

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`meta`](../interfaces/IBacklinksDomainPagesLiveItem.md#meta)

***

### page?

> `optional` **page**: `string`

Defined in: main.ts:154134

page URL
relevant page URL

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`page`](../interfaces/IBacklinksDomainPagesLiveItem.md#page)

***

### page\_summary?

> `optional` **page\_summary**: [`PageSummary`](PageSummary.md)

Defined in: main.ts:154172

contains backlink data for this page

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`page_summary`](../interfaces/IBacklinksDomainPagesLiveItem.md#page_summary)

***

### prev\_visited?

> `optional` **prev\_visited**: `string`

Defined in: main.ts:154147

previous to the most recent date when our crawler visited the page
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2017-01-24 13:20:59 +00:00

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`prev_visited`](../interfaces/IBacklinksDomainPagesLiveItem.md#prev_visited)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:154168

server version

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`server`](../interfaces/IBacklinksDomainPagesLiveItem.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:154159

indicates the page size, in bytes

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`size`](../interfaces/IBacklinksDomainPagesLiveItem.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:154154

HTTP status code of the page

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`status_code`](../interfaces/IBacklinksDomainPagesLiveItem.md#status_code)

***

### tld?

> `optional` **tld**: `string`

Defined in: main.ts:154131

top-level domain
top-level domain in the DNS root zone

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`tld`](../interfaces/IBacklinksDomainPagesLiveItem.md#tld)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:154122

type of element

#### Implementation of

[`IBacklinksDomainPagesLiveItem`](../interfaces/IBacklinksDomainPagesLiveItem.md).[`type`](../interfaces/IBacklinksDomainPagesLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:154185

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:154219

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)

Defined in: main.ts:154212

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)
