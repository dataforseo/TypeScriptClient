[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / WorkHours

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

[main.ts:38297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38297)

## Properties

### current\_status

• `Optional` **current\_status**: `string`

current status of the establishment
indicates whether the establishment is opened or closed

#### Implementation of

[IWorkHours](../interfaces/IWorkHours.md).[current_status](../interfaces/IWorkHours.md#current_status)

#### Defined in

[main.ts:38293](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38293)

___


### timetable

• `Optional` **timetable**: `Object`

work hours timetable

#### Index signature

▪ [key: `string`]: ([`WorkDayInfo`](WorkDayInfo.md) \| `undefined`)[]

#### Implementation of

[IWorkHours](../interfaces/IWorkHours.md).[timetable](../interfaces/IWorkHours.md#timetable)

#### Defined in

[main.ts:38290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38290)

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

[main.ts:38306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38306)

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

[main.ts:38330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38330)

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

[main.ts:38323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38323)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")