[Documentation](../README.md) / [Exports](../modules.md) / MathSolverElement

# Class: MathSolverElement

## Implements

- [`IMathSolverElement`](../interfaces/IMathSolverElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MathSolverElement.md#constructor)

### Properties

- [expanded\_element](MathSolverElement.md#expanded_element)
- [title](MathSolverElement.md#title)
- [type](MathSolverElement.md#type)

### Methods

- [init](MathSolverElement.md#init)
- [toJSON](MathSolverElement.md#tojson)
- [fromJS](MathSolverElement.md#fromjs)

## Constructors

### constructor

• **new MathSolverElement**(`data?`): [`MathSolverElement`](MathSolverElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMathSolverElement`](../interfaces/IMathSolverElement.md) |

#### Returns

[`MathSolverElement`](MathSolverElement.md)

#### Defined in

main.ts:34118

## Properties

### expanded\_element

• `Optional` **expanded\_element**: [`MathSolverExpandedElement`](MathSolverExpandedElement.md)[]

expanded element

#### Implementation of

[IMathSolverElement](../interfaces/IMathSolverElement.md).[expanded_element](../interfaces/IMathSolverElement.md#expanded_element)

#### Defined in

main.ts:34114

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IMathSolverElement](../interfaces/IMathSolverElement.md).[title](../interfaces/IMathSolverElement.md#title)

#### Defined in

main.ts:34112

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMathSolverElement](../interfaces/IMathSolverElement.md).[type](../interfaces/IMathSolverElement.md#type)

#### Defined in

main.ts:34110

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

main.ts:34127

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

main.ts:34150

___

### fromJS

▸ **fromJS**(`data`): [`MathSolverElement`](MathSolverElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MathSolverElement`](MathSolverElement.md)

#### Defined in

main.ts:34143
