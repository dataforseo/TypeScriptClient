[**Documentation**](../README.md)

***

[Documentation](../README.md) / ReviewMentionInfo

# Class: ReviewMentionInfo

Defined in: main.ts:219480

## Implements

- [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ReviewMentionInfo()

> **new ReviewMentionInfo**(`data`?): [`ReviewMentionInfo`](ReviewMentionInfo.md)

Defined in: main.ts:219497

#### Parameters

##### data?

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

## Properties

### negative\_count?

> `optional` **negative\_count**: `number`

Defined in: main.ts:219488

count of negative reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`negative_count`](../interfaces/IReviewMentionInfo.md#negative_count)

***

### positive\_count?

> `optional` **positive\_count**: `number`

Defined in: main.ts:219486

count of positive reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_count`](../interfaces/IReviewMentionInfo.md#positive_count)

***

### positive\_score?

> `optional` **positive\_score**: `number`

Defined in: main.ts:219484

positive score by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_score`](../interfaces/IReviewMentionInfo.md#positive_score)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:219482

title of the evaluated criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`title`](../interfaces/IReviewMentionInfo.md#title)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:219490

count of all reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`total_count`](../interfaces/IReviewMentionInfo.md#total_count)

***

### visible\_by\_default?

> `optional` **visible\_by\_default**: `boolean`

Defined in: main.ts:219493

element is visible by default
indicates whether the review element is visible by default

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`visible_by_default`](../interfaces/IReviewMentionInfo.md#visible_by_default)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:219506

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:219528

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ReviewMentionInfo`](ReviewMentionInfo.md)

Defined in: main.ts:219521

#### Parameters

##### data

`any`

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)
