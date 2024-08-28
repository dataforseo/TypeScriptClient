[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / GoogleReviewsSerpElementItem

# Class: GoogleReviewsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleReviewsSerpElementItem()

> **new GoogleReviewsSerpElementItem**(`data`?): [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md)

#### Returns

[`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:30949

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### cid?

> `optional` **cid**: `string`

google-defined client id

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`cid`](../interfaces/IGoogleReviewsSerpElementItem.md#cid)

#### Defined in

main.ts:30941

***

### feature?

> `optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`feature`](../interfaces/IGoogleReviewsSerpElementItem.md#feature)

#### Defined in

main.ts:30939

***

### place\_id?

> `optional` **place\_id**: `string`

the identifier of a place

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`place_id`](../interfaces/IGoogleReviewsSerpElementItem.md#place_id)

#### Defined in

main.ts:30937

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`position`](../interfaces/IGoogleReviewsSerpElementItem.md#position)

#### Defined in

main.ts:30928

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleReviewsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:30924

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleReviewsSerpElementItem.md#rank_group)

#### Defined in

main.ts:30920

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rating`](../interfaces/IGoogleReviewsSerpElementItem.md#rating)

#### Defined in

main.ts:30935

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`rectangle`](../interfaces/IGoogleReviewsSerpElementItem.md#rectangle)

#### Defined in

main.ts:30945

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the number of reviews

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleReviewsSerpElementItem.md#reviews_count)

#### Defined in

main.ts:30932

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleReviewsSerpElementItem`](../interfaces/IGoogleReviewsSerpElementItem.md).[`xpath`](../interfaces/IGoogleReviewsSerpElementItem.md#xpath)

#### Defined in

main.ts:30930

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:30954

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:30981

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleReviewsSerpElementItem`](GoogleReviewsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:30974
