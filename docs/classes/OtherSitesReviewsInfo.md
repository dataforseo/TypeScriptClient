[**Documentation**](../README.md)

***

[Documentation](../README.md) / OtherSitesReviewsInfo

# Class: OtherSitesReviewsInfo

## Implements

- [`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OtherSitesReviewsInfo()

> **new OtherSitesReviewsInfo**(`data`?): [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Parameters

##### data?

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md)

#### Returns

[`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Defined in

main.ts:219510

## Properties

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating in the review
information about the rating enclosed in the review on a third-party site

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`rating`](../interfaces/IOtherSitesReviewsInfo.md#rating)

#### Defined in

main.ts:219506

***

### review\_text?

> `optional` **review\_text**: `string`

review text
text of the review

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`review_text`](../interfaces/IOtherSitesReviewsInfo.md#review_text)

#### Defined in

main.ts:219503

***

### title?

> `optional` **title**: `string`

review title
contains a name of the third-party site where review initially appeared

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`title`](../interfaces/IOtherSitesReviewsInfo.md#title)

#### Defined in

main.ts:219497

***

### url?

> `optional` **url**: `string`

review url
URL to the a third-party site where review initially appeared

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`url`](../interfaces/IOtherSitesReviewsInfo.md#url)

#### Defined in

main.ts:219500

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:219519

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:219539

***

### fromJS()

> `static` **fromJS**(`data`): [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Defined in

main.ts:219532
