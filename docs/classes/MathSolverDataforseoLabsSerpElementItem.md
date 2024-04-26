**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MathSolverDataforseoLabsSerpElementItem

# Class: MathSolverDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MathSolverDataforseoLabsSerpElementItem(data)

> **new MathSolverDataforseoLabsSerpElementItem**(`data`?): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md)

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:95469

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20213

***

### items?

> **`optional`** **items**: [`MathSolverElement`](MathSolverElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:95461

***

### links?

> **`optional`** **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#links)

#### Source

main.ts:95465

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:95451

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:95447

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:95444

***

### result?

> **`optional`** **result**: `string`

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`result`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#result)

#### Source

main.ts:95458

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#title)

#### Source

main.ts:95455

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:95453

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:95474

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:95507

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:95500
