[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

# Class: KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#date_posted)
- [endpoint](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#endpoint)
- [function](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#function)
- [id](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#id)
- [se](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#se)
- [tag](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#tag)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTasksReadyResultInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Defined in

main.ts:132313

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[date_posted](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:132305

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[endpoint](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:132309

___

### function

• `Optional` **function**: `string`

type of the task

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[function](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#function)

#### Defined in

main.ts:132303

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[id](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#id)

#### Defined in

main.ts:132299

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[se](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#se)

#### Defined in

main.ts:132301

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[tag](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:132307

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

main.ts:132322

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

main.ts:132344

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Defined in

main.ts:132337
