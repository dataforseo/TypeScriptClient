[Documentation](../README.md) / [Exports](../modules.md) / Interests

# Class: Interests

## Implements

- [`IInterests`](../interfaces/IInterests.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Interests.md#constructor)

### Properties

- [keyword](Interests.md#keyword)
- [values](Interests.md#values)

### Methods

- [init](Interests.md#init)
- [toJSON](Interests.md#tojson)
- [fromJS](Interests.md#fromjs)

## Constructors

### constructor

• **new Interests**(`data?`): [`Interests`](Interests.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IInterests`](../interfaces/IInterests.md) |

#### Returns

[`Interests`](Interests.md)

#### Defined in

main.ts:125495

## Properties

### keyword

• `Optional` **keyword**: `string`

relevant keyword
the data included in the values element is based on this keyword

#### Implementation of

[IInterests](../interfaces/IInterests.md).[keyword](../interfaces/IInterests.md#keyword)

#### Defined in

main.ts:125489

___

### values

• `Optional` **values**: [`Values`](Values.md)[]

contains data on relative keyword popularity by country or region

#### Implementation of

[IInterests](../interfaces/IInterests.md).[values](../interfaces/IInterests.md#values)

#### Defined in

main.ts:125491

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

main.ts:125504

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

main.ts:125526

___

### fromJS

▸ **fromJS**(`data`): [`Interests`](Interests.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Interests`](Interests.md)

#### Defined in

main.ts:125519
