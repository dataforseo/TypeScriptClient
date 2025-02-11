[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppStoreReviewsSearchSerpElementItem

# Class: AppDataAppStoreReviewsSearchSerpElementItem

Defined in: main.ts:208880

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppStoreReviewsSearchSerpElementItem()

> **new AppDataAppStoreReviewsSearchSerpElementItem**(`data`?): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

Defined in: main.ts:208898

#### Parameters

##### data?

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md)

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22886

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:208890

id of the review

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`id`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#id)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22880

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22876

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22873

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:22884

average rating of the app

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:208892

content of the review

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`review_text`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#review_text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:208888

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22882

title of the app

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22870

type of element

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`type`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

Defined in: main.ts:208894

user profile of the reviewer

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`user_profile`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#user_profile)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:208883

version of the app
version of the app for which the review is submitted

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`version`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:208903

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

Defined in: main.ts:208925

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

Defined in: main.ts:208918

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)
