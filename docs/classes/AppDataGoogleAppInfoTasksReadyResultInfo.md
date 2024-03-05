[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTasksReadyResultInfo

# Class: AppDataGoogleAppInfoTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataGoogleAppInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataGoogleAppInfoTasksReadyResultInfo.md#id)
- [se](AppDataGoogleAppInfoTasksReadyResultInfo.md#se)
- [tag](AppDataGoogleAppInfoTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataGoogleAppInfoTasksReadyResultInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTasksReadyResultInfo**(`data?`): [`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:179582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179582)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyResultInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:179571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179571)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Info task

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyResultInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:179575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179575)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyResultInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:179578](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179578)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyResultInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[id](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:179567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179567)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyResultInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[se](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:179569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179569)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataGoogleAppInfoTasksReadyResultInfo](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[tag](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:179573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179573)

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

[main.ts:179591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179591)

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

[main.ts:179613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179613)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:179606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179606)
