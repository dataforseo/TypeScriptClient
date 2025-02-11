[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverElement

# Class: MathSolverElement

Defined in: main.ts:36255

## Implements

- [`IMathSolverElement`](../interfaces/IMathSolverElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MathSolverElement()

> **new MathSolverElement**(`data`?): [`MathSolverElement`](MathSolverElement.md)

Defined in: main.ts:36265

#### Parameters

##### data?

[`IMathSolverElement`](../interfaces/IMathSolverElement.md)

#### Returns

[`MathSolverElement`](MathSolverElement.md)

## Properties

### expanded\_element?

> `optional` **expanded\_element**: [`MathSolverExpandedElement`](MathSolverExpandedElement.md)[]

Defined in: main.ts:36261

expanded element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`expanded_element`](../interfaces/IMathSolverElement.md#expanded_element)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36259

title of a given link element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`title`](../interfaces/IMathSolverElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:36257

type of element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`type`](../interfaces/IMathSolverElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36274

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36297

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverElement`](MathSolverElement.md)

Defined in: main.ts:36290

#### Parameters

##### data

`any`

#### Returns

[`MathSolverElement`](MathSolverElement.md)
