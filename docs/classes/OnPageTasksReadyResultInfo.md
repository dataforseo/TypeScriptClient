[Documentation](../README.md) / [Exports](../modules.md) / OnPageTasksReadyResultInfo

# Class: OnPageTasksReadyResultInfo

## Implements

- [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageTasksReadyResultInfo.md#constructor)

### Properties

- [date\_posted](OnPageTasksReadyResultInfo.md#date_posted)
- [id](OnPageTasksReadyResultInfo.md#id)
- [tag](OnPageTasksReadyResultInfo.md#tag)
- [target](OnPageTasksReadyResultInfo.md#target)

### Methods

- [init](OnPageTasksReadyResultInfo.md#init)
- [toJSON](OnPageTasksReadyResultInfo.md#tojson)
- [fromJS](OnPageTasksReadyResultInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageTasksReadyResultInfo**(`data?`): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md) |

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Defined in

main.ts:148461

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[IOnPageTasksReadyResultInfo](../interfaces/IOnPageTasksReadyResultInfo.md).[date_posted](../interfaces/IOnPageTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:148455

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[IOnPageTasksReadyResultInfo](../interfaces/IOnPageTasksReadyResultInfo.md).[id](../interfaces/IOnPageTasksReadyResultInfo.md#id)

#### Defined in

main.ts:148451

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[IOnPageTasksReadyResultInfo](../interfaces/IOnPageTasksReadyResultInfo.md).[tag](../interfaces/IOnPageTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:148457

___

### target

• `Optional` **target**: `string`

target website specified when setting a task

#### Implementation of

[IOnPageTasksReadyResultInfo](../interfaces/IOnPageTasksReadyResultInfo.md).[target](../interfaces/IOnPageTasksReadyResultInfo.md#target)

#### Defined in

main.ts:148453

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

main.ts:148470

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

main.ts:148490

___

### fromJS

▸ **fromJS**(`data`): [`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageTasksReadyResultInfo`](OnPageTasksReadyResultInfo.md)

#### Defined in

main.ts:148483
