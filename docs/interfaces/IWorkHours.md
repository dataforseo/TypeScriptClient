[dataforseo-client](../README.md) / [Exports](../modules.md) / IWorkHours

# Interface: IWorkHours

## Implemented by

- [`WorkHours`](../classes/WorkHours.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [current\_status](IWorkHours.md#current_status)
- [timetable](IWorkHours.md#timetable)

## Properties

### current\_status

• `Optional` **current\_status**: `string`

current status of the establishment
indicates whether the establishment is opened or closed

#### Defined in

[main.ts:38353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38353)

___

### timetable

• `Optional` **timetable**: `Object`

work hours timetable

#### Index signature

▪ [key: `string`]: ([`WorkDayInfo`](../classes/WorkDayInfo.md) \| `undefined`)[]

#### Defined in

[main.ts:38350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38350)
