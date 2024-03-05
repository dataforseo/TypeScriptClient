[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#id)
- [se](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se)
- [tag](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo**(`data?`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:190838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190838)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

[main.ts:190830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190830)

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#endpoint)

#### Defined in

[main.ts:190834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190834)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#id)

#### Defined in

[main.ts:190825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190825)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se)

#### Defined in

[main.ts:190828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190828)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#tag)

#### Defined in

[main.ts:190832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190832)

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

[main.ts:190847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190847)

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

[main.ts:190868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190868)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Defined in

[main.ts:190861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190861)
