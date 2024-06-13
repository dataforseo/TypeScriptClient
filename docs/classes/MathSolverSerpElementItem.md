**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MathSolverSerpElementItem

# Class: MathSolverSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverSerpElementItem(data)

> **new MathSolverSerpElementItem**(`data`?): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Parameters

• **data?**: [`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md)

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:35409

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19817

***

### items?

> **`optional`** **items**: [`MathSolverElement`](MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`items`](../interfaces/IMathSolverSerpElementItem.md#items)

#### Source

main.ts:35399

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`links`](../interfaces/IMathSolverSerpElementItem.md#links)

#### Source

main.ts:35401

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`position`](../interfaces/IMathSolverSerpElementItem.md#position)

#### Source

main.ts:35389

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rank_absolute`](../interfaces/IMathSolverSerpElementItem.md#rank_absolute)

#### Source

main.ts:35385

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rank_group`](../interfaces/IMathSolverSerpElementItem.md#rank_group)

#### Source

main.ts:35381

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`rectangle`](../interfaces/IMathSolverSerpElementItem.md#rectangle)

#### Source

main.ts:35405

***

### result?

> **`optional`** **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`result`](../interfaces/IMathSolverSerpElementItem.md#result)

#### Source

main.ts:35396

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`title`](../interfaces/IMathSolverSerpElementItem.md#title)

#### Source

main.ts:35393

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMathSolverSerpElementItem`](../interfaces/IMathSolverSerpElementItem.md).[`xpath`](../interfaces/IMathSolverSerpElementItem.md#xpath)

#### Source

main.ts:35391

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:35414

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:35448

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MathSolverSerpElementItem`](MathSolverSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:35441
