[dataforseo-client](../README.md) / [Exports](../modules.md) / StylesheetResourceElementItem

# Class: StylesheetResourceElementItem

## Hierarchy

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

  ↳ **`StylesheetResourceElementItem`**

## Implements

- [`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](StylesheetResourceElementItem.md#constructor)

### Properties

- [\_discriminator](StylesheetResourceElementItem.md#_discriminator)
- [accept\_type](StylesheetResourceElementItem.md#accept_type)
- [cache\_control](StylesheetResourceElementItem.md#cache_control)
- [checks](StylesheetResourceElementItem.md#checks)
- [content\_encoding](StylesheetResourceElementItem.md#content_encoding)
- [duration\_time](StylesheetResourceElementItem.md#duration_time)
- [encoded\_size](StylesheetResourceElementItem.md#encoded_size)
- [fetch\_end](StylesheetResourceElementItem.md#fetch_end)
- [fetch\_start](StylesheetResourceElementItem.md#fetch_start)
- [fetch\_time](StylesheetResourceElementItem.md#fetch_time)
- [fetch\_timing](StylesheetResourceElementItem.md#fetch_timing)
- [initiator](StylesheetResourceElementItem.md#initiator)
- [is\_render\_blocking](StylesheetResourceElementItem.md#is_render_blocking)
- [last\_modified](StylesheetResourceElementItem.md#last_modified)
- [location](StylesheetResourceElementItem.md#location)
- [media\_type](StylesheetResourceElementItem.md#media_type)
- [meta](StylesheetResourceElementItem.md#meta)
- [resource\_errors](StylesheetResourceElementItem.md#resource_errors)
- [server](StylesheetResourceElementItem.md#server)
- [size](StylesheetResourceElementItem.md#size)
- [status\_code](StylesheetResourceElementItem.md#status_code)
- [total\_transfer\_size](StylesheetResourceElementItem.md#total_transfer_size)
- [url](StylesheetResourceElementItem.md#url)

### Methods

- [init](StylesheetResourceElementItem.md#init)
- [toJSON](StylesheetResourceElementItem.md#tojson)
- [fromJS](StylesheetResourceElementItem.md#fromjs)

## Constructors

### constructor

• **new StylesheetResourceElementItem**(`data?`): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IStylesheetResourceElementItem`](../interfaces/IStylesheetResourceElementItem.md) |

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[constructor](BaseOnPageResourceItemInfo.md#constructor)

#### Defined in

[main.ts:146328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146328)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[_discriminator](BaseOnPageResourceItemInfo.md#_discriminator)

#### Defined in

[main.ts:20179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20179)

___

### accept\_type

• `Optional` **accept\_type**: `string`

indicates the expected type of resource
for example, if "resource_type": "broken", accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[accept_type](../interfaces/IStylesheetResourceElementItem.md#accept_type)

#### Defined in

[main.ts:146307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146307)

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[cache_control](../interfaces/IStylesheetResourceElementItem.md#cache_control)

#### Defined in

[main.ts:146293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146293)

___

### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[checks](../interfaces/IStylesheetResourceElementItem.md#checks)

#### Defined in

[main.ts:146296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146296)

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[content_encoding](../interfaces/IStylesheetResourceElementItem.md#content_encoding)

#### Defined in

[main.ts:146300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146300)

___

### duration\_time

• `Optional` **duration\_time**: `number`

total time it takes until a browser receives a complete response from a server (in milliseconds)

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[duration_time](../interfaces/IStylesheetResourceElementItem.md#duration_time)

#### Defined in

[main.ts:146316](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146316)

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[encoded_size](../interfaces/IStylesheetResourceElementItem.md#encoded_size)

#### Defined in

[main.ts:146281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146281)

___

### fetch\_end

• `Optional` **fetch\_end**: `number`

time to complete downloading the resource
the amount of time the browser needs to complete downloading a resource

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[fetch_end](../interfaces/IStylesheetResourceElementItem.md#fetch_end)

#### Defined in

[main.ts:146322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146322)

___

### fetch\_start

• `Optional` **fetch\_start**: `number`

time to start downloading the resource
the amount of time the browser needs to start downloading a resource

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[fetch_start](../interfaces/IStylesheetResourceElementItem.md#fetch_start)

#### Defined in

[main.ts:146319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146319)

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[fetch_time](../interfaces/IStylesheetResourceElementItem.md#fetch_time)

#### Defined in

[main.ts:146289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146289)

___

### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[fetch_timing](../interfaces/IStylesheetResourceElementItem.md#fetch_timing)

#### Defined in

[main.ts:146291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146291)

___

### initiator

• `Optional` **initiator**: `string`

resource initiator

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[initiator](../interfaces/IStylesheetResourceElementItem.md#initiator)

#### Defined in

[main.ts:146314](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146314)

___

### is\_render\_blocking

• `Optional` **is\_render\_blocking**: `boolean`

indicates whether the resource blocks rendering

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[is_render_blocking](../interfaces/IStylesheetResourceElementItem.md#is_render_blocking)

#### Defined in

[main.ts:146324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146324)

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[last_modified](../interfaces/IStylesheetResourceElementItem.md#last_modified)

#### Defined in

[main.ts:146312](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146312)

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[location](../interfaces/IStylesheetResourceElementItem.md#location)

#### Defined in

[main.ts:146273](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146273)

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[media_type](../interfaces/IStylesheetResourceElementItem.md#media_type)

#### Defined in

[main.ts:146302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146302)

___

### meta

• `Optional` **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[meta](../interfaces/IStylesheetResourceElementItem.md#meta)

#### Defined in

[main.ts:146268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146268)

___

### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[resource_errors](../interfaces/IStylesheetResourceElementItem.md#resource_errors)

#### Defined in

[main.ts:146298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146298)

___

### server

• `Optional` **server**: `string`

server version

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[server](../interfaces/IStylesheetResourceElementItem.md#server)

#### Defined in

[main.ts:146309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146309)

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[size](../interfaces/IStylesheetResourceElementItem.md#size)

#### Defined in

[main.ts:146278](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146278)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[status_code](../interfaces/IStylesheetResourceElementItem.md#status_code)

#### Defined in

[main.ts:146270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146270)

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[total_transfer_size](../interfaces/IStylesheetResourceElementItem.md#total_transfer_size)

#### Defined in

[main.ts:146284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146284)

___

### url

• `Optional` **url**: `string`

resource URL

#### Implementation of

[IStylesheetResourceElementItem](../interfaces/IStylesheetResourceElementItem.md).[url](../interfaces/IStylesheetResourceElementItem.md#url)

#### Defined in

[main.ts:146275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146275)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[init](BaseOnPageResourceItemInfo.md#init)

#### Defined in

[main.ts:146333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146333)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[toJSON](BaseOnPageResourceItemInfo.md#tojson)

#### Defined in

[main.ts:146378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146378)

___

### fromJS

▸ **fromJS**(`data`): [`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`StylesheetResourceElementItem`](StylesheetResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[fromJS](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

[main.ts:146371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146371)
