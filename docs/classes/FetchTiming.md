[**Documentation**](../README.md)

***

[Documentation](../README.md) / FetchTiming

# Class: FetchTiming

Defined in: main.ts:167888

## Implements

- [`IFetchTiming`](../interfaces/IFetchTiming.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FetchTiming()

> **new FetchTiming**(`data`?): [`FetchTiming`](FetchTiming.md)

Defined in: main.ts:167900

#### Parameters

##### data?

[`IFetchTiming`](../interfaces/IFetchTiming.md)

#### Returns

[`FetchTiming`](FetchTiming.md)

## Properties

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:167890

indicates how many milliseconds it took to fetch a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`duration_time`](../interfaces/IFetchTiming.md#duration_time)

***

### fetch\_end?

> `optional` **fetch\_end**: `number`

Defined in: main.ts:167896

time to complete downloading the resource
the amount of time a browser needs to complete downloading a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`fetch_end`](../interfaces/IFetchTiming.md#fetch_end)

***

### fetch\_start?

> `optional` **fetch\_start**: `number`

Defined in: main.ts:167893

time to start downloading the resource
the amount of time a browser needs to start downloading a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`fetch_start`](../interfaces/IFetchTiming.md#fetch_start)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167909

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167928

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`FetchTiming`](FetchTiming.md)

Defined in: main.ts:167921

#### Parameters

##### data

`any`

#### Returns

[`FetchTiming`](FetchTiming.md)
