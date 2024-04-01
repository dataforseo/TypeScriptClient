[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#date_posted)
- [endpoint](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#endpoint)
- [id](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#id)
- [se](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se)
- [tag](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tag)

### Methods

- [init](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo**(`data?`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Defined in

main.ts:197636

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[date_posted](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:197628

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[endpoint](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:197632

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[id](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#id)

#### Defined in

main.ts:197623

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[se](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se)

#### Defined in

main.ts:197626

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[tag](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:197630

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

main.ts:197645

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

main.ts:197666

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Defined in

main.ts:197659
