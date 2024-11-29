[**Documentation**](../README.md)

***

[Documentation](../README.md) / MapSerpElementItem

# Class: MapSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MapSerpElementItem()

> **new MapSerpElementItem**(`data`?): [`MapSerpElementItem`](MapSerpElementItem.md)

#### Parameters

##### data?

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md)

#### Returns

[`MapSerpElementItem`](MapSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32697

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`position`](../interfaces/IMapSerpElementItem.md#position)

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

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`rank_absolute`](../interfaces/IMapSerpElementItem.md#rank_absolute)

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

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`rank_group`](../interfaces/IMapSerpElementItem.md#rank_group)

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

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`rectangle`](../interfaces/IMapSerpElementItem.md#rectangle)

#### Defined in

main.ts:32693

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`title`](../interfaces/IMapSerpElementItem.md#title)

#### Defined in

main.ts:32687

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`type`](../interfaces/IMapSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`url`](../interfaces/IMapSerpElementItem.md#url)

#### Defined in

main.ts:32689

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMapSerpElementItem`](../interfaces/IMapSerpElementItem.md).[`xpath`](../interfaces/IMapSerpElementItem.md#xpath)

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

main.ts:32702

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

main.ts:32722

***

### fromJS()

> `static` **fromJS**(`data`): [`MapSerpElementItem`](MapSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`MapSerpElementItem`](MapSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32715
