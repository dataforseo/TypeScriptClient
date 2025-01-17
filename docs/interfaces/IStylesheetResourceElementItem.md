[**Documentation**](../README.md)

***

[Documentation](../README.md) / IStylesheetResourceElementItem

# Interface: IStylesheetResourceElementItem

Defined in: main.ts:168031

## Extends

- [`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### accept\_type?

> `optional` **accept\_type**: `string`

Defined in: main.ts:168043

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](../classes/CacheControl.md)

Defined in: main.ts:22464

instructions for caching

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`cache_control`](IBaseOnPageResourceItemInfo.md#cache_control)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:22467

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`checks`](IBaseOnPageResourceItemInfo.md#checks)

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:22469

type of encoding

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`content_encoding`](IBaseOnPageResourceItemInfo.md#content_encoding)

***

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:168047

total time it takes until a browser receives a complete response from a server (in milliseconds)

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:22454

page size after encoding
indicates the size of the encoded page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`encoded_size`](IBaseOnPageResourceItemInfo.md#encoded_size)

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

Defined in: main.ts:168053

time to complete downloading the resource
the amount of time the browser needs to complete downloading a resource

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

Defined in: main.ts:168050

time to start downloading the resource
the amount of time the browser needs to start downloading a resource

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:22462

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`fetch_time`](IBaseOnPageResourceItemInfo.md#fetch_time)

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](../classes/FetchTiming.md)

Defined in: main.ts:168038

resource fething time range

***

### initiator?

> `optional` **initiator**: `string`

Defined in: main.ts:168045

resource initiator

***

### is\_render\_blocking?

> `optional` **is\_render\_blocking**: `boolean`

Defined in: main.ts:168055

indicates whether the resource blocks rendering

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](../classes/LastModified.md)

Defined in: main.ts:22476

contains data on changes related to the resource
if there is no data, the value will be null

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`last_modified`](IBaseOnPageResourceItemInfo.md#last_modified)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22444

location header
indicates the URL to redirect a page to

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`location`](IBaseOnPageResourceItemInfo.md#location)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:22471

types of media used to display a page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`media_type`](IBaseOnPageResourceItemInfo.md#media_type)

***

### meta?

> `optional` **meta**: [`ResourceMetaInfo`](../classes/ResourceMetaInfo.md)

Defined in: main.ts:168036

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](../classes/OnPageResourceIssueInfo.md)

Defined in: main.ts:22448

resource errors and warnings

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_errors`](IBaseOnPageResourceItemInfo.md#resource_errors)

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:22439

type of the returned resource

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`resource_type`](IBaseOnPageResourceItemInfo.md#resource_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:22473

server version

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`server`](IBaseOnPageResourceItemInfo.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:22451

resource size
indicates the size of a given page measured in bytes

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`size`](IBaseOnPageResourceItemInfo.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:22441

status code of the page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`status_code`](IBaseOnPageResourceItemInfo.md#status_code)

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:22457

compressed page size
indicates the compressed size of a given page

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`total_transfer_size`](IBaseOnPageResourceItemInfo.md#total_transfer_size)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22446

page URL

#### Inherited from

[`IBaseOnPageResourceItemInfo`](IBaseOnPageResourceItemInfo.md).[`url`](IBaseOnPageResourceItemInfo.md#url)
