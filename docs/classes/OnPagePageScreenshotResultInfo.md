[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPagePageScreenshotResultInfo

# Class: OnPagePageScreenshotResultInfo

## Implements

- [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPagePageScreenshotResultInfo.md#constructor)

### Properties

- [crawl\_progress](OnPagePageScreenshotResultInfo.md#crawl_progress)
- [error\_message](OnPagePageScreenshotResultInfo.md#error_message)
- [items](OnPagePageScreenshotResultInfo.md#items)
- [items\_count](OnPagePageScreenshotResultInfo.md#items_count)

### Methods

- [init](OnPagePageScreenshotResultInfo.md#init)
- [toJSON](OnPagePageScreenshotResultInfo.md#tojson)
- [fromJS](OnPagePageScreenshotResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPagePageScreenshotResultInfo**(`data?`): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md) |

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Defined in

[main.ts:151702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151702)

## Properties

### crawl\_progress

• `Optional` **crawl\_progress**: `string`

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[IOnPagePageScreenshotResultInfo](../interfaces/IOnPagePageScreenshotResultInfo.md).[crawl_progress](../interfaces/IOnPagePageScreenshotResultInfo.md#crawl_progress)

#### Defined in

[main.ts:151690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151690)

___


### error\_message

• `Optional` **error\_message**: `string`

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Implementation of

[IOnPagePageScreenshotResultInfo](../interfaces/IOnPagePageScreenshotResultInfo.md).[error_message](../interfaces/IOnPagePageScreenshotResultInfo.md#error_message)

#### Defined in

[main.ts:151694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151694)

___


### items

• `Optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

items array

#### Implementation of

[IOnPagePageScreenshotResultInfo](../interfaces/IOnPagePageScreenshotResultInfo.md).[items](../interfaces/IOnPagePageScreenshotResultInfo.md#items)

#### Defined in

[main.ts:151698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151698)

___


### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IOnPagePageScreenshotResultInfo](../interfaces/IOnPagePageScreenshotResultInfo.md).[items_count](../interfaces/IOnPagePageScreenshotResultInfo.md#items_count)

#### Defined in

[main.ts:151696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151696)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:151711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151711)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:151735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151735)

___


### fromJS

▸ **fromJS**(`data`): [`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPagePageScreenshotResultInfo`](OnPagePageScreenshotResultInfo.md)

#### Defined in

[main.ts:151728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151728)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")