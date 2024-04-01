[Documentation](../README.md) / [Exports](../modules.md) / WorkHours

# Class: WorkHours

## Implements

- [`IWorkHours`](../interfaces/IWorkHours.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](WorkHours.md#constructor)

### Properties

- [current\_status](WorkHours.md#current_status)
- [timetable](WorkHours.md#timetable)

### Methods

- [init](WorkHours.md#init)
- [toJSON](WorkHours.md#tojson)
- [fromJS](WorkHours.md#fromjs)

## Constructors

### constructor

• **new WorkHours**(`data?`): [`WorkHours`](WorkHours.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IWorkHours`](../interfaces/IWorkHours.md) |

#### Returns

[`WorkHours`](WorkHours.md)

#### Defined in

main.ts:39048

## Properties

### current\_status

• `Optional` **current\_status**: `string`

current status of the establishment
indicates whether the establishment is opened or closed

#### Implementation of

[IWorkHours](../interfaces/IWorkHours.md).[current_status](../interfaces/IWorkHours.md#current_status)

#### Defined in

main.ts:39044

___

### timetable

• `Optional` **timetable**: `Object`

work hours timetable

#### Index signature

▪ [key: `string`]: ([`WorkDayInfo`](WorkDayInfo.md) \| `undefined`)[]

#### Implementation of

[IWorkHours](../interfaces/IWorkHours.md).[timetable](../interfaces/IWorkHours.md#timetable)

#### Defined in

main.ts:39041

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

main.ts:39057

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

main.ts:39081

___

### fromJS

▸ **fromJS**(`data`): [`WorkHours`](WorkHours.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`WorkHours`](WorkHours.md)

#### Defined in

main.ts:39074
