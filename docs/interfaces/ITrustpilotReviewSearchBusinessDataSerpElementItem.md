[**Documentation**](../README.md)

***

[Documentation](../README.md) / ITrustpilotReviewSearchBusinessDataSerpElementItem

# Interface: ITrustpilotReviewSearchBusinessDataSerpElementItem

Defined in: main.ts:226873

## Extends

- [`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### language?

> `optional` **language**: `string`

Defined in: main.ts:226884

the language of the review

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:226876

the alignment of the review in SERP
can take the following values: right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22295

absolute rank among all the elements

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_absolute`](IBaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22293

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`rank_group`](IBaseBusinessDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:226880

the rating score submitted by the reviewer

***

### responses?

> `optional` **responses**: [`ReviewResponseItemInfo`](../classes/ReviewResponseItemInfo.md)[]

Defined in: main.ts:226901

owner’s response to the submitted review

***

### review\_images?

> `optional` **review\_images**: `string`[]

Defined in: main.ts:226897

images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:226893

the content of the review

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:226889

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:226891

the title of the review

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22290

type of element

#### Inherited from

[`IBaseBusinessDataSerpElementItem`](IBaseBusinessDataSerpElementItem.md).[`type`](IBaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:226878

the URL of the review

***

### user\_profile?

> `optional` **user\_profile**: [`BusinessDataUserProfileInfo`](../classes/BusinessDataUserProfileInfo.md)

Defined in: main.ts:226899

user profile of the reviewer

***

### verified?

> `optional` **verified**: `boolean`

Defined in: main.ts:226882

indicates whether the review has the “Verified” mark
