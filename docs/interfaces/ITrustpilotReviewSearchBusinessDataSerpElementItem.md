**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITrustpilotReviewSearchBusinessDataSerpElementItem

# Interface: ITrustpilotReviewSearchBusinessDataSerpElementItem

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### language?

> **`optional`** **language**: `string`

the language of the review

#### Source

main.ts:211239

***

### position?

> **`optional`** **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Source

main.ts:211231

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Source

main.ts:211228

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:211225

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Source

main.ts:211235

***

### responses?

> **`optional`** **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

owner’s response to the submitted review

#### Source

main.ts:211256

***

### review\_images?

> **`optional`** **review\_images**: `string`[]

images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null

#### Source

main.ts:211252

***

### review\_text?

> **`optional`** **review\_text**: `string`

the content of the review

#### Source

main.ts:211248

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:211244

***

### title?

> **`optional`** **title**: `string`

the title of the review

#### Source

main.ts:211246

***

### url?

> **`optional`** **url**: `string`

the URL of the review

#### Source

main.ts:211233

***

### user\_profile?

> **`optional`** **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

user profile of the reviewer

#### Source

main.ts:211254

***

### verified?

> **`optional`** **verified**: `boolean`

indicates whether the review has the “Verified” mark

#### Source

main.ts:211237
