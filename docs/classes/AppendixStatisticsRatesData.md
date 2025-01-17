[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatisticsRatesData

# Class: AppendixStatisticsRatesData

Defined in: main.ts:235020

## Implements

- [`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixStatisticsRatesData()

> **new AppendixStatisticsRatesData**(`data`?): [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

Defined in: main.ts:235026

#### Parameters

##### data?

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

#### Returns

[`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsRatesData`](AppendixDayStatisticsRatesData.md)

Defined in: main.ts:235021

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`day`](../interfaces/IAppendixStatisticsRatesData.md#day)

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsRatesData`](AppendixMinuteStatisticsRatesData.md)

Defined in: main.ts:235022

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`minute`](../interfaces/IAppendixStatisticsRatesData.md#minute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:235035

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:235053

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

Defined in: main.ts:235046

#### Parameters

##### data

`any`

#### Returns

[`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)
