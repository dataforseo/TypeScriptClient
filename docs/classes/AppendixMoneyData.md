**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixMoneyData

# Class: AppendixMoneyData

## Implements

- [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixMoneyData(data)

> **new AppendixMoneyData**(`data`?): [`AppendixMoneyData`](AppendixMoneyData.md)

#### Parameters

• **data?**: [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)

#### Source

main.ts:221348

## Properties

### balance?

> **`optional`** **balance**: `number`

amount of money left in your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`balance`](../interfaces/IAppendixMoneyData.md#balance)

#### Source

main.ts:221340

***

### limits?

> **`optional`** **limits**: [`AppendixLimitsMoneyData`](AppendixLimitsMoneyData.md)

cost limits

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`limits`](../interfaces/IAppendixMoneyData.md#limits)

#### Source

main.ts:221342

***

### statistics?

> **`optional`** **statistics**: [`AppendixStatisticsDataInfo`](AppendixStatisticsDataInfo.md)

statistics of your spending

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`statistics`](../interfaces/IAppendixMoneyData.md#statistics)

#### Source

main.ts:221344

***

### total?

> **`optional`** **total**: `number`

total amount of money deposited to your account

#### Implementation of

[`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md).[`total`](../interfaces/IAppendixMoneyData.md#total)

#### Source

main.ts:221338

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:221357

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:221377

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppendixMoneyData`](AppendixMoneyData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)

#### Source

main.ts:221370
