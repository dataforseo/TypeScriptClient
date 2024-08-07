**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ReviewMentionInfo

# Class: ReviewMentionInfo

## Implements

- [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ReviewMentionInfo(data)

> **new ReviewMentionInfo**(`data`?): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

• **data?**: [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Source

main.ts:208853

## Properties

### negative\_count?

> **`optional`** **negative\_count**: `number`

count of negative reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`negative_count`](../interfaces/IReviewMentionInfo.md#negative_count)

#### Source

main.ts:208844

***

### positive\_count?

> **`optional`** **positive\_count**: `number`

count of positive reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_count`](../interfaces/IReviewMentionInfo.md#positive_count)

#### Source

main.ts:208842

***

### positive\_score?

> **`optional`** **positive\_score**: `number`

positive score by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_score`](../interfaces/IReviewMentionInfo.md#positive_score)

#### Source

main.ts:208840

***

### title?

> **`optional`** **title**: `string`

title of the evaluated criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`title`](../interfaces/IReviewMentionInfo.md#title)

#### Source

main.ts:208838

***

### total\_count?

> **`optional`** **total\_count**: `number`

count of all reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`total_count`](../interfaces/IReviewMentionInfo.md#total_count)

#### Source

main.ts:208846

***

### visible\_by\_default?

> **`optional`** **visible\_by\_default**: `boolean`

element is visible by default
indicates whether the review element is visible by default

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`visible_by_default`](../interfaces/IReviewMentionInfo.md#visible_by_default)

#### Source

main.ts:208849

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:208862

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:208884

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Source

main.ts:208877
