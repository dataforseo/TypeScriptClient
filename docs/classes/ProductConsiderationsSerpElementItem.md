[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductConsiderationsSerpElementItem

# Class: ProductConsiderationsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsSerpElementItem()

> **new ProductConsiderationsSerpElementItem**(`data`?): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Parameters

##### data?

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md)

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36785

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### items?

> `optional` **items**: [`ProductConsiderationsElement`](ProductConsiderationsElement.md)[]

contains arrays of specific images

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`items`](../interfaces/IProductConsiderationsSerpElementItem.md#items)

#### Defined in

main.ts:36777

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`position`](../interfaces/IProductConsiderationsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rank_absolute`](../interfaces/IProductConsiderationsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21037

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rank_group`](../interfaces/IProductConsiderationsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21034

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rectangle`](../interfaces/IProductConsiderationsSerpElementItem.md#rectangle)

#### Defined in

main.ts:36781

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`title`](../interfaces/IProductConsiderationsSerpElementItem.md#title)

#### Defined in

main.ts:36775

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`type`](../interfaces/IProductConsiderationsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`xpath`](../interfaces/IProductConsiderationsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:36790

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:36814

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36807
