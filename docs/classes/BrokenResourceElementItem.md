**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BrokenResourceElementItem

# Class: BrokenResourceElementItem

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BrokenResourceElementItem(data)

> **new BrokenResourceElementItem**(`data`?): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Parameters

• **data?**: [`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md)

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Source

main.ts:153388

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Source

main.ts:20763

***

### accept\_type?

> **`optional`** **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`accept_type`](../interfaces/IBrokenResourceElementItem.md#accept_type)

#### Source

main.ts:153379

***

### cache\_control?

> **`optional`** **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`cache_control`](../interfaces/IBrokenResourceElementItem.md#cache_control)

#### Source

main.ts:153367

***

### checks?

> **`optional`** **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`checks`](../interfaces/IBrokenResourceElementItem.md#checks)

#### Source

main.ts:153370

***

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`content_encoding`](../interfaces/IBrokenResourceElementItem.md#content_encoding)

#### Source

main.ts:153372

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`encoded_size`](../interfaces/IBrokenResourceElementItem.md#encoded_size)

#### Source

main.ts:153355

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`fetch_time`](../interfaces/IBrokenResourceElementItem.md#fetch_time)

#### Source

main.ts:153363

***

### fetch\_timing?

> **`optional`** **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`fetch_timing`](../interfaces/IBrokenResourceElementItem.md#fetch_timing)

#### Source

main.ts:153365

***

### last\_modified?

> **`optional`** **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`last_modified`](../interfaces/IBrokenResourceElementItem.md#last_modified)

#### Source

main.ts:153384

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`location`](../interfaces/IBrokenResourceElementItem.md#location)

#### Source

main.ts:153347

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`media_type`](../interfaces/IBrokenResourceElementItem.md#media_type)

#### Source

main.ts:153374

***

### meta?

> **`optional`** **meta**: [`PageMetaInfo`](PageMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`meta`](../interfaces/IBrokenResourceElementItem.md#meta)

#### Source

main.ts:153342

***

### server?

> **`optional`** **server**: `string`

server version

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`server`](../interfaces/IBrokenResourceElementItem.md#server)

#### Source

main.ts:153381

***

### size?

> **`optional`** **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`size`](../interfaces/IBrokenResourceElementItem.md#size)

#### Source

main.ts:153352

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`status_code`](../interfaces/IBrokenResourceElementItem.md#status_code)

#### Source

main.ts:153344

***

### total\_transfer\_size?

> **`optional`** **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`total_transfer_size`](../interfaces/IBrokenResourceElementItem.md#total_transfer_size)

#### Source

main.ts:153358

***

### url?

> **`optional`** **url**: `string`

resource URL

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`url`](../interfaces/IBrokenResourceElementItem.md#url)

#### Source

main.ts:153349

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

main.ts:153393

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

main.ts:153432

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Source

main.ts:153425
