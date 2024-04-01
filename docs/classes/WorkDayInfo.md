[Documentation](../README.md) / [Exports](../modules.md) / WorkDayInfo

# Class: WorkDayInfo

## Implements

- [`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](WorkDayInfo.md#constructor)

### Properties

- [close](WorkDayInfo.md#close)
- [open](WorkDayInfo.md#open)

### Methods

- [init](WorkDayInfo.md#init)
- [toJSON](WorkDayInfo.md#tojson)
- [fromJS](WorkDayInfo.md#fromjs)

## Constructors

### constructor

• **new WorkDayInfo**(`data?`): [`WorkDayInfo`](WorkDayInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IWorkDayInfo`](../interfaces/IWorkDayInfo.md) |

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

#### Defined in

main.ts:21051

## Properties

### close

• `Optional` **close**: [`WorkTimeInfo`](WorkTimeInfo.md)

closing time

#### Implementation of

[IWorkDayInfo](../interfaces/IWorkDayInfo.md).[close](../interfaces/IWorkDayInfo.md#close)

#### Defined in

main.ts:21047

___

### open

• `Optional` **open**: [`WorkTimeInfo`](WorkTimeInfo.md)

opening time

#### Implementation of

[IWorkDayInfo](../interfaces/IWorkDayInfo.md).[open](../interfaces/IWorkDayInfo.md#open)

#### Defined in

main.ts:21045

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

main.ts:21060

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

main.ts:21078

___

### fromJS

▸ **fromJS**(`data`): [`WorkDayInfo`](WorkDayInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

#### Defined in

main.ts:21071
