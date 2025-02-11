[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixStatisticsRatesData

# Class: AppendixStatisticsRatesData

Defined in: main.ts:235540

## Implements

- [`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixStatisticsRatesData()

> **new AppendixStatisticsRatesData**(`data`?): [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

Defined in: main.ts:235546

#### Parameters

##### data?

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

#### Returns

[`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsRatesData`](AppendixDayStatisticsRatesData.md)

Defined in: main.ts:235541

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`day`](../interfaces/IAppendixStatisticsRatesData.md#day)

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsDataInfo`](AppendixMinuteStatisticsDataInfo.md)

Defined in: main.ts:235542

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`minute`](../interfaces/IAppendixStatisticsRatesData.md#minute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:235555

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:235573

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

Defined in: main.ts:235566

#### Parameters

##### data

`any`

#### Returns

[`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)
