[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGooglePlayReviewsSearchSerpElementItem

# Class: AppDataGooglePlayReviewsSearchSerpElementItem

Defined in: main.ts:204000

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGooglePlayReviewsSearchSerpElementItem()

> **new AppDataGooglePlayReviewsSearchSerpElementItem**(`data`?): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

Defined in: main.ts:204023

#### Parameters

##### data?

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22886

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

***

### helpful\_count?

> `optional` **helpful\_count**: `number`

Defined in: main.ts:204013

number of helpful votes
indicates how many users considered the review helpful and voted with the thumbs up icon

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`helpful_count`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#helpful_count)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:204010

id of the review

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`id`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#id)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22880

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22876

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22873

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:22884

average rating of the app

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

***

### responses?

> `optional` **responses**: [`ResponseDataInfo`](ResponseDataInfo.md)[]

Defined in: main.ts:204019

response from the developer

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`responses`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#responses)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:204015

content of the review

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`review_text`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#review_text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:204008

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22882

title of the app

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22870

type of element

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`type`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

Defined in: main.ts:204017

user profile of the reviewer

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`user_profile`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#user_profile)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:204003

version of the app
version of the app for which the review is submitted

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`version`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:204028

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:204056

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

Defined in: main.ts:204049

#### Parameters

##### data

`any`

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)
