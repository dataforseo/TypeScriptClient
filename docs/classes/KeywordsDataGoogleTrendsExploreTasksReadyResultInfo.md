[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTasksReadyResultInfo

# Class: KeywordsDataGoogleTrendsExploreTasksReadyResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#date_posted)
- [endpoint](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#endpoint)
- [function](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#function)
- [id](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#id)
- [se](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#se)
- [tag](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#tag)

### Methods

- [init](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreTasksReadyResultInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Defined in

main.ts:122587

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[date_posted](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:122579

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[endpoint](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:122583

___

### function

• `Optional` **function**: `string`

type of the task

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[function](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#function)

#### Defined in

main.ts:122577

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[id](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#id)

#### Defined in

main.ts:122573

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[se](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#se)

#### Defined in

main.ts:122575

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[tag](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:122581

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

main.ts:122596

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

main.ts:122618

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Defined in

main.ts:122611
