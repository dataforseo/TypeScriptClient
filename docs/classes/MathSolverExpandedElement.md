**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MathSolverExpandedElement

# Class: MathSolverExpandedElement

## Implements

- [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverExpandedElement(data)

> **new MathSolverExpandedElement**(`data`?): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Parameters

• **data?**: [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Source

main.ts:34834

## Properties

### solution?

> **`optional`** **solution**: `string`[]

solution of the element
displays steps to solve the mathematical equation as specified in the element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`solution`](../interfaces/IMathSolverExpandedElement.md#solution)

#### Source

main.ts:34830

***

### title?

> **`optional`** **title**: `string`

title of the carousel item

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`title`](../interfaces/IMathSolverExpandedElement.md#title)

#### Source

main.ts:34827

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`type`](../interfaces/IMathSolverExpandedElement.md#type)

#### Source

main.ts:34825

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:34843

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:34866

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Source

main.ts:34859
