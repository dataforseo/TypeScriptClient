**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IEventDates

# Interface: IEventDates

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### displayed\_dates?

> **`optional`** **displayed\_dates**: `string`

date or date range as it is displayed in SERP

#### Source

main.ts:46731

***

### end\_datetime?

> **`optional`** **end\_datetime**: `string`

date and time when the event ends
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Source

main.ts:46729

***

### start\_datetime?

> **`optional`** **start\_datetime**: `string`

date and time when the event starts
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Source

main.ts:46719
