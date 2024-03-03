[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppReviewsTasksReadyResultInfo

# Class: AppDataAppleAppReviewsTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppReviewsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataAppleAppReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataAppleAppReviewsTasksReadyResultInfo.md#id)
- [se](AppDataAppleAppReviewsTasksReadyResultInfo.md#se)
- [tag](AppDataAppleAppReviewsTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataAppleAppReviewsTasksReadyResultInfo.md#init)
- [toJSON](AppDataAppleAppReviewsTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataAppleAppReviewsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppReviewsTasksReadyResultInfo**(`data?`): [`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md) |

#### Returns

[`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:186144

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:186133

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Reviews task

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:186137

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:186140

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[id](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:186129

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[se](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:186131

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[tag](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:186135

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

main.ts:186153

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

main.ts:186175

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppReviewsTasksReadyResultInfo`](AppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Defined in

main.ts:186168
