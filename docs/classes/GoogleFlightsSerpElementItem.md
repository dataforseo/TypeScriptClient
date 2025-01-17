[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFlightsSerpElementItem

# Class: GoogleFlightsSerpElementItem

Defined in: main.ts:33599

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFlightsSerpElementItem()

> **new GoogleFlightsSerpElementItem**(`data`?): [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

Defined in: main.ts:33613

#### Parameters

##### data?

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md)

#### Returns

[`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

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

> `optional` **items**: [`GoogleFlightsElement`](GoogleFlightsElement.md)[]

Defined in: main.ts:33605

contains arrays of specific images

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`items`](../interfaces/IGoogleFlightsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`position`](../interfaces/IGoogleFlightsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFlightsSerpElementItem.md#rank_absolute)

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

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFlightsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:33609

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`rectangle`](../interfaces/IGoogleFlightsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:33601

title of the row

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`title`](../interfaces/IGoogleFlightsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`type`](../interfaces/IGoogleFlightsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:33603

source URL

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`url`](../interfaces/IGoogleFlightsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IGoogleFlightsSerpElementItem`](../interfaces/IGoogleFlightsSerpElementItem.md).[`xpath`](../interfaces/IGoogleFlightsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33618

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

Defined in: main.ts:33643

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

Defined in: main.ts:33636

#### Parameters

##### data

`any`

#### Returns

[`GoogleFlightsSerpElementItem`](GoogleFlightsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
