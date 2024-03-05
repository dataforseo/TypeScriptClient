[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTasksReadyResultInfo

# Class: AppDataGoogleAppSearchesTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataGoogleAppSearchesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataGoogleAppSearchesTasksReadyResultInfo.md#id)
- [se](AppDataGoogleAppSearchesTasksReadyResultInfo.md#se)
- [tag](AppDataGoogleAppSearchesTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataGoogleAppSearchesTasksReadyResultInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTasksReadyResultInfo**(`data?`): [`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Defined in

[main.ts:177618](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177618)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:177607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177607)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Searches task

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:177611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177611)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:177614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177614)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[id](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:177603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177603)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[se](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:177605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177605)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[tag](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:177609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177609)

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

[main.ts:177627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177627)

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

[main.ts:177649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177649)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Defined in

[main.ts:177642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177642)
