[**Documentation**](../README.md)

***

[Documentation](../README.md) / VideoSerpElementItem

# Class: VideoSerpElementItem

Defined in: main.ts:33215

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new VideoSerpElementItem()

> **new VideoSerpElementItem**(`data`?): [`VideoSerpElementItem`](VideoSerpElementItem.md)

Defined in: main.ts:33225

#### Parameters

##### data?

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md)

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

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

> `optional` **items**: [`VideoElement`](VideoElement.md)[]

Defined in: main.ts:33217

contains arrays of specific images

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`items`](../interfaces/IVideoSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`position`](../interfaces/IVideoSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rank_absolute`](../interfaces/IVideoSerpElementItem.md#rank_absolute)

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

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rank_group`](../interfaces/IVideoSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:33221

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rectangle`](../interfaces/IVideoSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`type`](../interfaces/IVideoSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`xpath`](../interfaces/IVideoSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33230

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

Defined in: main.ts:33253

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`VideoSerpElementItem`](VideoSerpElementItem.md)

Defined in: main.ts:33246

#### Parameters

##### data

`any`

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
