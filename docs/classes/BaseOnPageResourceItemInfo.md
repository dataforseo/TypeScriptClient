[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseOnPageResourceItemInfo

# Class: BaseOnPageResourceItemInfo

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

#### Parameters

• **data?**: [`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md)

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Defined in

main.ts:21438

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21436

***

### cache\_control?

> `optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`cache_control`](../interfaces/IBaseOnPageResourceItemInfo.md#cache_control)

#### Defined in

main.ts:21422

***

### checks?

> `optional` **checks**: `object`

website checks
on-page check-ups related to the page

#### Index Signature

 \[`key`: `string`\]: `boolean`

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`checks`](../interfaces/IBaseOnPageResourceItemInfo.md#checks)

#### Defined in

main.ts:21425

***

### content\_encoding?

> `optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`content_encoding`](../interfaces/IBaseOnPageResourceItemInfo.md#content_encoding)

#### Defined in

main.ts:21427

***

### encoded\_size?

> `optional` **encoded\_size**: `number`

page size after encoding
indicates the size of the encoded page measured in bytes

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`encoded_size`](../interfaces/IBaseOnPageResourceItemInfo.md#encoded_size)

#### Defined in

main.ts:21412

***

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`fetch_time`](../interfaces/IBaseOnPageResourceItemInfo.md#fetch_time)

#### Defined in

main.ts:21420

***

### last\_modified?

> `optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`last_modified`](../interfaces/IBaseOnPageResourceItemInfo.md#last_modified)

#### Defined in

main.ts:21434

***

### location?

> `optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`location`](../interfaces/IBaseOnPageResourceItemInfo.md#location)

#### Defined in

main.ts:21402

***

### media\_type?

> `optional` **media\_type**: `string`

types of media used to display a page

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`media_type`](../interfaces/IBaseOnPageResourceItemInfo.md#media_type)

#### Defined in

main.ts:21429

***

### resource\_errors?

> `optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`resource_errors`](../interfaces/IBaseOnPageResourceItemInfo.md#resource_errors)

#### Defined in

main.ts:21406

***

### resource\_type?

> `optional` **resource\_type**: `string`

type of the returned resource

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`resource_type`](../interfaces/IBaseOnPageResourceItemInfo.md#resource_type)

#### Defined in

main.ts:21397

***

### server?

> `optional` **server**: `string`

server version

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`server`](../interfaces/IBaseOnPageResourceItemInfo.md#server)

#### Defined in

main.ts:21431

***

### size?

> `optional` **size**: `number`

resource size
indicates the size of a given page measured in bytes

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`size`](../interfaces/IBaseOnPageResourceItemInfo.md#size)

#### Defined in

main.ts:21409

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`status_code`](../interfaces/IBaseOnPageResourceItemInfo.md#status_code)

#### Defined in

main.ts:21399

***

### total\_transfer\_size?

> `optional` **total\_transfer\_size**: `number`

compressed page size
indicates the compressed size of a given page

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`total_transfer_size`](../interfaces/IBaseOnPageResourceItemInfo.md#total_transfer_size)

#### Defined in

main.ts:21415

***

### url?

> `optional` **url**: `string`

page URL

#### Implementation of

[`IBaseOnPageResourceItemInfo`](../interfaces/IBaseOnPageResourceItemInfo.md).[`url`](../interfaces/IBaseOnPageResourceItemInfo.md#url)

#### Defined in

main.ts:21404

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21448

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21506

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

#### Defined in

main.ts:21474
