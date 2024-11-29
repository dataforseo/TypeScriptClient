[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverElement

# Class: MathSolverElement

## Implements

- [`IMathSolverElement`](../interfaces/IMathSolverElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverElement()

> **new MathSolverElement**(`data`?): [`MathSolverElement`](MathSolverElement.md)

#### Parameters

##### data?

[`IMathSolverElement`](../interfaces/IMathSolverElement.md)

#### Returns

[`MathSolverElement`](MathSolverElement.md)

#### Defined in

main.ts:36249

## Properties

### expanded\_element?

> `optional` **expanded\_element**: [`MathSolverExpandedElement`](MathSolverExpandedElement.md)[]

expanded element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`expanded_element`](../interfaces/IMathSolverElement.md#expanded_element)

#### Defined in

main.ts:36245

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`title`](../interfaces/IMathSolverElement.md#title)

#### Defined in

main.ts:36243

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMathSolverElement`](../interfaces/IMathSolverElement.md).[`type`](../interfaces/IMathSolverElement.md#type)

#### Defined in

main.ts:36241

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:36258

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:36281

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverElement`](MathSolverElement.md)

#### Parameters

##### data

`any`

#### Returns

[`MathSolverElement`](MathSolverElement.md)

#### Defined in

main.ts:36274
