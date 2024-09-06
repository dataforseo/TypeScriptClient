[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PeopleAlsoSearchSerpElementItem

# Class: PeopleAlsoSearchSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoSearchSerpElementItem()

> **new PeopleAlsoSearchSerpElementItem**(`data`?): [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md)

#### Returns

[`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:30472

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: `string`[]

contains arrays of specific images

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#items)

#### Defined in

main.ts:30464

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#position)

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

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rank_absolute)

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

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rank_group)

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

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`rectangle`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rectangle)

#### Defined in

main.ts:30468

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`title`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#title)

#### Defined in

main.ts:30462

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#xpath)

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

main.ts:30477

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

main.ts:30501

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30494
