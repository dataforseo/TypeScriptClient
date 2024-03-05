[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTasksReadyResultInfo

# Class: AppDataAppleAppSearchesTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataAppleAppSearchesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataAppleAppSearchesTasksReadyResultInfo.md#id)
- [se](AppDataAppleAppSearchesTasksReadyResultInfo.md#se)
- [tag](AppDataAppleAppSearchesTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataAppleAppSearchesTasksReadyResultInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTasksReadyResultInfo**(`data?`): [`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Defined in

[main.ts:183454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183454)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:183443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183443)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Searches task

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:183447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183447)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:183450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183450)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[id](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:183439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183439)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[se](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:183441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183441)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResultInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[tag](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:183445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183445)

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

[main.ts:183463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183463)

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

[main.ts:183485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183485)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Defined in

[main.ts:183478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183478)
