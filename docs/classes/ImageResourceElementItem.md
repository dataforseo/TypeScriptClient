**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ImageResourceElementItem

# Class: ImageResourceElementItem

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImageResourceElementItem(data)

> **new ImageResourceElementItem**(`data`?): [`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Parameters

• **data?**: [`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md)

#### Returns

[`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Source

main.ts:154251

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Source

main.ts:20820

***

### accept\_type?

> **`optional`** **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`accept_type`](../interfaces/IImageResourceElementItem.md#accept_type)

#### Source

main.ts:154240

***

### cache\_control?

> **`optional`** **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`cache_control`](../interfaces/IImageResourceElementItem.md#cache_control)

#### Source

main.ts:154228

***

### checks?

> **`optional`** **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`checks`](../interfaces/IImageResourceElementItem.md#checks)

#### Source

main.ts:154231

***

### content\_encoding?

> **`optional`** **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`content_encoding`](../interfaces/IImageResourceElementItem.md#content_encoding)

#### Source

main.ts:154233

***

### encoded\_size?

> **`optional`** **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`encoded_size`](../interfaces/IImageResourceElementItem.md#encoded_size)

#### Source

main.ts:154216

***

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`fetch_time`](../interfaces/IImageResourceElementItem.md#fetch_time)

#### Source

main.ts:154224

***

### fetch\_timing?

> **`optional`** **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`fetch_timing`](../interfaces/IImageResourceElementItem.md#fetch_timing)

#### Source

main.ts:154226

***

### last\_modified?

> **`optional`** **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`last_modified`](../interfaces/IImageResourceElementItem.md#last_modified)

#### Source

main.ts:154245

***

### location?

> **`optional`** **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`location`](../interfaces/IImageResourceElementItem.md#location)

#### Source

main.ts:154208

***

### media\_type?

> **`optional`** **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`media_type`](../interfaces/IImageResourceElementItem.md#media_type)

#### Source

main.ts:154235

***

### meta?

> **`optional`** **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`meta`](../interfaces/IImageResourceElementItem.md#meta)

#### Source

main.ts:154203

***

### resource\_errors?

> **`optional`** **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`resource_errors`](../interfaces/IImageResourceElementItem.md#resource_errors)

#### Source

main.ts:154247

***

### server?

> **`optional`** **server**: `string`

server version

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`server`](../interfaces/IImageResourceElementItem.md#server)

#### Source

main.ts:154242

***

### size?

> **`optional`** **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`size`](../interfaces/IImageResourceElementItem.md#size)

#### Source

main.ts:154213

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`status_code`](../interfaces/IImageResourceElementItem.md#status_code)

#### Source

main.ts:154205

***

### total\_transfer\_size?

> **`optional`** **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`total_transfer_size`](../interfaces/IImageResourceElementItem.md#total_transfer_size)

#### Source

main.ts:154219

***

### url?

> **`optional`** **url**: `string`

resource URL

#### Implementation of

[`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md).[`url`](../interfaces/IImageResourceElementItem.md#url)

#### Source

main.ts:154210

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

main.ts:154256

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

main.ts:154296

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Source

main.ts:154289
