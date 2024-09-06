[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PopularProductsSerpElementItem

# Class: PopularProductsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularProductsSerpElementItem()

> **new PopularProductsSerpElementItem**(`data`?): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Parameters

• **data?**: [`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md)

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:33192

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`PopularProductsElement`](PopularProductsElement.md)[]

contains arrays of specific images

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`items`](../interfaces/IPopularProductsSerpElementItem.md#items)

#### Defined in

main.ts:33184

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`position`](../interfaces/IPopularProductsSerpElementItem.md#position)

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

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rank_absolute`](../interfaces/IPopularProductsSerpElementItem.md#rank_absolute)

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

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rank_group`](../interfaces/IPopularProductsSerpElementItem.md#rank_group)

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

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`rectangle`](../interfaces/IPopularProductsSerpElementItem.md#rectangle)

#### Defined in

main.ts:33188

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`title`](../interfaces/IPopularProductsSerpElementItem.md#title)

#### Defined in

main.ts:33182

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`type`](../interfaces/IPopularProductsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPopularProductsSerpElementItem`](../interfaces/IPopularProductsSerpElementItem.md).[`xpath`](../interfaces/IPopularProductsSerpElementItem.md#xpath)

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

main.ts:33197

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

main.ts:33221

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularProductsSerpElementItem`](PopularProductsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33214
