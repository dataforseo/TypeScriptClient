[Documentation](../README.md) / [Exports](../modules.md) / InterestsComparison

# Class: InterestsComparison

## Implements

- [`IInterestsComparison`](../interfaces/IInterestsComparison.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](InterestsComparison.md#constructor)

### Properties

- [absolute\_items](InterestsComparison.md#absolute_items)
- [items](InterestsComparison.md#items)

### Methods

- [init](InterestsComparison.md#init)
- [toJSON](InterestsComparison.md#tojson)
- [fromJS](InterestsComparison.md#fromjs)

## Constructors

### constructor

• **new InterestsComparison**(`data?`): [`InterestsComparison`](InterestsComparison.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IInterestsComparison`](../interfaces/IInterestsComparison.md) |

#### Returns

[`InterestsComparison`](InterestsComparison.md)

#### Defined in

main.ts:125661

## Properties

### absolute\_items

• `Optional` **absolute\_items**: [`AbsoluteItems`](AbsoluteItems.md)[]

keyword popularity rates across all locations
values in this array represent percentages relative to the maximum value across all locations

#### Implementation of

[IInterestsComparison](../interfaces/IInterestsComparison.md).[absolute_items](../interfaces/IInterestsComparison.md#absolute_items)

#### Defined in

main.ts:125657

___

### items

• `Optional` **items**: [`AbsoluteItems`](AbsoluteItems.md)[]

contains keyword popularity and related data

#### Implementation of

[IInterestsComparison](../interfaces/IInterestsComparison.md).[items](../interfaces/IInterestsComparison.md#items)

#### Defined in

main.ts:125654

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

main.ts:125670

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

main.ts:125696

___

### fromJS

▸ **fromJS**(`data`): [`InterestsComparison`](InterestsComparison.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`InterestsComparison`](InterestsComparison.md)

#### Defined in

main.ts:125689
