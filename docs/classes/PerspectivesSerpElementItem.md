[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PerspectivesSerpElementItem

# Class: PerspectivesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PerspectivesSerpElementItem()

> **new PerspectivesSerpElementItem**(`data`?): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Parameters

• **data?**: [`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md)

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36012

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`PerspectivesElement`](PerspectivesElement.md)[]

contains arrays of specific images

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`items`](../interfaces/IPerspectivesSerpElementItem.md#items)

#### Defined in

main.ts:36004

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`position`](../interfaces/IPerspectivesSerpElementItem.md#position)

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

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_absolute`](../interfaces/IPerspectivesSerpElementItem.md#rank_absolute)

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

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_group`](../interfaces/IPerspectivesSerpElementItem.md#rank_group)

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

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rectangle`](../interfaces/IPerspectivesSerpElementItem.md#rectangle)

#### Defined in

main.ts:36008

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`title`](../interfaces/IPerspectivesSerpElementItem.md#title)

#### Defined in

main.ts:36002

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`type`](../interfaces/IPerspectivesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`xpath`](../interfaces/IPerspectivesSerpElementItem.md#xpath)

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

main.ts:36017

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

main.ts:36041

***

### fromJS()

> `static` **fromJS**(`data`): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36034
