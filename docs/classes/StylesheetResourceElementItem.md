[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / StylesheetResourceElementItem

# Class: StylesheetResourceElementItem

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StylesheetResourceElementItem()

> **new StylesheetResourceElementItem**(`data`?): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Parameters

• **data?**: [`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md)

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Defined in

main.ts:156279

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Defined in

main.ts:21441

***

### accept\_type?

> `optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`accept_type`](../interfaces/IStylesheetResourceElementItem.md#accept_type)

#### Defined in

main.ts:156263

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`cache_control`](../interfaces/IStylesheetResourceElementItem.md#cache_control)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`cache_control`](BaseOnPageResourceItemInfo.md#cache_control)

#### Defined in

main.ts:21427

***

### checks?

> `optional` **checks**: `object`

website checks
on-page check-ups related to the page

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`checks`](../interfaces/IStylesheetResourceElementItem.md#checks)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`checks`](BaseOnPageResourceItemInfo.md#checks)

#### Defined in

main.ts:21430

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`content_encoding`](../interfaces/IStylesheetResourceElementItem.md#content_encoding)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`content_encoding`](BaseOnPageResourceItemInfo.md#content_encoding)

#### Defined in

main.ts:21432

***

### duration\_time?

> `optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`duration_time`](../interfaces/IStylesheetResourceElementItem.md#duration_time)

#### Defined in

main.ts:156267

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`encoded_size`](../interfaces/IStylesheetResourceElementItem.md#encoded_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`encoded_size`](BaseOnPageResourceItemInfo.md#encoded_size)

#### Defined in

main.ts:21417

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

time to complete downloading the resource
the amount of time the browser needs to complete downloading a resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_end`](../interfaces/IStylesheetResourceElementItem.md#fetch_end)

#### Defined in

main.ts:156273

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

time to start downloading the resource
the amount of time the browser needs to start downloading a resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_start`](../interfaces/IStylesheetResourceElementItem.md#fetch_start)

#### Defined in

main.ts:156270

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_time`](../interfaces/IStylesheetResourceElementItem.md#fetch_time)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fetch_time`](BaseOnPageResourceItemInfo.md#fetch_time)

#### Defined in

main.ts:21425

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_timing`](../interfaces/IStylesheetResourceElementItem.md#fetch_timing)

#### Defined in

main.ts:156258

***

### initiator?

> `optional` **initiator**: `string`

resource initiator

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`initiator`](../interfaces/IStylesheetResourceElementItem.md#initiator)

#### Defined in

main.ts:156265

***

### is\_render\_blocking?

> `optional` **is\_render\_blocking**: `boolean`

indicates whether the resource blocks rendering

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`is_render_blocking`](../interfaces/IStylesheetResourceElementItem.md#is_render_blocking)

#### Defined in

main.ts:156275

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`last_modified`](../interfaces/IStylesheetResourceElementItem.md#last_modified)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`last_modified`](BaseOnPageResourceItemInfo.md#last_modified)

#### Defined in

main.ts:21439

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`location`](../interfaces/IStylesheetResourceElementItem.md#location)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`location`](BaseOnPageResourceItemInfo.md#location)

#### Defined in

main.ts:21407

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`media_type`](../interfaces/IStylesheetResourceElementItem.md#media_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`media_type`](BaseOnPageResourceItemInfo.md#media_type)

#### Defined in

main.ts:21434

***

### meta?

> `optional` **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`meta`](../interfaces/IStylesheetResourceElementItem.md#meta)

#### Defined in

main.ts:156256

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`resource_errors`](../interfaces/IStylesheetResourceElementItem.md#resource_errors)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_errors`](BaseOnPageResourceItemInfo.md#resource_errors)

#### Defined in

main.ts:21411

***

### resource\_type?

> `optional` **resource\_type**: `string`

type of the returned resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`resource_type`](../interfaces/IStylesheetResourceElementItem.md#resource_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_type`](BaseOnPageResourceItemInfo.md#resource_type)

#### Defined in

main.ts:21402

***

### server?

> `optional` **server**: `string`

server version

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`server`](../interfaces/IStylesheetResourceElementItem.md#server)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`server`](BaseOnPageResourceItemInfo.md#server)

#### Defined in

main.ts:21436

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`size`](../interfaces/IStylesheetResourceElementItem.md#size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`size`](BaseOnPageResourceItemInfo.md#size)

#### Defined in

main.ts:21414

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`status_code`](../interfaces/IStylesheetResourceElementItem.md#status_code)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`status_code`](BaseOnPageResourceItemInfo.md#status_code)

#### Defined in

main.ts:21404

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`total_transfer_size`](../interfaces/IStylesheetResourceElementItem.md#total_transfer_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`total_transfer_size`](BaseOnPageResourceItemInfo.md#total_transfer_size)

#### Defined in

main.ts:21420

***

### url?

> `optional` **url**: `string`

page URL

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`url`](../interfaces/IStylesheetResourceElementItem.md#url)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`url`](BaseOnPageResourceItemInfo.md#url)

#### Defined in

main.ts:21409

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

#### Defined in

main.ts:156284

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

#### Defined in

main.ts:156309

***

### fromJS()

> `static` **fromJS**(`data`): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

main.ts:156302
