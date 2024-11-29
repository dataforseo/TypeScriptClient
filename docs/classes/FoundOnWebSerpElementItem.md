[**Documentation**](../README.md)

***

[Documentation](../README.md) / FoundOnWebSerpElementItem

# Class: FoundOnWebSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new FoundOnWebSerpElementItem()

> **new FoundOnWebSerpElementItem**(`data`?): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

##### data?

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36927

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### items?

> `optional` **items**: [`FoundOnWebElement`](FoundOnWebElement.md)[]

contains arrays of specific images

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`items`](../interfaces/IFoundOnWebSerpElementItem.md#items)

#### Defined in

main.ts:36919

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`position`](../interfaces/IFoundOnWebSerpElementItem.md#position)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_absolute`](../interfaces/IFoundOnWebSerpElementItem.md#rank_absolute)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_group`](../interfaces/IFoundOnWebSerpElementItem.md#rank_group)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rectangle`](../interfaces/IFoundOnWebSerpElementItem.md#rectangle)

#### Defined in

main.ts:36923

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

search queries related to the elment

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`related_searches`](../interfaces/IFoundOnWebSerpElementItem.md#related_searches)

#### Defined in

main.ts:36917

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`title`](../interfaces/IFoundOnWebSerpElementItem.md#title)

#### Defined in

main.ts:36915

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`type`](../interfaces/IFoundOnWebSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`xpath`](../interfaces/IFoundOnWebSerpElementItem.md#xpath)

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

main.ts:36932

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

main.ts:36961

***

### fromJS()

> `static` **fromJS**(`data`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36954
