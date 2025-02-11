[**Documentation**](../README.md)

***

[Documentation](../README.md) / ExploreBrandsSerpElementItem

# Class: ExploreBrandsSerpElementItem

Defined in: main.ts:37329

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ExploreBrandsSerpElementItem()

> **new ExploreBrandsSerpElementItem**(`data`?): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

Defined in: main.ts:37341

#### Parameters

##### data?

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md)

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

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

> `optional` **items**: [`ExploreBrandsElement`](ExploreBrandsElement.md)[]

Defined in: main.ts:37333

contains arrays of specific images

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`items`](../interfaces/IExploreBrandsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`position`](../interfaces/IExploreBrandsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rank_absolute`](../interfaces/IExploreBrandsSerpElementItem.md#rank_absolute)

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

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rank_group`](../interfaces/IExploreBrandsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:37337

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`rectangle`](../interfaces/IExploreBrandsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37331

title of the row

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`title`](../interfaces/IExploreBrandsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`type`](../interfaces/IExploreBrandsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IExploreBrandsSerpElementItem`](../interfaces/IExploreBrandsSerpElementItem.md).[`xpath`](../interfaces/IExploreBrandsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37346

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

Defined in: main.ts:37370

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

Defined in: main.ts:37363

#### Parameters

##### data

`any`

#### Returns

[`ExploreBrandsSerpElementItem`](ExploreBrandsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
