[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ScriptResourceElementItem

# Class: ScriptResourceElementItem

## Hierarchy

- [`BaseOnPageResourceItemInfo`](BaseOnPageResourceItemInfo.md)
  
  ↳ **`ScriptResourceElementItem`**

## Implements

- [`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ScriptResourceElementItem.md#constructor)

### Properties

- [\_discriminator](ScriptResourceElementItem.md#_discriminator)
- [accept\_type](ScriptResourceElementItem.md#accept_type)
- [cache\_control](ScriptResourceElementItem.md#cache_control)
- [checks](ScriptResourceElementItem.md#checks)
- [content\_encoding](ScriptResourceElementItem.md#content_encoding)
- [encoded\_size](ScriptResourceElementItem.md#encoded_size)
- [fetch\_time](ScriptResourceElementItem.md#fetch_time)
- [fetch\_timing](ScriptResourceElementItem.md#fetch_timing)
- [last\_modified](ScriptResourceElementItem.md#last_modified)
- [location](ScriptResourceElementItem.md#location)
- [media\_type](ScriptResourceElementItem.md#media_type)
- [meta](ScriptResourceElementItem.md#meta)
- [resource\_errors](ScriptResourceElementItem.md#resource_errors)
- [server](ScriptResourceElementItem.md#server)
- [size](ScriptResourceElementItem.md#size)
- [status\_code](ScriptResourceElementItem.md#status_code)
- [total\_transfer\_size](ScriptResourceElementItem.md#total_transfer_size)
- [url](ScriptResourceElementItem.md#url)

### Methods

- [init](ScriptResourceElementItem.md#init)
- [toJSON](ScriptResourceElementItem.md#tojson)
- [fromJS](ScriptResourceElementItem.md#fromjs)

## Constructors

### constructor

• **new ScriptResourceElementItem**(`data?`): [`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IScriptResourceElementItem`](../interfaces/IScriptResourceElementItem.md) |

#### Returns

[`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[constructor](BaseOnPageResourceItemInfo.md#constructor)

#### Defined in

[main.ts:146130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146130)

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

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[accept_type](../interfaces/IScriptResourceElementItem.md#accept_type)

#### Defined in

[main.ts:146121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146121)

___


### cache\_control

• `Optional` **cache\_control**: [`CacheControl`](CacheControl.md)

instructions for caching

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[cache_control](../interfaces/IScriptResourceElementItem.md#cache_control)

#### Defined in

[main.ts:146107](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146107)

___


### checks

• `Optional` **checks**: `Object`

resource check-ups
contents of the array depend on the resource_type

#### Index signature

▪ [key: `string`]: `boolean`

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[checks](../interfaces/IScriptResourceElementItem.md#checks)

#### Defined in

[main.ts:146110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146110)

___


### content\_encoding

• `Optional` **content\_encoding**: `string`

type of encoding

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[content_encoding](../interfaces/IScriptResourceElementItem.md#content_encoding)

#### Defined in

[main.ts:146114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146114)

___


### encoded\_size

• `Optional` **encoded\_size**: `number`

resource size after encoding
indicates the size of the encoded resource measured in bytes

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[encoded_size](../interfaces/IScriptResourceElementItem.md#encoded_size)

#### Defined in

[main.ts:146095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146095)

___


### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-02-17 13:54:15 +00:00

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[fetch_time](../interfaces/IScriptResourceElementItem.md#fetch_time)

#### Defined in

[main.ts:146103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146103)

___


### fetch\_timing

• `Optional` **fetch\_timing**: [`FetchTiming`](FetchTiming.md)

resource fething time range

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[fetch_timing](../interfaces/IScriptResourceElementItem.md#fetch_timing)

#### Defined in

[main.ts:146105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146105)

___


### last\_modified

• `Optional` **last\_modified**: [`LastModified`](LastModified.md)

contains data on changes related to the resource
if there is no data, the value will be null

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[last_modified](../interfaces/IScriptResourceElementItem.md#last_modified)

#### Defined in

[main.ts:146126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146126)

___


### location

• `Optional` **location**: `string`

location header
indicates the URL to redirect a page to

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[location](../interfaces/IScriptResourceElementItem.md#location)

#### Defined in

[main.ts:146087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146087)

___


### media\_type

• `Optional` **media\_type**: `string`

types of media used to display a resource

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[media_type](../interfaces/IScriptResourceElementItem.md#media_type)

#### Defined in

[main.ts:146116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146116)

___


### meta

• `Optional` **meta**: [`ResourceMetaInfo`](ResourceMetaInfo.md)

resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[meta](../interfaces/IScriptResourceElementItem.md#meta)

#### Defined in

[main.ts:146082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146082)

___


### resource\_errors

• `Optional` **resource\_errors**: [`OnPageResourceIssueInfo`](OnPageResourceIssueInfo.md)

resource errors and warnings

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[resource_errors](../interfaces/IScriptResourceElementItem.md#resource_errors)

#### Defined in

[main.ts:146112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146112)

___


### server

• `Optional` **server**: `string`

server version

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[server](../interfaces/IScriptResourceElementItem.md#server)

#### Defined in

[main.ts:146123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146123)

___


### size

• `Optional` **size**: `number`

resource size
indicates the size of a given resource measured in bytes

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[size](../interfaces/IScriptResourceElementItem.md#size)

#### Defined in

[main.ts:146092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146092)

___


### status\_code

• `Optional` **status\_code**: `number`

status code of the page where a given resource is located

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[status_code](../interfaces/IScriptResourceElementItem.md#status_code)

#### Defined in

[main.ts:146084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146084)

___


### total\_transfer\_size

• `Optional` **total\_transfer\_size**: `number`

compressed resource size
indicates the compressed size of a given resource in bytes

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[total_transfer_size](../interfaces/IScriptResourceElementItem.md#total_transfer_size)

#### Defined in

[main.ts:146098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146098)

___


### url

• `Optional` **url**: `string`

resource URL

#### Implementation of

[IScriptResourceElementItem](../interfaces/IScriptResourceElementItem.md).[url](../interfaces/IScriptResourceElementItem.md#url)

#### Defined in

[main.ts:146089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146089)

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

[main.ts:146135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146135)

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

[main.ts:146175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146175)

___


### fromJS

▸ **fromJS**(`data`): [`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ScriptResourceElementItem`](ScriptResourceElementItem.md)

#### Overrides

[BaseOnPageResourceItemInfo](BaseOnPageResourceItemInfo.md).[fromJS](BaseOnPageResourceItemInfo.md#fromjs)

#### Defined in

[main.ts:146168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146168)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")