[Documentation](../README.md) / [Exports](../modules.md) / AppendixPriceDataInfo

# Class: AppendixPriceDataInfo

## Implements

- [`IAppendixPriceDataInfo`](../interfaces/IAppendixPriceDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixPriceDataInfo.md#constructor)

### Properties

- [task\_get](AppendixPriceDataInfo.md#task_get)
- [task\_post](AppendixPriceDataInfo.md#task_post)
- [tasks\_ready](AppendixPriceDataInfo.md#tasks_ready)

### Methods

- [init](AppendixPriceDataInfo.md#init)
- [toJSON](AppendixPriceDataInfo.md#tojson)
- [fromJS](AppendixPriceDataInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixPriceDataInfo**(`data?`): [`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixPriceDataInfo`](../interfaces/IAppendixPriceDataInfo.md) |

#### Returns

[`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Defined in

main.ts:210265

## Properties

### task\_get

• `Optional` **task\_get**: [`AppendixTaskGetPriceDataInfo`](AppendixTaskGetPriceDataInfo.md)

#### Implementation of

[IAppendixPriceDataInfo](../interfaces/IAppendixPriceDataInfo.md).[task_get](../interfaces/IAppendixPriceDataInfo.md#task_get)

#### Defined in

main.ts:210259

___

### task\_post

• `Optional` **task\_post**: [`AppendixTaskKeywordsDataPriceDataInfo`](AppendixTaskKeywordsDataPriceDataInfo.md)

#### Implementation of

[IAppendixPriceDataInfo](../interfaces/IAppendixPriceDataInfo.md).[task_post](../interfaces/IAppendixPriceDataInfo.md#task_post)

#### Defined in

main.ts:210261

___

### tasks\_ready

• `Optional` **tasks\_ready**: [`AppendixTaskKeywordsDataPriceDataInfo`](AppendixTaskKeywordsDataPriceDataInfo.md)

#### Implementation of

[IAppendixPriceDataInfo](../interfaces/IAppendixPriceDataInfo.md).[tasks_ready](../interfaces/IAppendixPriceDataInfo.md#tasks_ready)

#### Defined in

main.ts:210260

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

main.ts:210274

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

main.ts:210293

___

### fromJS

▸ **fromJS**(`data`): [`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixPriceDataInfo`](AppendixPriceDataInfo.md)

#### Defined in

main.ts:210286
