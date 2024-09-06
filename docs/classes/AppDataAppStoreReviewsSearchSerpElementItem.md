[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppStoreReviewsSearchSerpElementItem

# Class: AppDataAppStoreReviewsSearchSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppStoreReviewsSearchSerpElementItem()

> **new AppDataAppStoreReviewsSearchSerpElementItem**(`data`?): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md)

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Defined in

main.ts:195978

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21988

***

### id?

> `optional` **id**: `string`

id of the review

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`id`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#id)

#### Defined in

main.ts:195970

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#position)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`position`](BaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:21982

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_absolute`](BaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21978

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rank_group`](BaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:21975

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

average rating of the app

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rating)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`rating`](BaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:21986

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`review_text`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#review_text)

#### Defined in

main.ts:195972

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#timestamp)

#### Defined in

main.ts:195968

***

### title?

> `optional` **title**: `string`

title of the app

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`title`](BaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:21984

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`type`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`type`](BaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:21972

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`user_profile`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#user_profile)

#### Defined in

main.ts:195974

***

### version?

> `optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`version`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#version)

#### Defined in

main.ts:195963

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Defined in

main.ts:195983

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Defined in

main.ts:196005

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Defined in

main.ts:195998
