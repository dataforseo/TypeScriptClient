[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RelatedSearchesSerpElementItem

# Class: RelatedSearchesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedSearchesSerpElementItem()

> **new RelatedSearchesSerpElementItem**(`data`?): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Parameters

• **data?**: [`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md)

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32436

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

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IRelatedSearchesSerpElementItem.md#items)

#### Defined in

main.ts:32428

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IRelatedSearchesSerpElementItem.md#position)

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

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_absolute)

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

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IRelatedSearchesSerpElementItem.md#rank_group)

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

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`rectangle`](../interfaces/IRelatedSearchesSerpElementItem.md#rectangle)

#### Defined in

main.ts:32432

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`type`](../interfaces/IRelatedSearchesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IRelatedSearchesSerpElementItem`](../interfaces/IRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IRelatedSearchesSerpElementItem.md#xpath)

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

main.ts:32441

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

main.ts:32464

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedSearchesSerpElementItem`](RelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32457
