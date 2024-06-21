**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TrustpilotReviewSearchBusinessDataSerpElementItem

# Class: TrustpilotReviewSearchBusinessDataSerpElementItem

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TrustpilotReviewSearchBusinessDataSerpElementItem(data)

> **new TrustpilotReviewSearchBusinessDataSerpElementItem**(`data`?): [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data?**: [`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Returns

[`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructors)

#### Source

main.ts:211147

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Source

main.ts:20770

***

### language?

> **`optional`** **language**: `string`

the language of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`language`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#language)

#### Source

main.ts:211126

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`position`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#position)

#### Source

main.ts:211118

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Source

main.ts:211115

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rank_group)

#### Source

main.ts:211112

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`rating`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#rating)

#### Source

main.ts:211122

***

### responses?

> **`optional`** **responses**: [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)[]

owner’s response to the submitted review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`responses`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#responses)

#### Source

main.ts:211143

***

### review\_images?

> **`optional`** **review\_images**: `string`[]

images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`review_images`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_images)

#### Source

main.ts:211139

***

### review\_text?

> **`optional`** **review\_text**: `string`

the content of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`review_text`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#review_text)

#### Source

main.ts:211135

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#timestamp)

#### Source

main.ts:211131

***

### title?

> **`optional`** **title**: `string`

the title of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`title`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#title)

#### Source

main.ts:211133

***

### url?

> **`optional`** **url**: `string`

the URL of the review

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`url`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#url)

#### Source

main.ts:211120

***

### user\_profile?

> **`optional`** **user\_profile**: [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

user profile of the reviewer

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`user_profile`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#user_profile)

#### Source

main.ts:211141

***

### verified?

> **`optional`** **verified**: `boolean`

indicates whether the review has the “Verified” mark

#### Implementation of

[`ITrustpilotReviewSearchBusinessDataSerpElementItem`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md).[`verified`](../interfaces/ITrustpilotReviewSearchBusinessDataSerpElementItem.md#verified)

#### Source

main.ts:211124

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

#### Source

main.ts:211152

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

#### Source

main.ts:211190

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TrustpilotReviewSearchBusinessDataSerpElementItem`](TrustpilotReviewSearchBusinessDataSerpElementItem.md)

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)

#### Source

main.ts:211183
