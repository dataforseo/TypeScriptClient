[**Documentation**](../README.md)

***

[Documentation](../README.md) / StylesheetResourceElementItem

# Class: StylesheetResourceElementItem

Defined in: main.ts:167954

## Extends

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Implements

- [`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new StylesheetResourceElementItem()

> **new StylesheetResourceElementItem**(`data`?): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

Defined in: main.ts:167982

#### Parameters

##### data?

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md)

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`constructor`](BaseOnPageResourceItemInfo.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22339

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`_discriminator`](BaseOnPageResourceItemInfo.md#_discriminator)

***

### accept\_type?

> `optional` **accept\_type**: `string`

Defined in: main.ts:167966

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`accept_type`](../interfaces/IStylesheetResourceElementItem.md#accept_type)

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

Defined in: main.ts:22325

instructions for caching

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`cache_control`](../interfaces/IStylesheetResourceElementItem.md#cache_control)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`cache_control`](BaseOnPageResourceItemInfo.md#cache_control)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:22328

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`checks`](../interfaces/IStylesheetResourceElementItem.md#checks)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`checks`](BaseOnPageResourceItemInfo.md#checks)

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:22330

type of encoding

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`content_encoding`](../interfaces/IStylesheetResourceElementItem.md#content_encoding)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`content_encoding`](BaseOnPageResourceItemInfo.md#content_encoding)

***

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:167970

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`duration_time`](../interfaces/IStylesheetResourceElementItem.md#duration_time)

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:22315

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`encoded_size`](../interfaces/IStylesheetResourceElementItem.md#encoded_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`encoded_size`](BaseOnPageResourceItemInfo.md#encoded_size)

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

Defined in: main.ts:167976

time to complete downloading the resource
the amount of time the browser needs to complete downloading a resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_end`](../interfaces/IStylesheetResourceElementItem.md#fetch_end)

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

Defined in: main.ts:167973

time to start downloading the resource
the amount of time the browser needs to start downloading a resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_start`](../interfaces/IStylesheetResourceElementItem.md#fetch_start)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:22323

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_time`](../interfaces/IStylesheetResourceElementItem.md#fetch_time)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fetch_time`](BaseOnPageResourceItemInfo.md#fetch_time)

***

### fetch\_timing?

> `optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

Defined in: main.ts:167961

resource fething time range

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`fetch_timing`](../interfaces/IStylesheetResourceElementItem.md#fetch_timing)

***

### initiator?

> `optional` **initiator**: `string`

Defined in: main.ts:167968

resource initiator

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`initiator`](../interfaces/IStylesheetResourceElementItem.md#initiator)

***

### is\_render\_blocking?

> `optional` **is\_render\_blocking**: `boolean`

Defined in: main.ts:167978

indicates whether the resource blocks rendering

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`is_render_blocking`](../interfaces/IStylesheetResourceElementItem.md#is_render_blocking)

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

Defined in: main.ts:22337

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`last_modified`](../interfaces/IStylesheetResourceElementItem.md#last_modified)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`last_modified`](BaseOnPageResourceItemInfo.md#last_modified)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22305

location header
indicates the URL to redirect a page to

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`location`](../interfaces/IStylesheetResourceElementItem.md#location)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`location`](BaseOnPageResourceItemInfo.md#location)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:22332

types of media used to display a page

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`media_type`](../interfaces/IStylesheetResourceElementItem.md#media_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`media_type`](BaseOnPageResourceItemInfo.md#media_type)

***

### meta?

> `optional` **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

Defined in: main.ts:167959

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`meta`](../interfaces/IStylesheetResourceElementItem.md#meta)

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

Defined in: main.ts:22309

resource errors and warnings

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`resource_errors`](../interfaces/IStylesheetResourceElementItem.md#resource_errors)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_errors`](BaseOnPageResourceItemInfo.md#resource_errors)

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:22300

type of the returned resource

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`resource_type`](../interfaces/IStylesheetResourceElementItem.md#resource_type)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`resource_type`](BaseOnPageResourceItemInfo.md#resource_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:22334

server version

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`server`](../interfaces/IStylesheetResourceElementItem.md#server)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`server`](BaseOnPageResourceItemInfo.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:22312

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`size`](../interfaces/IStylesheetResourceElementItem.md#size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`size`](BaseOnPageResourceItemInfo.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:22302

status code of the page

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`status_code`](../interfaces/IStylesheetResourceElementItem.md#status_code)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`status_code`](BaseOnPageResourceItemInfo.md#status_code)

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:22318

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`total_transfer_size`](../interfaces/IStylesheetResourceElementItem.md#total_transfer_size)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`total_transfer_size`](BaseOnPageResourceItemInfo.md#total_transfer_size)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22307

page URL

#### Implementation of

[`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md).[`url`](../interfaces/IStylesheetResourceElementItem.md#url)

#### Inherited from

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`url`](BaseOnPageResourceItemInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167987

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`init`](BaseOnPageResourceItemInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168012

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`toJSON`](BaseOnPageResourceItemInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

Defined in: main.ts:168005

#### Parameters

##### data

`any`

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md).[`fromJS`](BaseOnPageResourceItemInfo.md#fromjs)
