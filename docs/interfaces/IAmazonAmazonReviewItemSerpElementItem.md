[dataforseo-client](../README.md) / [Exports](../modules.md) / IAmazonAmazonReviewItemSerpElementItem

# Interface: IAmazonAmazonReviewItemSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

  ↳ **`IAmazonAmazonReviewItemSerpElementItem`**

## Implemented by

- [`AmazonAmazonReviewItemSerpElementItem`](../classes/AmazonAmazonReviewItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [helpful\_votes](IAmazonAmazonReviewItemSerpElementItem.md#helpful_votes)
- [images](IAmazonAmazonReviewItemSerpElementItem.md#images)
- [position](IAmazonAmazonReviewItemSerpElementItem.md#position)
- [publication\_date](IAmazonAmazonReviewItemSerpElementItem.md#publication_date)
- [rank\_absolute](IAmazonAmazonReviewItemSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonAmazonReviewItemSerpElementItem.md#rank_group)
- [rating](IAmazonAmazonReviewItemSerpElementItem.md#rating)
- [review\_text](IAmazonAmazonReviewItemSerpElementItem.md#review_text)
- [subtitle](IAmazonAmazonReviewItemSerpElementItem.md#subtitle)
- [title](IAmazonAmazonReviewItemSerpElementItem.md#title)
- [url](IAmazonAmazonReviewItemSerpElementItem.md#url)
- [user\_profile](IAmazonAmazonReviewItemSerpElementItem.md#user_profile)
- [verified](IAmazonAmazonReviewItemSerpElementItem.md#verified)
- [videos](IAmazonAmazonReviewItemSerpElementItem.md#videos)
- [xpath](IAmazonAmazonReviewItemSerpElementItem.md#xpath)

## Properties

### helpful\_votes

• `Optional` **helpful\_votes**: `number`

helpful votes count
number of users who clicked on the ‘Helpful” button under the review text

#### Defined in

[main.ts:175752](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175752)

___

### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the product submitted by the reviewer

#### Defined in

[main.ts:175754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175754)

___

### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Defined in

[main.ts:175743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175743)

___

### publication\_date

• `Optional` **publication\_date**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:175769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175769)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Defined in

[main.ts:175740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175740)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:175737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175737)

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

the rating score submitted by the reviewer

#### Defined in

[main.ts:175771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175771)

___

### review\_text

• `Optional` **review\_text**: `string`

content of the review

#### Defined in

[main.ts:175764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175764)

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the review

#### Defined in

[main.ts:175749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175749)

___

### title

• `Optional` **title**: `string`

title of the review

#### Defined in

[main.ts:175760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175760)

___

### url

• `Optional` **url**: `string`

URL to the review

#### Defined in

[main.ts:175762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175762)

___

### user\_profile

• `Optional` **user\_profile**: [`UserProfileInfo`](../classes/UserProfileInfo.md)

user profile of the reviewer

#### Defined in

[main.ts:175758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175758)

___

### verified

• `Optional` **verified**: `boolean`

indicates whether the review has the “Verified Purchase” mark

#### Defined in

[main.ts:175747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175747)

___

### videos

• `Optional` **videos**: [`VideoElement`](../classes/VideoElement.md)[]

videos of the product submitted by the reviewer

#### Defined in

[main.ts:175756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175756)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:175745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175745)
