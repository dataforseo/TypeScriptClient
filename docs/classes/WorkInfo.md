[Documentation](../README.md) / [Exports](../modules.md) / WorkInfo

# Class: WorkInfo

## Implements

- [`IWorkInfo`](../interfaces/IWorkInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](WorkInfo.md#constructor)

### Properties

- [work\_hours](WorkInfo.md#work_hours)

### Methods

- [init](WorkInfo.md#init)
- [toJSON](WorkInfo.md#tojson)
- [fromJS](WorkInfo.md#fromjs)

## Constructors

### constructor

• **new WorkInfo**(`data?`): [`WorkInfo`](WorkInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IWorkInfo`](../interfaces/IWorkInfo.md) |

#### Returns

[`WorkInfo`](WorkInfo.md)

#### Defined in

main.ts:188883

## Properties

### work\_hours

• `Optional` **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[IWorkInfo](../interfaces/IWorkInfo.md).[work_hours](../interfaces/IWorkInfo.md#work_hours)

#### Defined in

main.ts:188879

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

main.ts:188892

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

main.ts:188909

___

### fromJS

▸ **fromJS**(`data`): [`WorkInfo`](WorkInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`WorkInfo`](WorkInfo.md)

#### Defined in

main.ts:188902
