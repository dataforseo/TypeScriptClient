[**Documentation**](../README.md)

***

[Documentation](../README.md) / IEventDates

# Interface: IEventDates

Defined in: main.ts:48812

## Indexable

\[`key`: `string`\]: `any`

## Properties

### displayed\_dates?

> `optional` **displayed\_dates**: `string`

Defined in: main.ts:48834

date or date range as it is displayed in SERP

***

### end\_datetime?

> `optional` **end\_datetime**: `string`

Defined in: main.ts:48832

date and time when the event ends
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

***

### start\_datetime?

> `optional` **start\_datetime**: `string`

Defined in: main.ts:48822

date and time when the event starts
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46
