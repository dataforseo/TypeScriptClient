[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTasksReadyResultInfo

# Class: BusinessDataTrustpilotReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#id)
- [se](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se)
- [tag](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTasksReadyResultInfo**(`data?`): [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:199700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199700)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:199692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199692)

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#endpoint)

#### Defined in

[main.ts:199696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199696)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:199687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199687)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:199690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199690)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:199694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199694)

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

[main.ts:199709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199709)

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

[main.ts:199730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199730)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:199723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199723)
