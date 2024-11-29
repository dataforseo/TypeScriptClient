[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleHotelsSerpElementItem

# Class: GoogleHotelsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleHotelsSerpElementItem()

> **new GoogleHotelsSerpElementItem**(`data`?): [`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Parameters

##### data?

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md)

#### Returns

[`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:36109

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`cid`](../interfaces/IGoogleHotelsSerpElementItem.md#cid)

#### Defined in

main.ts:36101

***

### hotel\_identifier?

> `optional` **hotel\_identifier**: `string`

unique hotel identifier
unique hotel identifier assigned by Google;
example: "CgoIjaeSlI6CnNpVEAE"

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`hotel_identifier`](../interfaces/IGoogleHotelsSerpElementItem.md#hotel_identifier)

#### Defined in

main.ts:36097

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`position`](../interfaces/IGoogleHotelsSerpElementItem.md#position)

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

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleHotelsSerpElementItem.md#rank_absolute)

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

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleHotelsSerpElementItem.md#rank_group)

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

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`rectangle`](../interfaces/IGoogleHotelsSerpElementItem.md#rectangle)

#### Defined in

main.ts:36105

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`type`](../interfaces/IGoogleHotelsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`url`](../interfaces/IGoogleHotelsSerpElementItem.md#url)

#### Defined in

main.ts:36099

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleHotelsSerpElementItem`](../interfaces/IGoogleHotelsSerpElementItem.md).[`xpath`](../interfaces/IGoogleHotelsSerpElementItem.md#xpath)

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

main.ts:36114

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

main.ts:36135

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleHotelsSerpElementItem`](GoogleHotelsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:36128
