**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixRatesData

# Class: AppendixRatesData

## Implements

- [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixRatesData(data)

> **new AppendixRatesData**(`data`?): [`AppendixRatesData`](AppendixRatesData.md)

#### Parameters

• **data?**: [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)

#### Source

main.ts:215883

## Properties

### limits?

> **`optional`** **limits**: [`AppendixLimitsRatesData`](AppendixLimitsRatesData.md)

rate limits for API calls per a certain period of time

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`limits`](../interfaces/IAppendixRatesData.md#limits)

#### Source

main.ts:215877

***

### statistics?

> **`optional`** **statistics**: [`AppendixStatisticsDataInfo`](AppendixStatisticsDataInfo.md)

statisctics for API calls

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`statistics`](../interfaces/IAppendixRatesData.md#statistics)

#### Source

main.ts:215879

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:215892

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:215910

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppendixRatesData`](AppendixRatesData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)

#### Source

main.ts:215903
