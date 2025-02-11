[**Documentation**](../README.md)

***

[Documentation](../README.md) / FoundOnWebSerpElementItem

# Class: FoundOnWebSerpElementItem

Defined in: main.ts:36929

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new FoundOnWebSerpElementItem()

> **new FoundOnWebSerpElementItem**(`data`?): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

Defined in: main.ts:36943

#### Parameters

##### data?

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md)

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

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

> `optional` **items**: [`FoundOnWebElement`](FoundOnWebElement.md)[]

Defined in: main.ts:36935

contains arrays of specific images

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`items`](../interfaces/IFoundOnWebSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`position`](../interfaces/IFoundOnWebSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_absolute`](../interfaces/IFoundOnWebSerpElementItem.md#rank_absolute)

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

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rank_group`](../interfaces/IFoundOnWebSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36939

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`rectangle`](../interfaces/IFoundOnWebSerpElementItem.md#rectangle)

***

### related\_searches?

> `optional` **related\_searches**: `string`[]

Defined in: main.ts:36933

search queries related to the elment

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`related_searches`](../interfaces/IFoundOnWebSerpElementItem.md#related_searches)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36931

title of the row

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`title`](../interfaces/IFoundOnWebSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`type`](../interfaces/IFoundOnWebSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IFoundOnWebSerpElementItem`](../interfaces/IFoundOnWebSerpElementItem.md).[`xpath`](../interfaces/IFoundOnWebSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36948

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

Defined in: main.ts:36977

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

Defined in: main.ts:36970

#### Parameters

##### data

`any`

#### Returns

[`FoundOnWebSerpElementItem`](FoundOnWebSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
