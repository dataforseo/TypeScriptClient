[**Documentation**](../README.md)

***

[Documentation](../README.md) / ReviewMentionInfo

# Class: ReviewMentionInfo

## Implements

- [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ReviewMentionInfo()

> **new ReviewMentionInfo**(`data`?): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

##### data?

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Defined in

main.ts:219429

## Properties

### negative\_count?

> `optional` **negative\_count**: `number`

count of negative reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`negative_count`](../interfaces/IReviewMentionInfo.md#negative_count)

#### Defined in

main.ts:219420

***

### positive\_count?

> `optional` **positive\_count**: `number`

count of positive reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_count`](../interfaces/IReviewMentionInfo.md#positive_count)

#### Defined in

main.ts:219418

***

### positive\_score?

> `optional` **positive\_score**: `number`

positive score by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_score`](../interfaces/IReviewMentionInfo.md#positive_score)

#### Defined in

main.ts:219416

***

### title?

> `optional` **title**: `string`

title of the evaluated criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`title`](../interfaces/IReviewMentionInfo.md#title)

#### Defined in

main.ts:219414

***

### total\_count?

> `optional` **total\_count**: `number`

count of all reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`total_count`](../interfaces/IReviewMentionInfo.md#total_count)

#### Defined in

main.ts:219422

***

### visible\_by\_default?

> `optional` **visible\_by\_default**: `boolean`

element is visible by default
indicates whether the review element is visible by default

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`visible_by_default`](../interfaces/IReviewMentionInfo.md#visible_by_default)

#### Defined in

main.ts:219425

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:219438

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:219460

***

### fromJS()

> `static` **fromJS**(`data`): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Defined in

main.ts:219453
