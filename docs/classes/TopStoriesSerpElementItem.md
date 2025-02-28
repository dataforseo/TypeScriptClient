[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopStoriesSerpElementItem

# Class: TopStoriesSerpElementItem

Defined in: main.ts:31693

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TopStoriesSerpElementItem()

> **new TopStoriesSerpElementItem**(`data`?): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

Defined in: main.ts:31705

#### Parameters

##### data?

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md)

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

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

> `optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

Defined in: main.ts:31697

contains arrays of specific images

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`items`](../interfaces/ITopStoriesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`position`](../interfaces/ITopStoriesSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rank_absolute`](../interfaces/ITopStoriesSerpElementItem.md#rank_absolute)

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

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rank_group`](../interfaces/ITopStoriesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:31701

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`rectangle`](../interfaces/ITopStoriesSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:31695

title of the row

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`title`](../interfaces/ITopStoriesSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`type`](../interfaces/ITopStoriesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`ITopStoriesSerpElementItem`](../interfaces/ITopStoriesSerpElementItem.md).[`xpath`](../interfaces/ITopStoriesSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31710

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

Defined in: main.ts:31734

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

Defined in: main.ts:31727

#### Parameters

##### data

`any`

#### Returns

[`TopStoriesSerpElementItem`](TopStoriesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
