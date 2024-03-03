[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTasksReadyResultInfo

# Class: BusinessDataGoogleReviewsTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataGoogleReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataGoogleReviewsTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataGoogleReviewsTasksReadyResultInfo.md#id)
- [se](BusinessDataGoogleReviewsTasksReadyResultInfo.md#se)
- [se\_type](BusinessDataGoogleReviewsTasksReadyResultInfo.md#se_type)
- [tag](BusinessDataGoogleReviewsTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataGoogleReviewsTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTasksReadyResultInfo**(`data?`): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:198107

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResultInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:198099

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResultInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:198103

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResultInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:198091

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResultInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:198094

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: reviews

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResultInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[se_type](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:198097

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataGoogleReviewsTasksReadyResultInfo](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataGoogleReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:198101

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

main.ts:198116

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

main.ts:198138

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTasksReadyResultInfo`](BusinessDataGoogleReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:198131
