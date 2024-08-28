[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppendixRatesData

# Class: AppendixRatesData

## Implements

- [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixRatesData()

> **new AppendixRatesData**(`data`?): [`AppendixRatesData`](AppendixRatesData.md)

#### Parameters

• **data?**: [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)

#### Defined in

main.ts:224720

## Properties

### limits?

> `optional` **limits**: [`AppendixLimitsRatesData`](AppendixLimitsRatesData.md)

rate limits for API calls per a certain period of time

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`limits`](../interfaces/IAppendixRatesData.md#limits)

#### Defined in

main.ts:224714

***

### statistics?

> `optional` **statistics**: [`AppendixStatisticsRatesData`](AppendixStatisticsRatesData.md)

statisctics for API calls

#### Implementation of

[`IAppendixRatesData`](../interfaces/IAppendixRatesData.md).[`statistics`](../interfaces/IAppendixRatesData.md#statistics)

#### Defined in

main.ts:224716

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:224729

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:224747

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixRatesData`](AppendixRatesData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)

#### Defined in

main.ts:224740
