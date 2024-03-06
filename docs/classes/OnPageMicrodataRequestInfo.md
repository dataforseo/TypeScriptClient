[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageMicrodataRequestInfo

# Class: OnPageMicrodataRequestInfo

## Implements

- [`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageMicrodataRequestInfo.md#constructor)

### Properties

- [id](OnPageMicrodataRequestInfo.md#id)
- [tag](OnPageMicrodataRequestInfo.md#tag)
- [url](OnPageMicrodataRequestInfo.md#url)

### Methods

- [init](OnPageMicrodataRequestInfo.md#init)
- [toJSON](OnPageMicrodataRequestInfo.md#tojson)
- [fromJS](OnPageMicrodataRequestInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageMicrodataRequestInfo**(`data?`): [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageMicrodataRequestInfo`](../interfaces/IOnPageMicrodataRequestInfo.md) |

#### Returns

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Defined in

[main.ts:150515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150515)

## Properties

### id

• `Optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
"07131248-1535-0216-1000-17384017ad04"

#### Implementation of

[IOnPageMicrodataRequestInfo](../interfaces/IOnPageMicrodataRequestInfo.md).[id](../interfaces/IOnPageMicrodataRequestInfo.md#id)

#### Defined in

[main.ts:150499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150499)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IOnPageMicrodataRequestInfo](../interfaces/IOnPageMicrodataRequestInfo.md).[tag](../interfaces/IOnPageMicrodataRequestInfo.md#tag)

#### Defined in

[main.ts:150511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150511)

___


### url

• `Optional` **url**: `string`

resource URL
required field
you can get this URL in the response of the Pages endpoint
example:
https://dataforseo.com/apis

#### Implementation of

[IOnPageMicrodataRequestInfo](../interfaces/IOnPageMicrodataRequestInfo.md).[url](../interfaces/IOnPageMicrodataRequestInfo.md#url)

#### Defined in

[main.ts:150505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150505)

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

[main.ts:150524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150524)

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

[main.ts:150543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150543)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)

#### Defined in

[main.ts:150536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150536)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")