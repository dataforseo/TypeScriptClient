[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#date_posted)
- [endpoint](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#endpoint)
- [function](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#function)
- [id](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#id)
- [se](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#se)
- [tag](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#tag)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Defined in

main.ts:113729

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[date_posted](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:113721

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[endpoint](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:113725

___

### function

• `Optional` **function**: `string`

type of the task

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[function](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#function)

#### Defined in

main.ts:113719

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#id)

#### Defined in

main.ts:113715

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[se](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#se)

#### Defined in

main.ts:113717

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md).[tag](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:113723

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

main.ts:113738

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

main.ts:113760

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)

#### Defined in

main.ts:113753
