[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppendixStatisticsMoneyData

# Class: AppendixStatisticsMoneyData

## Implements

- [`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixStatisticsMoneyData()

> **new AppendixStatisticsMoneyData**(`data`?): [`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

#### Parameters

• **data?**: [`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md)

#### Returns

[`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

#### Defined in

main.ts:220799

## Properties

### day?

> `optional` **day**: [`AppendixDayStatisticsMoneyData`](AppendixDayStatisticsMoneyData.md)

#### Implementation of

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md).[`day`](../interfaces/IAppendixStatisticsMoneyData.md#day)

#### Defined in

main.ts:220794

***

### minute?

> `optional` **minute**: [`AppendixMinuteStatisticsDataInfo`](AppendixMinuteStatisticsDataInfo.md)

#### Implementation of

[`IAppendixStatisticsMoneyData`](../interfaces/IAppendixStatisticsMoneyData.md).[`minute`](../interfaces/IAppendixStatisticsMoneyData.md#minute)

#### Defined in

main.ts:220795

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:220808

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:220826

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

#### Defined in

main.ts:220819
