[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixMoneyData

# Class: AppendixMoneyData

Defined in: main.ts:236440

## Implements

- [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppendixMoneyData()

> **new AppendixMoneyData**(`data`?): [`AppendixMoneyData`](AppendixMoneyData.md)

Defined in: main.ts:236452

#### Parameters

##### data?

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)

## Properties

### balance?

> `optional` **balance**: `number`

Defined in: main.ts:236444

amount of money left in your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`balance`](../interfaces/IAppendixMoneyData.md#balance)

***

### limits?

> `optional` **limits**: [`AppendixLimitsMoneyData`](AppendixLimitsMoneyData.md)

Defined in: main.ts:236446

cost limits

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`limits`](../interfaces/IAppendixMoneyData.md#limits)

***

### statistics?

> `optional` **statistics**: [`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

Defined in: main.ts:236448

statistics of your spending

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`statistics`](../interfaces/IAppendixMoneyData.md#statistics)

***

### total?

> `optional` **total**: `number`

Defined in: main.ts:236442

total amount of money deposited to your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`total`](../interfaces/IAppendixMoneyData.md#total)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:236461

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:236481

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixMoneyData`](AppendixMoneyData.md)

Defined in: main.ts:236474

#### Parameters

##### data

`any`

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)
