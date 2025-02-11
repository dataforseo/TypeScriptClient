[**Documentation**](../README.md)

***

[Documentation](../README.md) / GooglePostsSerpElementItem

# Class: GooglePostsSerpElementItem

Defined in: main.ts:36527

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GooglePostsSerpElementItem()

> **new GooglePostsSerpElementItem**(`data`?): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

Defined in: main.ts:36541

#### Parameters

##### data?

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md)

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:36533

google-defined client id

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`cid`](../interfaces/IGooglePostsSerpElementItem.md#cid)

***

### feature?

> `optional` **feature**: `string`

Defined in: main.ts:36531

the additional feature of the review

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`feature`](../interfaces/IGooglePostsSerpElementItem.md#feature)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`position`](../interfaces/IGooglePostsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### posts\_id?

> `optional` **posts\_id**: `string`

Defined in: main.ts:36529

the identifier of the google_posts feature

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`posts_id`](../interfaces/IGooglePostsSerpElementItem.md#posts_id)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`rank_absolute`](../interfaces/IGooglePostsSerpElementItem.md#rank_absolute)

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

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`rank_group`](../interfaces/IGooglePostsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36537

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`rectangle`](../interfaces/IGooglePostsSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`type`](../interfaces/IGooglePostsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IGooglePostsSerpElementItem`](../interfaces/IGooglePostsSerpElementItem.md).[`xpath`](../interfaces/IGooglePostsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36546

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

Defined in: main.ts:36567

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

Defined in: main.ts:36560

#### Parameters

##### data

`any`

#### Returns

[`GooglePostsSerpElementItem`](GooglePostsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
