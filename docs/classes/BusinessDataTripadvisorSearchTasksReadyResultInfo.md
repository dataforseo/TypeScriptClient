[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorSearchTasksReadyResultInfo

# Class: BusinessDataTripadvisorSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#id)
- [se](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#se)
- [tag](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorSearchTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorSearchTasksReadyResultInfo**(`data?`): [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:201194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201194)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResultInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:201186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201186)

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResultInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#endpoint)

#### Defined in

[main.ts:201190](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201190)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResultInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:201181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201181)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResultInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:201184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201184)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataTripadvisorSearchTasksReadyResultInfo](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:201188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201188)

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

[main.ts:201203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201203)

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

[main.ts:201224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201224)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorSearchTasksReadyResultInfo`](BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:201217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201217)
