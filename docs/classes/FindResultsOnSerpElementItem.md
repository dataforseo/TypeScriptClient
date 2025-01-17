[**Documentation**](../README.md)

***

[Documentation](../README.md) / FindResultsOnSerpElementItem

# Class: FindResultsOnSerpElementItem

Defined in: main.ts:35273

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FindResultsOnSerpElementItem()

> **new FindResultsOnSerpElementItem**(`data`?): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

Defined in: main.ts:35283

#### Parameters

##### data?

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

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

Defined in: main.ts:35275

contains arrays of specific images

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`items`](../interfaces/IFindResultsOnSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`position`](../interfaces/IFindResultsOnSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_absolute`](../interfaces/IFindResultsOnSerpElementItem.md#rank_absolute)

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

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_group`](../interfaces/IFindResultsOnSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35279

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rectangle`](../interfaces/IFindResultsOnSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`type`](../interfaces/IFindResultsOnSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`xpath`](../interfaces/IFindResultsOnSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35288

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

Defined in: main.ts:35311

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

Defined in: main.ts:35304

#### Parameters

##### data

`any`

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
