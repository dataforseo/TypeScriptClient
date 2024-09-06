[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MathSolverExpandedElement

# Class: MathSolverExpandedElement

## Implements

- [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverExpandedElement()

> **new MathSolverExpandedElement**(`data`?): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Parameters

• **data?**: [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Defined in

main.ts:34693

## Properties

### solution?

> `optional` **solution**: `string`[]

solution of the element
displays steps to solve the mathematical equation as specified in the element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`solution`](../interfaces/IMathSolverExpandedElement.md#solution)

#### Defined in

main.ts:34689

***

### title?

> `optional` **title**: `string`

title of the carousel item

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`title`](../interfaces/IMathSolverExpandedElement.md#title)

#### Defined in

main.ts:34686

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`type`](../interfaces/IMathSolverExpandedElement.md#type)

#### Defined in

main.ts:34684

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:34702

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:34725

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)

#### Defined in

main.ts:34718
