[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoSearchSerpElementItem

# Class: PeopleAlsoSearchSerpElementItem

Defined in: main.ts:32019

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoSearchSerpElementItem()

> **new PeopleAlsoSearchSerpElementItem**(`data`?): [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

Defined in: main.ts:32031

#### Parameters

##### data?

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md)

#### Returns

[`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: `string`[]

Defined in: main.ts:32023

contains arrays of specific images

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:32027

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`rectangle`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32021

title of the row

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`title`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IPeopleAlsoSearchSerpElementItem`](../interfaces/IPeopleAlsoSearchSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoSearchSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32036

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32060

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

Defined in: main.ts:32053

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoSearchSerpElementItem`](PeopleAlsoSearchSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
