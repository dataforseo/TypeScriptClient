[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixRatesData

# Class: AppendixRatesData

Defined in: main.ts:235072

## Implements

- [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixRatesData()

> **new AppendixRatesData**(`data`?): [`AppendixRatesData`](AppendixRatesData.md)

Defined in: main.ts:235080

#### Parameters

##### data?

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)

## Properties

### limits?

> `optional` **limits**: [`AppendixLimitsRatesData`](AppendixLimitsRatesData.md)

Defined in: main.ts:235074

rate limits for API calls per a certain period of time

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`limits`](../interfaces/IAppendixRatesData.md#limits)

***

### statistics?

> `optional` **statistics**: [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

Defined in: main.ts:235076

statisctics for API calls

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`statistics`](../interfaces/IAppendixRatesData.md#statistics)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:235089

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:235107

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixRatesData`](AppendixRatesData.md)

Defined in: main.ts:235100

#### Parameters

##### data

`any`

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)
