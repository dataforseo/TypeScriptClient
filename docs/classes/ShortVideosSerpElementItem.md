[**Documentation**](../README.md)

***

[Documentation](../README.md) / ShortVideosSerpElementItem

# Class: ShortVideosSerpElementItem

Defined in: main.ts:37015

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ShortVideosSerpElementItem()

> **new ShortVideosSerpElementItem**(`data`?): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

Defined in: main.ts:37027

#### Parameters

##### data?

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md)

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

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

> `optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

Defined in: main.ts:37019

contains arrays of specific images

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`items`](../interfaces/IShortVideosSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`position`](../interfaces/IShortVideosSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rank_absolute`](../interfaces/IShortVideosSerpElementItem.md#rank_absolute)

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

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rank_group`](../interfaces/IShortVideosSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:37023

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rectangle`](../interfaces/IShortVideosSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:37017

title of the row

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`title`](../interfaces/IShortVideosSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`type`](../interfaces/IShortVideosSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`xpath`](../interfaces/IShortVideosSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37032

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

Defined in: main.ts:37056

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

Defined in: main.ts:37049

#### Parameters

##### data

`any`

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
