[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / FetchTiming

# Class: FetchTiming

## Implements

- [`IFetchTiming`](../interfaces/IFetchTiming.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FetchTiming()

> **new FetchTiming**(`data`?): [`FetchTiming`](FetchTiming.md)

#### Parameters

• **data?**: [`IFetchTiming`](../interfaces/IFetchTiming.md)

#### Returns

[`FetchTiming`](FetchTiming.md)

#### Defined in

main.ts:159412

## Properties

### duration\_time?

> `optional` **duration\_time**: `number`

indicates how many milliseconds it took to fetch a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`duration_time`](../interfaces/IFetchTiming.md#duration_time)

#### Defined in

main.ts:159402

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

time to complete downloading the resource
the amount of time a browser needs to complete downloading a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`fetch_end`](../interfaces/IFetchTiming.md#fetch_end)

#### Defined in

main.ts:159408

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

time to start downloading the resource
the amount of time a browser needs to start downloading a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`fetch_start`](../interfaces/IFetchTiming.md#fetch_start)

#### Defined in

main.ts:159405

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:159421

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:159440

***

### fromJS()

> `static` **fromJS**(`data`): [`FetchTiming`](FetchTiming.md)

#### Parameters

• **data**: `any`

#### Returns

[`FetchTiming`](FetchTiming.md)

#### Defined in

main.ts:159433
