[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / EventDates

# Class: EventDates

## Implements

- [`IEventDates`](../interfaces/IEventDates.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventDates()

> **new EventDates**(`data`?): [`EventDates`](EventDates.md)

#### Parameters

• **data?**: [`IEventDates`](../interfaces/IEventDates.md)

#### Returns

[`EventDates`](EventDates.md)

#### Defined in

main.ts:47655

## Properties

### displayed\_dates?

> `optional` **displayed\_dates**: `string`

date or date range as it is displayed in SERP

#### Implementation of

[`IEventDates`](../interfaces/IEventDates.md).[`displayed_dates`](../interfaces/IEventDates.md#displayed_dates)

#### Defined in

main.ts:47651

***

### end\_datetime?

> `optional` **end\_datetime**: `string`

date and time when the event ends
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Implementation of

[`IEventDates`](../interfaces/IEventDates.md).[`end_datetime`](../interfaces/IEventDates.md#end_datetime)

#### Defined in

main.ts:47649

***

### start\_datetime?

> `optional` **start\_datetime**: `string`

date and time when the event starts
if time zone is specified in the event, value will be returned in the UTC format:
“yyyy-mm-ddThh-mm-ss+00:00”
example:
2019-11-15T12:57:46+00:00
if time zone is not specified in the event, unspecified local time will be returned in the following format:
“yyyy-mm-ddThh-mm-ss”
example:
2019-11-15T12:57:46

#### Implementation of

[`IEventDates`](../interfaces/IEventDates.md).[`start_datetime`](../interfaces/IEventDates.md#start_datetime)

#### Defined in

main.ts:47639

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:47664

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:47683

***

### fromJS()

> `static` **fromJS**(`data`): [`EventDates`](EventDates.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventDates`](EventDates.md)

#### Defined in

main.ts:47676
