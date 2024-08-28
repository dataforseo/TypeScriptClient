[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppendixStatisticsRatesData

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

main.ts:224666

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsRatesData`](AppendixDayStatisticsRatesData.md)

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`day`](../interfaces/IAppendixStatisticsRatesData.md#day)

#### Defined in

main.ts:224661

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsDataInfo`](AppendixMinuteStatisticsDataInfo.md)

#### Implementation of

[`IAppendixStatisticsRatesData`](../interfaces/IAppendixStatisticsRatesData.md).[`minute`](../interfaces/IAppendixStatisticsRatesData.md#minute)

#### Defined in

main.ts:224662

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:224675

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:224693

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

#### Defined in

main.ts:224686
