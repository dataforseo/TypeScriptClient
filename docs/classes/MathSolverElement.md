**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MathSolverElement

# Class: MathSolverElement

## Implements

- [`IMathSolverElement`](../interfaces/IMathSolverElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverElement(data)

> **new MathSolverElement**(`data`?): [`MathSolverElement`](MathSolverElement.md)

#### Parameters

• **data?**: [`IMathSolverElement`](../interfaces/IMathSolverElement.md)

#### Returns

[`MathSolverElement`](MathSolverElement.md)

#### Source

main.ts:35687

## Properties

### expanded\_element?

> **`optional`** **expanded\_element**: [`MathSolverExpandedElement`](MathSolverExpandedElement.md)[]

expanded element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`expanded_element`](../interfaces/IMathSolverElement.md#expanded_element)

#### Source

main.ts:35683

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`title`](../interfaces/IMathSolverElement.md#title)

#### Source

main.ts:35681

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`type`](../interfaces/IMathSolverElement.md#type)

#### Source

main.ts:35679

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:35696

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:35719

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MathSolverElement`](MathSolverElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`MathSolverElement`](MathSolverElement.md)

#### Source

main.ts:35712
