**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / FetchTiming

# Class: FetchTiming

## Implements

- [`IFetchTiming`](../interfaces/IFetchTiming.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FetchTiming(data)

> **new FetchTiming**(`data`?): [`FetchTiming`](FetchTiming.md)

#### Parameters

• **data?**: [`IFetchTiming`](../interfaces/IFetchTiming.md)

#### Returns

[`FetchTiming`](FetchTiming.md)

#### Source

main.ts:153599

## Properties

### duration\_time?

> **`optional`** **duration\_time**: `number`

indicates how many milliseconds it took to fetch a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`duration_time`](../interfaces/IFetchTiming.md#duration_time)

#### Source

main.ts:153589

***

### fetch\_end?

> **`optional`** **fetch\_end**: `number`

time to complete downloading the resource
the amount of time a browser needs to complete downloading a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`fetch_end`](../interfaces/IFetchTiming.md#fetch_end)

#### Source

main.ts:153595

***

### fetch\_start?

> **`optional`** **fetch\_start**: `number`

time to start downloading the resource
the amount of time a browser needs to start downloading a resource

#### Implementation of

[`IFetchTiming`](../interfaces/IFetchTiming.md).[`fetch_start`](../interfaces/IFetchTiming.md#fetch_start)

#### Source

main.ts:153592

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:153608

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:153627

***

### fromJS()

> **`static`** **fromJS**(`data`): [`FetchTiming`](FetchTiming.md)

#### Parameters

• **data**: `any`

#### Returns

[`FetchTiming`](FetchTiming.md)

#### Source

main.ts:153620
