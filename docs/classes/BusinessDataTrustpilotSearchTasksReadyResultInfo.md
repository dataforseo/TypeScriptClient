[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTasksReadyResultInfo

# Class: BusinessDataTrustpilotSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#id)
- [se](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#se)
- [tag](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTasksReadyResultInfo**(`data?`): [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTasksReadyResultInfo`](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:198938](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198938)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:198930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198930)

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#endpoint)

#### Defined in

[main.ts:198934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198934)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:198925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198925)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:198928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198928)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataTrustpilotSearchTasksReadyResultInfo](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:198932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198932)

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

[main.ts:198947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198947)

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

[main.ts:198968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198968)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTasksReadyResultInfo`](BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

#### Defined in

[main.ts:198961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198961)
