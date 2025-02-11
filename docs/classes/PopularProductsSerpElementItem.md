[**Documentation**](../README.md)

***

[Documentation](../README.md) / PopularProductsSerpElementItem

# Class: PopularProductsSerpElementItem

Defined in: main.ts:34749

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PopularProductsSerpElementItem()

> **new PopularProductsSerpElementItem**(`data`?): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

Defined in: main.ts:34761

#### Parameters

##### data?

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md)

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

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

> `optional` **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

Defined in: main.ts:34753

contains arrays of specific images

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`items`](../interfaces/IPopularProductsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`position`](../interfaces/IPopularProductsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rank_absolute`](../interfaces/IPopularProductsSerpElementItem.md#rank_absolute)

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

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rank_group`](../interfaces/IPopularProductsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:34757

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rectangle`](../interfaces/IPopularProductsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34751

title of the row

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`title`](../interfaces/IPopularProductsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`type`](../interfaces/IPopularProductsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`xpath`](../interfaces/IPopularProductsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34766

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

Defined in: main.ts:34790

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

Defined in: main.ts:34783

#### Parameters

##### data

`any`

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
