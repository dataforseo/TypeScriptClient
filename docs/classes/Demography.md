**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Demography

# Class: Demography

## Implements

- [`IDemography`](../interfaces/IDemography.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Demography(data)

> **new Demography**(`data`?): [`Demography`](Demography.md)

#### Parameters

• **data?**: [`IDemography`](../interfaces/IDemography.md)

#### Returns

[`Demography`](Demography.md)

#### Source

main.ts:126358

## Properties

### age?

> **`optional`** **age**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

distribution of keyword popularity by age

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`age`](../interfaces/IDemography.md#age)

#### Source

main.ts:126352

***

### gender?

> **`optional`** **gender**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

distribution of keyword popularity by gender

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`gender`](../interfaces/IDemography.md#gender)

#### Source

main.ts:126354

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:126367

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:126393

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Demography`](Demography.md)

#### Parameters

• **data**: `any`

#### Returns

[`Demography`](Demography.md)

#### Source

main.ts:126386