[**Documentation**](../README.md)

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

### new BrokenResourceElementItem()

> **new BrokenResourceElementItem**(`data`?): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Parameters

##### data?

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md)

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

#### Defined in

main.ts:168291

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

#### Defined in

main.ts:22339

***

### accept\_type?

> `optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`accept_type`](../interfaces/IBrokenResourceElementItem.md#accept_type)

#### Defined in

main.ts:168287

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`cache_control`](../interfaces/IBrokenResourceElementItem.md#cache_control)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`cache_control`](BaseOnPageResourceItemInfo.md#cache_control)

#### Defined in

main.ts:22325

***

### checks?

> `optional` **checks**: `object`

website checks
on-page check-ups related to the page

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`checks`](../interfaces/IBrokenResourceElementItem.md#checks)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`checks`](BaseOnPageResourceItemInfo.md#checks)

#### Defined in

main.ts:22328

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`content_encoding`](../interfaces/IBrokenResourceElementItem.md#content_encoding)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`content_encoding`](BaseOnPageResourceItemInfo.md#content_encoding)

#### Defined in

main.ts:22330

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`encoded_size`](../interfaces/IBrokenResourceElementItem.md#encoded_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`encoded_size`](BaseOnPageResourceItemInfo.md#encoded_size)

#### Defined in

main.ts:22315

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`fetch_time`](../interfaces/IBrokenResourceElementItem.md#fetch_time)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fetch_time`](BaseOnPageResourceItemInfo.md#fetch_time)

#### Defined in

main.ts:22323

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`fetch_timing`](../interfaces/IBrokenResourceElementItem.md#fetch_timing)

#### Defined in

main.ts:168282

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`last_modified`](../interfaces/IBrokenResourceElementItem.md#last_modified)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`last_modified`](BaseOnPageResourceItemInfo.md#last_modified)

#### Defined in

main.ts:22337

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`location`](../interfaces/IBrokenResourceElementItem.md#location)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`location`](BaseOnPageResourceItemInfo.md#location)

#### Defined in

main.ts:22305

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`media_type`](../interfaces/IBrokenResourceElementItem.md#media_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`media_type`](BaseOnPageResourceItemInfo.md#media_type)

#### Defined in

main.ts:22332

***

### meta?

> `optional` **meta**: [`PageMetaInfo`](PageMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`meta`](../interfaces/IBrokenResourceElementItem.md#meta)

#### Defined in

main.ts:168280

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`resource_errors`](../interfaces/IBrokenResourceElementItem.md#resource_errors)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_errors`](BaseOnPageResourceItemInfo.md#resource_errors)

#### Defined in

main.ts:22309

***

### resource\_type?

> `optional` **resource\_type**: `string`

type of the returned resource

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`resource_type`](../interfaces/IBrokenResourceElementItem.md#resource_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_type`](BaseOnPageResourceItemInfo.md#resource_type)

#### Defined in

main.ts:22300

***

### server?

> `optional` **server**: `string`

server version

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`server`](../interfaces/IBrokenResourceElementItem.md#server)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`server`](BaseOnPageResourceItemInfo.md#server)

#### Defined in

main.ts:22334

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`size`](../interfaces/IBrokenResourceElementItem.md#size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`size`](BaseOnPageResourceItemInfo.md#size)

#### Defined in

main.ts:22312

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`status_code`](../interfaces/IBrokenResourceElementItem.md#status_code)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`status_code`](BaseOnPageResourceItemInfo.md#status_code)

#### Defined in

main.ts:22302

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`total_transfer_size`](../interfaces/IBrokenResourceElementItem.md#total_transfer_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`total_transfer_size`](BaseOnPageResourceItemInfo.md#total_transfer_size)

#### Defined in

main.ts:22318

***

### url?

> `optional` **url**: `string`

page URL

#### Implementation of

[`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md).[`url`](../interfaces/IBrokenResourceElementItem.md#url)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`url`](BaseOnPageResourceItemInfo.md#url)

#### Defined in

main.ts:22307

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

#### Defined in

main.ts:168296

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

#### Defined in

main.ts:168316

***

### fromJS()

> `static` **fromJS**(`data`): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

main.ts:168309
