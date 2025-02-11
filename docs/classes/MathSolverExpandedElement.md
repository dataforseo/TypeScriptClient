[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverExpandedElement

# Class: MathSolverExpandedElement

Defined in: main.ts:36183

## Implements

- [`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MathSolverExpandedElement()

> **new MathSolverExpandedElement**(`data`?): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

Defined in: main.ts:36194

#### Parameters

##### data?

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md)

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)

## Properties

### solution?

> `optional` **solution**: `string`[]

Defined in: main.ts:36190

solution of the element
displays steps to solve the mathematical equation as specified in the element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`solution`](../interfaces/IMathSolverExpandedElement.md#solution)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36187

title of the carousel item

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`title`](../interfaces/IMathSolverExpandedElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:36185

type of element

#### Implementation of

[`IMathSolverExpandedElement`](../interfaces/IMathSolverExpandedElement.md).[`type`](../interfaces/IMathSolverExpandedElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36203

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36226

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverExpandedElement`](MathSolverExpandedElement.md)

Defined in: main.ts:36219

#### Parameters

##### data

`any`

#### Returns

[`MathSolverExpandedElement`](MathSolverExpandedElement.md)
