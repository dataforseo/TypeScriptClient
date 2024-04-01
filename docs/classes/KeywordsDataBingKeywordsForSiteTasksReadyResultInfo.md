[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteTasksReadyResultInfo

# Class: KeywordsDataBingKeywordsForSiteTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#date_posted)
- [endpoint](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#endpoint)
- [function](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#function)
- [id](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#id)
- [se](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#se)
- [tag](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#tag)

### Methods

- [init](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteTasksReadyResultInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Defined in

main.ts:129391

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[date_posted](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:129383

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[endpoint](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:129387

___

### function

• `Optional` **function**: `string`

type of the task

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[function](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#function)

#### Defined in

main.ts:129381

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#id)

#### Defined in

main.ts:129377

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[se](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#se)

#### Defined in

main.ts:129379

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[tag](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:129385

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

main.ts:129400

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

main.ts:129422

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Defined in

main.ts:129415
