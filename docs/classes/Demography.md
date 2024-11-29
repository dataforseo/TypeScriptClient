[**Documentation**](../README.md)

***

[Documentation](../README.md) / Demography

# Class: Demography

## Implements

- [`IDemography`](../interfaces/IDemography.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Demography()

> **new Demography**(`data`?): [`Demography`](Demography.md)

#### Parameters

##### data?

[`IDemography`](../interfaces/IDemography.md)

#### Returns

[`Demography`](Demography.md)

#### Defined in

main.ts:137276

## Properties

### age?

> `optional` **age**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

distribution of keyword popularity by age

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`age`](../interfaces/IDemography.md#age)

#### Defined in

main.ts:137270

***

### gender?

> `optional` **gender**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

distribution of keyword popularity by gender

#### Implementation of

[`IDemography`](../interfaces/IDemography.md).[`gender`](../interfaces/IDemography.md#gender)

#### Defined in

main.ts:137272

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:137285

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:137311

***

### fromJS()

> `static` **fromJS**(`data`): [`Demography`](Demography.md)

#### Parameters

##### data

`any`

#### Returns

[`Demography`](Demography.md)

#### Defined in

main.ts:137304
