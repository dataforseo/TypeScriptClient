[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ReviewMentionInfo

# Class: ReviewMentionInfo

## Implements

- [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ReviewMentionInfo()

> **new ReviewMentionInfo**(`data`?): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

• **data?**: [`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md)

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Defined in

main.ts:206074

## Properties

### negative\_count?

> `optional` **negative\_count**: `number`

count of negative reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`negative_count`](../interfaces/IReviewMentionInfo.md#negative_count)

#### Defined in

main.ts:206065

***

### positive\_count?

> `optional` **positive\_count**: `number`

count of positive reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_count`](../interfaces/IReviewMentionInfo.md#positive_count)

#### Defined in

main.ts:206063

***

### positive\_score?

> `optional` **positive\_score**: `number`

positive score by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`positive_score`](../interfaces/IReviewMentionInfo.md#positive_score)

#### Defined in

main.ts:206061

***

### title?

> `optional` **title**: `string`

title of the evaluated criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`title`](../interfaces/IReviewMentionInfo.md#title)

#### Defined in

main.ts:206059

***

### total\_count?

> `optional` **total\_count**: `number`

count of all reviews by criterion

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`total_count`](../interfaces/IReviewMentionInfo.md#total_count)

#### Defined in

main.ts:206067

***

### visible\_by\_default?

> `optional` **visible\_by\_default**: `boolean`

element is visible by default
indicates whether the review element is visible by default

#### Implementation of

[`IReviewMentionInfo`](../interfaces/IReviewMentionInfo.md).[`visible_by_default`](../interfaces/IReviewMentionInfo.md#visible_by_default)

#### Defined in

main.ts:206070

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:206083

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:206105

***

### fromJS()

> `static` **fromJS**(`data`): [`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ReviewMentionInfo`](ReviewMentionInfo.md)

#### Defined in

main.ts:206098
