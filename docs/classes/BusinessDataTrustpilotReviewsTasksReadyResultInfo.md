[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTasksReadyResultInfo

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

main.ts:205161

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:205153

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:205157

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:205148

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:205151

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:205155

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

main.ts:205170

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

main.ts:205191

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

main.ts:205184
