**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RefineProductsSerpElementItem

# Class: RefineProductsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RefineProductsSerpElementItem(data)

> **new RefineProductsSerpElementItem**(`data`?): [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Parameters

• **data?**: [`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md)

#### Returns

[`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:36211

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19830

***

### items?

> **`optional`** **items**: [`RefineProductsElement`](RefineProductsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`items`](../interfaces/IRefineProductsSerpElementItem.md#items)

#### Source

main.ts:36203

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`position`](../interfaces/IRefineProductsSerpElementItem.md#position)

#### Source

main.ts:36196

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rank_absolute`](../interfaces/IRefineProductsSerpElementItem.md#rank_absolute)

#### Source

main.ts:36192

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rank_group`](../interfaces/IRefineProductsSerpElementItem.md#rank_group)

#### Source

main.ts:36188

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rectangle`](../interfaces/IRefineProductsSerpElementItem.md#rectangle)

#### Source

main.ts:36207

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`title`](../interfaces/IRefineProductsSerpElementItem.md#title)

#### Source

main.ts:36200

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`xpath`](../interfaces/IRefineProductsSerpElementItem.md#xpath)

#### Source

main.ts:36198

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

main.ts:36216

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

main.ts:36244

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:36237
