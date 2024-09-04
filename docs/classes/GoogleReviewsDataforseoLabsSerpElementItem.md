[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleReviewsDataforseoLabsSerpElementItem

# Class: GoogleReviewsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleReviewsDataforseoLabsSerpElementItem()

> **new GoogleReviewsDataforseoLabsSerpElementItem**(`data`?): [`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md)

#### Returns

[`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:100389

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`cid`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#cid)

#### Defined in

main.ts:100385

***

### feature?

> `optional` **feature**: `string`

the additional feature of the review

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`feature`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#feature)

#### Defined in

main.ts:100381

***

### place\_id?

> `optional` **place\_id**: `string`

the identifier of a place

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`place_id`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#place_id)

#### Defined in

main.ts:100379

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:100370

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:100366

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:100363

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`rating`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#rating)

#### Defined in

main.ts:100377

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the number of reviews

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#reviews_count)

#### Defined in

main.ts:100374

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IGoogleReviewsDataforseoLabsSerpElementItem`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleReviewsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:100372

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:100394

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:100420

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleReviewsDataforseoLabsSerpElementItem`](GoogleReviewsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:100413
