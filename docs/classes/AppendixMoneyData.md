[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppendixMoneyData

# Class: AppendixMoneyData

## Implements

- [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixMoneyData()

> **new AppendixMoneyData**(`data`?): [`AppendixMoneyData`](AppendixMoneyData.md)

#### Parameters

• **data?**: [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)

#### Defined in

main.ts:225564

## Properties

### balance?

> `optional` **balance**: `number`

amount of money left in your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`balance`](../interfaces/IAppendixMoneyData.md#balance)

#### Defined in

main.ts:225556

***

### limits?

> `optional` **limits**: [`AppendixLimitsMoneyData`](AppendixLimitsMoneyData.md)

cost limits

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`limits`](../interfaces/IAppendixMoneyData.md#limits)

#### Defined in

main.ts:225558

***

### statistics?

> `optional` **statistics**: [`AppendixStatisticsMoneyData`](AppendixStatisticsMoneyData.md)

statistics of your spending

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`statistics`](../interfaces/IAppendixMoneyData.md#statistics)

#### Defined in

main.ts:225560

***

### total?

> `optional` **total**: `number`

total amount of money deposited to your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`total`](../interfaces/IAppendixMoneyData.md#total)

#### Defined in

main.ts:225554

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:225573

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:225593

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixMoneyData`](AppendixMoneyData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)

#### Defined in

main.ts:225586
