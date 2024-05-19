**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new AppDataGooglePlayReviewsSearchSerpElementItem(data)

> **new AppDataGooglePlayReviewsSearchSerpElementItem**(`data`?): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Parameters

• **data?**: [`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`constructor`](BaseAppDataSerpElementItem.md#constructors)

#### Source

main.ts:189132

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`_discriminator`](BaseAppDataSerpElementItem.md#_discriminator)

#### Source

main.ts:21341

***

### helpful\_count?

> **`optional`** **helpful\_count**: `number`

number of helpful votes
indicates how many users considered the review helpful and voted with the thumbs up icon

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`helpful_count`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#helpful_count)

#### Source

main.ts:189119

***

### id?

> **`optional`** **id**: `string`

id of the review

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`id`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#id)

#### Source

main.ts:189116

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: left

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`position`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#position)

#### Source

main.ts:189104

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_absolute)

#### Source

main.ts:189101

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rank_group)

#### Source

main.ts:189098

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`rating`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#rating)

#### Source

main.ts:189109

***

### responses?

> **`optional`** **responses**: [`ResponseDataInfo`](ResponseDataInfo.md)[]

response from the developer

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`responses`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#responses)

#### Source

main.ts:189128

***

### review\_text?

> **`optional`** **review\_text**: `string`

content of the review

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`review_text`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#review_text)

#### Source

main.ts:189124

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#timestamp)

#### Source

main.ts:189114

***

### title?

> **`optional`** **title**: `string`

title of the review
Google Play doesn’t provide an option to title reviews, so this parameter will always equal null

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`title`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#title)

#### Source

main.ts:189122

***

### user\_profile?

> **`optional`** **user\_profile**: [`AppUserProfileInfo`](AppUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`user_profile`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#user_profile)

#### Source

main.ts:189126

***

### version?

> **`optional`** **version**: `string`

version of the app
version of the app for which the review is submitted

#### Implementation of

[`IAppDataGooglePlayReviewsSearchSerpElementItem`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md).[`version`](../interfaces/IAppDataGooglePlayReviewsSearchSerpElementItem.md#version)

#### Source

main.ts:189107

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

main.ts:189137

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

main.ts:189170

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)

#### Overrides

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md).[`fromJS`](BaseAppDataSerpElementItem.md#fromjs)

#### Source

main.ts:189163
