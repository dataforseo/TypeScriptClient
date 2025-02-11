[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductConsiderationsSerpElementItem

# Class: ProductConsiderationsSerpElementItem

Defined in: main.ts:36789

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductConsiderationsSerpElementItem()

> **new ProductConsiderationsSerpElementItem**(`data`?): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

Defined in: main.ts:36801

#### Parameters

##### data?

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md)

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

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

> `optional` **items**: [`ProductConsiderationsElement`](ProductConsiderationsElement.md)[]

Defined in: main.ts:36793

contains arrays of specific images

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`items`](../interfaces/IProductConsiderationsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`position`](../interfaces/IProductConsiderationsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rank_absolute`](../interfaces/IProductConsiderationsSerpElementItem.md#rank_absolute)

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

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rank_group`](../interfaces/IProductConsiderationsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36797

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`rectangle`](../interfaces/IProductConsiderationsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36791

title of the row

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`title`](../interfaces/IProductConsiderationsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`type`](../interfaces/IProductConsiderationsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IProductConsiderationsSerpElementItem`](../interfaces/IProductConsiderationsSerpElementItem.md).[`xpath`](../interfaces/IProductConsiderationsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36806

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

Defined in: main.ts:36830

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

Defined in: main.ts:36823

#### Parameters

##### data

`any`

#### Returns

[`ProductConsiderationsSerpElementItem`](ProductConsiderationsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
