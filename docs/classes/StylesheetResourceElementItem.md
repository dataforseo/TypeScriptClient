**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / StylesheetResourceElementItem

# Class: StylesheetResourceElementItem

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StylesheetResourceElementItem(data)

> **new StylesheetResourceElementItem**(`data`?): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Parameters

• **data?**: [`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md)

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Source

main.ts:154836

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Source

main.ts:20858

***

### accept\_type?

> **`optional`** **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`accept_type`](../interfaces/IStylesheetResourceElementItem.md#accept_type)

#### Source

main.ts:154815

***

### cache\_control?

> **`optional`** **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`cache_control`](../interfaces/IStylesheetResourceElementItem.md#cache_control)

#### Source

main.ts:154801

***

### checks?

> **`optional`** **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`checks`](../interfaces/IStylesheetResourceElementItem.md#checks)

#### Source

main.ts:154804

***

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`content_encoding`](../interfaces/IStylesheetResourceElementItem.md#content_encoding)

#### Source

main.ts:154808

***

### duration\_time?

> **`optional`** **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`duration_time`](../interfaces/IStylesheetResourceElementItem.md#duration_time)

#### Source

main.ts:154824

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`encoded_size`](../interfaces/IStylesheetResourceElementItem.md#encoded_size)

#### Source

main.ts:154789

***

### fetch\_end?

> **`optional`** **fetch\_end**: `number`

time to complete downloading the resource
the amount of time the browser needs to complete downloading a resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_end`](../interfaces/IStylesheetResourceElementItem.md#fetch_end)

#### Source

main.ts:154830

***

### fetch\_start?

> **`optional`** **fetch\_start**: `number`

time to start downloading the resource
the amount of time the browser needs to start downloading a resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_start`](../interfaces/IStylesheetResourceElementItem.md#fetch_start)

#### Source

main.ts:154827

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_time`](../interfaces/IStylesheetResourceElementItem.md#fetch_time)

#### Source

main.ts:154797

***

### fetch\_timing?

> **`optional`** **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_timing`](../interfaces/IStylesheetResourceElementItem.md#fetch_timing)

#### Source

main.ts:154799

***

### initiator?

> **`optional`** **initiator**: `string`

resource initiator

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`initiator`](../interfaces/IStylesheetResourceElementItem.md#initiator)

#### Source

main.ts:154822

***

### is\_render\_blocking?

> **`optional`** **is\_render\_blocking**: `boolean`

indicates whether the resource blocks rendering

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`is_render_blocking`](../interfaces/IStylesheetResourceElementItem.md#is_render_blocking)

#### Source

main.ts:154832

***

### last\_modified?

> **`optional`** **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`last_modified`](../interfaces/IStylesheetResourceElementItem.md#last_modified)

#### Source

main.ts:154820

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`location`](../interfaces/IStylesheetResourceElementItem.md#location)

#### Source

main.ts:154781

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`media_type`](../interfaces/IStylesheetResourceElementItem.md#media_type)

#### Source

main.ts:154810

***

### meta?

> **`optional`** **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`meta`](../interfaces/IStylesheetResourceElementItem.md#meta)

#### Source

main.ts:154776

***

### resource\_errors?

> **`optional`** **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`resource_errors`](../interfaces/IStylesheetResourceElementItem.md#resource_errors)

#### Source

main.ts:154806

***

### server?

> **`optional`** **server**: `string`

server version

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`server`](../interfaces/IStylesheetResourceElementItem.md#server)

#### Source

main.ts:154817

***

### size?

> **`optional`** **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`size`](../interfaces/IStylesheetResourceElementItem.md#size)

#### Source

main.ts:154786

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`status_code`](../interfaces/IStylesheetResourceElementItem.md#status_code)

#### Source

main.ts:154778

***

### total\_transfer\_size?

> **`optional`** **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`total_transfer_size`](../interfaces/IStylesheetResourceElementItem.md#total_transfer_size)

#### Source

main.ts:154792

***

### url?

> **`optional`** **url**: `string`

resource URL

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`url`](../interfaces/IStylesheetResourceElementItem.md#url)

#### Source

main.ts:154783

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

#### Source

main.ts:154841

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

#### Source

main.ts:154886

***

### fromJS()

> **`static`** **fromJS**(`data`): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Source

main.ts:154879
