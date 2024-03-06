[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BrokenResourceElementItem

# Class: BrokenResourceElementItem

## Hierarchy

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)
  
  ↳ **`BrokenResourceElementItem`**

## Implements

- [`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BrokenResourceElementItem.md#constructor)

### Properties

- [\_discriminator](BrokenResourceElementItem.md#_discriminator)
- [accept\_type](BrokenResourceElementItem.md#accept_type)
- [cache\_control](BrokenResourceElementItem.md#cache_control)
- [checks](BrokenResourceElementItem.md#checks)
- [content\_encoding](BrokenResourceElementItem.md#content_encoding)
- [encoded\_size](BrokenResourceElementItem.md#encoded_size)
- [fetch\_time](BrokenResourceElementItem.md#fetch_time)
- [fetch\_timing](BrokenResourceElementItem.md#fetch_timing)
- [last\_modified](BrokenResourceElementItem.md#last_modified)
- [location](BrokenResourceElementItem.md#location)
- [media\_type](BrokenResourceElementItem.md#media_type)
- [meta](BrokenResourceElementItem.md#meta)
- [server](BrokenResourceElementItem.md#server)
- [size](BrokenResourceElementItem.md#size)
- [status\_code](BrokenResourceElementItem.md#status_code)
- [total\_transfer\_size](BrokenResourceElementItem.md#total_transfer_size)
- [url](BrokenResourceElementItem.md#url)

### Methods

- [init](BrokenResourceElementItem.md#init)
- [toJSON](BrokenResourceElementItem.md#tojson)
- [fromJS](BrokenResourceElementItem.md#fromjs)

## Constructors

### constructor

• **new BrokenResourceElementItem**(`data?`): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBrokenResourceElementItem`](../interfaces/IBrokenResourceElementItem.md) |

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[constructor](BaseOnPageResourceItemInfo.md#constructor)

#### Defined in

[main.ts:146859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146859)

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

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[accept_type](../interfaces/IBrokenResourceElementItem.md#accept_type)

#### Defined in

[main.ts:146850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146850)

___


### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[cache_control](../interfaces/IBrokenResourceElementItem.md#cache_control)

#### Defined in

[main.ts:146838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146838)

___


### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[checks](../interfaces/IBrokenResourceElementItem.md#checks)

#### Defined in

[main.ts:146841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146841)

___


### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[content_encoding](../interfaces/IBrokenResourceElementItem.md#content_encoding)

#### Defined in

[main.ts:146843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146843)

___


### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[encoded_size](../interfaces/IBrokenResourceElementItem.md#encoded_size)

#### Defined in

[main.ts:146826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146826)

___


### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[fetch_time](../interfaces/IBrokenResourceElementItem.md#fetch_time)

#### Defined in

[main.ts:146834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146834)

___


### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[fetch_timing](../interfaces/IBrokenResourceElementItem.md#fetch_timing)

#### Defined in

[main.ts:146836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146836)

___


### last\_modified

• `Optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[last_modified](../interfaces/IBrokenResourceElementItem.md#last_modified)

#### Defined in

[main.ts:146855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146855)

___


### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[location](../interfaces/IBrokenResourceElementItem.md#location)

#### Defined in

[main.ts:146818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146818)

___


### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[media_type](../interfaces/IBrokenResourceElementItem.md#media_type)

#### Defined in

[main.ts:146845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146845)

___


### meta

• `Optional` **meta**: [`PageMetaInfo`](PageMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[meta](../interfaces/IBrokenResourceElementItem.md#meta)

#### Defined in

[main.ts:146813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146813)

___


### server

• `Optional` **server**: `string`

server version

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[server](../interfaces/IBrokenResourceElementItem.md#server)

#### Defined in

[main.ts:146852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146852)

___


### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[size](../interfaces/IBrokenResourceElementItem.md#size)

#### Defined in

[main.ts:146823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146823)

___


### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[status_code](../interfaces/IBrokenResourceElementItem.md#status_code)

#### Defined in

[main.ts:146815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146815)

___


### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[total_transfer_size](../interfaces/IBrokenResourceElementItem.md#total_transfer_size)

#### Defined in

[main.ts:146829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146829)

___


### url

• `Optional` **url**: `string`

resource URL

#### Implementation of

[IBrokenResourceElementItem](../interfaces/IBrokenResourceElementItem.md).[url](../interfaces/IBrokenResourceElementItem.md#url)

#### Defined in

[main.ts:146820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146820)

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

[main.ts:146864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146864)

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

[main.ts:146903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146903)

___


### fromJS

▸ **fromJS**(`data`): [`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BrokenResourceElementItem`](BrokenResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[fromJS](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

[main.ts:146896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146896)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")