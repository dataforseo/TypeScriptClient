[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppendixStatisticsRatesData

# Class: AppendixStatisticsRatesData

## Implements

- [`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixStatisticsRatesData()

> **new AppendixStatisticsRatesData**(`data`?): [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

#### Parameters

• **data?**: [`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md)

#### Returns

[`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

#### Defined in

main.ts:219926

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsRatesData`](AppendixDayStatisticsRatesData.md)

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`day`](../interfaces/IAppendixStatisticsRatesData.md#day)

#### Defined in

main.ts:219921

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsDataInfo`](AppendixMinuteStatisticsDataInfo.md)

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`minute`](../interfaces/IAppendixStatisticsRatesData.md#minute)

#### Defined in

main.ts:219922

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:219935

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:219953

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

#### Defined in

main.ts:219946
