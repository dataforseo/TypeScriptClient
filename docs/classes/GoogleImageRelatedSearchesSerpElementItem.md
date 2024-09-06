[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleImageRelatedSearchesSerpElementItem

# Class: GoogleImageRelatedSearchesSerpElementItem

## Extends

- [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Implements

- [`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleImageRelatedSearchesSerpElementItem()

> **new GoogleImageRelatedSearchesSerpElementItem**(`data`?): [`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md)

#### Returns

[`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`constructor`](BaseGoogleImagesSerpElementItem.md#constructors)

#### Defined in

main.ts:47823

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`_discriminator`](BaseGoogleImagesSerpElementItem.md#_discriminator)

#### Defined in

main.ts:47581

***

### items?

> `optional` **items**: `string`[]

elements of search results found in SERP

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#items)

#### Defined in

main.ts:47815

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#position)

#### Defined in

main.ts:47813

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_absolute`](BaseGoogleImagesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:47577

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_group`](BaseGoogleImagesSerpElementItem.md#rank_group)

#### Defined in

main.ts:47574

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`rectangle`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#rectangle)

#### Defined in

main.ts:47819

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`type`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`type`](BaseGoogleImagesSerpElementItem.md#type)

#### Defined in

main.ts:47570

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`xpath`](BaseGoogleImagesSerpElementItem.md#xpath)

#### Defined in

main.ts:47579

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`init`](BaseGoogleImagesSerpElementItem.md#init)

#### Defined in

main.ts:47828

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`toJSON`](BaseGoogleImagesSerpElementItem.md#tojson)

#### Defined in

main.ts:47852

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`fromJS`](BaseGoogleImagesSerpElementItem.md#fromjs)

#### Defined in

main.ts:47845
