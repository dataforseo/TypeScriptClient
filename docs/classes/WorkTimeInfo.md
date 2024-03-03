[Documentation](../README.md) / [Exports](../modules.md) / WorkTimeInfo

# Class: WorkTimeInfo

## Implements

- [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](WorkTimeInfo.md#constructor)

### Properties

- [hour](WorkTimeInfo.md#hour)
- [minute](WorkTimeInfo.md#minute)

### Methods

- [init](WorkTimeInfo.md#init)
- [toJSON](WorkTimeInfo.md#tojson)
- [fromJS](WorkTimeInfo.md#fromjs)

## Constructors

### constructor

• **new WorkTimeInfo**(`data?`): [`WorkTimeInfo`](WorkTimeInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md) |

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

#### Defined in

main.ts:20588

## Properties

### hour

• `Optional` **hour**: `number`

hours in the 24-hour format

#### Implementation of

[IWorkTimeInfo](../interfaces/IWorkTimeInfo.md).[hour](../interfaces/IWorkTimeInfo.md#hour)

#### Defined in

main.ts:20582

___

### minute

• `Optional` **minute**: `number`

minutes

#### Implementation of

[IWorkTimeInfo](../interfaces/IWorkTimeInfo.md).[minute](../interfaces/IWorkTimeInfo.md#minute)

#### Defined in

main.ts:20584

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

main.ts:20597

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

main.ts:20615

___

### fromJS

▸ **fromJS**(`data`): [`WorkTimeInfo`](WorkTimeInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

#### Defined in

main.ts:20608
