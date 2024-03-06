[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageWaterfallRequestInfo

# Class: OnPageWaterfallRequestInfo

## Implements

- [`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageWaterfallRequestInfo.md#constructor)

### Properties

- [id](OnPageWaterfallRequestInfo.md#id)
- [tag](OnPageWaterfallRequestInfo.md#tag)
- [url](OnPageWaterfallRequestInfo.md#url)

### Methods

- [init](OnPageWaterfallRequestInfo.md#init)
- [toJSON](OnPageWaterfallRequestInfo.md#tojson)
- [fromJS](OnPageWaterfallRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageWaterfallRequestInfo**(`data?`): [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md) |

#### Returns

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Defined in

[main.ts:149649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149649)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[IOnPageWaterfallRequestInfo](../interfaces/IOnPageWaterfallRequestInfo.md).[id](../interfaces/IOnPageWaterfallRequestInfo.md#id)

#### Defined in

[main.ts:149635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149635)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPageWaterfallRequestInfo](../interfaces/IOnPageWaterfallRequestInfo.md).[tag](../interfaces/IOnPageWaterfallRequestInfo.md#tag)

#### Defined in

[main.ts:149645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149645)

___


### url

• `Optional` **url**: `string`

page URL
required field
specify the pages you want to receive timing for

#### Implementation of

[IOnPageWaterfallRequestInfo](../interfaces/IOnPageWaterfallRequestInfo.md).[url](../interfaces/IOnPageWaterfallRequestInfo.md#url)

#### Defined in

[main.ts:149639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149639)

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

[main.ts:149658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149658)

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

[main.ts:149677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149677)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)

#### Defined in

[main.ts:149670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149670)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")