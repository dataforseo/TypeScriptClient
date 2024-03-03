[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTasksReadyResultInfo

# Class: KeywordsDataBingSearchVolumeTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#date_posted)
- [endpoint](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#endpoint)
- [function](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#function)
- [id](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#id)
- [se](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#se)
- [tag](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#tag)

### Methods

- [init](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTasksReadyResultInfo**(`data?`): [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Defined in

main.ts:122828

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[date_posted](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:122820

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[endpoint](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:122824

___

### function

• `Optional` **function**: `string`

type of the task

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[function](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#function)

#### Defined in

main.ts:122818

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[id](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#id)

#### Defined in

main.ts:122814

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[se](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#se)

#### Defined in

main.ts:122816

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md).[tag](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:122822

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

main.ts:122837

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

main.ts:122859

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResultInfo`](KeywordsDataBingSearchVolumeTasksReadyResultInfo.md)

#### Defined in

main.ts:122852
