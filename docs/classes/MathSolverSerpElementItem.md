[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MathSolverSerpElementItem

# Class: MathSolverSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverSerpElementItem()

> **new MathSolverSerpElementItem**(`data`?): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Parameters

• **data?**: [`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md)

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:34615

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`MathSolverElement`](MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`items`](../interfaces/IMathSolverSerpElementItem.md#items)

#### Defined in

main.ts:34605

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`links`](../interfaces/IMathSolverSerpElementItem.md#links)

#### Defined in

main.ts:34607

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`position`](../interfaces/IMathSolverSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:20363

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rank_absolute`](../interfaces/IMathSolverSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20359

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rank_group`](../interfaces/IMathSolverSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20356

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rectangle`](../interfaces/IMathSolverSerpElementItem.md#rectangle)

#### Defined in

main.ts:34611

***

### result?

> `optional` **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`result`](../interfaces/IMathSolverSerpElementItem.md#result)

#### Defined in

main.ts:34602

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`title`](../interfaces/IMathSolverSerpElementItem.md#title)

#### Defined in

main.ts:34599

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`type`](../interfaces/IMathSolverSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`xpath`](../interfaces/IMathSolverSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20365

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:34620

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:34650

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:34643
