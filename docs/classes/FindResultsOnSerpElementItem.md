[**Documentation**](../README.md)

***

[Documentation](../README.md) / FindResultsOnSerpElementItem

# Class: FindResultsOnSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FindResultsOnSerpElementItem()

> **new FindResultsOnSerpElementItem**(`data`?): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

##### data?

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md)

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:35283

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### items?

> `optional` **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

contains arrays of specific images

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`items`](../interfaces/IFindResultsOnSerpElementItem.md#items)

#### Defined in

main.ts:35275

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`position`](../interfaces/IFindResultsOnSerpElementItem.md#position)

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

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_absolute`](../interfaces/IFindResultsOnSerpElementItem.md#rank_absolute)

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

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rank_group`](../interfaces/IFindResultsOnSerpElementItem.md#rank_group)

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

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`rectangle`](../interfaces/IFindResultsOnSerpElementItem.md#rectangle)

#### Defined in

main.ts:35279

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`type`](../interfaces/IFindResultsOnSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFindResultsOnSerpElementItem`](../interfaces/IFindResultsOnSerpElementItem.md).[`xpath`](../interfaces/IFindResultsOnSerpElementItem.md#xpath)

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

main.ts:35288

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

main.ts:35311

***

### fromJS()

> `static` **fromJS**(`data`): [`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`FindResultsOnSerpElementItem`](FindResultsOnSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:35304
