[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ExploreBrandsSerpElementItem

# Class: ExploreBrandsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ExploreBrandsSerpElementItem()

> **new ExploreBrandsSerpElementItem**(`data`?): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Parameters

• **data?**: [`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md)

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:35840

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`ExploreBrandsElement`](ExploreBrandsElement.md)[]

contains arrays of specific images

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`items`](../interfaces/IExploreBrandsSerpElementItem.md#items)

#### Defined in

main.ts:35832

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`position`](../interfaces/IExploreBrandsSerpElementItem.md#position)

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

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rank_absolute`](../interfaces/IExploreBrandsSerpElementItem.md#rank_absolute)

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

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rank_group`](../interfaces/IExploreBrandsSerpElementItem.md#rank_group)

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

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rectangle`](../interfaces/IExploreBrandsSerpElementItem.md#rectangle)

#### Defined in

main.ts:35836

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`title`](../interfaces/IExploreBrandsSerpElementItem.md#title)

#### Defined in

main.ts:35830

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`type`](../interfaces/IExploreBrandsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`xpath`](../interfaces/IExploreBrandsSerpElementItem.md#xpath)

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

main.ts:35845

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

main.ts:35869

***

### fromJS()

> `static` **fromJS**(`data`): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35862
