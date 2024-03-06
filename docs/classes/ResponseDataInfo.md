[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ResponseDataInfo

# Class: ResponseDataInfo

## Implements

- [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ResponseDataInfo.md#constructor)

### Properties

- [author](ResponseDataInfo.md#author)
- [text](ResponseDataInfo.md#text)
- [timestamp](ResponseDataInfo.md#timestamp)
- [title](ResponseDataInfo.md#title)

### Methods

- [init](ResponseDataInfo.md#init)
- [toJSON](ResponseDataInfo.md#tojson)
- [fromJS](ResponseDataInfo.md#fromjs)

## Constructors

### constructor

• **new ResponseDataInfo**(`data?`): [`ResponseDataInfo`](ResponseDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md) |

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)

#### Defined in

[main.ts:181226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181226)

## Properties

### author

• `Optional` **author**: `string`

author of the response

#### Implementation of

[IResponseDataInfo](../interfaces/IResponseDataInfo.md).[author](../interfaces/IResponseDataInfo.md#author)

#### Defined in

[main.ts:181212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181212)

___


### text

• `Optional` **text**: `string`

content of the response

#### Implementation of

[IResponseDataInfo](../interfaces/IResponseDataInfo.md).[text](../interfaces/IResponseDataInfo.md#text)

#### Defined in

[main.ts:181217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181217)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IResponseDataInfo](../interfaces/IResponseDataInfo.md).[timestamp](../interfaces/IResponseDataInfo.md#timestamp)

#### Defined in

[main.ts:181222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181222)

___


### title

• `Optional` **title**: `string`

title of the response
in this case, will equal null

#### Implementation of

[IResponseDataInfo](../interfaces/IResponseDataInfo.md).[title](../interfaces/IResponseDataInfo.md#title)

#### Defined in

[main.ts:181215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181215)

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

[main.ts:181235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181235)

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

[main.ts:181255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181255)

___


### fromJS

▸ **fromJS**(`data`): [`ResponseDataInfo`](ResponseDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ResponseDataInfo`](ResponseDataInfo.md)

#### Defined in

[main.ts:181248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181248)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")