[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppInfoTasksReadyResultInfo

# Class: AppDataAppleAppInfoTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppInfoTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](AppDataAppleAppInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](AppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](AppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_html)
- [id](AppDataAppleAppInfoTasksReadyResultInfo.md#id)
- [se](AppDataAppleAppInfoTasksReadyResultInfo.md#se)
- [tag](AppDataAppleAppInfoTasksReadyResultInfo.md#tag)

### Methods

- [init](AppDataAppleAppInfoTasksReadyResultInfo.md#init)
- [toJSON](AppDataAppleAppInfoTasksReadyResultInfo.md#tojson)
- [fromJS](AppDataAppleAppInfoTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppInfoTasksReadyResultInfo**(`data?`): [`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md) |

#### Returns

[`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:184192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184192)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IAppDataAppleAppInfoTasksReadyResultInfo](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[date_posted](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:184181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184181)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Info task

#### Implementation of

[IAppDataAppleAppInfoTasksReadyResultInfo](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[endpoint_advanced](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

[main.ts:184185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184185)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[IAppDataAppleAppInfoTasksReadyResultInfo](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[endpoint_html](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

[main.ts:184188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184188)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IAppDataAppleAppInfoTasksReadyResultInfo](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[id](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:184177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184177)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[IAppDataAppleAppInfoTasksReadyResultInfo](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[se](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:184179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184179)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IAppDataAppleAppInfoTasksReadyResultInfo](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[tag](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:184183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184183)

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

[main.ts:184201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184201)

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

[main.ts:184223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184223)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:184216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184216)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")