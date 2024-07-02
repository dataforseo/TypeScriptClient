**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixUserDataResultInfo

# Class: AppendixUserDataResultInfo

## Implements

- [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixUserDataResultInfo(data)

> **new AppendixUserDataResultInfo**(`data`?): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Parameters

• **data?**: [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Source

main.ts:221146

## Properties

### login?

> **`optional`** **login**: `string`

your login

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`login`](../interfaces/IAppendixUserDataResultInfo.md#login)

#### Source

main.ts:221133

***

### money?

> **`optional`** **money**: [`AppendixMoneyData`](AppendixMoneyData.md)

section of your spending, USD

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`money`](../interfaces/IAppendixUserDataResultInfo.md#money)

#### Source

main.ts:221140

***

### price?

> **`optional`** **price**: [`AppendixPriceData`](AppendixPriceData.md)

pricing

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`price`](../interfaces/IAppendixUserDataResultInfo.md#price)

#### Source

main.ts:221142

***

### rates?

> **`optional`** **rates**: [`AppendixRatesData`](AppendixRatesData.md)

your API rates

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`rates`](../interfaces/IAppendixUserDataResultInfo.md#rates)

#### Source

main.ts:221138

***

### timezone?

> **`optional`** **timezone**: `string`

your time zone
can be set in your profile settings

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`timezone`](../interfaces/IAppendixUserDataResultInfo.md#timezone)

#### Source

main.ts:221136

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:221155

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:221176

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Source

main.ts:221169
