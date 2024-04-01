[Documentation](../README.md) / [Exports](../modules.md) / MathSolverExpandedElement

# Class: MathSolverExpandedElement

## Implements

- [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MathSolverExpandedElement.md#constructor)

### Properties

- [solution](MathSolverExpandedElement.md#solution)
- [title](MathSolverExpandedElement.md#title)
- [type](MathSolverExpandedElement.md#type)

### Methods

- [init](MathSolverExpandedElement.md#init)
- [toJSON](MathSolverExpandedElement.md#tojson)
- [fromJS](MathSolverExpandedElement.md#fromjs)

## Constructors

### constructor

• **new MathSolverExpandedElement**(`data?`): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md) |

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Defined in

main.ts:34828

## Properties

### solution

• `Optional` **solution**: `string`[]

solution of the element
displays steps to solve the mathematical equation as specified in the element

#### Implementation of

[IMathSolverExpandedElement](../interfaces/IMathSolverExpandedElement.md).[solution](../interfaces/IMathSolverExpandedElement.md#solution)

#### Defined in

main.ts:34824

___

### title

• `Optional` **title**: `string`

title of the carousel item

#### Implementation of

[IMathSolverExpandedElement](../interfaces/IMathSolverExpandedElement.md).[title](../interfaces/IMathSolverExpandedElement.md#title)

#### Defined in

main.ts:34821

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMathSolverExpandedElement](../interfaces/IMathSolverExpandedElement.md).[type](../interfaces/IMathSolverExpandedElement.md#type)

#### Defined in

main.ts:34819

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

main.ts:34837

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

main.ts:34860

___

### fromJS

▸ **fromJS**(`data`): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Defined in

main.ts:34853
