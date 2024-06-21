**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OtherSitesReviewsInfo

# Class: OtherSitesReviewsInfo

## Implements

- [`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OtherSitesReviewsInfo(data)

> **new OtherSitesReviewsInfo**(`data`?): [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Parameters

• **data?**: [`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md)

#### Returns

[`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Source

main.ts:205463

## Properties

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

rating in the review
information about the rating enclosed in the review on a third-party site

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`rating`](../interfaces/IOtherSitesReviewsInfo.md#rating)

#### Source

main.ts:205459

***

### review\_text?

> **`optional`** **review\_text**: `string`

review text
text of the review

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`review_text`](../interfaces/IOtherSitesReviewsInfo.md#review_text)

#### Source

main.ts:205456

***

### title?

> **`optional`** **title**: `string`

review title
contains a name of the third-party site where review initially appeared

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`title`](../interfaces/IOtherSitesReviewsInfo.md#title)

#### Source

main.ts:205450

***

### url?

> **`optional`** **url**: `string`

review url
URL to the a third-party site where review initially appeared

#### Implementation of

[`IOtherSitesReviewsInfo`](../interfaces/IOtherSitesReviewsInfo.md).[`url`](../interfaces/IOtherSitesReviewsInfo.md#url)

#### Source

main.ts:205453

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:205472

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:205492

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OtherSitesReviewsInfo`](OtherSitesReviewsInfo.md)

#### Source

main.ts:205485
