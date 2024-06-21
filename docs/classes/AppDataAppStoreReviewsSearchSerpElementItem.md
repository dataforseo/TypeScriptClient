**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppStoreReviewsSearchSerpElementItem

# Class: AppDataAppStoreReviewsSearchSerpElementItem

## Extends

- [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

## Implements

- [`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppStoreReviewsSearchSerpElementItem(data)

> **new AppDataAppStoreReviewsSearchSerpElementItem**(`data`?): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md)

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Source

main.ts:195585

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Source

main.ts:21192

***

### id?

> **`optional`** **id**: `string`

id of the review

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`id`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#id)

#### Source

main.ts:195575

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`position`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#position)

#### Source

main.ts:195563

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_absolute)

#### Source

main.ts:195560

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rank_group)

#### Source

main.ts:195557

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`rating`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#rating)

#### Source

main.ts:195568

***

### review\_text?

> **`optional`** **review\_text**: `string`

content of the review

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`review_text`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#review_text)

#### Source

main.ts:195579

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#timestamp)

#### Source

main.ts:195573

***

### title?

> **`optional`** **title**: `string`

title of the review

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`title`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#title)

#### Source

main.ts:195577

***

### user\_profile?

> **`optional`** **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`user_profile`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#user_profile)

#### Source

main.ts:195581

***

### version?

> **`optional`** **version**: `string`

version of the app
version of the app for which the review is submitted

#### Implementation of

[`IAppDataAppStoreReviewsSearchSerpElementItem`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md).[`version`](../interfaces/IAppDataAppStoreReviewsSearchSerpElementItem.md#version)

#### Source

main.ts:195566

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`init`](BaseAppDataSerpElementItem.md#init)

#### Source

main.ts:195590

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`toJSON`](BaseAppDataSerpElementItem.md#tojson)

#### Source

main.ts:195617

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Source

main.ts:195610
