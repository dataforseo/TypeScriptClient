[dataforseo-client](../README.md) / [Exports](../modules.md) / IEventDates

# Interface: IEventDates

## Implemented by

- [`EventDates`](../classes/EventDates.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [displayed\_dates](IEventDates.md#displayed_dates)
- [end\_datetime](IEventDates.md#end_datetime)
- [start\_datetime](IEventDates.md#start_datetime)

## Properties

### displayed\_dates

• `Optional` **displayed\_dates**: `string`

date or date range as it is displayed in SERP

#### Defined in

[main.ts:44509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44509)

___

### end\_datetime

• `Optional` **end\_datetime**: `string`

date and time when the event ends
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Defined in

[main.ts:44507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44507)

___

### start\_datetime

• `Optional` **start\_datetime**: `string`

date and time when the event starts
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Defined in

[main.ts:44497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44497)
