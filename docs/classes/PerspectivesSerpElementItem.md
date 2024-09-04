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

main.ts:37459

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`PerspectivesElement`](PerspectivesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`items`](../interfaces/IPerspectivesSerpElementItem.md#items)

#### Defined in

main.ts:37451

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`position`](../interfaces/IPerspectivesSerpElementItem.md#position)

#### Defined in

main.ts:37444

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_absolute`](../interfaces/IPerspectivesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:37440

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_group`](../interfaces/IPerspectivesSerpElementItem.md#rank_group)

#### Defined in

main.ts:37436

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rectangle`](../interfaces/IPerspectivesSerpElementItem.md#rectangle)

#### Defined in

main.ts:37455

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`title`](../interfaces/IPerspectivesSerpElementItem.md#title)

#### Defined in

main.ts:37448

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`xpath`](../interfaces/IPerspectivesSerpElementItem.md#xpath)

#### Defined in

main.ts:37446

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

main.ts:37464

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

main.ts:37492

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

main.ts:37485
