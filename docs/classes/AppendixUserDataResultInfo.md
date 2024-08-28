[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppendixUserDataResultInfo

# Class: AppendixUserDataResultInfo

## Implements

- [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixUserDataResultInfo()

> **new AppendixUserDataResultInfo**(`data`?): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Parameters

• **data?**: [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Defined in

main.ts:228377

## Properties

### login?

> `optional` **login**: `string`

your login

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`login`](../interfaces/IAppendixUserDataResultInfo.md#login)

#### Defined in

main.ts:228364

***

### money?

> `optional` **money**: [`AppendixMoneyData`](AppendixMoneyData.md)

section of your spending, USD

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`money`](../interfaces/IAppendixUserDataResultInfo.md#money)

#### Defined in

main.ts:228371

***

### price?

> `optional` **price**: [`AppendixPriceData`](AppendixPriceData.md)

pricing

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`price`](../interfaces/IAppendixUserDataResultInfo.md#price)

#### Defined in

main.ts:228373

***

### rates?

> `optional` **rates**: [`AppendixRatesData`](AppendixRatesData.md)

your API rates

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`rates`](../interfaces/IAppendixUserDataResultInfo.md#rates)

#### Defined in

main.ts:228369

***

### timezone?

> `optional` **timezone**: `string`

your time zone
can be set in your profile settings

#### Implementation of

[`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md).[`timezone`](../interfaces/IAppendixUserDataResultInfo.md#timezone)

#### Defined in

main.ts:228367

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:228386

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:228407

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Defined in

main.ts:228400
