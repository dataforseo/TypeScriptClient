[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTasksReadyResultInfo

# Class: AppDataGoogleAppReviewsTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataGoogleAppReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataGoogleAppReviewsTasksReadyResultInfo.md#id)
- [se](AppDataGoogleAppReviewsTasksReadyResultInfo.md#se)
- [tag](AppDataGoogleAppReviewsTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataGoogleAppReviewsTasksReadyResultInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTasksReadyResultInfo**(`data?`): [`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:180978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180978)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:180967](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180967)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Reviews task

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:180971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180971)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:180974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180974)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[id](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:180963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180963)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[se](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:180965](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180965)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataGoogleAppReviewsTasksReadyResultInfo](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[tag](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:180969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180969)

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

[main.ts:180987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L180987)

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

[main.ts:181009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181009)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTasksReadyResultInfo`](AppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Defined in

[main.ts:181002](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181002)
