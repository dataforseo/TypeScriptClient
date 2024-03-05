[dataforseo-client](../README.md) / [Exports](../modules.md) / ImageResourceElementItem

# Class: ImageResourceElementItem

## Hierarchy

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)

  ↳ **`ImageResourceElementItem`**

## Implements

- [`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImageResourceElementItem.md#constructor)

### Properties

- [\_discriminator](ImageResourceElementItem.md#_discriminator)
- [accept\_type](ImageResourceElementItem.md#accept_type)
- [cache\_control](ImageResourceElementItem.md#cache_control)
- [checks](ImageResourceElementItem.md#checks)
- [content\_encoding](ImageResourceElementItem.md#content_encoding)
- [encoded\_size](ImageResourceElementItem.md#encoded_size)
- [fetch\_time](ImageResourceElementItem.md#fetch_time)
- [fetch\_timing](ImageResourceElementItem.md#fetch_timing)
- [last\_modified](ImageResourceElementItem.md#last_modified)
- [location](ImageResourceElementItem.md#location)
- [media\_type](ImageResourceElementItem.md#media_type)
- [meta](ImageResourceElementItem.md#meta)
- [resource\_errors](ImageResourceElementItem.md#resource_errors)
- [server](ImageResourceElementItem.md#server)
- [size](ImageResourceElementItem.md#size)
- [status\_code](ImageResourceElementItem.md#status_code)
- [total\_transfer\_size](ImageResourceElementItem.md#total_transfer_size)
- [url](ImageResourceElementItem.md#url)

### Methods

- [init](ImageResourceElementItem.md#init)
- [toJSON](ImageResourceElementItem.md#tojson)
- [fromJS](ImageResourceElementItem.md#fromjs)

## Constructors

### constructor

• **new ImageResourceElementItem**(`data?`): [`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImageResourceElementItem`](../interfaces/IImageResourceElementItem.md) |

#### Returns

[`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[constructor](BaseOnPageResourceItemInfo.md#constructor)

#### Defined in

[main.ts:146675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146675)

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

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[accept_type](../interfaces/IImageResourceElementItem.md#accept_type)

#### Defined in

[main.ts:146664](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146664)

___

### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[cache_control](../interfaces/IImageResourceElementItem.md#cache_control)

#### Defined in

[main.ts:146652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146652)

___

### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[checks](../interfaces/IImageResourceElementItem.md#checks)

#### Defined in

[main.ts:146655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146655)

___

### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[content_encoding](../interfaces/IImageResourceElementItem.md#content_encoding)

#### Defined in

[main.ts:146657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146657)

___

### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[encoded_size](../interfaces/IImageResourceElementItem.md#encoded_size)

#### Defined in

[main.ts:146640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146640)

___

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[fetch_time](../interfaces/IImageResourceElementItem.md#fetch_time)

#### Defined in

[main.ts:146648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146648)

___

### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[fetch_timing](../interfaces/IImageResourceElementItem.md#fetch_timing)

#### Defined in

[main.ts:146650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146650)

___

### last\_modified

• `Optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[last_modified](../interfaces/IImageResourceElementItem.md#last_modified)

#### Defined in

[main.ts:146669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146669)

___

### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[location](../interfaces/IImageResourceElementItem.md#location)

#### Defined in

[main.ts:146632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146632)

___

### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[media_type](../interfaces/IImageResourceElementItem.md#media_type)

#### Defined in

[main.ts:146659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146659)

___

### meta

• `Optional` **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[meta](../interfaces/IImageResourceElementItem.md#meta)

#### Defined in

[main.ts:146627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146627)

___

### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[resource_errors](../interfaces/IImageResourceElementItem.md#resource_errors)

#### Defined in

[main.ts:146671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146671)

___

### server

• `Optional` **server**: `string`

server version

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[server](../interfaces/IImageResourceElementItem.md#server)

#### Defined in

[main.ts:146666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146666)

___

### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[size](../interfaces/IImageResourceElementItem.md#size)

#### Defined in

[main.ts:146637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146637)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[status_code](../interfaces/IImageResourceElementItem.md#status_code)

#### Defined in

[main.ts:146629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146629)

___

### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[total_transfer_size](../interfaces/IImageResourceElementItem.md#total_transfer_size)

#### Defined in

[main.ts:146643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146643)

___

### url

• `Optional` **url**: `string`

resource URL

#### Implementation of

[IImageResourceElementItem](../interfaces/IImageResourceElementItem.md).[url](../interfaces/IImageResourceElementItem.md#url)

#### Defined in

[main.ts:146634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146634)

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

[main.ts:146680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146680)

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

[main.ts:146720](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146720)

___

### fromJS

▸ **fromJS**(`data`): [`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImageResourceElementItem`](ImageResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[fromJS](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

[main.ts:146713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146713)
