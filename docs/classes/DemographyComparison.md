[Documentation](../README.md) / [Exports](../modules.md) / DemographyComparison

# Class: DemographyComparison

## Implements

- [`IDemographyComparison`](../interfaces/IDemographyComparison.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DemographyComparison.md#constructor)

### Properties

- [age](DemographyComparison.md#age)
- [gender](DemographyComparison.md#gender)

### Methods

- [init](DemographyComparison.md#init)
- [toJSON](DemographyComparison.md#tojson)
- [fromJS](DemographyComparison.md#fromjs)

## Constructors

### constructor

• **new DemographyComparison**(`data?`): [`DemographyComparison`](DemographyComparison.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDemographyComparison`](../interfaces/IDemographyComparison.md) |

#### Returns

[`DemographyComparison`](DemographyComparison.md)

#### Defined in

main.ts:126422

## Properties

### age

• `Optional` **age**: `Object`

comparison of keyword popularity data by age

#### Index signature

▪ [key: `string`]: (`number` \| `undefined`)[]

#### Implementation of

[IDemographyComparison](../interfaces/IDemographyComparison.md).[age](../interfaces/IDemographyComparison.md#age)

#### Defined in

main.ts:126416

___

### gender

• `Optional` **gender**: `Object`

comparison of keyword popularity data by gender

#### Index signature

▪ [key: `string`]: (`number` \| `undefined`)[]

#### Implementation of

[IDemographyComparison](../interfaces/IDemographyComparison.md).[gender](../interfaces/IDemographyComparison.md#gender)

#### Defined in

main.ts:126418

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

main.ts:126431

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

main.ts:126461

___

### fromJS

▸ **fromJS**(`data`): [`DemographyComparison`](DemographyComparison.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DemographyComparison`](DemographyComparison.md)

#### Defined in

main.ts:126454
