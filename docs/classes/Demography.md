[Documentation](../README.md) / [Exports](../modules.md) / Demography

# Class: Demography

## Implements

- [`IDemography`](../interfaces/IDemography.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Demography.md#constructor)

### Properties

- [age](Demography.md#age)
- [gender](Demography.md#gender)

### Methods

- [init](Demography.md#init)
- [toJSON](Demography.md#tojson)
- [fromJS](Demography.md#fromjs)

## Constructors

### constructor

• **new Demography**(`data?`): [`Demography`](Demography.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDemography`](../interfaces/IDemography.md) |

#### Returns

[`Demography`](Demography.md)

#### Defined in

main.ts:126350

## Properties

### age

• `Optional` **age**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

distribution of keyword popularity by age

#### Implementation of

[IDemography](../interfaces/IDemography.md).[age](../interfaces/IDemography.md#age)

#### Defined in

main.ts:126344

___

### gender

• `Optional` **gender**: [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)[]

distribution of keyword popularity by gender

#### Implementation of

[IDemography](../interfaces/IDemography.md).[gender](../interfaces/IDemography.md#gender)

#### Defined in

main.ts:126346

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:126359

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:126385

___

### fromJS

▸ **fromJS**(`data`): [`Demography`](Demography.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Demography`](Demography.md)

#### Defined in

main.ts:126378
