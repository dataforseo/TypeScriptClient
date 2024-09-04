[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RefineProductsSerpElementItem

# Class: RefineProductsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RefineProductsSerpElementItem()

> **new RefineProductsSerpElementItem**(`data`?): [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Parameters

• **data?**: [`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md)

#### Returns

[`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:35460

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`RefineProductsElement`](RefineProductsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`items`](../interfaces/IRefineProductsSerpElementItem.md#items)

#### Defined in

main.ts:35452

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`position`](../interfaces/IRefineProductsSerpElementItem.md#position)

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

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rank_absolute`](../interfaces/IRefineProductsSerpElementItem.md#rank_absolute)

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

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rank_group`](../interfaces/IRefineProductsSerpElementItem.md#rank_group)

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

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`rectangle`](../interfaces/IRefineProductsSerpElementItem.md#rectangle)

#### Defined in

main.ts:35456

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`title`](../interfaces/IRefineProductsSerpElementItem.md#title)

#### Defined in

main.ts:35449

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`type`](../interfaces/IRefineProductsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRefineProductsSerpElementItem`](../interfaces/IRefineProductsSerpElementItem.md).[`xpath`](../interfaces/IRefineProductsSerpElementItem.md#xpath)

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

main.ts:35465

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

main.ts:35489

***

### fromJS()

> `static` **fromJS**(`data`): [`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RefineProductsSerpElementItem`](RefineProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35482
