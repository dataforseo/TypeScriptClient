[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppReviewsTasksReadyResultInfo

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

[main.ts:186024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186024)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:186013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186013)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Reviews task

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:186017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186017)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:186020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186020)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[id](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:186009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186009)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[se](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:186011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186011)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataAppleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[tag](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:186015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186015)

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

[main.ts:186033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186033)

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

[main.ts:186055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186055)

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

[main.ts:186048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186048)
