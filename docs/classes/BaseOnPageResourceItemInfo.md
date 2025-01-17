[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseOnPageResourceItemInfo

# Class: BaseOnPageResourceItemInfo

Defined in: main.ts:22298

## Extended by

- [`HtmlResourceElementItem`](HtmlResourceElementItem.md)
- [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)
- [`ScriptResourceElementItem`](ScriptResourceElementItem.md)
- [`ImageResourceElementItem`](ImageResourceElementItem.md)
- [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

## Implements

- [`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md)

## Constructors

### new BaseOnPageResourceItemInfo()

> **new BaseOnPageResourceItemInfo**(`data`?): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

Defined in: main.ts:22341

#### Parameters

##### data?

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md)

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22339

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

Defined in: main.ts:22325

instructions for caching

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`cache_control`](../interfaces/IBaseOnPageResourceItemInfo.md#cache_control)

***

### checks?

> `optional` **checks**: `object`

Defined in: main.ts:22328

website checks
on-page check-ups related to the page

#### Index Signature

\[`key`: `string`\]: `boolean`

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`checks`](../interfaces/IBaseOnPageResourceItemInfo.md#checks)

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

Defined in: main.ts:22330

type of encoding

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`content_encoding`](../interfaces/IBaseOnPageResourceItemInfo.md#content_encoding)

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

Defined in: main.ts:22315

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`encoded_size`](../interfaces/IBaseOnPageResourceItemInfo.md#encoded_size)

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:22323

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`fetch_time`](../interfaces/IBaseOnPageResourceItemInfo.md#fetch_time)

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

Defined in: main.ts:22337

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`last_modified`](../interfaces/IBaseOnPageResourceItemInfo.md#last_modified)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:22305

location header
indicates the URL to redirect a page to

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`location`](../interfaces/IBaseOnPageResourceItemInfo.md#location)

***

### media\_type?

> `optional` **media\_type**: `string`

Defined in: main.ts:22332

types of media used to display a page

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`media_type`](../interfaces/IBaseOnPageResourceItemInfo.md#media_type)

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

Defined in: main.ts:22309

resource errors and warnings

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`resource_errors`](../interfaces/IBaseOnPageResourceItemInfo.md#resource_errors)

***

### resource\_type?

> `optional` **resource\_type**: `string`

Defined in: main.ts:22300

type of the returned resource

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`resource_type`](../interfaces/IBaseOnPageResourceItemInfo.md#resource_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:22334

server version

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`server`](../interfaces/IBaseOnPageResourceItemInfo.md#server)

***

### size?

> `optional` **size**: `number`

Defined in: main.ts:22312

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`size`](../interfaces/IBaseOnPageResourceItemInfo.md#size)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:22302

status code of the page

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`status_code`](../interfaces/IBaseOnPageResourceItemInfo.md#status_code)

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

Defined in: main.ts:22318

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`total_transfer_size`](../interfaces/IBaseOnPageResourceItemInfo.md#total_transfer_size)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:22307

page URL

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`url`](../interfaces/IBaseOnPageResourceItemInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:22351

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:22409

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

Defined in: main.ts:22377

#### Parameters

##### data

`any`

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)
