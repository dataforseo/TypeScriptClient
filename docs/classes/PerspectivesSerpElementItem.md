[**Documentation**](../README.md)

***

[Documentation](../README.md) / PerspectivesSerpElementItem

# Class: PerspectivesSerpElementItem

Defined in: main.ts:37485

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PerspectivesSerpElementItem()

> **new PerspectivesSerpElementItem**(`data`?): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

Defined in: main.ts:37497

#### Parameters

##### data?

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md)

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

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

> `optional` **items**: [`PerspectivesElement`](PerspectivesElement.md)[]

Defined in: main.ts:37489

contains arrays of specific images

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`items`](../interfaces/IPerspectivesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`position`](../interfaces/IPerspectivesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_absolute`](../interfaces/IPerspectivesSerpElementItem.md#rank_absolute)

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

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_group`](../interfaces/IPerspectivesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:37493

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rectangle`](../interfaces/IPerspectivesSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37487

title of the row

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`title`](../interfaces/IPerspectivesSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`type`](../interfaces/IPerspectivesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`xpath`](../interfaces/IPerspectivesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37502

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

Defined in: main.ts:37526

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

Defined in: main.ts:37519

#### Parameters

##### data

`any`

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
