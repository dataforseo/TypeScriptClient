[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGooglePlayReviewsSearchSerpElementItem

# Class: AppDataGooglePlayReviewsSearchSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGooglePlayReviewsSearchSerpElementItem()

> **new AppDataGooglePlayReviewsSearchSerpElementItem**(`data`?): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Parameters

##### data?

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Defined in

main.ts:203453

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22886

***

### helpful\_count?

> `optional` **helpful\_count**: `number`

number of helpful votes
indicates how many users considered the review helpful and voted with the thumbs up icon

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`helpful_count`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#helpful_count)

#### Defined in

main.ts:203443

***

### id?

> `optional` **id**: `string`

id of the review

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`id`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#id)

#### Defined in

main.ts:203440

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:22880

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22876

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22873

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:22884

***

### responses?

> `optional` **responses**: [`ResponseDataInfo`](ResponseDataInfo.md)[]

response from the developer

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`responses`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#responses)

#### Defined in

main.ts:203449

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`review_text`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#review_text)

#### Defined in

main.ts:203445

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#timestamp)

#### Defined in

main.ts:203438

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:22882

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`type`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:22870

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`user_profile`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#user_profile)

#### Defined in

main.ts:203447

***

### version?

> `optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`version`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#version)

#### Defined in

main.ts:203433

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Defined in

main.ts:203458

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Defined in

main.ts:203486

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:203479
